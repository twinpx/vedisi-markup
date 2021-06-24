<template>
  <div>
    <div class="content-body content-body--form">
      <h1>Проверка квалифицированной электронной подписи PDF-документа</h1>
      <div class="conditions-link">
        <NuxtLink to="/conditions"> <i></i> Условия использования</NuxtLink>
      </div>
      <form action="" method="POST">
        <div class="upload-form-control" @drop.prevent="drop()">
          <input
            type="file"
            name="pdfFile"
            id="pdfFile"
            @change="uploadFile"
            ref="pdfFile"
            accept=".pdf"
          />
          <div
            class="upload-form-button"
            v-if="$store.state.uploadStatus === 'form'"
          >
            <div class="upload-form-control__error" v-text="error"></div>

            <div class="input-file">
              <label
                for="pdfFile"
                class="button button--large"
                @click="clickUpload()"
                >Выберите PDF-файл</label
              >
            </div>

            <div class="upload-form__dragndrop" ref="dragndrop" v-if="false">
              <span>или перетащите его в область</span>
            </div>
          </div>

          <div
            class="upload-form-comfirmation"
            v-if="$store.state.uploadStatus === 'confirmation'"
          >
            <div class="upload-form-comfirmation__text">
              Информируем вас о том,<br />что мы обрабатываем, но не храним и не
              передаём персональные данные.<br />Вы даёте своё согласие?
            </div>
            <label
              class="button-checkbox button button--success button--middle"
            >
              <input type="checkbox" @change="confirm()" />
              <span>Подтверждаю</span>
            </label>
            <button
              class="button button--danger button--middle"
              @click.prevent="refuse()"
            >
              Отменить
            </button>
          </div>

          <div
            class="upload-form-uploading"
            v-if="$store.state.uploadStatus === 'uploading'"
          >
            <div class="upload-form-comfirmation__text">
              Идет проверка документа,<br />подождите, пожалуйста.
            </div>
            <div class="upload-form-confirmation__preloader"></div>
            <button
              class="button button--gray button--middle"
              @click.prevent="refuseUploading()"
            >
              Отменить
            </button>
          </div>
        </div>
      </form>
    </div>
    <p class="upload-form-text">
      Сервис поможет вам проверить действительность квалифицированной
      электронной подписи, чтобы убедиться в юридической силе электронного
      документа.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      error: "",
      controller: null,
      controllerAborted: false,
      isAdvancedUpload: false
    };
  },
  methods: {
    drop() {
      //console.log("sdf");
    },
    clickUpload() {
      if (window.ym) {
        window.ym(this.$store.state.counters.ym, "reachGoal", "CLICK_UPLOAD");
      }
    },
    uploadFile() {
      //if size is acceptable
      if (this.$refs.pdfFile.files[0].size >= 1e7) {
        this.error =
          "Сервис не поддерживает проверку файлов, размер которых превышает 10 Мбайт.";
        return;
      } else {
        this.error = "";
      }

      //if the file extention is not pdf
      /*const filename = this.$refs.pdfFile.files[0].name;
      const lastIndex = filename.lastIndexOf(".");

      if (filename.substring(lastIndex + 1) !== "pdf") {
        this.error = "Сервис поддерживает только проверку файлов PDF.";
        return;
      } else {
        this.error = "";
      }*/

      this.$store.commit("changeUploadStatus", "confirmation");
    },
    confirm() {
      if (window.ym) {
        window.ym(this.$store.state.counters.ym, "reachGoal", "CLICK_CONFIRM");
      }
      this.$store.commit("changeUploadStatus", "uploading");
      this.sendFile();
    },
    refuse() {
      if (window.ym) {
        window.ym(this.$store.state.counters.ym, "reachGoal", "CLICK_REFUSE");
      }
      this.$store.commit("changeUploadStatus", "form");
    },
    refuseUploading() {
      this.controller.abort();
      this.controllerAborted = true;
      this.$store.commit("changeUploadStatus", "form");
    },
    async sendFile() {
      //create controller
      this.controller = new AbortController();

      //check if there are files
      if (this.$refs.pdfFile.files.length == 0) {
        throw new Error("No file selected");
      }

      //upload file and get uuid
      //create form data
      let formData = new FormData();
      if (this.$refs.pdfFile.files.length != 0) {
        formData.append("pdfFile", this.$refs.pdfFile.files[0]);
      }

      //response
      let response, result;

      try {
        response = await fetch("https://sig.2px.ru/upload", {
          signal: this.controller.signal,
          method: "POST",
          headers: {
            Authorization: "token12345"
          },
          body: formData
        });
        result = await response.json();
      } catch (err) {
        if (!this.controllerAborted) {
          this.error = "Произошла ошибка, попробуйте снова.";
        }
        this.controllerAborted = false;
        return;
      }

      //get response
      let uuid;

      if (result.status != 200) {
        if (!this.controllerAborted) {
          this.error = "Произошла ошибка, попробуйте снова.";
        }
        this.controllerAborted = false;
        return;
      } else {
        uuid = result.uuid;
      }

      do {
        try {
          response = await fetch("https://sig.2px.ru/status?uuid=" + uuid, {
            signal: this.controller.signal,
            headers: {
              Authorization: "token12345"
            },
            method: "GET"
          });
        } catch (err) {
          if (!this.controllerAborted) {
            this.error = "Произошла ошибка, попробуйте снова.";
          }
          this.controllerAborted = false;
          return;
        }

        if (response.status == 204) {
          await new Promise(r => setTimeout(r, 1000));
        } else if (response.status != 200) {
          if (!this.controllerAborted) {
            this.error = "Произошла ошибка, попробуйте снова.";
          }
          this.controllerAborted = false;
          return;
        } else {
          //Обработка через try
          let json = await response.json();
          this.$store.commit("changeResult", json);
          this.$store.commit("changeUploadStatus", "success");
          //set browser history
          window.history.pushState({ state: "success" }, "", "#verify");
          break;
        }
      } while (true);

      return;
    }
  },
  mounted() {
    //drag and drop
    this.isAdvancedUpload = (() => {
      let div = document.createElement("div");
      return (
        ("draggable" in div || ("ondragstart" in div && "ondrop" in div)) &&
        "FormData" in window &&
        "FileReader" in window
      );
    })();

    if (this.isAdvancedUpload) {
    }

    //browser history
    window.onpopstate = event => {
      if (event.state === null || !event.state.state) {
        this.$store.commit("changeUploadStatus", "form");
      } else {
        this.$store.commit("changeUploadStatus", event.state.state);
      }
    };
  }
};
</script>

<style>
.content-body {
  background-repeat: no-repeat;
  background-size: cover;
  padding: 70px;
  padding-bottom: 1px;
  border-radius: 40px;
  color: #000;
}
.content-body--form {
  background-image: url("~/assets/yellow-bg.svg");
  background-color: #fede00;
  margin-bottom: 100px;
}
.content-body--form h1 {
  margin-bottom: 10px;
}
.conditions-link {
  font-size: 0.8rem;
  color: #000;
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
}
.conditions-link a {
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 33px;
  border-radius: 16px;
  padding: 0 10px;
  transition: background-color 0.3s ease-out;
}
.conditions-link a:hover,
.conditions-link a:active {
  color: #000;
  opacity: 1;
  background-color: #fff;
}
.conditions-link i {
  width: 18px;
  height: 18px;
  background: url("~/assets/icon-conditions.svg") no-repeat center;
  background-size: cover;
  margin-right: 5px;
}
.upload-form-control {
  background-color: #fff;
  border-radius: 40px;
  width: 50%;
  min-width: 528px;
  margin: 0 auto -40px;
  padding: 40px 74px 42px;
  text-align: center;
  box-shadow: 0px 5px 50px #fede004d;
  min-height: 300px;
}
.upload-form-control__error {
  margin-bottom: 50px;
  font-size: 0.9rem;
  color: #e43d40;
  min-height: 16px;
}
.upload-form-control span {
  font-size: 0.9rem;
}
.upload-form-text {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}
/*upload form*/
.upload-form-control input[type="file"] {
  display: none;
}
.input-file label.button {
  display: block;
  width: 300px;
  margin: 0 auto 50px;
}
.upload-form__dragndrop {
  width: 64px;
  height: 64px;
  margin: 0 auto 25px;
  background: url("~/assets/icon-dragndrop.svg") no-repeat center;
  background-size: contain;
}
/*Confirmation*/
.upload-form-comfirmation__text {
  margin-bottom: 40px;
}
.upload-form-confirmation__preloader {
  width: 75px;
  height: 75px;
  background-image: url("~/assets/preloader.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  margin: 0 auto 40px;
  animation: rotate 1s linear infinite;
}
.upload-form-comfirmation .button {
  width: 186px;
}
label.button-checkbox {
  position: relative;
  padding-left: 40px;
}
.button-checkbox input {
  display: none;
}
label.button-checkbox span {
  font-size: 1rem;
}
label.button-checkbox span::before {
  content: "";
  display: block;
  border: 2px solid #fff;
  border-radius: 12px;
  width: 24px;
  height: 24px;
  position: absolute;
  top: 13px;
  left: 14px;
}
label.button-checkbox span::after {
  content: "";
  display: none;
  width: 10px;
  height: 8px;
  border-left: 2px solid #fff;
  border-bottom: 2px solid #fff;
  position: absolute;
  top: 19px;
  left: 21px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}
.button-checkbox input:checked ~ span::after,
.button-checkbox:hover input ~ span::after {
  display: block;
}
/*Uploading*/
.upload-form-uploading .button {
  min-width: 120px;
}

@media (max-width: 767px) {
  .content-body {
    padding: 40px 20px;
    border-radius: 20px;
    background-position: 0 0;
    background-size: 200%;
  }
  .content-body--form h1 {
    font-size: 1.5rem;
    margin: 0 0 40px;
  }
  .content-body--form {
    margin-bottom: 300px;
    position: relative;
  }
  .conditions-link {
    margin-bottom: 0;
  }
  .upload-form-control__error {
    margin-bottom: 25px;
    height: 32px;
  }
  .upload-form-control {
    background-color: transparent;
    border-radius: 0;
    width: auto;
    height: 200px;
    margin: 0;
    padding: 0;
    text-align: center;
    box-shadow: none;
    position: absolute;
    bottom: -230px;
    left: 0;
    width: 100%;
    min-width: 100%;
    min-height: 0;
  }
  .upload-form__dragndrop {
    display: none;
  }
  .input-file label.button {
    margin-bottom: 0;
  }
  .upload-form-comfirmation__text {
    font-size: 0.8rem;
    margin-bottom: 20px;
  }
  .upload-form-confirmation__preloader {
    margin-bottom: 20px;
  }
  .upload-form-comfirmation .button {
    width: 150px;
    padding: 0 10px;
    margin: 0 5px;
  }
  label.button-checkbox span::before {
    display: none;
  }
  label.button-checkbox {
    padding-left: 10px;
  }
  .upload-form-text {
    display: none;
  }
}
@media (max-width: 575px) {
  .content-body {
    background-size: 400%;
  }
  .upload-form-text {
    width: 90%;
  }
}
@keyframes rotate {
  from {
    transform: rotate(-360deg);
  }
}
</style>

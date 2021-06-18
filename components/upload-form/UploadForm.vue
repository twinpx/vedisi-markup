<template>
  <div class="content-body content-body--form">
    <h1>Проверка квалифицированной электронной подписи PDF-документа</h1>
    <p>
      Сервис поможет вам проверить действительность квалифицированной
      электронной подписи, чтобы убедиться в юридической силе электронного
      документа.
    </p>
    <div class="condition-link">
      <NuxtLink to="/conditions">Условия использования</NuxtLink>
    </div>
    <form action="" method="POST">
      <div class="upload-form-control" @drop.prevent="drop()">
        <input
          type="file"
          name="pdfFile"
          id="pdfFile"
          @change="uploadFile"
          ref="pdfFile"
        />
        <div
          class="upload-form-button"
          v-if="$store.state.uploadStatus === 'form'"
        >
          <div class="upload-form-control__error" v-text="error"></div>

          <div class="input-file">
            <label for="pdfFile" class="button button--large"
              >Выберите PDF-файл</label
            >
          </div>

          <div class="upload-form__dragndrop" ref="dragndrop"></div>

          <span>или перетащите его в область</span>
        </div>

        <div
          class="upload-form-comfirmation"
          v-if="$store.state.uploadStatus === 'confirmation'"
        >
          <div class="upload-form-comfirmation__text">
            Мы обрабатываем, но не храним<br />персональные данные.
          </div>
          <label class="button-checkbox button button--success button--middle">
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
            Идет проверка документа,<br />подождите, пожалуйста
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
</template>

<script>
export default {
  data() {
    return {
      error: "",
      controller: null,
      isAdvancedUpload: false
    };
  },
  methods: {
    drop() {
      console.log("sdf");
    },
    uploadFile() {
      //if size is acceptable
      if (this.$refs.pdfFile.files[0].size >= 1e7) {
        this.error = "Вес файла превышает 10Мб";
        return;
      } else {
        this.error = "";
      }
      this.$store.commit("changeUploadStatus", "confirmation");
    },
    confirm() {
      this.$store.commit("changeUploadStatus", "uploading");
      this.sendFile();
    },
    refuse() {
      this.$store.commit("changeUploadStatus", "form");
    },
    refuseUploading() {
      this.controller.abort();
      this.$store.commit("changeUploadStatus", "form");
    },
    async sendFile() {
      //create controller
      this.controller = new AbortController();

      //check if there files
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
        this.error = "Произошла ошибка, попробуйте снова.";
        return;
      }

      //get response
      let uuid;

      if (result.status != 200) {
        this.error = "Произошла ошибка, попробуйте снова.";
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
          this.error = "Произошла ошибка, попробуйте снова.";
          return;
        }

        if (response.status == 204) {
          await new Promise(r => setTimeout(r, 1000));
        } else if (response.status != 200) {
          this.error = "Произошла ошибка, попробуйте снова.";
          return;
        } else {
          //Обработка через try
          let json = await response.json();
          this.$store.commit("changeResult", json);
          this.$store.commit("changeUploadStatus", "success");
          break;
        }
      } while (true);

      return;
    }
  },
  mounted() {
    this.isAdvancedUpload = (() => {
      let div = document.createElement("div");
      return (
        ("draggable" in div || ("ondragstart" in div && "ondrop" in div)) &&
        "FormData" in window &&
        "FileReader" in window
      );
    })();

    if (this.isAdvancedUpload) {
      document.addEventListener(
        "drop",
        function(event) {
          // prevent default action (open as link for some elements)
          event.preventDefault();
          // move dragged elem to the selected drop target
          console.log("dragndrop");
          /*if (event.target.className == "dropzone") {
            event.target.style.background = "";
            dragged.parentNode.removeChild(dragged);
            event.target.appendChild(dragged);
          }*/
        },
        false
      );
      /*let droppedFiles = false;

      $form
        .on(
          "drag dragstart dragend dragover dragenter dragleave drop",
          function(e) {
            e.preventDefault();
            e.stopPropagation();
          }
        )
        .on("dragover dragenter", function() {
          $form.addClass("is-dragover");
        })
        .on("dragleave dragend drop", function() {
          $form.removeClass("is-dragover");
        })
        .on("drop", function(e) {
          droppedFiles = e.originalEvent.dataTransfer.files;
        });*/
    }
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
h1 {
  font-size: 3rem;
  margin: 0 130px 42px;
  text-align: center;
}
.content-body--form p {
  width: 50%;
  margin: 0 auto 20px;
  text-align: center;
}
.condition-link {
  font-size: 0.8rem;
  text-align: center;
  color: #000;
  margin-bottom: 32px;
}
.condition-link a,
.condition-link a:hover,
.condition-link a:active {
  color: #000;
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
  padding-left: 20px;
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
.button-checkbox input:checked ~ span::after {
  display: block;
}
/*Uploading*/
.upload-form-uploading .button {
  min-width: 120px;
}

@media (max-width: 767px) {
  .content-body {
    padding: 40px 50px;
    border-radius: 20px;
  }
  h1 {
    font-size: 1.5rem;
    margin: 0 0 40px;
  }
  .upload-form {
    margin-bottom: 200px;
    position: relative;
  }
  .upload-form p {
    width: auto;
    margin: 0 0 40px;
  }
  .condition-link {
    margin-bottom: 0;
  }
  .upload-form-control {
    background-color: transparent;
    border-radius: 0;
    width: auto;
    margin: 0;
    padding: 0;
    text-align: center;
    box-shadow: none;
    position: absolute;
    bottom: -110px;
    left: 0;
    width: 100%;
    min-width: 100%;
  }
}
@keyframes rotate {
  from {
    transform: rotate(-360deg);
  }
}
</style>

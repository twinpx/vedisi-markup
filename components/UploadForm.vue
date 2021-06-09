<template>
  <div class="content-body upload-form">
    <h1>Проверка цифровой подписи PDF документа</h1>
    <p>
      Сервис проверки подписи поможет вам узнать подлинность подписи и получить
      расшифровку.
    </p>
    <div class="condition-link">
      <NuxtLink to="/conditions">Условия использования</NuxtLink>
    </div>
    <form action="" method="POST" ref="uploadForm">
      <div class="upload-form-control">
        <div class="upload-from-control__error">Текст ошибки</div>
        <label for="pdfFile">Выберите PDF файл</label>
        <input
          type="file"
          name="pdfFile"
          id="pdfFile"
          @change="uploadFile"
          ref="pdfFile"
        />
        <span>или перетащите его в область</span>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      error: ""
    };
  },
  methods: {
    uploadFile() {
      let controller = new AbortController();
      this.submitFile(controller);
    },
    async submitFile(controller) {
      if (this.$refs.pdfFile.files.length == 0) {
        //throw new Error('No file selected');
      }

      let formData = new FormData();
      if (this.$refs.pdfFile.files.length != 0) {
        formData.append("pdfFile", this.$refs.pdfFile.files[0]);
      }

      let response;

      try {
        response = await fetch("https://sig.2px.ru/upload", {
          signal: controller.signal,
          method: "POST",
          headers: {
            Authorization: "token12345"
          },
          body: formData
        });
      } catch (err) {
        return;
      }

      let uuid;

      if (response.status != 200) {
        return;
      } else {
        let json = await response.json();
        uuid = json.uuid;
      }

      let status = 0;
      let json;

      do {
        try {
          response = await fetch("https://sig.2px.ru/status?uuid=" + uuid, {
            signal: controller.signal,
            headers: {
              Authorization: "token12345"
            },
            method: "GET"
          });
        } catch (err) {
          return;
        }

        if (response.status == 204) {
          await new Promise(r => setTimeout(r, 1000));
        } else if (response.status != 200) {
          return;
        } else {
          //Обработка через try
          json = await response.json();
          let res = "Найдено подписей:" + json.signatures.length;
          res = res + "<br />";
          let n = 0;
          json.signatures.forEach(element => {
            if (element.valid) {
              res = res + "Подпись " + n + ": ДЕЙСТВИТЕЛЬНА<br />";
            } else {
              res = res + "Подпись " + n + ": НЕДЕЙСТВИТЕЛЬНА<br />";
            }
            n++;
          });
          res = res + "Полные данные:<br />";
          document.body.innerHTML = res + JSON.stringify(json);
          break;
        }
      } while (true);

      return;
    }
  }
};
</script>

<style>
.content-body {
  background-color: #fede00;
  background-image: url("~/assets/yellow-bg.svg");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 70px;
  border-radius: 40px;
  color: #000;
}
h1 {
  font-size: 3rem;
  margin: 0 130px 42px;
  text-align: center;
}
.upload-form p {
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
  margin: 0 auto -110px;
  padding: 40px 114px 42px;
  text-align: center;
  box-shadow: 0px 5px 50px #fede004d;
}
.upload-from-control__error {
  margin-bottom: 50px;
}
.upload-form-control span {
  font-size: 0.9rem;
}
.upload-form-control input[type="file"] {
  display: none;
}
.upload-form-control label {
  display: block;
  background-color: #c8df52;
  width: 300px;
  height: 80px;
  line-height: 80px;
  padding: 0;
  margin: 0 auto 50px;
  border-radius: 40px;
  font-size: 1.4rem;
  font-weight: 600;
  -webkit-transition: color 0.3s ease;
  transition: background-color 0.3s ease;
  cursor: pointer;
}
.upload-form-control label:hover {
  background-color: #ccf20c;
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
</style>

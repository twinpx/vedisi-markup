<template>
  <div class="content-body content-body--form">
    <h1>Форма для проверки нескольких документов</h1>
    <form action="" method="POST">
      <div class="upload-form-control">
        <div class="upload-from-control__error">
          Текст ошибки
        </div>
        <label for="pdfFileTest">Выберите PDF файл</label>
        <input
          type="file"
          name="pdfFileTest"
          id="pdfFileTest"
          ref="pdfFileTest"
          @change="uploadPdfFile"
        />
        <label for="sigFile" v-show="showSig">Выберите SIG файл</label>
        <input
          type="file"
          name="sigFile"
          id="sigFile"
          @change="uploadSigFile"
          ref="sigFile"
        />
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
      showSig: false
    };
  },
  methods: {
    uploadPdfFile() {
      this.showSig = true;
    },
    async uploadSigFile() {
      //create controller
      this.controller = new AbortController();

      //check if there files
      if (this.$refs.pdfFileTest.files.length == 0) {
        throw new Error("No file selected");
      }

      //upload file and get uuid
      //create form data
      let formData = new FormData();
      if (this.$refs.pdfFileTest.files.length != 0) {
        formData.append("pdfFile", this.$refs.pdfFileTest.files[0]);
      }
      if (this.$refs.sigFile.files.length != 0) {
        formData.append("sigFile", this.$refs.sigFile.files[0]);
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
        return;
      }

      //get response
      let uuid;

      if (result.status != 200) {
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
          return;
        }

        if (response.status == 204) {
          await new Promise(r => setTimeout(r, 1000));
        } else if (response.status != 200) {
          return;
        } else {
          //Обработка через try
          let json = await response.json();
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
          //document.body.innerHTML = res + JSON.stringify(json);
          this.$store.commit("changeResult", json);
          break;
        }
      } while (true);

      return;
    }
  }
};
</script>

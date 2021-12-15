<template>
  <div>
    <input
      type="file"
      name="pdfFile"
      id="pdfFile"
      @change="uploadFile"
      ref="pdfFile"
      accept=".pdf"
    />
    <div class="upload-form-button" v-if="$store.state.uploadStatus === 'form'">
      <div
        class="upload-form-control__error"
        v-text="$store.state.uploadForm.error"
      ></div>

      <div class="input-file">
        <label for="pdfFile" class="button button--large" @click="clickUpload()"
          >Выберите PDF-файл</label
        >
      </div>

      <div
        class="upload-form__dragndrop"
        ref="dragndrop"
        @dragenter="dragenter()"
        @drop="drop($event)"
      >
        <span>или перетащите его в область</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    drop(event) {
      console.log(event);
    },
    dragenter() {
      console.log("sdf");
    },
    clickUpload() {
      if (window.ym) {
        window.ym(this.$store.state.counters.ym, "reachGoal", "CLICK_UPLOAD");
      }
    },
    uploadFile() {
      //if size is acceptable
      if (this.$refs.pdfFile.files[0].size >= 1e7) {
        this.$store.commit(
          "setUploadFormError",
          "Сервис не поддерживает проверку файлов, размер которых превышает 10 Мбайт."
        );
        return;
      } else {
        this.$store.commit("setUploadFormError", "");
      }

      //if the file extention is not pdf
      /*const filename = this.$refs.pdfFile.files[0].name;
      const lastIndex = filename.lastIndexOf(".");

      if (filename.substring(lastIndex + 1) !== "pdf") {
        this.$store.commit('setUploadFormError', "Сервис поддерживает только проверку файлов PDF.")
        return;
      } else {
        this.$store.commit('setUploadFormError', "")
      }*/

      this.$store.commit("changeUploadStatus", "confirmation");
    }
  }
};
</script>

<style>
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
  margin: 0 auto 25px;
  background: url("~/assets/icon-dragndrop.svg") no-repeat center top;
  background-size: 64px;
  padding-top: 85px;
}
@media (max-width: 767px) {
  .upload-form-control__error {
    margin-bottom: 1rem;
    height: 32px;
  }
  .upload-form__dragndrop {
    display: none;
  }
  .input-file label.button {
    margin-bottom: 0;
  }
}
</style>

<template>
  <div class="upload-form-uploading">
    <div class="upload-form-uploading__preloader"></div>
    <button
      class="button button--gray button--small"
      @click.prevent="refuseUploading()"
    >
      Отменить
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    refuseUploading() {
      this.$store.state.uploadForm.controller.abort();
      this.$store.commit("setUploadFormProp", {
        prop: "controllerAborted",
        value: true
      });
      this.$store.commit("changeUploadStatus", "form");
    }
  }
};
</script>

<style>
.upload-form-uploading {
  -webkit-transform: translateY(70px);
  transform: translateY(70px);
}
.upload-form-uploading__preloader {
  width: 75px;
  height: 75px;
  background-image: url("~/assets/preloader.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  margin: 0 auto 40px;
  animation: rotate 1s linear infinite;
}
.upload-form-uploading .button {
  min-width: 120px;
}
@media (max-width: 767px) {
  .upload-form-uploading {
    transform: none;
  }
  .upload-form-uploading__preloader {
    margin: 1rem auto 2rem;
    width: 55px;
    height: 55px;
  }
}
</style>

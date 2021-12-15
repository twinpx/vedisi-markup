<template>
  <div class="upload-form-control">
    <upload-form-button></upload-form-button>
    <upload-form-confirmation></upload-form-confirmation>
    <upload-form-uploading></upload-form-uploading>
  </div>
</template>

<script>
import UploadFormUploading from "./UploadFormUploading.vue";
import UploadFormConfirmation from "./UploadFormConfirmation.vue";
import UploadFormButton from "./UploadFormButton.vue";

export default {
  components: { UploadFormUploading, UploadFormConfirmation, UploadFormButton }
};
</script>

<style>
.upload-form-control {
  background-color: #fff;
  border-radius: 40px;
  width: 50%;
  min-width: 528px;
  margin: 0 auto -40px;
  padding: 40px 55px 42px;
  text-align: center;
  box-shadow: 0px 5px 50px #fede004d;
  min-height: 300px;
}
@media (max-width: 767px) {
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
    bottom: -215px;
    left: 0;
    width: 100%;
    min-width: 100%;
    min-height: 0;
  }
}
</style>

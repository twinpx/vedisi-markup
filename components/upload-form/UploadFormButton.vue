<template>
  <div v-show="button.show">
    <input
      type="file"
      :name="`${button.value}File`"
      :id="`${button.value}File`"
      @change="uploadFile"
      ref="pdfFile"
      :accept="button.accept"
    />
    <div class="upload-form-button" v-if="$store.state.uploadStatus === 'form'">
      <div class="input-file" v-if="!$store.state.uploadForm.isDragover">
        <label
          :for="`${button.value}File`"
          class="button button--large"
          :class="{ 'button--sig': button.value === 'sig' }"
          @click="clickUpload()"
          >{{ button.name }}</label
        >
      </div>

      <div
        class="upload-form__dragndrop"
        v-if="$store.state.uploadForm.isDragover"
      ></div>

      <span class="upload-form__dragndrop-text"
        >или перетащите его в область</span
      >

      <div class="upload-form-control__error" v-text="button.error"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UploadFormButton",
  data() {
    return {};
  },
  props: {
    button: Object,
    tabindex: Number,
    buttonindex: Number
  },
  emits: ["uploaded"],
  methods: {
    clickUpload() {
      if (window.ym) {
        window.ym(this.$store.state.counters.ym, "reachGoal", "CLICK_UPLOAD");
      }
    },
    uploadFile() {
      const file = this.$refs.pdfFile.files[0];

      this.$refs.pdfFile.value = null;

      this.$emit("uploaded", file);
    }
  }
};
</script>

<style>
.upload-form-control__error {
  font-size: 0.9rem;
  color: #e43d40;
  min-height: 16px;
  margin-top: 10px;
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
  margin: 0 auto 30px;
  background: url("~/assets/icon-dragndrop.svg") no-repeat center 15px;
  background-size: 64px;
  padding-top: 100px;
}
@media (max-width: 767px) {
  .upload-form-control__error {
    height: 32px;
  }
  .upload-form__dragndrop,
  .upload-form__dragndrop-text {
    display: none;
  }
  .input-file label.button {
    margin-bottom: 0;
  }
}
</style>

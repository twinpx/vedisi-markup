<template>
  <div>
    <upload-form-button
      v-for="(button, buttonIndex) in tab.buttons"
      :key="button.value"
      :button="button"
      :tabindex="tabindex"
      :buttonindex="buttonIndex"
      @uploaded="upl"
    ></upload-form-button>
  </div>
</template>

<script>
import UploadFormButton from "./UploadFormButton.vue";

export default {
  name: "UploadFormPdf",
  props: {
    tab: Object,
    tabindex: Number
  },
  emits: ["uploaded"],
  methods: {
    upl(file) {
      this.$emit("uploaded", file);
    }
  },
  components: { UploadFormButton }
};
</script>

<style></style>

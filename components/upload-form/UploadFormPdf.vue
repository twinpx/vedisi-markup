<template>
  <div>
    <upload-form-button
      v-for="button in tab.buttons"
      :key="button.value"
      :button="button"
      :keyword="button.value"
    ></upload-form-button>
  </div>
</template>

<script>
import UploadFormButton from "./UploadFormButton.vue";

export default {
  name: "UploadFormPdf",
  props: {
    tab: Object
  },
  components: { UploadFormButton }
};
</script>

<style></style>

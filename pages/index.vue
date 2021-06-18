<template>
  <div>
    <signature-result
      v-if="
        $store.state.uploadStatus === 'success' &&
          $store.state.result.signatures
      "
    ></signature-result>
    <upload-form v-else></upload-form>
  </div>
</template>

<script>
import UploadForm from "../components/upload-form/UploadForm.vue";

export default {
  components: {
    UploadForm
  },
  layout: "default"
};
</script>

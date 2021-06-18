<template>
  <div>
    <upload-form v-if="!$store.state.result.signatures"></upload-form>
    <signature-result v-else></signature-result>
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

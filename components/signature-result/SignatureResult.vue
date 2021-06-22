<template>
  <div>
    <signature-result-info></signature-result-info>

    <div
      v-for="(signature, index) in $store.state.result.signatures"
      :key="signature.signatureName"
    >
      <signature-result-success
        v-if="$store.state.result.signatures[index].valid"
        :index="index"
        :signature="signature"
      ></signature-result-success>

      <signature-result-error
        v-else
        :index="index"
        :signature="signature"
      ></signature-result-error>
    </div>
  </div>
</template>

<script>
import SignatureResultInfo from "./SignatureResultInfo.vue";
import SignatureResultSuccess from "./SignatureResultSuccess.vue";
import SignatureResultError from "./SignatureResultError.vue";

export default {
  props: {
    index: Number,
    signature: Object
  },
  components: {
    SignatureResultInfo,
    SignatureResultSuccess,
    SignatureResultError
  },
  computed: {
    signatureNumber() {
      if (this.$store.state.result.signatures.length <= 1) return "";
      return this.index + 1;
    }
  }
};
</script>

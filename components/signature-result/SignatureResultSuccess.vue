<template>
  <div class="signature-result-item">
    <div class="content-body content-body--success">
      <h1>Подпись {{ signatureNumber }} подтверждена</h1>
      <result-table :signature="signature"></result-table>
    </div>
    <signature-result-file
      :signature="signature"
      v-if="false"
    ></signature-result-file>
  </div>
</template>

<script>
import ResultTable from "./SignatureResultTable.vue";
import SignatureResultFile from "./SignatureResultFile.vue";

export default {
  props: {
    index: Number,
    signature: Object
  },
  components: { ResultTable, SignatureResultFile },
  computed: {
    signatureNumber() {
      if (this.$store.state.result.signatures.length <= 1) return "";
      return this.index + 1;
    }
  }
};
</script>

<style>
.signature-result-item {
  margin-bottom: 140px;
}

.content-body--success {
  background-image: url("~/assets/green-bg.svg");
  background-color: #c8df52;
  margin-bottom: 120px;
}

@media (max-width: 575px) {
  .content-body--success {
    padding-bottom: 0;
    margin-bottom: 0;
  }
  .signature-result-item {
    margin-bottom: 50px;
  }
  .signature-result-item:last-child {
    margin-bottom: 0;
  }
}
</style>

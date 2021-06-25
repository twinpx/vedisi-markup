<template>
  <div>
    <signature-result-info></signature-result-info>

    <div class="content-body content-body--error">
      <h1>Подпись не обнаружена</h1>
    </div>
  </div>
</template>

<script>
import SignatureResultInfo from "./signature-result/SignatureResultInfo.vue";
export default {
  components: { SignatureResultInfo }
};
</script>

<style scoped>
h1 {
  margin-bottom: 30px;
}
.signature-result-item {
  margin-bottom: 140px;
}
.content-body--error {
  background-image: url("~/assets/red-bg.svg");
  background-color: #e37f8c;
  padding-bottom: 38px;
}

@media (max-width: 575px) {
  .content-body--error {
    padding-bottom: 2px;
  }
}
</style>

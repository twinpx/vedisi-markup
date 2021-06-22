<template>
  <div class="content-body content-body--error">
    <h1>Подпись не обнаружена</h1>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
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

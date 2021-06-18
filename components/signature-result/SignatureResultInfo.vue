<template>
  <div class="signature-result-info">
    <div class="signature-result-info__left" v-if="$store.state.result.PDF">
      <span
        class="signature-result-info__filename"
        v-if="$store.state.result.PDF.filename"
        ><i></i><span>{{ $store.state.result.PDF.filename }}</span></span
      >
      <span
        class="signature-result-info__md5"
        v-if="$store.state.result.PDF.MD5"
        >Контрольная сумма MD5: {{ $store.state.result.PDF.MD5 }}</span
      >
    </div>
    <div class="signature-result-info__right">
      <button
        class="button button-success button--small"
        @click.prevent="newUpload()"
      >
        Проверить еще
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    newUpload() {
      this.$store.commit("changeResult", {});
      this.$store.commit("changeUploadStatus", "form");
      //this.$refs.pdfFile.files.length = 0;
    }
  }
};
</script>

<style>
.signature-result-info {
  display: flex;
  justify-content: space-between;
  font-size: 0.7rem;
  margin: 20px 0 35px;
}
.signature-result-info__filename {
  display: flex;
  align-items: center;
  margin-right: 44px;
}
.signature-result-info__filename i {
  width: 32px;
  height: 32px;
  background: url("~/assets/icon-filename.svg") no-repeat center;
  background-size: contain;
  margin-right: 10px;
}
.signature-result-info__left {
  display: flex;
  align-items: center;
}

.signature-result-info .button {
  min-width: 136px;
}
</style>

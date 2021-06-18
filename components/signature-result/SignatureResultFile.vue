<template>
  <div class="signature-result-file">
    <a :download="signature.certThumbprint + '.cer'" :href="href"
      >Протокол проверки подписи</a
    >
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    signature: Object
  },
  computed: {
    href() {
      let base64Data = this.signature.certificate;
      let blob = new Blob([base64Data]);
      return URL.createObjectURL(blob);
    }
  }
};
</script>

<style>
.signature-result-file {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
}
</style>

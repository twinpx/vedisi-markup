<template>
  <div class="container">
    <the-header></the-header>

    <upload-form v-if="!$store.state.result.signatures"></upload-form>
    <upload-form-test v-if="!$store.state.result.signatures"></upload-form-test>

    <signature-result v-else></signature-result>

    <div class="copyright">Сервис создан в Twin px</div>
  </div>
</template>

<script>
import TheHeader from "../components/header/TheHeader.vue";
import UploadForm from "../components/upload-form/UploadForm.vue";
import UploadFormTest from "../components/upload-form/UploadFormTest.vue";
import SignatureResult from "../components/signature-result/SignatureResult.vue";

export default {
  components: {
    TheHeader,
    UploadForm,
    UploadFormTest,
    SignatureResult
  },
  head: {
    link: [
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap"
      }
    ]
  }
};
</script>

<style>
body {
  font-family: "Nunito", sans-serif;
  font-size: 16px;
  font-weight: normal;
  color: #000;
}
.container {
  margin: 0 auto;
  padding: 0 15px;
  max-width: 1200px;
}
a {
  text-decoration: none;
  -webkit-transition: opacity 0.3s ease;
  transition: opacity 0.3s ease;
  color: #000;
}
a:hover {
  opacity: 0.7;
  color: #000;
}
.copyright {
  text-align: center;
  font-size: 0.8rem;
  margin-top: 135px;
}
.button {
  display: inline-block;
  padding: 0 15px;
  font-weight: 600;
  -webkit-transition: color 0.3s ease;
  transition: background-color 0.3s ease;
  cursor: pointer;
  border: none;
}
.button,
.button--success {
  background-color: #c8df52;
}
.button:hover,
.button--success:hover {
  background-color: #ccf20c;
}
.button--danger {
  background-color: #f37970;
  color: #fff;
}
.button--danger:hover {
  background-color: #f85c70;
}
.button--gray {
  background-color: #d8e5d5;
}
.button--gray:hover {
  background-color: #ff0000;
}
.button--small {
  height: 40px;
  line-height: 40px;
  border-radius: 20px;
  font-size: 0.7rem;
}
.button--middle {
  height: 50px;
  line-height: 50px;
  border-radius: 25px;
  font-size: 1rem;
}
.button--large {
  height: 80px;
  line-height: 80px;
  border-radius: 40px;
  font-size: 1.4rem;
}
</style>

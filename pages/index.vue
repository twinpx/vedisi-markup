<template>
  <div class="container">
    <the-header></the-header>
    <upload-form></upload-form>
    <div class="copyright">Сервис создан в Twin px</div>
  </div>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
import UploadForm from "../components/UploadForm.vue";

export default {
  components: { TheHeader, UploadForm },
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
}
a:hover {
  opacity: 0.7;
}
.copyright {
  text-align: center;
  font-size: 0.8rem;
  margin-top: 135px;
}
</style>

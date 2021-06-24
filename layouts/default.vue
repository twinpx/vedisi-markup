<template>
  <div class="container">
    <the-header></the-header>

    <Nuxt />

    <a href="https://twinpx.ru/" target="_blank" class="copyright">
      <img src="~/assets/twinpx-logo.svg" width="" />
      <span>Сервис создан в Twin px</span>
    </a>
  </div>
</template>

<script>
import TheHeader from "../components/header/TheHeader.vue";

export default {
  components: { TheHeader },
  head: {
    link: [],
    meta: []
  }
};
</script>

<style>
html {
  font-family: "Nunito", sans-serif;
  font-size: 16px;
  /*-ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;*/
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

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
a.copyright {
  display: block;
  width: 135px;
  text-align: center;
  font-size: 0.8rem;
  margin: 100px auto 50px;
}
h1 {
  font-size: 3rem;
  margin: 0 0 42px;
  text-align: center;
}
.copyright img {
  display: block;
  margin-bottom: 10px;
}
.copyright span {
  font-size: 0.7rem;
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
@media (max-width: 767px) {
  h1 {
    font-size: 1.5rem;
    margin: 0 0 40px;
  }
}
</style>

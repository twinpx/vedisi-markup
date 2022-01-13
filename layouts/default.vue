<template>
  <div class="container">
    <the-header></the-header>

    <Nuxt />

    <a href="https://twinpx.ru/" target="_blank" class="copyright">
      <img src="~/assets/twinpx-logo.svg" width="" />
      <span>Сервис создан в Twin px<br />2021</span>
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
body,
#__nuxt,
#__layout {
  min-height: 100vh;
}
.container {
  margin: 0 auto;
  padding: 0 15px;
  max-width: 1200px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.index-page-content {
  flex: 1 0 auto;
}
.page-content {
  width: calc(100% / 6 * 4);
  padding-top: 70px;
  margin: 0 auto;
  line-height: 1.5rem;
  flex: 1 0 auto;
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
h1 {
  font-size: 3rem;
  margin: 0 0 3rem;
  text-align: center;
}
.page-content h1 {
  margin-bottom: 3.5rem;
}
h2 {
  font-size: 1.5rem;
  margin: 2.5rem 0 1rem;
}
p {
  margin: 0 0 1rem;
}
li {
  margin-bottom: 0.8rem;
}
a.copyright {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  margin: 100px auto 50px;
  flex: 0 0 auto;
}
.copyright img {
  width: 100px;
  margin-right: 23px;
}
.copyright span {
  font-size: 0.7rem;
  line-height: 0.9rem;
  color: #495668;
}
.button {
  display: inline-block;
  padding: 0 15px;
  font-weight: 600;
  -webkit-transition: background-color 0.3s ease, color 0.3s ease;
  transition: background-color 0.3s ease, color 0.3s ease;
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
  color: #fff;
}
.button--sig {
  background-color: #abcbef;
}
.button--sig:hover {
  background-color: #5daeff;
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
@media (max-width: 575px) {
  .page-content {
    padding-top: 20px;
    width: 90%;
  }
  .page-content h1 {
    margin-bottom: 2rem;
  }
}
</style>

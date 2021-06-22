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
    link: [
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com"
      },
      {
        rel: "apple-touch-icon",
        sizes: "57x57",
        href: "/apple-icon-57x57.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "72x72",
        href: "/apple-icon-72x72.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "76x76",
        href: "/apple-icon-76x76.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "114x114",
        href: "/apple-icon-114x114.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "120x120",
        href: "/apple-icon-120x120.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "144x144",
        href: "/apple-icon-144x144.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "152x152",
        href: "/apple-icon-152x152.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-icon-180x180.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        href: "/android-icon-192x192.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        href: "/favicon-96x96.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png"
      },
      { rel: "manifest", href: "/manifest.json" },
      {
        rel: "apple-touch-icon",
        sizes: "60x60",
        href: "/apple-icon-60x60.png"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap"
      }
    ],
    meta: [
      { name: "msapplication-TileColor", content: "#ffffff" },
      { name: "msapplication-TileImage", content: "/ms-icon-144x144.png" },
      { name: "theme-color", content: "#ffffff" }
    ]
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
</style>

<template>
  <header>
    <header-logo-inner></header-logo-inner>

    <div class="header-middle">
      <header-statistics
        v-if="$store.state.uploadStatus !== 'success'"
      ></header-statistics>
    </div>

    <div class="header-menu">
      <NuxtLink to="/about/">О проекте</NuxtLink>
    </div>
    <div
      class="header-mobile-menu"
      :class="{ open: menuOpen, animate: menuAnimate }"
    >
      <i @click="clickMenuIcon()"></i>
      <div class="header-mobile-menu__wrapper">
        <div class="header-mobile-menu__bg">
          <div>
            <NuxtLink to="/about/">О проекте</NuxtLink>
          </div>
          <div>
            <NuxtLink to="/terms/">Условия<br />использования</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import HeaderStatistics from "./TheHeaderStatisctics.vue";
import HeaderLogoInner from "./TheHeaderLogoInner.vue";

export default {
  watch: {
    $route() {
      //hide menu
      this.clickMenuIcon();
      //clear upload satus
      this.$store.commit("changeResult", {});
      this.$store.commit("changeUploadStatus", "form");
    }
  },
  data() {
    return {
      menuOpen: false,
      menuAnimate: false
    };
  },
  methods: {
    clickMenuIcon() {
      this.menuOpen = !this.menuOpen;
      this.menuAnimate = true;
      if (!this.menuOpen) {
        setTimeout(() => {
          this.menuAnimate = false;
        }, 500);
      }
    }
  },
  components: {
    HeaderStatistics,
    HeaderLogoInner
  },
  mounted() {
    document.addEventListener("click", e => {
      if (this.menuOpen && !e.target.closest(".header-mobile-menu")) {
        this.clickMenuIcon();
      }
    });
  }
};
</script>

<style>
header {
  color: #495668;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  flex: 0 0 auto;
}
.header-middle {
  width: 50%;
}
.header-statistics {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.header-statistics__num {
  font-size: 1.5rem;
  font-weight: 700;
  margin-right: 13px;
}
.header-statistics__text {
  font-size: 0.7rem;
}
.header-menu a,
.header-menu a:hover,
.header-menu a:active {
  color: #495668;
}
.header-mobile-menu {
  display: none;
}
@media (max-width: 575px) {
  .header-statistics,
  .header-menu {
    display: none;
  }
  .header-mobile-menu {
    display: block;
  }
  .header-mobile-menu i {
    display: block;
    width: 64px;
    height: 64px;
    cursor: pointer;
    background-image: url("~/assets/IconMenu.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 24px;
  }
  .header-mobile-menu__wrapper {
    position: absolute;
    top: 70px;
    left: 0;
    width: 100vw;
    overflow: hidden;
    z-index: -1;
  }
  .header-mobile-menu__bg {
    margin-left: -30px;
    width: calc(100vw + 60px);
    background-color: #fff;
    border-radius: 50% / 0 0 100% 100%;
    text-align: center;
    padding-bottom: 120px;
    font-size: 1.5rem;
    transform: translateY(-100%);
    -webkit-transform: translateY(-100%);
    transition: transform 0.5s ease, opacity 0.3s ease;
    -webkit-transition: transform 0.5s ease, opacity 0.3s ease;
    opacity: 0;
  }
  .header-mobile-menu__bg div {
    -webkit-transform: translateY(50px);
    transform: translateY(50px);
    margin-bottom: 15px;
    line-height: 1;
  }
  .header-mobile-menu a,
  .header-mobile-menu a:hover,
  .header-mobile-menu a:active {
    color: #495668;
  }
  .header-mobile-menu.animate .header-mobile-menu__wrapper {
    z-index: 10;
  }
  .header-mobile-menu.open .header-mobile-menu__bg {
    transform: translateY(0);
    -webkit-transform: translateY(0);
    opacity: 1;
  }
}
</style>

<template>
  <header>
    <img
      src="~assets/Logo.svg"
      width="136"
      alt="Проверка подписи"
      class="header-logo"
    />
    <div class="header-statistics">
      <div class="header-statistics__num">256</div>
      <div class="header-statistics__text">документов<br />проверили</div>
    </div>
    <div class="header-menu">
      <NuxtLink to="/about">О проекте</NuxtLink>
    </div>
    <div class="header-mobile-menu">
      <i></i>
      <div class="header-mobile-menu__wrapper">
        <div class="header-mobile-menu__bg">
          <div>
            <NuxtLink to="/about">О проекте</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style>
header {
  color: #495668;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 0 25px;
}
.header-logo {
  position: relative;
  z-index: 11;
}
.header-statistics {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
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
@media (max-width: 767px) {
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
    z-index: 10;
  }
  .header-mobile-menu__bg {
    position: absolute;
    top: 0;
    left: -30px;
    width: calc(100vw + 60px);
    background-color: #fff;
    border-radius: 50% / 0 0 100% 100%;
    text-align: center;
    padding-bottom: 120px;
    font-size: 1.5rem;
    z-index: 11;
  }
  .header-mobile-menu__bg div {
    -webkit-transform: translateY(50px);
    transform: translateY(50px);
  }
  .header-mobile-menu a,
  .header-mobile-menu a:hover,
  .header-mobile-menu a:active {
    color: #495668;
  }
}
</style>

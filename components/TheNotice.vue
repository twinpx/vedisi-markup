<template>
  <span class="notice" :class="{ 'notice--show': show }">
    <i @mouseenter="show = true" @mouseleave="show = false">?</i>
    <span class="notice-text" v-html="text"></span>
  </span>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  },
  props: {
    text: String
  }
};
</script>

<style>
.notice {
  color: #333333;
  position: relative;
}
.notice i {
  display: inline-block;
  width: 24px;
  height: 24px;
  background-color: #fff500;
  border-radius: 50%;
  font-size: 0.7rem;
  font-style: normal;
  font-weight: bold;
  text-align: center;
  line-height: 24px;
  cursor: pointer;
}
.notice-text {
  position: absolute;
  bottom: 33px;
  right: -32px;
  width: 300px;
  border-radius: 10px;
  background-color: #fff;
  text-align: center;
  padding: 15px;
  font-size: 0.9rem;
  box-shadow: 0px 5px 50px #fede004d;
  opacity: 0;
  transition: opacity 0.3s ease;
  -webkit-transition: opacity 0.3s ease;
  z-index: -1;
}
.notice--show .notice-text {
  opacity: 1;
  z-index: 10;
}
.notice-text::after {
  content: "";
  display: block;
  position: absolute;
  bottom: -11px;
  right: calc(32px + 24px / 2 - 19px / 2);
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 19px 9.5px 0 9.5px;
  border-color: #ffffff transparent transparent transparent;
}
</style>

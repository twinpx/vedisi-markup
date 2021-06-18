<template>
  <div class="table-item" v-if="signature[item.code] !== null">
    <span
      >{{ item.text }}
      <span v-if="!value">не</span>
      {{ item.value }}</span
    >
    <span>
      <i v-if="value" class="icon-success"></i>
      <i v-else class="icon-error"></i>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: this.signature[this.item.code]
    };
  },
  props: {
    item: Object,
    signature: Object
  }
};
</script>

<style>
.table-item {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #efefef;
  padding: 15px 20px;
  font-size: 0.9rem;
}
.table-item span:nth-of-type(2) {
  color: #495668;
}
.table-item .icon-success {
  width: 24px;
  height: 19px;
  display: inline-block;
  vertical-align: top;
  background-image: url("~/assets/icon-success.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
.table-item .icon-error {
  width: 24px;
  height: 24px;
  display: inline-block;
  vertical-align: top;
  background-image: url("~/assets/icon-error.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
</style>

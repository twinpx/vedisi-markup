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
.table-item > span:nth-of-type(2) {
  color: #495668;
  text-align: right;
  word-break: break-word;
  margin-left: 15px;
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
@media (max-width: 575px) {
  .table-item {
    display: block;
  }
  .table-item span {
    display: block;
    text-align: center;
  }
  .table-item > span:first-child {
    margin-bottom: 10px;
  }
  .table-item > span:nth-of-type(2) {
    font-size: 0.8rem;
    text-align: center;
    margin-left: 0;
  }
  .table-item .notice {
    margin: 10px 0 0;
  }
}
</style>

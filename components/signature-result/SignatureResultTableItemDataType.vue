<template>
  <div
    class="table-item"
    :class="item.muted ? 'table-item--muted' : ''"
    v-if="signature[item.code] !== null"
  >
    <span>{{ item.text }}:</span>
    <span class="text-icon">
      <span>{{ value }}</span>
      <the-notice v-if="item.notice" :text="item.notice"></the-notice>
    </span>
  </div>
</template>

<script>
import TheNotice from "../TheNotice.vue";

export default {
  data() {
    return {};
  },
  props: {
    item: Object,
    signature: Object
  },
  computed: {
    value() {
      let code = this.item.code; //fromPDF
      let result = this.signature[code]; //true
      let v = this.item.value; //{}

      if (v && v[result]) {
        return v[result];
      } else {
        return result;
      }
    }
  },
  components: { TheNotice }
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
  text-align: right;
  word-break: break-word;
  margin-left: 15px;
}
.table-item.table-item--muted span:nth-of-type(2) {
  color: #838c98;
}
.table-item .notice {
  margin-left: 15px;
}
.text-icon {
  display: flex;
  justify-content: flex-end;
  align-items: center;
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
  }
  .table-item .notice {
    margin: 10px 0 0;
  }
}
</style>

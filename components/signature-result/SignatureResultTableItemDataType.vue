<template>
  <div
    class="table-item"
    :class="item.muted ? 'table-item--muted' : ''"
    v-if="signature[item.code] !== null"
  >
    <span>{{ item.text }}</span>
    <span>
      {{ value }}
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
}
.table-item.table-item--muted span:nth-of-type(2) {
  color: #fabec0;
}
.table-item .notice {
  margin-left: 15px;
}
</style>

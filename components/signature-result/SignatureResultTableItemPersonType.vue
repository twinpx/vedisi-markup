<template>
  <div class="table-item table-item--person">
    <span>{{ item.text }}</span>
    <span>{{ value }}</span>
  </div>
</template>

<script>
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
</style>

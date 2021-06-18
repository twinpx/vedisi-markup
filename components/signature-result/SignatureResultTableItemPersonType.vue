<template>
  <div
    class="table-item table-item--person"
    v-if="signature[item.code] !== null"
    :class="{
      'table-item--droppable': item.dropdown,
      'table-item--open': open
    }"
  >
    <span>{{ item.text }}</span>

    <span
      v-if="item.dropdown"
      @click="open = !open"
      class="table-item__dropdown-icon"
      >></span
    >
    <span v-else>{{ value }}</span>

    <div v-if="item.dropdown" class="table-item__dropdown">
      {{ value }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false
    };
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
.table-item.table-item--droppable {
  flex-wrap: wrap;
  padding-bottom: 0;
}
.table-item span:nth-of-type(2) {
  color: #495668;
}
.table-item__dropdown {
  width: 100%;
  color: #495668;
  padding-top: 15px;
  opacity: 0;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  height: 0;
  overflow: hidden;
}
.table-item__dropdown-icon {
  transition: transform 0.3s ease;
  cursor: pointer;
}
.table-item--open .table-item__dropdown-icon {
  transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
}
.table-item--open .table-item__dropdown {
  height: 100px;
  opacity: 1;
}
</style>

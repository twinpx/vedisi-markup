<template>
  <div
    class="table-item table-item--person"
    v-if="signature[item.code] !== null"
    :class="{
      'table-item--droppable': item.dropdown,
      'table-item--open': open
    }"
  >
    <span>{{ item.text }}:</span>

    <span
      v-if="item.dropdown"
      @click="open = !open"
      class="table-item__dropdown-icon"
      >></span
    >
    <span v-else-if="item.code === 'subjectName'">
      <a :download="signature.certThumbprint + '.cer'" :href="href">
        {{ value }}
      </a>
    </span>

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
    href() {
      let base64Data = this.signature.certificate;
      let blob = new Blob([base64Data]);
      return URL.createObjectURL(blob);
    },
    value() {
      let code = this.item.code; //fromPDF
      let result = this.signature[code]; //true
      let v = this.item.value; //{}

      if (code === "certNotBefore") {
        return `с ${result} по ${this.signature[this.item.after]}`;
      }

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
  text-align: right;
  word-break: break-word;
  margin-left: 15px;
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

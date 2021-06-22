<template>
  <div class="table">
    <div
      v-for="type in itemsType"
      :key="type"
      :class="'table-' + type + '-items'"
    >
      <component
        :is="type + '-type'"
        v-for="item in $store.state.resultTitle[type + 'Type']"
        :key="item.code"
        :item="item"
        :signature="signature"
      ></component>
    </div>
  </div>
</template>

<script>
import CheckType from "./SignatureResultTableItemCheckType.vue";
import DataType from "./SignatureResultTableItemDataType.vue";
import PersonType from "./SignatureResultTableItemPersonType.vue";

export default {
  data() {
    return {
      itemsType: ["check", "data", "person"]
    };
  },
  props: {
    signature: Object
  },
  components: { CheckType, DataType, PersonType }
};
</script>

<style>
.table {
  width: calc((100% + 70px * 2) / 3 * 2);
  margin: 0 auto;
  background-color: #fff;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0px 5px 50px #c8df524d;
  margin-bottom: -40px;
}
.table-check-items,
.table-data-items,
.table-person-items {
  margin-bottom: 50px;
  border-top: 1px solid #efefef;
}
.table-person-items {
  margin-bottom: 30px;
}
@media (max-width: 575px) {
  .table {
    margin: 0 -20px;
    width: calc(100% + 40px);
    padding: 40px 20px;
    box-shadow: none;
  }
}
</style>

<template>
  <div class="table">
    <div class="table-check-items">
      <check-type
        v-for="item in checkTypeItems"
        :key="item.code"
        :item="item"
        :signature="signature"
      ></check-type>
    </div>
    <div class="table-data-items">
      <data-type
        v-for="item in dataTypeItems"
        :key="item.code"
        :item="item"
        :signature="signature"
      ></data-type>
    </div>
    <div class="table-person-items">
      <person-type
        v-for="item in personTypeItems"
        :key="item.code"
        :item="item"
        :signature="signature"
      ></person-type>
    </div>
    <div class="table-other-items">
      <other-type
        v-for="item in otherTypeItems"
        :key="item.code"
        :item="item"
        :signature="signature"
      ></other-type>
    </div>
  </div>
</template>

<script>
import CheckType from "./SignatureResultTableItemCheckType.vue";
import DataType from "./SignatureResultTableItemDataType.vue";
import PersonType from "./SignatureResultTableItemPersonType.vue";
import OtherType from "./SignatureResultTableItemOtherType.vue";

export default {
  data() {
    return {
      checkTypeItems: this.$store.state.resultTitle.checkType,
      dataTypeItems: this.$store.state.resultTitle.dataType,
      personTypeItems: this.$store.state.resultTitle.personType,
      otherTypeItems: this.$store.state.resultTitle.otherType
    };
  },
  props: {
    signature: Object
  },
  components: { CheckType, DataType, PersonType, OtherType }
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
.table-person-items,
.table-other-items {
  margin-bottom: 50px;
  border-top: 1px solid #efefef;
}
.table-other-items {
  margin-bottom: 30px;
}
</style>

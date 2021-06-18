<template>
  <div class="header-statistics" v-if="docsNum">
    <div class="header-statistics__num">{{ docsNum }}</div>
    <div class="header-statistics__text">{{ docsText }}<br />проверили</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      docsNum: null
    };
  },
  computed: {
    docsText() {
      if (/(10|11|12|13|14|15|16|17|18|19)$/.test(this.docsNum)) {
        return "документов";
      } else if (/.*1$/.test(this.docsNum)) {
        return "документ";
      } else if (/[2-4]$/.test(this.docsNum)) {
        return "документа";
      } else {
        return "документов";
      }
    }
  },
  async mounted() {
    try {
      let response = await fetch("https://sig.2px.ru/info", {
        method: "GET",
        headers: {
          Authorization: "token12345"
        }
      });
      let result = await response.json();
      this.docsNum = result.docsVerified;
    } catch (err) {
      return;
    }
  }
};
</script>

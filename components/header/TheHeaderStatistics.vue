<template>
  <div class="header-statistics" v-if="docsNum">
    <div class="header-statistics__num">{{ docsNum }}</div>
    <div class="header-statistics__text">
      {{ docsText }}<br />{{ checkText }} сервисом
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      docsNum: null,
      cases: [2, 0, 1, 1, 1, 2]
    };
  },
  computed: {
    docsText() {
      return this.declOfNum(this.docsNum, [
        "документ",
        "документа",
        "документов"
      ]);
    },
    checkText() {
      return this.declOfNum(this.docsNum, [
        "проверен",
        "проверено",
        "проверено"
      ]);
    }
  },
  methods: {
    declOfNum(number, titles) {
      return titles[
        number % 100 > 4 && number % 100 < 20
          ? 2
          : this.cases[number % 10 < 5 ? number % 10 : 5]
      ];
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

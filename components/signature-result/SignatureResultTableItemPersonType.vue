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
      @click="slideToggle($event)"
      class="table-item__dropdown-icon"
    ></span>

    <span v-else-if="item.cer" class="text-icon">
      <span>{{ value }}</span>
      <a
        :download="signature[item.thumbprint] + '.cer'"
        :href="href"
        class="icon-cer"
      >
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
      let base64Data = this.signature[this.item.cer];
      let blob = new Blob([base64Data], { type: "application/pkix-cert" });
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
  },
  methods: {
    slideToggle(event) {
      const toggleContent = event.target
        .closest(".table-item")
        .querySelector(".table-item__dropdown");
      if (!toggleContent.classList.contains("show")) {
        toggleContent.classList.add("show");
        toggleContent.style.height = "auto";

        var height = toggleContent.clientHeight + "px";

        toggleContent.style.height = "0px";

        setTimeout(function() {
          toggleContent.style.height = height;
        }, 0);
      } else {
        toggleContent.style.height = "0px";

        toggleContent.addEventListener(
          "transitionend",
          function() {
            toggleContent.classList.remove("show");
          },
          {
            once: true
          }
        );
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
  padding-bottom: 10px;
}
.table-item.table-item--droppable span:nth-of-type(1) {
  margin-bottom: 5px;
}
.table-item > span:nth-of-type(2) {
  color: #495668;
  text-align: right;
  word-break: break-word;
  margin-left: 15px;
}
.table-item__dropdown {
  width: 100%;
  color: #495668;
  opacity: 1;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  overflow: hidden;
}
.table-item__dropdown:not(.show) {
  opacity: 0;
  display: none;
}
.table-item__dropdown-icon {
  width: 18px;
  height: 18px;
  background-image: url("~/assets/icon-dropdown.svg");
  background-size: cover;
  transition: transform 0.3s ease;
  cursor: pointer;
}
.table-item--open .table-item__dropdown-icon {
  transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
}
.table-item--open .table-item__dropdown {
  display: block;
}
.icon-cer {
  display: inline-block;
  vertical-align: middle;
  width: 16px;
  height: 16px;
  background: url("~/assets/icon-cer.svg") no-repeat center;
  background-size: cover;
  margin-left: 20px;
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
    margin-left: 0;
  }
  .table-item .notice {
    margin: 10px 0 0;
  }
  .table-item span.table-item__dropdown-icon {
    display: block;
    margin: 0 auto;
  }
  .icon-cer {
    margin: 10px 0 0;
  }
}
</style>

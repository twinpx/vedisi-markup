<template>
  <div>
    <div class="upload-form__filename-block" v-if="showFilenameBlock">
      <div class="upload-form__filename">
        <i></i>
        <span class="upload-form__filename-text">
          <span class="upload-form__filename-name">{{ filename }}</span>
          <span class="upload-form__filename-ext">{{ ext }}</span>
        </span>
      </div>
      <button class="button button--gray button--small" @click.prevent="reset">
        Отменить
      </button>
    </div>
    <upload-form-button
      v-for="(button, buttonIndex) in tab.buttons"
      :key="button.value"
      :button="button"
      :keyword="button.value"
      :tabindex="tabindex"
      :buttonindex="buttonIndex"
      @uploaded="upl"
    ></upload-form-button>
  </div>
</template>

<script>
import UploadFormButton from "./UploadFormButton.vue";

export default {
  name: "UploadFormSig",
  props: {
    tab: Object,
    tabindex: Number
  },
  emits: ["uploaded"],
  methods: {
    upl(file) {
      this.$emit("uploaded", file);
    },
    reset() {
      this.$store.commit("showButton", "file");
      this.$store.commit("setUploadFormFile", {
        tabIndex: this.tabindex,
        buttonIndex: 0,
        value: null
      });
      this.$store.commit("setUploadFormFile", {
        tabIndex: this.tabindex,
        buttonIndex: 1,
        value: null
      });
    }
  },
  computed: {
    showFilenameBlock() {
      return !!this.$store.state.uploadForm.tabs[this.tabindex].buttons[0].file;
    },
    filename() {
      let file = this.$store.state.uploadForm.tabs[this.tabindex].buttons[0]
        .file;
      let filename = "";
      if (file && file.name) {
        let name = file.name;
        filename = name.substring(0, name.lastIndexOf("."));
      }
      return filename;
    },
    ext() {
      let file = this.$store.state.uploadForm.tabs[this.tabindex].buttons[0]
        .file;
      let ext = "";
      if (file && file.name) {
        let name = file.name;
        ext = name.substring(name.lastIndexOf("."));
      }
      return ext;
    }
  },
  components: { UploadFormButton }
};
</script>

<style>
.upload-form__filename-block {
  display: flex;
  width: 100%;
  height: 40px;
  margin-bottom: 23px;
}
.upload-form__filename-block .button {
  width: 120px;
  flex-shrink: 0;
}
.upload-form__filename {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  width: calc(100% - 120px);
}
.upload-form__filename-text {
  display: flex;
  justify-content: flex-start;
  width: calc(100% - 32px - 10px - 22px);
}
.upload-form__filename span.upload-form__filename-name,
.upload-form__filename span.upload-form__filename-ext {
  font-size: 0.7rem !important;
}
.upload-form__filename span.upload-form__filename-name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.upload-form__filename i {
  width: 32px;
  height: 32px;
  background: url("~/assets/icon-filename.svg") no-repeat center;
  background-size: contain;
  margin-right: 10px;
  flex-shrink: 0;
}
@media (max-width: 767px) {
  .upload-form__filename-block {
    margin-top: 10px;
    margin-bottom: 13px;
  }
}
</style>

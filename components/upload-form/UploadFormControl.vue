<template>
  <div
    class="upload-form-control"
    ref="dropZone"
    @drag.prevent
    @dragstart.prevent
    @dragend.prevent
    @dragover.prevent="dragover"
    @dragenter.prevent="dragenter"
    @dragleave.prevent="dragleave($event)"
    @drop.prevent="drop"
  >
    <upload-form-tabs
      v-if="$store.state.uploadStatus === 'form'"
      @uploaded="uploaded"
    ></upload-form-tabs>

    <upload-form-confirmation
      v-if="$store.state.uploadStatus === 'confirmation'"
    ></upload-form-confirmation>

    <upload-form-uploading
      v-if="$store.state.uploadStatus === 'uploading'"
    ></upload-form-uploading>
  </div>
</template>

<script>
import UploadFormUploading from "./UploadFormUploading.vue";
import UploadFormConfirmation from "./UploadFormConfirmation.vue";
import UploadFormTabs from "./UploadFormTabs.vue";

export default {
  data() {
    return {
      isDragready: false,
      isDragover: false
    };
  },
  watch: {
    isDragover() {
      this.$store.commit("setUploadFormProp", {
        prop: "isDragover",
        value: this.isDragover
      });
    }
  },
  methods: {
    getCoords(elem) {
      const box = elem.getBoundingClientRect();

      return {
        top: box.top + scrollY,
        left: box.left + scrollX
      };
    },
    dragover() {
      this.isDragready = true;
      this.isDragover = true;
    },
    dragenter() {
      this.isDragready = true;
      this.isDragover = true;
    },
    dragleave(e) {
      let dx = e.pageX - this.getCoords(this.$refs.dropZone).left;
      let dy = e.pageY - this.getCoords(this.$refs.dropZone).top;
      if (
        dx < 0 ||
        dx > this.$refs.dropZone.clientWidth ||
        dy < 0 ||
        dy > this.$refs.dropZone.clientHeight
      ) {
        this.isDragready = true;
        this.isDragover = false;
        return;
      }
      if (
        dx >= 0 &&
        dx <= this.$refs.dropZone.clientWidth &&
        dy >= 0 &&
        dy <= this.$refs.dropZone.clientHeight
      ) {
        this.isDragready = false;
        this.isDragover = true;
        return;
      }
    },
    drop(e) {
      this.isDragready = false;
      this.isDragover = false;

      this.uploaded(e.dataTransfer.files[0]);
    },
    uploaded(file) {
      const tabindex = this.$store.state.uploadForm.tabs.findIndex(
        tab => tab.active
      );
      const buttonindex = this.$store.state.uploadForm.tabs[
        tabindex
      ].buttons.findIndex(button => button.show);

      //if size is acceptable
      if (file.size >= 1e7) {
        this.$store.commit("setUploadFormButtonError", {
          tabIndex: tabindex,
          buttonIndex: buttonindex,
          value:
            "Сервис не поддерживает проверку файлов, размер которых превышает 10 Мбайт."
        });

        this.$store.commit("setUploadFormFile", {
          tabIndex: tabindex,
          buttonIndex: buttonindex,
          value: null
        });

        return;
      } else {
        this.$store.commit("setUploadFormButtonError", {
          tabIndex: tabindex,
          buttonIndex: buttonindex,
          value: ""
        });

        this.$store.commit("setUploadFormFile", {
          tabIndex: tabindex,
          buttonIndex: buttonindex,
          value: file
        });
      }

      //if the file extention is not pdf
      /*const filename = file.name;
      const lastIndex = filename.lastIndexOf(".");

      if (filename.substring(lastIndex + 1) !== "pdf") {
        this.$store.commit("setUploadFormButtonError", {
          tabIndex: tabindex,
          buttonIndex: buttonindex,
          value:
            "Сервис поддерживает только проверку файлов PDF."
        });
        return;
      } else {
        this.$store.commit("setUploadFormButtonError", {
          tabIndex: tabindex,
          buttonIndex: buttonindex,
          value: ""
        });
      }*/

      if (this.$store.state.uploadForm.tabs[tabindex].buttons.length > 1) {
        this.$store.commit("inverseButtons", { tabIndex: tabindex });
      }

      if (
        this.$store.state.uploadForm.tabs[tabindex].buttons.length === 1 ||
        this.$store.state.uploadForm.tabs[tabindex].buttons[buttonindex]
          .value === "sig"
      ) {
        this.$store.commit("changeUploadStatus", "confirmation");
      }
    }
  },
  components: {
    UploadFormUploading,
    UploadFormConfirmation,
    UploadFormTabs
  }
};
</script>

<style>
.upload-form-control {
  background-color: #fff;
  border-radius: 40px;
  width: 50%;
  min-width: 528px;
  margin: 0 auto -40px;
  padding: 40px 55px 42px;
  text-align: center;
  box-shadow: 0px 5px 50px #fede004d;
  min-height: 300px;
}
@media (max-width: 767px) {
  .upload-form-control {
    background-color: transparent;
    border-radius: 0;
    width: auto;
    height: 200px;
    margin: 0;
    padding: 0;
    text-align: center;
    box-shadow: none;
    position: absolute;
    bottom: -215px;
    left: 0;
    width: 100%;
    min-width: 100%;
    min-height: 0;
  }
}
</style>

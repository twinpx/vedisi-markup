<template>
  <h1
    v-text="
      $store.state.uploadStatus === 'form'
        ? 'Проверка квалифицированной электронной подписи PDF-документа'
        : $store.state.uploadStatus === 'confirmation'
        ? 'Согласитесь с условиями сервиса'
        : $store.state.uploadStatus === 'uploading'
        ? 'Идет проверка документа, подождите, пожалуйста'
        : ''
    "
  ></h1>
</template>

<style>
.content-body--form h1 {
  margin-bottom: 10px;
}
</style>

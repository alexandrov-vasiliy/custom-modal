<script lang="ts" setup>
interface Props {
  title: string
  imageSrc: string
}

withDefaults(defineProps<Props>(), {
  imageSrc: 'defaultErrorImage'
})
</script>

<template>
  <div class="modalErrorModule">
    <modal-content-module
        :image-src="imageSrc"
        :title="title"
    >
      <slot></slot>
    </modal-content-module>
  </div>
</template>

<style scoped>
.modalErrorModule:deep(.modalContentModule__title) {
  color: red;
}
</style>

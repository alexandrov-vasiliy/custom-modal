<script lang="ts" setup>
interface Props {
  title: string
  imageSrc: string
}

defineProps<Props>()

</script>

<template>
  <div class="modalSuccessModule">
    <modal-content-module
        :image-src="imageSrc"
        :title="title"
    >
      <slot></slot>
    </modal-content-module>
  </div>
</template>

<style scoped>
.modalSuccessModule:deep(.modalContentModule__title) {
  color: green;
}
</style>

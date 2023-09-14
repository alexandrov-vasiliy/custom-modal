<script setup lang="ts">
interface Props {
  imageSrc: string
  title: string
}

defineProps<Props>()
</script>

<template>
  <div>
    <img :src="imageSrc" alt="image">
    <span class="modalContentModule__title">{{ title }}</span>
    <slot></slot>
  </div>
</template>

<style scoped>

</style>

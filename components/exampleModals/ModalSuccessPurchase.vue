<script setup lang="ts">

import {MODALS} from "~/enums/MODALS";
</script>

<template>
  <modal :modal-key="MODALS.SUCCESS_MODAL">
    <template #title>
      Благодарим за покупку
    </template>
    <template #content>
      <modal-success-module
          title="Покупка обрабатвается"
      >
        <p>Оплата прошла успешно. Фишки будут начислины на Ваш счет в ближайшее время. Желаем удачной игры!</p>
      </modal-success-module>
    </template>
    <template #footer>
      <button>Хорошо!</button>
    </template>
  </modal>
</template>

<style scoped>

</style>

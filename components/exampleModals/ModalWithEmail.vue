<script setup lang="ts">

import {MODALS} from "~/enums/MODALS";
</script>

<template>
<modal :modal-key="MODALS.EMAIL_MODAL">
  <template #title>
    <div>
      Почта для чека
    </div>
  </template>
  <template #content>
    <div>
      <p>Введите email на который мы пришлем вам электронный чек</p>
      <input type="email" required>
    </div>
  </template>
  <template #footer>
    <button>Далее</button>
  </template>
</modal>
</template>

<style scoped>
p {
  margin: 0;
  padding: 20px;
}
</style>

<script setup lang="ts">

import {MODALS} from "~/enums/MODALS";
</script>

<template>
  <modal :modal-key="MODALS.ERROR_MODAL">
    <template #title>
      Ошибка входа
    </template>
    <template #content>
      <modal-error-module
          title="Повторный вход"
      >
        <p>Вы вощли в игру на другом устройстве или в другом окне</p>
      </modal-error-module>
    </template>
    <template #footer>
      <button>Перезагрузить</button>
    </template>
  </modal>
</template>

<style scoped>

</style>

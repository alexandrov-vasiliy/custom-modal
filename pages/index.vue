<script lang="ts" setup>
import {useModal} from "~/store/useModal";
import {MODALS} from "~/enums/MODALS";
import ModalWithEmail from "~/components/exampleModals/ModalWithEmail.vue";
import ModalErrorEntry from "~/components/exampleModals/ModalErrorEntry.vue";
import ModalSuccessPurchase from "~/components/exampleModals/ModalSuccessPurchase.vue";

const {show} = useModal()

</script>

<template>
  <div>
    <button @click="show(MODALS.TEXT_MODAL)">show default modal</button>
    <button @click="show(MODALS.EMAIL_MODAL)">show email modal</button>
    <button @click="show(MODALS.ERROR_MODAL)">show error modal</button>
    <button @click="show(MODALS.SUCCESS_MODAL)">show success modal</button>
    <modal :modal-key="MODALS.TEXT_MODAL">
      <template #title>Внимание</template>
      <template #rightWidget>
        <modal-cross-widget/>
      </template>
      <template #content>
        Недостаточно фишек для ставки
      </template>
    </modal>
    <modal-error-entry/>
    <modal-with-email/>
    <modal-success-purchase/>
  </div>
</template>

<style scoped>

</style>

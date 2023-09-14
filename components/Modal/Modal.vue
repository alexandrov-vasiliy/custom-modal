<script lang="ts" setup>
import {useModal} from "~/store/useModal";
import {MODALS} from "~/enums/MODALS";

interface Props {
  modalKey: MODALS
}

defineProps<Props>()

const modalStore = useModal()
const slots = useSlots()
const modal = ref(null)

function handleOutsideClick() {
  modalStore.hide()
}

</script>

<template>
  <teleport v-if="modalStore.isShow && modalStore.currentModalKey === modalKey" to="body">
    <div class="modal">
      <div class="modal__overlay" @click.self="handleOutsideClick">
        <div ref="modal" class="modal__container">
          <div class="modal__header">
            <div class="modal__title">
              <slot name="title"></slot>
            </div>
            <div class="modal__rightWidget">
              <slot name="rightWidget"></slot>
            </div>
          </div>
          <div class="modal__content">
            <slot name="content"></slot>
          </div>
          <div v-if="slots.footer" class="modal__footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
}

.modal__overlay {
  background-color: rgba(255, 255, 255, 0.82);
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
}

.modal__container {
  max-width: 300px;
  text-align: center;
}

.modal__header {
  background-color: #01143f;
  color: #427dbd;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal__title {
  flex-grow: 1;
}

.modal__rightWidget {
  margin-left: auto;
}

.modal__content {
  color: white;
  background-color: #010b25;
}

.modal__footer {
  background-color: #021031;
}
</style>

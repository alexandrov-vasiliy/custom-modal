import {defineStore} from "pinia";
import {MODALS} from "~/enums/MODALS";
interface ModalState {
    isShow: boolean
    currentModalKey: MODALS | null
}
export const useModal = defineStore('modals', {
    state: (): ModalState => ({
        isShow: false,
        currentModalKey: null as MODALS | null
    }),
    actions: {
        show(modalKey: MODALS) {
            this.isShow = true
            this.currentModalKey = modalKey
        },
        hide() {
            this.isShow = false
            this.currentModalKey = null
        }
    }
})

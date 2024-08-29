import { defineStore } from 'pinia'

interface State {
    showMobileNav: boolean
    showModalGoodeats: boolean
}

export const useUiStore = defineStore('ui', {
    state: (): State => ({
        showMobileNav: false,
        showModalGoodeats: false
    }),
    actions: {
        toggleMobileNav(visible?: boolean): void {
            visible = visible ?? !this.showMobileNav
            this.showMobileNav = visible
        },
        toggleModalGoodeats(visible?: boolean): void {
            visible = visible ?? !this.showModalGoodeats
            this.showModalGoodeats = visible
        }
    }
})

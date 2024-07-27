import { defineStore } from 'pinia'

interface State {
    showMobileNav: boolean
}

export const useUiStore = defineStore('ui', {
    state: (): State => ({
        showMobileNav: false
    }),
    actions: {
        toggleMobileNav(visible?: boolean): void {
            visible = visible ?? !this.showMobileNav
            this.showMobileNav = visible
        }
    }
})

<template>
    <nuxt-layout>
        <nuxt-page />
    </nuxt-layout>
</template>

<script setup lang="ts">
import { useUiStore } from '@/stores/ui'

const uiStore = useUiStore()

/* --------------------------
// Computed
-------------------------- */

const isMobileNavActive: ComputedRef<boolean> = computed(() => {
    return uiStore.showMobileNav
})

/* --------------------------
// Hooks and composables
-------------------------- */

useHead({
    // Prevent page scrolling when mobile nav is open
    bodyAttrs: {
        class: computed((): string => {
            if (isMobileNavActive.value) return 'overflow-hidden'
            return ''
        })
    }
})
</script>

<template>
    <nuxt-layout>
        <nuxt-page />
    </nuxt-layout>
</template>

<script setup lang="ts">
import { useUiStore } from '@/stores/ui'
import { useReviewsStore } from '@/stores/reviews'

const uiStore = useUiStore()
const reviewsStore = useReviewsStore()

/* --------------------------
// Computed
-------------------------- */

const isModalActive: ComputedRef<boolean> = computed(() => {
    return uiStore.showMobileNav || uiStore.showModalGoodeats
})

/* --------------------------
// Hooks and composables
-------------------------- */

onMounted(() => {
    reviewsStore.fetchAllReviews()
})

useHead({
    // Prevent page scrolling when mobile nav is open
    bodyAttrs: {
        class: computed((): string => {
            if (isModalActive.value) return 'overflow-hidden'
            return ''
        })
    }
})
</script>

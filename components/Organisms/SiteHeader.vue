<template>
    <header
        role="banner"
        :class="headerClasses"
        class="fixed left-0 right-0 top-0 z-50 w-full transition-[padding] duration-500"
    >
        <div
            :class="[bgOverlayClassesLeft, bgOverlayClassesShared]"
            class="left-0 bg-gradient-to-r"
        ></div>
        <div
            :class="[bgOverlayClassesRight, bgOverlayClassesShared]"
            class="right-0 bg-gradient-to-l"
        ></div>

        <div class="flex items-center px-2">
            <div class="relative flex w-full items-center justify-between">
                <site-brand
                    class="transition-all duration-300"
                    :class="siteBrandClasses"
                />
                <div
                    class="fixed inset-0 z-30 h-screen w-full auto-rows-max overflow-y-scroll bg-seashell p-4 transition-all duration-300 dark:bg-navy lg:static lg:inset-auto lg:z-auto lg:flex lg:h-auto lg:items-center lg:overflow-y-visible lg:bg-transparent lg:p-0 dark:lg:bg-transparent"
                    :class="mobileNavWrapperClasses"
                >
                    <div class="flex justify-between">
                        <site-brand
                            class="col-span-10 col-start-2 row-start-1 h-10 w-10 lg:hidden"
                        />
                        <button
                            class="relative z-10 col-start-11 row-start-1 lg:hidden"
                            aria-label="Close mobile navigation"
                            @click="uiStore.toggleMobileNav(false)"
                        >
                            <svg-icon name="ui/cross" class="ml-auto h-8 w-8" />
                        </button>
                    </div>
                    <site-nav
                        class="mt-8 lg:mt-0 lg:w-full"
                        ul-classes="flex gap-2 flex-col lg:flex-row lg:gap-3 lg:justify-end text-3xl lg:text-base"
                    />
                </div>
            </div>
            <button
                class="z-10 mr-4 dark:text-butterscotch-500 lg:block"
                aria-label="Toggle light and dark modes"
                @click="toggleColourMode"
            >
                <svg-icon name="ui/sun" class="h-6 w-6" />
            </button>
            <button
                class="z-10 dark:text-butterscotch-500 lg:hidden"
                aria-label="Open mobile navigation"
                @click="uiStore.toggleMobileNav(true)"
            >
                <svg-icon name="ui/hamburger" class="h-6 w-6" />
            </button>
        </div>
    </header>
</template>

<script setup lang="ts">
import { useUiStore } from '@/stores/ui'

/* --------------------------
// Interfaces and types
-------------------------- */
interface State {
    showHeader: boolean
    lastScrollPosition: number
    scrollOffset: number
}

/* --------------------------
// States, stores and props
-------------------------- */
const uiStore = useUiStore()

const state: State = reactive({
    showHeader: true,
    lastScrollPosition: 0,
    scrollOffset: 40
})
const colorMode = useColorMode()

const toggleColourMode = (): void => {
    if (colorMode.preference === 'system' || colorMode.preference === 'dark') {
        colorMode.preference = 'light'
    } else {
        colorMode.preference = 'dark'
    }
}

/* --------------------------
// Computed
-------------------------- */
const headerClasses: ComputedRef<string> = computed(() => {
    return state.showHeader ? 'py-2 lg:py-6' : 'py-2'
})

const siteBrandClasses: ComputedRef<string> = computed(() => {
    return state.showHeader
        ? 'w-8 h-8 lg:w-12 lg:h-12'
        : 'w-5 h-5 lg:w-8 lg:h-8'
})

const mobileNavWrapperClasses: ComputedRef<string> = computed(() => {
    return uiStore.showMobileNav
        ? 'translate-x-0'
        : 'translate-x-full lg:translate-x-0'
})

const bgOverlayClassesShared: ComputedRef<string> = computed(() => {
    return 'absolute bottom-0  top-0 h-full w-1/2  from-butterscotch-500 to-tuscany-500 transition-all duration-500 dark:from-navy-400 dark:to-navy-600'
})

const bgOverlayClassesRight: ComputedRef<string> = computed(() => {
    return state.showHeader ? 'translate-x-full' : 'translate-x-0'
})

const bgOverlayClassesLeft: ComputedRef<string> = computed(() => {
    return state.showHeader ? '-translate-x-full' : '-translate-x-0'
})

/* --------------------------
// Methods
-------------------------- */
const onScroll = (): void => {
    if (window.scrollY < 0) {
        return
    }
    if (
        Math.abs(window.scrollY - state.lastScrollPosition) < state.scrollOffset
    ) {
        return
    }
    state.showHeader = window.scrollY < state.lastScrollPosition
    state.lastScrollPosition = window.scrollY
}

/* --------------------------
// Hooks and composables
-------------------------- */
onMounted((): void => {
    state.lastScrollPosition = window.scrollY
    window.addEventListener('scroll', onScroll)
})
</script>

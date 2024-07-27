<template>
    <header
        role="banner"
        :class="headerClasses"
        class="fixed left-0 right-0 top-0 z-50 w-full transition-[padding] duration-500"
    >
        <div class="flex px-2">
            <div class="relative flex w-full items-center justify-between">
                <site-brand
                    class="transition-all duration-300"
                    :class="siteBrandClasses"
                />
                <div
                    class="fixed inset-0 z-10 grid h-screen w-full grid-flow-row auto-rows-max grid-cols-12 overflow-y-scroll bg-seashell py-4 transition-all duration-300 dark:bg-navy-800 lg:static lg:inset-auto lg:z-auto lg:flex lg:h-auto lg:items-center lg:overflow-y-visible lg:bg-transparent lg:p-0"
                    :class="mobileNavWrapperClasses"
                >
                    <site-brand
                        class="col-span-10 col-start-2 row-start-1 lg:hidden"
                    />
                    <button
                        class="relative z-10 col-start-11 row-start-1 lg:hidden"
                        aria-label="Close mobile navigation"
                        @click="uiStore.toggleMobileNav(false)"
                    >
                        <svg-icon name="ui/cross" class="ml-auto h-10 w-10" />
                    </button>
                    <site-nav
                        class="col-span-10 col-start-2 row-start-2 mt-8 lg:mt-0 lg:w-full"
                        ul-classes="flex gap-2 flex-col lg:flex-row lg:gap-4 lg:justify-end"
                    />
                    <button
                        aria-label="Toggle light and dark modes"
                        @click="toggleColourMode"
                    >
                        <svg-icon name="ui/sun" class="h-6 w-6 opacity-50" />
                    </button>
                </div>
            </div>
            <button
                class="dark:text-butterscotch-500 lg:hidden"
                aria-label="Open mobile navigation"
                @click="uiStore.toggleMobileNav(true)"
            >
                <svg-icon name="ui/hamburger" class="h-10 w-10" />
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
        ? 'w-6  h-6 lg:w-12 lg:h-12'
        : 'w-4 h-4 lg:w-8 lg:h-8'
})

const mobileNavWrapperClasses: ComputedRef<string> = computed(() => {
    return uiStore.showMobileNav
        ? 'translate-x-0'
        : 'translate-x-full lg:translate-x-0'
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

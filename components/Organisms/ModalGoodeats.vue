<template>
    <div
        class="fixed inset-0 z-[101] flex bg-seashell/80 backdrop-blur-sm transition-all duration-500 ease-out dark:bg-navy/40"
        :class="wrapperClasses"
    >
        <div class="relative h-full w-full p-8 md:p-16 xl:p-32">
            <div
                class="absolute left-1/2 top-1/2 z-[100] flex h-11/12 w-11/12 max-w-screen-xl -translate-x-1/2 -translate-y-1/2 bg-black/80 backdrop-blur"
            >
                <div
                    class="text-sm relative flex h-full w-full flex-col rounded-lg"
                >
                    <button
                        class="btn flex cursor-pointer items-center justify-center p-2"
                        aria-hidden="true"
                        @click.prevent="toggleModalGoodeats"
                    >
                        <svg-icon name="ui/cross" class="h-8 w-8" />

                        Close
                    </button>
                    <iframe
                        src="https://goodeats.io/beencoffee?embed_outlet=beencoffee"
                        class="h-full w-full"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
const uiStore = useUiStore()

const toggleModalGoodeats = () => {
    uiStore.toggleModalGoodeats()
}

const wrapperClasses: ComputedRef<string> = computed(() => {
    return uiStore.showModalGoodeats ? 'translatey-y-0' : '-translate-y-full '
})
</script>

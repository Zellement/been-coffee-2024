<template>
    <div
        class="fixed inset-0 z-[101] flex bg-navy-700/80 backdrop-blur-sm transition-all duration-500 ease-out"
        :class="wrapperClasses"
    >
        <div class="relative h-full w-full p-8 md:p-16 xl:p-32">
            <div
                class="absolute left-1/2 top-1/2 z-[100] flex h-11/12 w-11/12 max-w-screen-xl -translate-x-1/2 -translate-y-1/2 border-2 border-navy-500 bg-butterscotch-400 backdrop-blur dark:border-butterscotch-500 dark:bg-navy-500/80"
            >
                <div
                    class="text-sm relative flex h-full w-full flex-col rounded-lg"
                >
                    <button
                        class="btn m-2 flex cursor-pointer items-center justify-center self-end p-2"
                        aria-label="Close modal"
                        @click.prevent="toggleModalGoodeats"
                    >
                        <svg-icon name="ui/cross" class="h-8 w-8" />
                    </button>
                    <iframe
                        src="https://goodeats.io/beencoffee?embed_outlet=beencoffee"
                        class="h-full w-full"
                        allow="identity-credentials-get"
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

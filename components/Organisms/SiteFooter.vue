<template>
    <div class="site-footer mt-32 flex">
        <footer
            role="contentinfo"
            class="relative z-10 w-full transition-transform duration-500"
        >
            <div class="container grid-layout container-padding py-8">
                <div
                    class="col-span-10 col-start-2 flex flex-col justify-between gap-8 lg:flex-row"
                >
                    <div class="flex flex-row items-center gap-4">
                        <site-brand />
                        <p class="flex flex-row gap-1 text-xs">
                            <span>&copy;</span> <span>{{ date }}</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script lang="ts" setup>
const date: ComputedRef<number> = computed(() => {
    return new Date().getFullYear()
})
</script>

<template>
    <div class="layout">
        <site-seo />
        <site-header />
        <client-only>
            <div
                class="fixed inset-0 -z-50 flex h-full w-full opacity-40 lg:opacity-70"
            >
                <div class="polygon-clip-mask--bl h-full w-full">
                    <nuxt-picture
                        src="/img/pattern.png"
                        class="h-full w-full object-cover"
                        :class="bgImageClasses"
                        alt="Navy pattern"
                    />
                </div>
            </div>
        </client-only>
        <main>
            <slot />
        </main>
        <site-footer />
    </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const currentColorMode = computed(() => colorMode.value)

const bgImageClasses: ComputedRef<string> = computed(() => {
    return currentColorMode.value === 'dark'
        ? 'opacity-60'
        : 'opacity-10 sepia-[1.2]'
})
</script>

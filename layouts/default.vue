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
                        :src="bgImage"
                        class="h-full w-full object-cover"
                        alt="Navy pattern"
                    />
                </div>
            </div>
        </client-only>
        <main>
            <slot />
        </main>
        <!-- <site-footer /> -->
    </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const currentColorMode = computed(() => colorMode.value)

const bgImage: ComputedRef<string> = computed(() => {
    return currentColorMode.value === 'dark'
        ? '/img/pattern-navy.jpg'
        : '/img/pattern-cream.jpg'
})
</script>

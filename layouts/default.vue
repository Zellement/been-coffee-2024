<template>
    <div class="layout">
        <site-header />
        <client-only>
            <div
                class="pointer-events-none fixed inset-0 -z-50 flex h-full w-full opacity-100 lg:opacity-70"
                aria-hidden="true"
            >
                <div
                    class="polygon-clip-mask--bl h-full w-full opacity-10 dark:opacity-40"
                    style="
                        background-image: url('/pattern.svg');
                        background-size: cover;
                    "
                >
                    <!-- <nuxt-picture
                        src="/img/pattern.png"
                        class="h-full w-full object-cover"
                        :style="bgImageClasses"
                        aria-hidden="true"
                        alt="Pattern background"
                    /> -->
                    <!-- <bg-pattern class="h-[100vh] w-[100vw] bg-green-200" /> -->
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
// const colorMode = useColorMode()

// const currentColorMode = computed(() => colorMode.value)

// const bgImageClasses: ComputedRef<string> = computed(() => {
//     return currentColorMode.value === 'dark'
//         ? 'filter: invert(22%) sepia(11%) saturate(3462%) hue-rotate(198deg) brightness(94%) contrast(92%); opacity: 0.6;'
//         : 'filter: invert(45%) sepia(93%) saturate(428%) hue-rotate(330deg) brightness(82%) contrast(98%); opacity: 0.2;'
// })
</script>

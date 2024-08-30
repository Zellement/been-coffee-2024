<template>
    <div
        id="site-footer"
        class="site-footer mt-8 flex scroll-m-16 border-t-4 border-butterscotch bg-butterscotch-100 dark:border-navy-400 dark:bg-navy-600"
    >
        <footer
            role="contentinfo"
            class="relative z-10 w-full transition-transform duration-500"
        >
            <div class="container grid-layout container-padding py-8">
                <div class="col-span-full p-4 xl:col-span-4">
                    <div
                        class="mb-8 flex w-full flex-row justify-center gap-2 font-riverside leading-none lg:justify-start lg:gap-10"
                    >
                        <p class="flex flex-col">
                            <span class="text-base text-tuscany">Just off</span
                            ><span class="text-md">Toyota Island</span>
                        </p>
                        <p class="flex flex-col">
                            <span class="text-base text-tuscany">On the</span
                            ><span class="text-md">A50 &amp; A38</span>
                        </p>
                    </div>
                    <h3 class="mb-1 font-riverside text-md">Been Coffee</h3>
                    <p>
                        Derby &amp; Burton Services<br />
                        Etwall Road<br />
                        Willington<br />
                        DE65 6DX
                    </p>
                    <h3 class="mb-1 mt-8 font-riverside text-md">
                        Opening Hours
                    </h3>
                    <opening-hours />
                </div>
                <div class="col-span-full overflow-hidden xl:col-span-8">
                    <div class="relative h-full w-full">
                        <div
                            class="absolute bottom-[27%] right-[61%] z-10 h-auto w-[30%]"
                        >
                            <nuxt-img
                                src="/img/arrow-bee.svg"
                                alt="Been Coffee bee icon"
                                class="h-[30%]"
                            />
                        </div>
                        <nuxt-img
                            src="/img/map.svg"
                            alt="Map of the area"
                            class="h-full w-full dark:invert"
                        />
                    </div>
                </div>
                <!-- <div
                    class="col-span-10 col-start-2 flex flex-col justify-between gap-8 xl:flex-row"
                >
                    <div class="flex flex-row items-center gap-4">
                        <site-brand />
                        <p class="flex flex-row gap-1 text-xs">
                            <span>&copy;</span> <span>{{ date }}</span>
                        </p>
                    </div>
                </div> -->
            </div>
        </footer>
    </div>
</template>

<script lang="ts" setup>
// const date: ComputedRef<number> = computed(() => {
//     return new Date().getFullYear()
// })
</script>

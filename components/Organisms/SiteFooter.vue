<template>
    <div>
        <div
            class="flex items-center justify-center gap-4 border-t-4 border-butterscotch-500 bg-white/20 py-6 dark:border-navy-400 dark:bg-black/10"
        >
            <h3 class="font-krete">Be Social</h3>
            <ul class="flex gap-4">
                <li v-for="item in social" :key="item.name">
                    <a
                        :href="item.url"
                        target="_blank"
                        class="transition-colors hover:text-tuscany"
                        rel="noopener noreferrer"
                    >
                        <icon :name="item.icon" class="h-6 w-6" />
                    </a>
                </li>
            </ul>
        </div>
        <div
            id="site-footer"
            class="site-footer flex scroll-m-16 border-t-4 border-butterscotch bg-butterscotch-100 dark:border-navy-400 dark:bg-navy-600"
        >
            <footer
                role="contentinfo"
                class="relative z-10 w-full transition-transform duration-500"
            >
                <div class="container grid-layout container-padding pt-8">
                    <div class="col-span-full p-4 xl:col-span-4">
                        <div
                            class="mb-8 flex w-full flex-row justify-center gap-16 font-riverside leading-none lg:justify-start"
                        >
                            <p class="flex flex-col">
                                <span
                                    class="font-riverside-outline text-base leading-none text-tuscany"
                                    >Just off</span
                                ><span class="text-md leading-none"
                                    >Toyota Island</span
                                >
                            </p>
                            <p class="flex flex-col">
                                <span
                                    class="font-riverside-outline text-base leading-none text-tuscany"
                                    >On the</span
                                ><span class="text-md leading-none"
                                    >A50 &amp; A38</span
                                >
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
                    <div
                        class="container-px col-span-full flex w-full bg-butterscotch-200 pb-4 pt-3 dark:bg-navy-400"
                    >
                        <div
                            class="ml-auto flex flex-col items-center gap-2 text-center lg:flex-row"
                        >
                            <site-brand class="h-4 w-4" />
                            <p
                                class="flex flex-col gap-1 text-[0.7em] leading-snug opacity-70 lg:flex-row"
                            >
                                <span
                                    >Been Coffee is a trading name of Been
                                    Coffee House Ltd. All rights reserved.</span
                                >
                                <span class="flex gap-1">
                                    <span>&copy;</span>
                                    <span>{{ date }}</span>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </div>
</template>

<script lang="ts" setup>
const date: ComputedRef<number> = computed(() => {
    return new Date().getFullYear()
})

const social = [
    {
        name: 'Facebook',
        icon: 'brandico:facebook-rect',
        url: 'https://www.facebook.com/beencoffeeuk'
    },
    {
        name: 'Instagram',
        icon: 'brandico:instagram-filled',
        url: 'https://www.instagram.com/beencoffeeuk'
    }
]
</script>

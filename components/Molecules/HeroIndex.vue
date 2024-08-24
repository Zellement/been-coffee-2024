<template>
    <div class="container grid grid-cols-12">
        <div class="relative col-span-6 col-start-1 -row-start-1">
            <h1
                :class="spanClasses"
                class="text-gradient--tuscany-butterscotch dark:text-gradient--navy-darkNavy font-riverside text-butterscotch dark:text-navy-400"
            >
                <span>Been</span>
                <span>Coffee</span>
            </h1>
            <span
                aria-hidden="true"
                :class="spanClasses"
                class="ml-[1vw] mt-[1vw] font-riverside-outline text-navy dark:text-butterscotch"
            >
                <span>Been</span>
                <span>Coffee</span>
            </span>
        </div>
        <div
            class="col-span-10 col-start-3 row-start-1 xl:col-span-8 xl:col-start-5 xl:aspect-landscape"
        >
            <nuxt-picture src="/img/shop-exterior.jpeg" alt="Shop exterior" />
        </div>
    </div>
</template>

<script lang="ts" setup>
const spanClasses: ComputedRef<string> = computed(() => {
    return 'pl-2 absolute left-0 top-1/2 -translate-y-1/2 flex flex-col text-[33vw] leading-[29vw] tracking-tight xl:text-[20vw] xl:leading-[18vw] max:text-[400px]/[340px]'
})
</script>

<template>
    <div class="container grid grid-cols-12">
        <div class="relative col-span-6 col-start-1 -row-start-1">
            <span :class="spanClasses" class="font-riverside">
                <span>Been</span>
                <span>Coffee</span>
            </span>
            <span
                aria-hidden="true"
                :class="spanClasses"
                class="mt-[1vw] translate-x-[1vw] font-riverside-outline dark:text-butterscotch"
            >
                <span>Been</span>
                <span>Coffee</span>
            </span>
        </div>
        <div class="col-span-8 col-start-5 row-start-1 xl:aspect-landscape">
            <nuxt-picture src="/img/shop-exterior.jpeg" alt="Shop exterior" />
        </div>
    </div>
</template>

<script lang="ts" setup>
const spanClasses: ComputedRef<string> = computed(() => {
    return 'absolute left-0 top-1/2 -translate-y-1/2 flex flex-col text-[26vw] leading-[22vw] tracking-tight text-butterscotch-200 dark:text-navy-400 xl:text-[20vw] xl:leading-[16vw] '
})
</script>

<template>
    <div class="mb-16">
        <div class="col-span-full">
            <h2 class="">
                <span
                    v-if="left"
                    class="anim-header-top block font-riverside text-[11vw]/[10vw] text-butterscotch dark:text-butterscotch xl:text-[8vw] xl:leading-[6vw] max:text-[160px]/[120px]"
                >
                    {{ left }}
                </span>
                <span
                    v-if="right"
                    class="anim-header-bottom block -translate-y-[3vw] text-right font-riverside-outline text-[11vw]/[10vw] dark:text-white xl:text-[8vw] xl:leading-[6vw] max:text-[170px]/[120px]"
                >
                    {{ right }}
                </span>
            </h2>
            <slot />
        </div>
    </div>
</template>

<script lang="ts" setup>
interface Props {
    left: string | null
    right: string | null
}

defineProps<Props>()
</script>

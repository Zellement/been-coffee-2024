<template>
    <div class="">
        <div class="col-span-full">
            <h2 class="">
                <span
                    v-if="left"
                    class="block font-riverside text-[11vw]/[10vw] text-butterscotch xl:text-[8vw] xl:leading-[6vw] max:text-[170px]/[120px]"
                >
                    {{ left }}
                </span>
                <span
                    v-if="right"
                    class="block -translate-y-[3vw] text-right font-riverside-outline text-[11vw]/[10vw] dark:text-white xl:text-[8vw] xl:leading-[6vw] max:text-[170px]/[120px]"
                >
                    {{ right }}
                </span>
            </h2>
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

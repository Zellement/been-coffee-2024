<template>
    <div class="relative font-riverside text-[10vw]/[10vw]">
        <h1
            class="text-gradient--navy-darkNavy dark:text-gradient--butterscotch-tuscany"
        >
            {{ title }}
        </h1>
        <span
            aria-hidden="true"
            class="absolute left-0 top-0 -translate-y-[0.5vw] translate-x-[0.5vw] font-riverside-outline text-butterscotch-500 dark:text-white"
            >{{ title }}</span
        >
    </div>
</template>

<script lang="ts" setup>
interface Props {
    title: string
}

defineProps<Props>()
</script>

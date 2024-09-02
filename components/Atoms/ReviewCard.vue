<template>
    <div
        v-if="rating > 4"
        class="card relative flex w-[300px] min-w-[300px] flex-col gap-2 rounded bg-white/50 p-4 shadow-lg dark:bg-navy-700/20 lg:w-[350px] lg:min-w-[350px]"
    >
        <div class="flex gap-2">
            <Icon
                name="material-symbols:person"
                class="h-6 w-6 text-butterscotch"
            />
            {{ name }}
        </div>
        <div class="flex items-center gap-2 text-xs">
            <Icon
                name="material-symbols:calendar-month-outline-sharp"
                class="h-4 w-4 text-butterscotch"
            />
            {{ date }}
        </div>
        <div v-if="title" class="flex items-center gap-2 font-krete">
            &quot;{{ title }}&quot;
        </div>

        <div class="relative flex gap-1">
            <Icon
                v-for="i in 5"
                :key="i"
                name="ic:outline-star-outline"
                class="h-6 w-6 text-butterscotch opacity-30"
            />
            <div class="absolute left-0 top-0 flex gap-1">
                <Icon
                    v-for="i in rating"
                    :key="i"
                    name="ic:outline-star"
                    class="h-6 w-6 text-butterscotch"
                />
            </div>
        </div>

        <template v-if="$slots.default">
            <button
                class="my-4 self-start text-xs underline underline-offset-2"
                @click.prevent="showDetails = !showDetails"
            >
                Toggle Feedback
            </button>
            <div v-if="showDetails" class="text-xs">
                <slot />
            </div>
        </template>
    </div>
</template>

<script lang="ts" setup>
const showDetails = ref(false)
interface Props {
    date: string
    name: string
    rating: number
    title?: string
}

defineProps<Props>()
</script>

<template>
    <div
        class="relative flex w-64 min-w-64 flex-col gap-2 border border-butterscotch p-4 text-navy dark:border-navy-300 dark:text-white"
    >
        <div
            class="absolute right-0 top-0 flex size-6 -translate-x-2 -translate-y-2 rounded-full bg-butterscotch dark:bg-navy-300"
        >
            <Icon :name="icon" class="m-auto size-4 leading-none" />
        </div>
        <div class="flex gap-2 font-krete">
            <Icon
                name="material-symbols:person"
                class="h-6 w-6 text-butterscotch"
            />
            {{ name }}
        </div>
        <div class="flex gap-2 text-xs">
            <Icon
                name="material-symbols:calendar-month-outline-sharp"
                class="h-6 w-6 text-butterscotch"
            />
            {{ dateString }}
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
        <div class="flex h-full flex-col">
            <div v-if="showDetails">
                <div class="flex flex-col gap-4">
                    <h3 v-if="title" class="font-krete text-md font-bold">
                        &quot;{{ title }}&quot;
                    </h3>
                    <p v-if="reviewText" class="italic">
                        {{ reviewText }}
                    </p>
                    <p v-else>No feedback left.</p>
                    <slot name="feedbackExtra" />
                </div>
                <div
                    v-if="response"
                    class="mt-10 italic text-tuscany-500 dark:text-tuscany-100"
                >
                    <p class="!text-xs">
                        {{ response }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
interface Props {
    string: boolean
    name: string
    dateString: string
    rating: number
    reviewText: string | null
    response: string | null
    title: string | null
    icon: string | null
}
defineProps<Props>()

const uiStore = useUiStore()

const showDetails = computed(() => uiStore.showReviewDetails)
</script>

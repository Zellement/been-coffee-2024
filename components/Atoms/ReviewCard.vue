<template>
    <div
        v-if="review.rating > 4"
        class="card relative flex w-3/4 min-w-[300px] flex-col gap-2 p-4 shadow-lg"
    >
        <div class="flex gap-2">
            <Icon
                name="material-symbols:person"
                class="h-6 w-6 text-butterscotch"
            />
            {{ review.user.name }}
        </div>
        <div class="flex items-center gap-2 text-xs">
            <Icon
                name="material-symbols:calendar-month-outline-sharp"
                class="h-4 w-4 text-butterscotch"
            />
            {{ review.date }}
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
                    v-for="i in review.rating"
                    :key="i"
                    name="ic:outline-star"
                    class="h-6 w-6 text-butterscotch"
                />
            </div>
        </div>
        <button
            class="mt-4 self-start text-xs underline"
            @click.prevent="showDetails = !showDetails"
        >
            Toggle Details
        </button>
        <div v-if="showDetails" class="">
            {{ review.snippet }}
        </div>
    </div>
</template>

<script lang="ts" setup>
const showDetails = ref(false)
interface Props {
    review: {
        date: string
        id: string
        user: {
            name: string
        }
        iso_date: Date
        rating: number
        snippet: string
    }
}

defineProps<Props>()
</script>

<template>
    <div class="relative">
        <div
            class="container container-px flex flex-row items-center justify-between gap-4"
        >
            <h2 class="flex flex-col font-riverside text-lg">
                <span class="text-[0.8em]">Latest reviews from</span>
                <span> Tripadvisor </span>
            </h2>

            <nuxt-link
                class="btn flex-shrink-0 self-end"
                target="_blank"
                to="https://www.tripadvisor.co.uk/Restaurant_Review-g1234748-d23838579-Reviews-Been_Coffee-Willington_Derbyshire_England.html"
            >
                Leave your own
            </nuxt-link>
        </div>
        <div v-if="tripadvisorData" class="lg:container overflow-clip">
            <div class="w-full overflow-x-scroll py-8">
                <div class="flex w-full flex-row space-x-4">
                    <template v-for="item in tripadvisorData" :key="item.id">
                        {{ item.date }}
                        <review-card
                            :name="item.user.username"
                            :date="shortDateConverter(item.published_date)"
                            :rating="item.rating"
                            :title="item.title"
                        >
                            {{ item?.text }}
                        </review-card>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useReviewsStore } from '@/stores/reviews'

const reviewsStore = useReviewsStore()

const { shortDateConverter } = useDateUtils()

const tripadvisorData = computed(() => {
    return reviewsStore.reviewsTripadvisor
})
</script>

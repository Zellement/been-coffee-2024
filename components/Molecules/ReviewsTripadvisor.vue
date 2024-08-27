<template>
    <div class="relative">
        <div class="flex flex-row items-center justify-between gap-4">
            <h2 class="font-riverside text-lg">Latest Tripadvisor Reviews</h2>

            <nuxt-link
                class="btn flex-shrink-0 self-end"
                target="_blank"
                to="https://www.tripadvisor.co.uk/Restaurant_Review-g1234748-d23838579-Reviews-Been_Coffee-Willington_Derbyshire_England.html"
            >
                See all
            </nuxt-link>
        </div>
        <div
            v-if="tripadvisorData"
            class="overflow-hidden px-2 md:px-4 xl:px-6"
        >
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

                    <!--                     
                        <div class="flex gap-2">
                            <Icon
                                name="material-symbols:person"
                                class="h-6 w-6 text-butterscotch"
                            />
                            {{ item.user.username }}
                        </div>
                        <div class="flex gap-2">
                            <Icon
                                name="material-symbols:calendar-month-outline-sharp"
                                class="h-6 w-6 text-butterscotch"
                            />
                            {{ shortDateConverter(item.published_date) }}
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
                                    v-for="i in item.rating"
                                    :key="i"
                                    name="ic:outline-star"
                                    class="h-6 w-6 text-butterscotch"
                                />
                            </div>
                        </div>
                        <h3 class="font-krete font-bold">
                            {{ item.title }}
                        </h3> -->
                    <div class="">
                        <!-- <card-order-details
                                :details="item?.text"
                                :string="true"
                                class="text-xs"
                            >
                                <template #response>
                                    <div
                                        v-if="item?.owner_response?.text"
                                        class="mt-8 border-t border-gray-500 border-opacity-30 pt-8 italic"
                                    >
                                        {{ item?.owner_response?.text }}
                                    </div>
                                </template>
                            </card-order-details> -->
                        <!-- </div> -->
                    </div>
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

<template>
    <div class="relative">
        <div
            class="container container-px flex flex-row items-center justify-between gap-4"
        >
            <h2 class="flex flex-col font-riverside text-lg">
                <span class="text-[0.8em]">Latest reviews from</span>
                <span> Google </span>
            </h2>

            <nuxt-link
                class="btn flex-shrink-0 self-end"
                target="_blank"
                to="https://www.google.com/search?q=been+coffee&rlz=1C5CHFA_enGB999GB999&oq=been+coffe&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMhAIARAuGK8BGMcBGIAEGI4FMgYIAhBFGDkyBwgDEAAYgAQyBggEEEUYQTIGCAUQRRhBMgYIBhBFGEEyBggHEEUYPagCALACAA&sourceid=chrome&ie=UTF-8&zx=1721406730390&no_sw_cr=1#lrd=0x4879f76a544386ad:0xdd73c388e6606809,1,,,,"
            >
                Leave your own
            </nuxt-link>
        </div>
        <div v-if="googleReviewData" class="lg:container overflow-clip">
            <div class="custom-scrollbar w-full overflow-x-scroll py-8 pl-4">
                <div class="flex w-full flex-row space-x-4">
                    <template v-for="item in googleReviewData" :key="item.id">
                        <review-card
                            :name="item.user.name"
                            :date="item.date"
                            :rating="item.rating"
                        >
                            <template v-if="item.snippet || item.details">
                                <template v-if="item.snippet">
                                    {{ item.snippet }}
                                </template>
                                <template v-if="item?.details">
                                    <ul class="mt-4">
                                        <li v-if="item?.details?.food">
                                            Food: {{ item?.details?.food }}
                                        </li>
                                        <li v-if="item?.details?.service">
                                            Service:
                                            {{ item?.details?.service }}
                                        </li>
                                        <li v-if="item?.details?.atmosphere">
                                            Atmosphere:
                                            {{ item?.details?.atmosphere }}
                                        </li>
                                    </ul>
                                </template>
                            </template>
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

const googleReviewData = computed(() => {
    return reviewsStore.reviewsGoogle
})
</script>

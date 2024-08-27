<template>
    <div class="relative">
        <div
            v-if="googleReviewData"
            class="overflow-hidden px-2 md:px-4 xl:px-6"
        >
            <div class="custom-scrollbar w-full overflow-x-scroll py-8">
                <div class="flex w-full flex-row space-x-4">
                    <template v-for="item in googleReviewData" :key="item.id">
                        <review-card :review="item" />
                    </template>
                </div>
            </div>
        </div>

        <div class="container flex flex-row justify-between">
            <nuxt-link
                class="btn flex-shrink-0 self-end"
                target="_blank"
                to="https://www.google.com/search?q=been+coffee&rlz=1C5CHFA_enGB999GB999&oq=been+coffe&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMhAIARAuGK8BGMcBGIAEGI4FMgYIAhBFGDkyBwgDEAAYgAQyBggEEEUYQTIGCAUQRRhBMgYIBhBFGEEyBggHEEUYPagCALACAA&sourceid=chrome&ie=UTF-8&zx=1721406730390&no_sw_cr=1#lrd=0x4879f76a544386ad:0xdd73c388e6606809,1,,,,"
            >
                See more
            </nuxt-link>
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

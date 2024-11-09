<template>
    <div class="container container-px relative">
        <div v-if="googleReviewData" class="grid grid-cols-4 gap-8">
            <card-review
                v-for="item in allReviews"
                :key="item.id"
                :string="true"
                :name="item.user"
                :date-string="item.dateString"
                :rating="item.rating"
                :review-text="item.reviewText"
                :response="item.response"
                :icon="item.icon"
                :title="item.title ?? null"
            >
                <template #feedbackExtra>
                    <ul class="mt-6 italic">
                        <li v-if="item?.details?.food">
                            Food: {{ item?.details?.food }}
                        </li>
                        <li v-if="item?.details?.service">
                            Service: {{ item?.details?.service }}
                        </li>
                        <li v-if="item?.details?.atmosphere">
                            Atmosphere: {{ item?.details?.atmosphere }}
                        </li>
                    </ul>
                </template>
            </card-review>
        </div>
        <div v-else class="container py-4">
            <h2>Sorry!</h2>
            <p>
                We couldn't return any reviews at this time. Please try again
                later.
            </p>
        </div>
    </div>
</template>

<script setup>
import { useReviewsStore } from '@/stores/reviews'
const { shortDateConverter } = useDateUtils()
const reviewsStore = useReviewsStore()

const googleReviewData = computed(() => {
    return reviewsStore.reviewsGoogle
})

const tripadvisorData = computed(() => {
    return reviewsStore.reviewsTripadvisor
})

function normalizeGoogleReview(review) {
    console.log(review)
    return {
        id: review.review_id,
        date: new Date(review.iso_date),
        dateString: shortDateConverter(new Date(review.iso_date)),
        rating: review.rating,
        reviewText: review.snippet,
        user: review.user.name,
        source: 'Google',
        icon: 'mingcute:google-fill',
        details: {
            food: review.details.food,
            service: review.details.service,
            atmosphere: review.details.atmosphere
        },
        response: review.response?.snippet ?? null
    }
}

function normalizeTripadvisorReview(review) {
    console.log(review)
    return {
        id: review.id,
        date: new Date(review.published_date),
        dateString: shortDateConverter(new Date(review.published_date)),
        rating: review.rating,
        reviewText: review.text,
        user: review.user.username,
        title: review.title,
        source: 'Tripadvisor',
        icon: 'simple-icons:tripadvisor',
        details: null,
        response: review.owner_response.text
    }
}

const allReviews = computed(() => {
    // Normalize the data
    const normalizedGoogleReviews = googleReviewData.value.map(
        normalizeGoogleReview
    )
    const normalizedTripadvisorReviews = tripadvisorData.value.map(
        normalizeTripadvisorReview
    )

    // Merge the arrays
    const mergedReviews = normalizedGoogleReviews.concat(
        normalizedTripadvisorReviews
    )

    // Sort the merged array by date in descending order
    mergedReviews.sort((a, b) => b.date - a.date)

    // Return the sorted array
    return mergedReviews
})
</script>

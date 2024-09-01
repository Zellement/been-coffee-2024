<template>
    <div class="page pb-16">
        <div class="container container-px flex flex-col items-center py-8">
            <page-title title="Reviews" class="mb-4" />
            <!-- <h1 class="font-riverside text-3xl">Team</h1> -->
            <div class="flex flex-col items-center gap-4 text-center">
                <p class="">What's that old saying?</p>

                <p class="font-krete text-xl">
                    "Don't just take our word for it."
                </p>
                <p>
                    Here's some of our recent reviews from Google and
                    Tripadvisor.
                </p>
            </div>
        </div>
        <div class="container container-px flex flex-col gap-16">
            <reviews-google />
            <reviews-tripadvisor />
        </div>
    </div>
</template>

<script setup lang="ts">
useHead({
    title: 'Reviews',
    meta: [
        {
            hid: 'description',
            name: 'description',
            content: 'See our recent reviews from Google and Tripadvisor'
        }
    ]
})
</script>

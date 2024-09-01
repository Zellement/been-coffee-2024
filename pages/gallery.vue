<template>
    <div class="page pb-16">
        <div class="container container-px flex flex-col items-center py-8">
            <page-title title="Gallery" class="mb-4" />
            <!-- <h1 class="font-riverside text-3xl">Team</h1> -->
            <p>
                A collection of photos from our restaurant, our team, and our
                customers.
            </p>
        </div>
        <div class="container">
            <image-gallery />
        </div>
    </div>
</template>

<script setup lang="ts">
useHead({
    title: 'Gallery',
    meta: [
        {
            hid: 'description',
            name: 'description',
            content:
                'See a collection of photos from Been Coffee in Willington near Derby, UK'
        }
    ]
})
</script>

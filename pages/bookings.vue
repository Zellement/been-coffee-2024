<template>
    <div class="page pb-16">
        <div
            class="container container-px flex flex-col items-center py-8 text-center"
        >
            <page-title title="Bookings" class="mb-4" />
            <p>
                Complete the form below to request a table booking. We will get
                back to you as soon as possible.
            </p>
        </div>
        <div class="container container-px">
            <form-table-booking />
        </div>
    </div>
</template>

<script setup lang="ts">
useHead({
    title: 'Book a table',
    meta: [
        {
            id: 'description',
            name: 'description',
            content: 'Book a table at Been Coffee near Willington and Derby, UK'
        }
    ]
})
</script>

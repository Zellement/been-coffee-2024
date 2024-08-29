<template>
    <div class="page pb-16">
        <div class="container container-px flex flex-col items-center py-8">
            <page-title title="Order" class="mb-4" />
            <p>Order for collection below and save on delivery fees.</p>
            <p class="text-xs">
                Please note this is collection only - we unfortunately cannot
                offer delivery at this time.
            </p>
            <button class="btn mt-8" @click.prevent="toggleModalGoodeats">
                Open Ordering Window
            </button>
        </div>
        <modal-goodeats />
    </div>
</template>

<script setup lang="ts">
const uiStore = useUiStore()

const toggleModalGoodeats = () => {
    uiStore.toggleModalGoodeats()
}
useHead({
    title: 'Order for collection | Been Coffee',
    meta: [
        {
            hid: 'description',
            name: 'description',
            content:
                'Order for collection at Been Coffee near Willington and Derby, UK'
        }
    ]
})
</script>

<template>
    <div class="page pb-16">
        <div
            class="container container-px flex flex-col items-center py-8 text-center"
        >
            <page-title title="Menu" class="mb-4" />
            <p class="max-w-screen-sm text-center">
                Have a browse of what we have to offer, but please note this
                menu is not totally exhaustive, and we're often adding new and
                limited time menu items.
            </p>
        </div>

        <div class="container container-px container--md flex flex-col">
            <nuxt-picture
                v-for="i in images"
                :key="i"
                :src="`/img/menus/0${i}.png`"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
// const uiStore = useUiStore()

const images = 6

useHead({
    title: 'Menu',
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

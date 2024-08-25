<template>
    <div
        class="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
    >
        <div
            v-for="(image, index) in images"
            :key="index"
            :class="getMosaicClass(index)"
            class="relative"
        >
            <nuxt-picture
                :src="image"
                :alt="'Gallery image ' + (index + 1)"
                class="h-full w-full object-cover"
            />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const images = ref(
    Array.from({ length: 18 }, (_, i) => `/img/gallery/gallery${i + 1}.jpg`)
)

const getMosaicClass = (index) => {
    const classes = [
        'row-span-2 col-span-2',
        'row-span-1 col-span-1',
        'row-span-1 col-span-2',
        'row-span-2 col-span-1',
        'row-span-1 col-span-1',
        'row-span-2 col-span-2',
        'row-span-1 col-span-1',
        'row-span-1 col-span-2',
        'row-span-2 col-span-1',
        'row-span-1 col-span-1',
        'row-span-2 col-span-2',
        'row-span-1 col-span-1',
        'row-span-1 col-span-2',
        'row-span-2 col-span-1',
        'row-span-1 col-span-1',
        'row-span-2 col-span-2',
        'row-span-1 col-span-1',
        'row-span-1 col-span-2'
    ]
    return classes[index % classes.length]
}
</script>

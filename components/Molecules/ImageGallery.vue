<template>
    <div
        class="grid grid-cols-2 overflow-hidden sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
    >
        <div
            v-for="(image, index) in images"
            :key="index"
            :class="getMosaicClass(index)"
            class="relative hover:z-10 hover:scale-110 hover:transition-all"
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
        'sm:row-span-2 sm:col-span-2 col-span-full',
        'sm:row-span-1 sm:col-span-1 col-span-full',
        'sm:row-span-1 sm:col-span-2 col-span-full',
        'sm:row-span-2 sm:col-span-1 col-span-full',
        'sm:row-span-1 sm:col-span-1 col-span-full',
        'sm:row-span-2 sm:col-span-2 col-span-full',
        'sm:row-span-1 sm:col-span-1 col-span-full',
        'sm:row-span-1 sm:col-span-2 col-span-full',
        'sm:row-span-2 sm:col-span-1 col-span-full',
        'sm:row-span-1 sm:col-span-1 col-span-full',
        'sm:row-span-2 sm:col-span-2 col-span-full',
        'sm:row-span-1 sm:col-span-1 col-span-full',
        'sm:row-span-1 sm:col-span-2 col-span-full',
        'sm:row-span-2 sm:col-span-1 col-span-full',
        'sm:row-span-1 sm:col-span-1 col-span-full',
        'sm:row-span-2 sm:col-span-2 col-span-full',
        'sm:row-span-1 sm:col-span-1 col-span-full',
        'sm:row-span-1 sm:col-span- col-span-full2'
    ]
    return classes[index % classes.length]
}
</script>

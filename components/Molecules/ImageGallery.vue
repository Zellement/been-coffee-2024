<template>
    <div
        class="grid grid-cols-2 overflow-clip sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
    >
        <div
            v-for="(image, index) in images"
            :key="index"
            :class="getMosaicClass(index)"
            class="gallery-img-in"
        >
            <video
                v-if="image.endsWith('.mp4')"
                loop
                muted
                autoplay
                class="h-full w-full object-cover"
            >
                <source :src="image" type="video/mp4" />
            </video>
            <nuxt-picture
                v-else
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
    Array.from({ length: 22 }, (_, i) => {
        switch (i) {
            case 1:
                return '/img/gallery/gallery2.mp4'
            case 10:
                return '/img/gallery/gallery11.mp4'
            case 18:
                return '/img/gallery/gallery19.mp4'
            default:
                return `/img/gallery/gallery${i + 1}.jpg`
        }
    })
)

const getMosaicClass = (index) => {
    const classes = [
        'sm:row-span-2 sm:col-span-2 col-span-full',
        'sm:row-span-2 sm:col-span-2 col-span-full',
        'sm:row-span-1 sm:col-span-1 col-span-full',
        'sm:row-span-1 sm:col-span-1 col-span-full',
        'sm:row-span-2 sm:col-span-2 col-span-full',
        'sm:row-span-2 sm:col-span-2 col-span-full',
        'sm:row-span-1 sm:col-span-2 col-span-full',
        'sm:row-span-1 sm:col-span-1 col-span-full',
        'sm:row-span-2 sm:col-span-2 col-span-full',
        'sm:row-span-2 sm:col-span-2 col-span-full',
        'sm:row-span-2 sm:col-span-2 col-span-full',
        'sm:row-span-2 sm:col-span-2 col-span-full',
        'sm:row-span-1 sm:col-span-1 col-span-full',
        'sm:row-span-2 sm:col-span-2 col-span-full',
        'sm:row-span-2 sm:col-span-1 col-span-full',
        'sm:row-span-1 sm:col-span-1 col-span-full',
        'sm:row-span-2 sm:col-span-2 col-span-full',
        'sm:row-span-1 sm:col-span-2 col-span-full',
        'sm:row-span-2 sm:col-span-1 col-span-full',
        'sm:row-span-1 sm:col-span-1 col-span-full',
        'sm:row-span-2 sm:col-span-2 col-span-full',
        'sm:row-span-1 sm:col-span-1 col-span-full',
        'sm:row-span-1 sm:col-span- col-span-full2',
        'sm:row-span-2 sm:col-span-2 col-span-full'
    ]
    return classes[index % classes.length]
}
</script>

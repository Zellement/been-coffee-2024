<template>
    <div class="grid grid-cols-2 overflow-clip sm:grid-cols-6">
        <div
            v-for="(item, index) in media"
            :key="index"
            :class="getMosaicClass(index)"
        >
            <video
                v-if="item.endsWith('.mp4')"
                loop
                disablepictureinpicture
                muted
                playsinline
                autoplay
                class="h-full w-full object-cover"
            >
                <source :src="item" type="video/mp4" />
            </video>
            <single-picture
                v-else
                :img-data="{ url: item, alt: `Gallery item ${index + 1}` }"
                sizes="336px 2xs:425px xs:472px sm:560px lg:780px"
                quality="85"
                class="h-full w-full object-cover"
            />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const media = ref(
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
        'sm:row-span-1 sm:col-span-2 col-span-full',
        'sm:row-span-2 sm:col-span-2 col-span-full',
        'sm:row-span-2 sm:col-span-2 col-span-full',
        'sm:row-span-2 sm:col-span-2 col-span-full',
        'sm:row-span-2 sm:col-span-2 col-span-full',
        'sm:row-span-1 sm:col-span-1 col-span-full',
        'sm:row-span-2 sm:col-span-2 col-span-full',
        'sm:row-span-2 sm:col-span-1 col-span-full',
        'sm:row-span-2 sm:col-span-1 col-span-full',
        'sm:row-span-3 sm:col-span-2 col-span-full',
        'sm:row-span-1 sm:col-span-2 col-span-full',
        'sm:row-span-2 sm:col-span-1 col-span-full',
        'sm:row-span-2 sm:col-span-1 col-span-full',
        'sm:row-span-2 sm:col-span-2 col-span-full',
        'sm:row-span-1 sm:col-span-3 col-span-full',
        'sm:row-span-1 sm:col-span-2 col-span-full',
        'sm:row-span-2 sm:col-span-2 col-span-full'
    ]
    return classes[index % classes.length]
}
</script>

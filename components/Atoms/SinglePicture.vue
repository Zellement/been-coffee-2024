<template>
    <nuxt-picture
        class="transition-opacity duration-300"
        :src="imgData.url"
        :alt="imgData.alt"
        :class="pictureClasses"
        loading="lazy"
        @load="mediaLoaded"
    />
</template>

<script lang="ts" setup>
defineProps<{
    imgData: ImageTypes
}>()

interface State {
    mediaLoaded: boolean
}

const state: State = reactive({
    mediaLoaded: false
})

const mediaLoaded = (): void => {
    state.mediaLoaded = true
}

const pictureClasses: ComputedRef<string> = computed(() =>
    state.mediaLoaded ? 'opacity-100' : 'opacity-0'
)
</script>

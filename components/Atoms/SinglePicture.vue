<template>
    <div
        class="relative flex h-full w-full bg-gradient-to-br from-navy-500/10 dark:from-butterscotch-500/10"
    >
        <svg-icon
            name="ui/logo-been-small"
            class="absolute inset-0 m-auto h-12 w-12 animate-bounce opacity-30"
        />

        <nuxt-picture
            class="relative transition-opacity duration-300"
            :src="imgData.url"
            :alt="imgData.alt"
            :class="pictureClasses"
            :sizes="sizes"
            loading="lazy"
            @load="pictureHasLoaded"
        />
    </div>
</template>

<script lang="ts" setup>
interface Props {
    imgData: ImageTypes
    sizes: string
}
defineProps<Props>()

const mediaLoaded: Ref = ref(false)

const pictureHasLoaded = (): void => {
    mediaLoaded.value = true
}

const pictureClasses: ComputedRef<string> = computed(() =>
    mediaLoaded.value ? 'opacity-100' : 'opacity-0'
)

onMounted(() => {
    mediaLoaded.value = true
})
</script>

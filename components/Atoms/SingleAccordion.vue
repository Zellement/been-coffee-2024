<template>
    <div class="">
        <div class="relative flex w-full flex-col overflow-hidden pt-2">
            <button
                :id="buttonId"
                class="group relative flex w-full text-left"
                :aria-label="`Toggle the content of ${title}`"
                :aria-expanded="openFaq"
                :aria-controls="contentId"
                @click.prevent="toggleAccordion"
            >
                <div
                    :class="[
                        'relative flex w-full flex-row items-center gap-4 pb-1',
                        `after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-current after:opacity-20 after:content-['']`
                    ]"
                >
                    <span class="flex w-full flex-col items-center gap-1">
                        <span class="self-start font-krete transition-all">
                            {{ title }}
                        </span>
                        <span class="h-0.5 w-full flex-grow"></span>
                    </span>
                    <Icon
                        name="ci:chevron-big-right"
                        class="size-4 flex-shrink-0 transition-transform"
                        :class="arrowClasses"
                    />
                </div>
            </button>

            <div
                :id="contentId"
                class="accordion"
                role="region"
                :aria-labelledby="buttonId"
                :class="accordionClasses"
            >
                <div ref="slotData" class="accordion-content">
                    <div class="relative pb-4 pt-8 text-base">
                        <slot />
                        <nuxt-link
                            v-if="props.link"
                            :to="props.link"
                            class="btn mt-4 inline-flex"
                            target="_blank"
                        >
                            {{ props.linkTitle }}
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
/**
 * State, refs & props
 */
interface Props {
    title: string
    link?: string
    linkTitle?: string
}

const props = defineProps<Props>()
const emit = defineEmits<{
    (e: 'open'): void
}>()

const slotData = ref<HTMLElement>()
const openFaq: Ref<boolean> = ref(false)

/**
 * Computed
 */
const arrowClasses: ComputedRef<string> = computed(() => {
    return openFaq.value ? 'rotate-90' : 'rotate-0'
})

const accordionClasses: ComputedRef<string> = computed(() => {
    return openFaq.value ? 'expanded' : ''
})

const id = useId()

const buttonId: ComputedRef<string> = computed(() => {
    return `header-${id}`
})

const contentId: ComputedRef<string> = computed(() => {
    return `content-${id}`
})

/**
 * Methods
 */

const toggleAccordion = (): void => {
    openFaq.value = !openFaq.value
    if (!openFaq.value) return
    emit('open')
}
</script>

<style lang="scss" scoped>
.accordion {
    display: grid;
    grid-template-rows: 0fr;
    overflow: hidden;
    transition: grid-template-rows 700ms;
}
.accordion-content {
    min-height: 0;
    transition: visibility 700ms;
    visibility: hidden;
}
.accordion.expanded {
    grid-template-rows: 1fr;
}
.accordion.expanded .accordion-content {
    visibility: visible;
}
</style>

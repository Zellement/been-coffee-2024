<template>
    <div
        class="container container-px flex flex-col items-center gap-8 text-center xl:grid xl:grid-cols-2 xl:gap-16"
    >
        <!-- <h3 class="h3 font-krete">Est. 2021</h3> -->
        <p class="mx-auto max-w-screen-sm xl:text-right">
            Award-winning, independent, environmentally-friendly, coffee-loving
            and dog-friendly, Been Coffee serves specialty coffee, loose-leaf
            tea, locally sourced food and more, all hand-crafted in a genuinely
            welcoming environment.
        </p>
        <div class="grid items-center gap-8 text-left">
            <ul class="sm:columns sm:columns-2">
                <li
                    v-for="weAreItem in weAre"
                    :key="weAreItem.icon"
                    class="mb-2 flex break-inside-avoid flex-row items-start gap-2"
                >
                    <span
                        class="flex h-7 w-7 rounded-full border border-butterscotch-500 p-1"
                    >
                        <Icon :name="weAreItem.icon" class="m-auto w-4" />
                    </span>
                    {{ weAreItem.text }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>
type WeAre = { icon: string; text: string }[]

const weAre: WeAre = [
    {
        icon: 'tabler:award-filled',
        text: 'Award-winning'
    },
    {
        icon: 'streamline:fist-solid',
        text: 'Independent'
    },
    {
        icon: 'bi:globe-europe-africa',
        text: 'Environmentally friendly'
    },
    {
        icon: 'game-icons:star-formation',
        text: 'Top rated'
    },
    {
        icon: 'material-symbols:door-open',
        text: 'Open 364 days per year'
    },
    {
        icon: 'material-symbols:sound-detection-dog-barking',
        text: 'Dog-friendly'
    },
    {
        icon: 'mdi:car-hatchback',
        text: 'Ample parking'
    },
    {
        icon: 'ph:wifi-high-light',
        text: 'Free WiFi'
    }
]
</script>

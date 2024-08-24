<template>
    <div class="page">
        <hero-index />
        <indy-and-award-winning
            class="container container-px grid-layout my-16"
        />
        <div
            class="container container-px flex flex-col gap-8 text-center xl:grid xl:grid-cols-2 xl:gap-16"
        >
            <!-- <h3 class="h3 font-krete">Est. 2021</h3> -->
            <p class="mx-auto max-w-screen-sm xl:text-right">
                Award-winning, independent, environmentally-friendly,
                coffee-loving and dog-friendly, Been Coffee serves specialty
                coffee, loose-leaf tea, locally sourced food and more, all
                hand-crafted in a genuinely welcoming environment.
            </p>
            <div class="grid grid-cols-2 gap-8 text-left">
                <h3
                    class="h4 text-right font-krete text-butterscotch-500 xl:text-center"
                >
                    <nuxt-link class="custom-link" to="/about"
                        >We are...</nuxt-link
                    >
                </h3>
                <ul class="flex flex-col gap-2">
                    <li class="flex flex-row items-center gap-2">
                        <span
                            class="flex h-8 w-8 rounded-full border border-butterscotch-500 p-1"
                        >
                            <Icon
                                name="material-symbols:sound-detection-dog-barking"
                                class="m-auto w-5"
                            />
                        </span>
                        Dog friendly
                    </li>
                    <li class="flex flex-row items-center gap-2">
                        <span
                            class="flex h-8 w-8 rounded-full border border-butterscotch-500 p-1"
                        >
                            <Icon
                                name="streamline:fist-solid"
                                class="m-auto w-4"
                            />
                        </span>
                        Fully independent
                    </li>
                    <li class="flex flex-row items-center gap-2">
                        <span
                            class="flex h-8 w-8 rounded-full border border-butterscotch-500 p-1"
                        >
                            <Icon
                                name="material-symbols:door-open"
                                class="m-auto w-5"
                            />
                        </span>
                        Open 364 days a year
                    </li>
                </ul>
            </div>
        </div>
        <awards-won class="mt-16" />
    </div>
</template>

<script setup lang="ts"></script>

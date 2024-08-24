<template>
    <div class="page">
        <hero-index />
        <double-title
            class="container container-px grid-layout mb-8 mt-12 xl:my-16"
            left="Award winning."
            right="Fully independent."
        />
        <intro-index />
        <awards-won class="mt-16" />
        <double-title
            class="container container-px container--md grid-layout mt-8 xl:mt-16"
            left="Bagels, bacon"
            right="& brownies."
        />
        <div class="container container-px container--sm text-center">
            <p>
                We offer a variety of both food and drink options, including
                thick cut butcher bacon &amp; Philadelphia bagels, award-winning
                sausage cobs, ham &amp; cheese paninis, handmade sausage rolls
                and traditional scotch eggs.
            </p>
        </div>
        <div class="my-16 grid grid-cols-2 gap-2 lg:grid-cols-4">
            <div
                v-for="(item, index) in media"
                :key="index"
                :class="['relative', item.class]"
            >
                <nuxt-picture :src="item.src" :alt="item.alt" />
                <span
                    class="absolute bottom-0 right-2 font-krete text-[12px] text-white"
                >
                    {{ item.caption }}
                </span>
            </div>
        </div>
        <div class="container container-px text-center">
            <ul
                class="my-8 grid grid-cols-1 items-center justify-center gap-2 font-krete text-lg text-butterscotch-500 lg:grid-cols-2"
            >
                <li class="mx-auto flex flex-row items-center gap-2">
                    <Icon
                        name="streamline:food-wheat-cook-plant-bread-gluten-grain-cooking-nutrition-food-wheat"
                    />
                    Low-gluten options
                </li>
                <li class="mx-auto flex flex-row items-center gap-2">
                    <Icon name="lucide:vegan" /> Vegan friendly
                </li>
            </ul>
            <p class="mx-auto max-w-screen-sm">
                We've spent countless hours searching for excellent vegan and
                low-gluten options that we're now proud to offer to you,
                including many cakes, all our bagels come as low-gluten options
                and we have a handmade vegan sausage roll.
            </p>
        </div>
        <div class="container my-16 flex w-full flex-col gap-8">
            <div
                class="flex flex-wrap items-center justify-center space-x-4 space-y-1 text-center text-[8vw]/[8vw] md:text-[4vw]/[4vw]"
            >
                <h3
                    v-for="(item, index) in menuItems"
                    :key="item + index"
                    class="font-riverside-outline"
                    :class="getRandomColor()"
                >
                    {{ item }}
                </h3>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const menuItems = ref([
    'Bagels',
    'Paninis',
    'Cobs',
    'Sausage',
    'Bacon',
    'Egg',
    'Vegan Sausage',
    'Handmade Sausage Rolls',
    'Traditional Scotch Eggs',
    'Cinnamon Buns',
    'Cookies',
    'Cakes & Flapjacks',
    'Porridge',
    'Toast',
    'Teacakes',
    'Croissants',
    'Flat White',
    'Long Black',
    'Latte',
    'Americano',
    'Cappuccino',
    'Iced Coffee',
    'Tea',
    'Chai',
    'Matcha',
    'Turmeric',
    'Iced & Bubble Tea',
    'Juice',
    'Pop',
    'Milkshakes',
    'Smoothies'
])

const media = ref([
    {
        src: '/img/food/pizza-bagel.jpg',
        alt: 'Pizza bagel',
        caption: 'Margherita pizza bagel',
        class: '-rotate-3'
    },
    {
        src: '/img/food/monster.jpg',
        alt: 'The Monster cob',
        caption: 'The Monster cob',
        class: '-translate-y-4 rotate-3'
    },
    {
        src: '/img/food/smoked-salmon.jpg',
        alt: 'Smoked salmon',
        caption: 'Smoked salmon bagel',
        class: '-rotate-1'
    },
    {
        src: '/img/food/bacon-philly.jpg',
        alt: 'Bacon & Philly',
        caption: 'Bacon & Philly bagel',
        class: '-translate-y-4 rotate-2'
    }
])
let lastColor = ''

const colors = ref([
    'text-tuscany-500',
    'text-butterscotch-500',
    'text-current'
])

const getRandomColor = () => {
    let randomColor
    do {
        const randomIndex = Math.floor(Math.random() * colors.value.length)
        randomColor = colors.value[randomIndex]
    } while (randomColor === lastColor)
    lastColor = randomColor
    return randomColor
}
</script>

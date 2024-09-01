<template>
    <nav v-if="navigation" class="site-nav">
        <ul class="my-auto lg:mr-4" :class="ulClasses">
            <li
                v-for="navItem in navigation"
                :key="navItem.key"
                class="group relative"
            >
                <nuxt-link
                    :to="navItem.url"
                    class="mr-4"
                    @click="uiStore.toggleMobileNav(false)"
                >
                    {{ navItem.label }}
                </nuxt-link>
                <span
                    aria-hidden="true"
                    class="absolute right-0 top-1/2 hidden h-1 w-1 -translate-y-1/2 bg-tuscany xl:block"
                />
            </li>
            <li>
                <button class="faux-link" @click.prevent="scrollToFooter">
                    Find us
                </button>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts" setup>
import { useUiStore } from '@/stores/ui'
const uiStore = useUiStore()

defineProps<{
    ulClasses?: string
}>()

const navigation: NavItem[] = [
    {
        key: 'about',
        label: 'About',
        url: '/'
    },
    {
        key: 'order',
        label: 'Order Online',
        url: '/order'
    },
    {
        key: 'reviews',
        label: 'Reviews',
        url: '/reviews'
    },
    // {
    //     key: 'find-us',
    //     label: 'Find Us',
    //     url: '/where'
    // },
    {
        key: 'team',
        label: 'Team',
        url: '/team'
    },
    {
        key: 'bookings',
        label: 'Bookings',
        url: '/bookings'
    },
    {
        key: 'gallery',
        label: 'Gallery',
        url: '/gallery'
    },
    {
        key: 'contact',
        label: 'Contact',
        url: '/contact'
    }
]

const siteFooterDiv: Ref<null | HTMLElement> = ref(null)
const scrollToFooter = () => {
    uiStore.toggleMobileNav(false)
    if (siteFooterDiv.value) {
        siteFooterDiv.value.scrollIntoView({ behavior: 'smooth' })
    }
}

onMounted(() => {
    const footer = document.getElementById('site-footer')
    siteFooterDiv.value = footer
})
</script>

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
                    class="leading-none"
                    @click="uiStore.toggleMobileNav(false)"
                >
                    {{ navItem.label }}
                </nuxt-link>
            </li>
            <li>
                <button
                    @click="uiStore.toggleMobileNav(false)"
                    @click.prevent="scrollToFooter"
                >
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
    if (siteFooterDiv.value) {
        siteFooterDiv.value.scrollIntoView({ behavior: 'smooth' })
    }
}

onMounted(() => {
    const footer = document.getElementById('site-footer')
    siteFooterDiv.value = footer
})
</script>

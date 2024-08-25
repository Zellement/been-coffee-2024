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
                <!-- <ul
                    v-if="navItem.subItems && navItem.subItems.length > 0"
                    class="z-10 flex flex-col bg-gray-100 p-4 lg:absolute lg:right-0 lg:top-full lg:z-20 lg:hidden lg:w-[300px] lg:text-right lg:group-hover:block"
                >
                    <li
                        v-for="subItem in navItem.subItems"
                        :key="subItem.key"
                        class="ml-4 lg:m-0"
                    >
                        <nuxt-link
                            :to="subItem.url"
                            @click="uiStore.toggleMobileNav(false)"
                        >
                            {{ subItem.label }}
                        </nuxt-link>
                    </li>
                </ul> -->
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
        key: 'find-us',
        label: 'Find Us',
        url: '/where'
    },
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
</script>

import { defineNuxtConfig } from 'nuxt/config'
import eslintVitePlugin from 'vite-plugin-eslint'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    // Fix for issue - https://github.com/nuxt-modules/tailwindcss/issues/480
    devServerHandlers: [],

    modules: [
        '@nuxt/image',
        '@pinia/nuxt',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/svg-sprite',
        '@nuxtjs/color-mode',
        '@nuxtjs/sanity',
        '@nuxt/icon',
        '@nuxtjs/supabase',
        '@nuxtjs/seo',
        'nuxt-gtag'
    ],

    image: {
        sanity: {
            projectId: 'mxklvbih'
        }
    },

    routeRules: {
        '/_icons': { robots: false }
    },

    gtag: {
        id: 'G-CVLJZSC9E6'
    },

    colorMode: {
        classSuffix: ''
    },

    supabase: {
        redirect: false
    },

    sanity: {
        projectId: 'mxklvbih'
    },

    svgSprite: {
        input: '~/assets/icons/svg',
        output: '~/assets/icons/sprites'
    },

    tailwindcss: {
        cssPath: '~/assets/scss/app.scss'
    },

    css: ['@/assets/scss/app.scss'],

    site: {
        url: 'https://www.been.coffee',
        name: 'Been Coffee',
        description:
            'Been Coffee is an independent, award-winning coffee shop with amazing coffee, tea, bubble tea, boba tea, cakes, bagels, cobs & paninis near Derby & Willington, UK',
        defaultLocale: 'en',
        trailingSlash: false
    },

    ogImage: { enabled: false },

    components: [
        {
            path: '~/components',
            pathPrefix: false
        }
    ],

    // Allows for local testing on devices
    devServer: {
        port: 3000, // default: 3000
        host: '0.0.0.0' // default: localhost
    },

    app: {
        head: {
            htmlAttrs: {
                lang: 'en'
            },
            meta: [
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1'
                },
                { hid: 'og-type', property: 'og:type', content: 'website' }
            ],
            link: [
                {
                    rel: 'icon',
                    type: 'image/x-icon',
                    href: '/favicon.png'
                }
            ],
            script: [
                {
                    src: 'https://consent.cookiebot.com/uc.js?cbid=a6734070-cc0f-4a9f-9db5-b776c6117cc5'
                },
                {
                    src: 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js'
                }
            ]
        },
        pageTransition: { name: 'page', mode: 'out-in' }
    },

    vite: {
        plugins: [
            eslintVitePlugin({
                fix: true,
                include: ['./**/*.vue', './**/*.ts', './**/*.js']
            })
        ]
    },

    typescript: {
        typeCheck: true,
        strict: true,
        tsConfig: {
            compilerOptions: {
                strict: true
            },
            include: [
                '@pinia/nuxt',
                '@types/node',
                '@nuxt/image',
                '@nuxt/types',
                '**/*.d.ts'
            ]
        }
    },

    compatibilityDate: '2024-07-27'
})

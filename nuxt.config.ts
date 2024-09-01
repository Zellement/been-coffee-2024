import { defineNuxtConfig } from 'nuxt/config'
import eslintVitePlugin from 'vite-plugin-eslint'
import { fileURLToPath } from 'url'

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
        '@nuxtjs/seo'
    ],

    routeRules: {
        '/_icons': { robots: false }
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

    // image: {
    //     provider: 'contentful',
    //     contentful: {}
    // },

    css: ['@/assets/scss/app.scss'],

    // Use with: nuxt-simple-sitemap
    // site: {
    //     url: process.env.WEBSITE_URL
    // },
    // sitemap: {
    //     sources: [
    //         '/api/sitemap/urls'
    //     ]
    // },

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

    alias: {
        '@blocks': fileURLToPath(
            new URL(
                './components/Organisms/_ModularContentBlocks/',
                import.meta.url
            )
        )
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
                    src: 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js'
                }
            ]
        },
        pageTransition: { name: 'page', mode: 'out-in' }
    },

    // runtimeConfig: {
    //     sanity: {
    //         token: process.env.SANITY_API
    //     },
    //     public: {
    //         WEBSITE_URL: process.env.WEBSITE_URL,
    //         MARKER_ID: process.env.MARKER_ID,
    //         MARKER_ENABLED: process.env.MARKER_ENABLED,
    //         COOKIE_YES_ID: process.env.COOKIE_YES_ID
    //     }
    // },

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

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
        "@nuxt/icon"
    ],

    colorMode: {
        classSuffix: ''
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
                {
                    name: 'description',
                    content: 'something'
                },
                { hid: 'og-type', property: 'og:type', content: 'website' }
            ],
            link: [
                {
                    rel: 'icon',
                    type: 'image/x-icon',
                    href: '/favicon.png'
                }
            ]
        },
        pageTransition: { name: 'page', mode: 'out-in' }
    },

    runtimeConfig: {
        public: {}
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
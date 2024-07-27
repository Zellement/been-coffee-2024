import { Vue3Mq } from 'vue3-mq'
import type { Breakpoints } from 'vue3-mq'

export default defineNuxtPlugin((nuxtApp) => {
    const breakpoints: Breakpoints = {
        initial: 0,
        xxs: 320,
        xs: 400,
        sm: 480,
        md: 720,
        lg: 1024,
        xl: 1280,
        xxl: 1440,
        xxxl: 1920
    }
    nuxtApp.vueApp.use(Vue3Mq, {
        breakpoints
    })
})

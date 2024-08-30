import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageAsset } from '@/types/sanity.types'

export default defineNuxtPlugin(() => {
    const sanity = useSanity()
    const builder = imageUrlBuilder(sanity.config as any)
    function urlFor(source: SanityImageAsset) {
        return builder.image(source).auto('format')
    }
    return {
        provide: { urlFor }
    }
})

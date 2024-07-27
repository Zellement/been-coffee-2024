import KitchenSink from '@blocks/KitchenSink.vue'
import PlaceholderComponent from '@blocks/PlaceholderComponent.vue'
import type { RetrieveComponent } from '~/composables/useModularContentUtils'

export const useModularContentUtils = (): {
    retrieveComponent: RetrieveComponent
} => {
    const retrieveComponent: RetrieveComponent = {
        PlaceholderComponent: {
            component: PlaceholderComponent,
            clientOnly: false
        },
        KitchenSink: {
            component: KitchenSink,
            clientOnly: false
        }
    }
    return {
        retrieveComponent
    }
}

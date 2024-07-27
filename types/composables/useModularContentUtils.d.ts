declare module '~/composables/useModularContentUtils' {
    interface ComponentInfo {
        component: Component
        clientOnly: boolean
    }

    interface RetrieveComponent {
        [key: string]: ComponentInfo
        PlaceholderComponent: ComponentInfo
        KitchenSink: ComponentInfo
    }

    export const useModularContentUtils: () => {
        retrieveComponent: RetrieveComponent
    }
}

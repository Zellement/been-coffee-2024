<template>
    <div class="page pb-16">
        <div
            class="container container-px flex flex-col items-center py-8 text-center"
        >
            <page-title title="Events" class="mb-4" />
            <p>Find out about upcoming events at Been Coffee.</p>
        </div>
        <div class="container container-px grid gap-16 lg:grid-cols-2">
            <div v-for="event in events" :key="event.title" class="">
                <div class="mb-4 flex flex-col gap-8 text-center">
                    <h2 class="font-riverside text-lg">
                        {{ event.title }}
                    </h2>
                    <single-picture
                        :img-data="{
                            url: `/img/events/${event.img}`,
                            alt: event.title
                        }"
                    />
                    <ul class="flex flex-col gap-1">
                        <li v-for="date in event.dates" :key="date">
                            {{ date }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
useHead({
    title: 'Events',
    meta: [
        {
            hid: 'description',
            name: 'description',
            content: 'Find out about upcoming events at Been Coffee.'
        }
    ]
})

type Event = {
    title: string
    dates: string[]
    img: string
}

const events: Event[] = [
    {
        title: 'Creative Writing Group',
        img: 'cwg.jpg',
        dates: [
            '13/01/2025',
            '10/02/2025',
            '10/03/2025',
            '14/04/2025',
            '12/05/2025',
            '09/06/2025'
        ]
    },
    {
        title: 'Been Networking',
        img: 'beennetworking.jpg',
        dates: [
            '07/01/2025',
            '04/02/2025',
            '04/03/2025',
            '01/04/2025',
            '06/05/2025',
            '04/06/2025'
        ]
    }
]
</script>

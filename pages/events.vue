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
                    <div class="flex flex-col justify-center">
                        <h2 class="font-riverside text-lg">
                            {{ event.title }}
                        </h2>
                        <p class="text-xs">
                            {{ event.frequency }} | {{ event.time }}
                        </p>
                    </div>
                    <single-picture
                        :img-data="{
                            url: `/img/events/${event.img}`,
                            alt: event.title
                        }"
                    />
                    <!-- <ul class="flex flex-col gap-1">
                        <li v-for="date in event.dates" :key="date">
                            {{ date }}
                        </li>
                    </ul> -->
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
    frequency: string
    time: string
    img: string
}

const events: Event[] = [
    {
        title: 'Been Networking',
        img: 'beennetworking.jpg',
        time: '16:00 - 18:00',
        frequency: '1st Tuesday of the month',
        dates: [
            '07/01/2025',
            '04/02/2025',
            '04/03/2025',
            '01/04/2025',
            '06/05/2025',
            '04/06/2025'
        ]
    },
    {
        title: 'Creative Writing Group',
        img: 'cwg.jpg',
        time: '17:30 - 19:00',
        frequency: '2nd Monday of the month',
        dates: [
            '13/01/2025',
            '10/02/2025',
            '10/03/2025',
            '14/04/2025',
            '12/05/2025',
            '09/06/2025'
        ]
    }
]
</script>

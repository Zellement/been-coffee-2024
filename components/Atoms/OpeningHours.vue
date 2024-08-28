<template>
    <div class="">
        <ul class="flex flex-col">
            <li
                v-for="day in openingHours"
                :key="day.day"
                class="grid grid-cols-2"
            >
                <span>{{ day.day }}</span>
                <span>{{ day.hours }}</span>
            </li>
        </ul>
    </div>
</template>

<script setup>
const openingHours = ref([
    {
        day: 'Monday',
        hours: '7:00am - 5:30pm'
    },
    {
        day: 'Tuesday',
        hours: '7:00am - 5:30pm'
    },
    {
        day: 'Wednesday',
        hours: '7:00am - 5:30pm'
    },
    {
        day: 'Thursday',
        hours: '7:00am - 5:30pm'
    },
    {
        day: 'Friday',
        hours: '7:00am - 5:30pm'
    },
    {
        day: 'Saturday',
        hours: '7:30am - 5:30pm'
    },
    {
        day: 'Sunday',
        hours: '7:30am - 5:30pm'
    }
])
</script>

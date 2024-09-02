<template>
    <div class="page pb-16">
        <div
            class="container container-px flex flex-col items-center py-8 text-center"
        >
            <page-title title="Team" class="mb-4" />
            <p>
                Meet the outstanding team behind the scenes at the company, in a
                totally random order each time.
            </p>
        </div>
        <div class="container">
            <team-members />
        </div>
    </div>
</template>

<script setup lang="ts">
useHead({
    title: 'Meet the team',
    meta: [
        {
            hid: 'description',
            name: 'description',
            content:
                'Meet the team behind Been Coffee in Willington near Derby, UK'
        }
    ]
})
</script>

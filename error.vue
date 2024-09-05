<template>
    <div class="page pb-16">
        <div
            class="container container-px flex flex-col items-center py-8 text-center"
        >
            <page-title title="Sorry!" class="mb-4" />

            <p>There was an error loading this page.</p>
            <nuxt-link class="btn mt-8" to="/"
                >Go back to the home page</nuxt-link
            >
        </div>
    </div>
</template>

<script setup lang="ts">
useHead({
    title: 'Sorry!'
})
</script>

<template>
    <div class="page pb-16">
        <div
            class="container container-px flex flex-col items-center py-8 text-center"
        >
            <page-title title="Contact" class="mb-4" />
            <p class="mb-4">
                Reach out to us for any questions, feedback or suggestions. We
                are always happy to hear from you.
            </p>
            <p>
                Have you had a look at
                <nuxt-link class="underline" to="/faqs">our FAQs</nuxt-link> to
                see if your question has already been answered?
            </p>
        </div>
        <div class="container container-px">
            <form-contact />
        </div>
    </div>
</template>

<script setup lang="ts">
useHead({
    title: 'Contact us',
    meta: [
        {
            id: 'description',
            name: 'description',
            content: 'Get in touch with us'
        }
    ]
})
</script>

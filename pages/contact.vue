<template>
    <div class="page pb-16">
        <div class="container container-px flex flex-col items-center py-8">
            <page-title title="Contact" class="mb-4" />
            <p>
                Reach out to us for any questions, feedback or suggestions. We
                are always happy to hear from you.
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
            hid: 'description',
            name: 'description',
            content: 'Get in touch with us'
        }
    ]
})
</script>

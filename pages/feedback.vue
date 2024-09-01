<template>
    <div class="page pb-16">
        <div class="container container-px flex flex-col items-center py-8">
            <page-title title="Feedback" class="mb-4" />
            <p>
                Please complete the form below to send anonymous feedback. We
                appreciate your feedback and will use it to evaluate changes and
                make improvements.
            </p>
        </div>
        <div class="container container-px">
            <form-feedback />
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

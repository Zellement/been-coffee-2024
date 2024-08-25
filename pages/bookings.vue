<template>
    <div class="page pb-16">
        <div class="container container-px flex flex-col items-center py-8">
            <page-title title="Bookings" class="mb-4" />
            <!-- <h1 class="font-riverside text-3xl">Team</h1> -->
            <p>
                Complete the form below to request a booking. We will get back
                to you as soon as possible.
            </p>
        </div>
        <form
            name="Website Booking Form"
            method="post"
            action="/success"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
        >
            <input type="text" name="name" placeholder="Name" required />
            <input
                type="hidden"
                name="form-name"
                value="Website Contact Form"
            />
            <p hidden>
                <label>Don’t fill this out: <input name="bot-field" /></label>
            </p>

            <!-- Add your form inputs here -->
        </form>
    </div>
</template>

<script setup lang="ts"></script>

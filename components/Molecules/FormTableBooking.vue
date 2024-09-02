<template>
    <div class="mx-auto max-w-screen-xs">
        <form
            :class="hasFormSent"
            class="flex flex-col gap-2"
            @submit.prevent="submitForm"
        >
            <label>
                <span class="font-krete text-[11px]">Name *</span>
                <input
                    v-model="name"
                    type="text"
                    placeholder="Your name"
                    required
                />
            </label>
            <label>
                <span class="font-krete text-[11px]">Email *</span>
                <input
                    v-model="email"
                    type="email"
                    placeholder="Your email"
                    required
                />
            </label>
            <label>
                <span class="font-krete text-[11px]">Date &amp; time *</span>
                <input v-model="date" type="datetime-local" required />
            </label>
            <label>
                <span class="font-krete text-[11px]">Number of people *</span>
                <input v-model="people" type="number" required />
            </label>
            <label>
                <span class="font-krete text-[11px]">More information *</span>
                <textarea
                    v-model="message"
                    placeholder="Your message"
                    required
                    class="h-40"
                ></textarea>
            </label>
            <button class="btn mt-4 self-end" type="submit">Submit</button>
        </form>
        <div v-if="sending" ref="isSending" class="my-8">
            Please wait, we are sending your reservation request...
        </div>
        <div
            v-if="success"
            ref="completeMessage"
            class="mt-8 scroll-m-8 rounded bg-green-700 px-2 py-1 text-white"
        >
            <p class="text-center">
                Thank you for your reservation request! We'll be in touch as
                soon as possible!
            </p>
        </div>
    </div>
</template>

<script setup>
const name = ref('')
const email = ref('')
const date = ref('')
const people = ref('')
const message = ref('')
const endpoint = 'https://formspree.io/f/xnnalyjq'

const sending = ref(false)
const success = ref(false)

const isSending = ref()
const completeMessage = ref()

const hasFormSent = computed(() => {
    return success.value ? 'opacity-50 pointer-events-none' : ''
})

const submitForm = async () => {
    const data = {
        name: name.value,
        email: email.value,
        date: date.value,
        people: people.value,
        message: message.value
    }
    try {
        sending.value = true
        const { data: response, error } = await useFetch(endpoint, {
            method: 'POST',
            body: data,
            headers: {
                Accept: 'application/json'
            }
        })
        if (error.value) {
            sending.value = false
            console.error(error.value)
        } else {
            sending.value = false
            success.value = true
            nextTick(() => {
                completeMessage.value.scrollIntoView()
            })
            console.log(response.value)
        }
    } catch (error) {
        console.error(error)
    }
}
</script>

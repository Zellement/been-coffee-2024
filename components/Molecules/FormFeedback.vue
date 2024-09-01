<template>
    <div class="mx-auto max-w-screen-xs">
        <form
            :class="hasFormSent"
            class="flex flex-col gap-2"
            @submit.prevent="submitForm"
        >
            <label>
                <span class="font-krete text-[11px]">Your message *</span>
                <textarea
                    v-model="message"
                    placeholder="What would you like to tell us?"
                    required
                    class="h-40"
                ></textarea>
            </label>
            <button class="btn mt-4 self-end" type="submit">Submit</button>
        </form>
        <div v-if="sending" ref="isSending" class="my-8">
            Please wait, we are sending your form...
        </div>
        <div
            v-if="success"
            ref="completeMessage"
            class="mt-8 scroll-m-20 rounded bg-green-700 px-2 py-1 text-white"
        >
            <p class="text-center">Thank you for your feedback!</p>
        </div>
    </div>
</template>

<script setup>
const message = ref('')
const endpoint = 'https://formspree.io/f/xnnaranp'

const sending = ref(false)
const success = ref(false)

const isSending = ref()
const completeMessage = ref()

const hasFormSent = computed(() => {
    return success.value ? 'opacity-50 pointer-events-none' : ''
})

const submitForm = async () => {
    const data = {
        email: email.value,
        message: message.value,
        name: name.value
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

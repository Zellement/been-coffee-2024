<template>
    <div class="page pb-16">
        <div
            class="container container-px flex flex-col items-center py-8 text-center"
        >
            <page-title title="FAQs" class="mb-4" />
            <p class="max-w-screen-sm text-center">
                Some of our frequently asked questions are answered below.
            </p>

            <div class="mt-8 flex max-w-screen-md flex-col text-left">
                <single-accordion
                    v-for="(faq, index) in faqs"
                    :key="index"
                    class="mb-8 last:mb-0"
                    :title="faq.question"
                    :link="faq.link"
                    :link-title="faq.linkTitle"
                    :link-new-tab="faq.linkNewTab"
                >
                    <p class="mt-2">{{ faq.answer }}</p>
                </single-accordion>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
useHead({
    title: 'FAQs',
    meta: [
        {
            id: 'description',
            name: 'description',
            content: 'Read our frequently asked questions.'
        }
    ]
})

const faqs = ref([
    {
        question: 'Do you allow dogs?',
        answer: 'Absolutely! We love well-behaved and calm dogs, bring them in but please be considerate of other customers.'
    },
    {
        question: 'Do you do gift cards?',
        answer: 'We do. You can pick up a Been Coffee & Cake gift card - come in and ask one of our friendly staff.'
    },
    {
        question: 'How about loyalty cards?',
        answer: 'We offer both digital and physical loyalty cards. Ask one of our friendly staff for more information.',
        linkTitle: 'Download the Magic Stamp App',
        link: 'https://linktr.ee/beencoffeeuk',
        linkNewTab: true
    },
    {
        question: 'Can I book a table?',
        answer: 'Yes! Visit our Book a Table page to send a request.',
        linkTitle: 'Book a Table',
        link: '/bookings'
    },
    {
        question: 'Can I order online?',
        answer: 'Yes! To order for collection only, click the "Order Online" button at the top of the page. To order for delivery, please visit our delivery partners; Just Eat or Deliveroo.'
    },
    {
        question: 'Do you have high chairs?',
        answer: 'We have two highchairs available for use.'
    },
    {
        question: 'Do you have a baby changer?',
        answer: "We do, however please be advised these are used at customer's own risk."
    },
    {
        question: 'Can I bring my laptop and work from the shop?',
        answer: "We're happy for you to work from the shop, but please be considerate of other customers, seating availability and our small business."
    },
    {
        question: 'Is your WiFi free and how good is it?',
        answer: "Our WiFi is indeed free, and we use Starlink satellite internet, so it's pretty darn good, regularly reaching 350mbps (depending on usage). Check the notice board for the password."
    },
    {
        question: 'Do you have any jobs going?',
        answer: 'Best place to  find this out is on our Linktree where we add our latest vacancies.',
        linkTitle: 'Linktree',
        link: 'https://linktr.ee/beencoffeeuk',
        linkNewTab: true
    }
])
</script>

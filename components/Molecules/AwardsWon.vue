<template>
    <ul v-if="hasAwards" class="container container-px flex flex-row flex-wrap">
        <li
            v-for="award in allAwards"
            :key="award._id"
            class="min-w-26 flex flex-shrink-0 basis-1/3 flex-col items-center gap-2 p-4 xl:flex-1"
        >
            <div class="reveal-from-sides flex-shrink-0">
                <SanityImage
                    v-if="award.logo?.asset"
                    :asset-id="`${award?.logo?.asset._ref}`"
                    auto="format"
                    h="80"
                    w="80"
                    fit="fillmax"
                    class="flex-shrink-0"
                />
            </div>
            <div class="flex flex-col items-center gap-1">
                <span
                    class="text-center font-krete text-[11px]/[11px] tracking-wider"
                >
                    {{ award.shortName }}
                </span>
                <span
                    class="text-[9px]/[9px] uppercase tracking-wider opacity-70"
                >
                    {{ award.date.slice(0, 4) }}
                </span>
            </div>
        </li>
    </ul>
</template>

<script lang="ts" setup>
const allAwards: Ref<null | AwardExtend[]> = ref(null)
const hasAwards = computed(
    () => allAwards.value !== null && allAwards.value.length > 0
)
const fetchAwards = async () => {
    const sanity = useSanity()

    const query = `*[_type == "award"]|order(date desc){
    _id,
    name,
    shortName,
    logo,
    date
    }`

    try {
        const data = await sanity.fetch(query)
        allAwards.value = data
    } catch (error) {
        console.error('Failed to fetch data:', error)
        throw error
    }
}

onMounted(() => {
    fetchAwards()
})
</script>

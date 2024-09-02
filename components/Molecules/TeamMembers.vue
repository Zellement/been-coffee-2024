<template>
    <div class="flex w-full flex-col">
        <button class="btn mx-auto mb-8" @click.prevent="shuffleTeamMembers">
            Shuffle team
        </button>
        <ul
            v-if="hasTeamMembers"
            class="container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6"
        >
            <li
                v-for="teamMember in shuffledAllTeamMembers"
                :key="teamMember._id"
                class="relative flex aspect-[4/5] h-full w-full"
            >
                <span
                    class="absolute bottom-0 right-0 z-30 bg-tuscany px-2 font-krete text-[11px] text-white dark:bg-navy"
                    >{{ teamMember.name }}</span
                >
                <div
                    v-if="teamMember.image?.asset"
                    class="flex h-full w-full flex-shrink-0"
                >
                    <SanityImage
                        :asset-id="`${teamMember?.image?.asset._ref}`"
                        auto="format"
                        h="800"
                        w="1000"
                        fit="fillmax"
                        :alt="teamMember.name"
                        class="h-full w-full flex-shrink-0 object-cover"
                    />
                </div>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
const allTeamMembers: Ref<null | TeamMemberExtend[]> = ref(null)
const shuffledAllTeamMembers: Ref<null | TeamMemberExtend[]> = ref(null)

const shuffleTeamMembers = (): void => {
    if (allTeamMembers.value === null) {
        return
    }

    const shuffled = [...allTeamMembers.value].sort(() => Math.random() - 0.5)
    shuffledAllTeamMembers.value = shuffled
}

const hasTeamMembers = computed(
    () => allTeamMembers.value !== null && allTeamMembers.value.length > 0
)
const fetchTeamMembers = async () => {
    const sanity = useSanity()

    const query = `*[_type == "teamMember" && formerEmployee != true]`

    try {
        const data = await sanity.fetch(query)
        allTeamMembers.value = data
    } catch (error) {
        console.error('Failed to fetch data:', error)
        throw error
    }
}

onMounted(async () => {
    await fetchTeamMembers()
    shuffleTeamMembers()
})
</script>

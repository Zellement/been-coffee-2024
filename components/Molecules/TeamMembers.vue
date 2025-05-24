<template>
    <div class="flex w-full flex-col">
        <button class="btn mx-auto mb-8" @click.prevent="shuffleTeamMembers">
            Shuffle team
        </button>
        <transition-group
            v-if="hasTeamMembers"
            name="list"
            tag="ul"
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
                <transition name="fade" mode="out-in">
                    <div
                        v-if="teamMember.image?.asset"
                        class="flex h-full w-full flex-shrink-0"
                    >
                        <nuxt-img
                            :src="
                                $urlFor(teamMember.image)
                                    .width(800)
                                    .height(1000)
                                    .url()
                            "
                            height="800"
                            fit="cover"
                            loading="lazy"
                        />
                    </div>
                </transition>
            </li>
        </transition-group>
    </div>
</template>

<script lang="ts" setup>
interface TeamMemberExtend {
    _id: string
    name: string
    image?: {
        asset?: {
            _ref: string
        }
    }
}

const allTeamMembers = ref<TeamMemberExtend[] | null>(null)
const shuffledAllTeamMembers = ref<TeamMemberExtend[] | null>(null)

// Add a type for $urlFor to avoid 'unknown' type error
// Extract $urlFor from Nuxt app instance without unsafe type assertion
const $urlFor = (useNuxtApp() as any).$urlFor as (image: any) => any

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

<style scoped>
.list-enter-active,
.list-leave-active {
    transition: all 0.5s;
}
.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateY(30px);
}
.list-move {
    transition: transform 0.5s;
}
</style>

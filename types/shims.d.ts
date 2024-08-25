import type { SanityImageAsset, TeamMember } from '@/types/sanity.types'

declare global {
    type ImageTypes = {
        url: string
        alt?: string
        caption?: string
    }

    type NavItem = {
        key: string
        label: string
        url: string
        subItems?: NavItem[]
    }

    type AwardExtend = Award & {
        logo?: {
            asset?: {
                [internalGroqTypeReferenceTo]?: SanityImageAsset
            }
        }
    }

    type TeamMemberExtend = TeamMember & {
        image?: {
            asset?: {
                [internalGroqTypeReferenceTo]?: SanityImageAsset
            }
        }
    }
}

export {}

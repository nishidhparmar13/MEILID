import type { IconType } from 'react-icons'
import { FiRotateCcw, FiTruck, FiShield, FiLock, FiFileText } from 'react-icons/fi'

export interface PolicyMeta {
    slug: string
    title: string
    shortTitle: string
    summary: string
    icon: IconType
    accent: string
    glow: string
}

export const policies: PolicyMeta[] = [
    {
        slug: 'returns',
        title: 'Return Policy',
        shortTitle: 'Returns',
        summary: 'Item arrived damaged? We’ll replace it at no cost within 7 days.',
        icon: FiRotateCcw,
        accent: 'bg-[#E4F8F5] text-[#27BDB2]',
        glow: '#27BDB2',
    },
    {
        slug: 'shipping',
        title: 'Shipping Policy',
        shortTitle: 'Shipping',
        summary: 'Free U.S. shipping from Spring, Texas, sent via USPS.',
        icon: FiTruck,
        accent: 'bg-[#EAE9FF] text-[#5552C8]',
        glow: '#5552C8',
    },
    {
        slug: 'warranty',
        title: 'Warranty Statement',
        shortTitle: 'Warranty',
        summary: '4 months of coverage against manufacturing defects.',
        icon: FiShield,
        accent: 'bg-[#FFF2E7] text-[#E88B4A]',
        glow: '#E88B4A',
    },
    {
        slug: 'privacy',
        title: 'Privacy Policy',
        shortTitle: 'Privacy',
        summary: 'What we collect, what we never ask for, and why.',
        icon: FiLock,
        accent: 'bg-[#FDEAF3] text-[#C24E86]',
        glow: '#C24E86',
    },
    {
        slug: 'terms',
        title: 'Terms & Conditions',
        shortTitle: 'Terms',
        summary: 'The legal basics of using MEILID and this website.',
        icon: FiFileText,
        accent: 'bg-[#EAF2FF] text-[#2D7FF0]',
        glow: '#2D7FF0',
    },
]

export const getPolicy = (slug: string) => policies.find((p) => p.slug === slug)
export const getAdjacentPolicies = (slug: string) =>
    policies.filter((p) => p.slug !== slug)

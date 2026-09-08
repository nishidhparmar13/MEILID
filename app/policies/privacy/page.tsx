import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getPolicy } from '../_data'
import PrivacyContent from './PrivacyContent'

const policy = getPolicy('privacy')!

export const metadata: Metadata = {
    title: `${policy.title} | MEILID`,
    description: policy.summary,
}

export default function PrivacyPage() {
    return (
        <div>
            <Header />
            <PrivacyContent />
            <Footer />
        </div>
    )
}

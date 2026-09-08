import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getPolicy } from '../_data'
import ReturnsContent from './ReturnsContent'

const policy = getPolicy('returns')!

export const metadata: Metadata = {
    title: `${policy.title} | MEILID`,
    description: policy.summary,
}

export default function ReturnsPage() {
    return (
        <div>
            <Header />
            <ReturnsContent />
            <Footer />
        </div>
    )
}

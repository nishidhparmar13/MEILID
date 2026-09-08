import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getPolicy } from '../_data'
import TermsContent from './TermsContent'

const policy = getPolicy('terms')!

export const metadata: Metadata = {
    title: `${policy.title} | MEILID`,
    description: policy.summary,
}

export default function TermsPage() {
    return (
        <div>
            <Header />
            <TermsContent />
            <Footer />
        </div>
    )
}

import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getPolicy } from '../_data'
import WarrantyContent from './WarrantyContent'

const policy = getPolicy('warranty')!

export const metadata: Metadata = {
    title: `${policy.title} | MEILID`,
    description: policy.summary,
}

export default function WarrantyPage() {
    return (
        <div>
            <Header />
            <WarrantyContent />
            <Footer />
        </div>
    )
}

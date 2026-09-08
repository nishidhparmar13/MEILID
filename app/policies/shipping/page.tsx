import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getPolicy } from '../_data'
import ShippingContent from './ShippingContent'

const policy = getPolicy('shipping')!

export const metadata: Metadata = {
    title: `${policy.title} | MEILID`,
    description: policy.summary,
}

export default function ShippingPage() {
    return (
        <div>
            <Header />
            <ShippingContent />
            <Footer />
        </div>
    )
}

import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PoliciesHome from './_components/PoliciesHome'

export const metadata: Metadata = {
    title: 'Policies | MEILID',
    description:
        'Straightforward answers on MEILID returns, shipping, warranty, privacy, and terms & conditions.',
}

export default function PoliciesIndexPage() {
    return (
        <div>
            <Header />
            <PoliciesHome />
            <Footer />
        </div>
    )
}

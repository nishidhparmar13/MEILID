import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HowToUseContent from './HowToUseContent'

export const metadata: Metadata = {
    title: 'How to Use | MEILID',
    description:
        'Step-by-step usage instructions for your MEILID eyelid brush — before first use and for every daily use.',
}

export default function HowToUsePage() {
    return (
        <div>
            <Header />
            <HowToUseContent />
            <Footer />
        </div>
    )
}

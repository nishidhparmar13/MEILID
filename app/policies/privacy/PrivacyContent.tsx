'use client'

import PolicyHero from '../_components/PolicyHero'
import PolicyNav from '../_components/PolicyNav'
import {
    PolicySection,
    DetailCard,
    DetailGrid,
    CheckList,
} from '../_components/PolicyBlocks'
import { getPolicy } from '../_data'
import { FiUser, FiCreditCard, FiHeart, FiShare2 } from 'react-icons/fi'

const policy = getPolicy('privacy')!

const PrivacyContent = () => {
    return (
        <main className="w-full bg-[#F7F8FC] pb-24 pt-32 sm:pb-28 sm:pt-36">
            <PolicyHero
                icon={policy.icon}
                accent={policy.accent}
                glow={policy.glow}
                label={policy.shortTitle}
                title={policy.title}
                summary="Revijun LLC (“we,” “us,” “our”) operates the MEILID website and related sales channels. This describes what information we collect and how it’s used."
            />

            <div className="mx-auto mt-16 flex max-w-3xl flex-col gap-14 px-5 sm:mt-20 sm:px-6">
                <PolicySection title="What we collect">
                    <DetailGrid>
                        <DetailCard icon={FiUser} label="Order details" accent={policy.accent}>
                            Name, shipping address, and email address, to fulfill and
                            communicate about your order.
                        </DetailCard>

                        <DetailCard icon={FiCreditCard} label="Payment" accent={policy.accent}>
                            Processed entirely through our third-party processor, Stripe.
                            See Stripe&rsquo;s own terms for payment data.
                        </DetailCard>
                    </DetailGrid>
                </PolicySection>

                <PolicySection title="What we never ask for">
                    <CheckList
                        variant="not-covered"
                        items={[
                            'We do not collect, request, or require any health information, medical history, or clinical information as part of any purchase or website interaction.',
                            'Any health-related information you voluntarily share (e.g. in a review, social post, or testimonial) is given at your own discretion — never solicited or required by us.',
                        ]}
                    />
                </PolicySection>

                <PolicySection title="How it’s used">
                    <DetailGrid>
                        <DetailCard icon={FiHeart} label="Use of information" accent={policy.accent}>
                            Solely to process orders, ship products, and send order-related
                            updates.
                        </DetailCard>

                        <DetailCard icon={FiShare2} label="Data sharing" accent={policy.accent}>
                            Never sold. Shared only with the service providers needed to
                            fulfill orders — payment processor, shipping carrier.
                        </DetailCard>
                    </DetailGrid>
                </PolicySection>
            </div>

            <div className="px-5 sm:px-6">
                <PolicyNav current={policy.slug} />
            </div>
        </main>
    )
}

export default PrivacyContent

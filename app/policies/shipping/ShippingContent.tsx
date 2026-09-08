'use client'

import PolicyHero from '../_components/PolicyHero'
import PolicyNav from '../_components/PolicyNav'
import { PolicySection, DetailCard, DetailGrid, Callout } from '../_components/PolicyBlocks'
import { getPolicy } from '../_data'
import { FiMapPin, FiDollarSign, FiClock, FiTruck } from 'react-icons/fi'

const policy = getPolicy('shipping')!

const ShippingContent = () => {
    return (
        <main className="w-full bg-[#F7F8FC] pb-24 pt-32 sm:pb-28 sm:pt-36">
            <PolicyHero
                icon={policy.icon}
                accent={policy.accent}
                glow={policy.glow}
                label={policy.shortTitle}
                title={policy.title}
                summary="Where your MEILID ships from, what it costs, and how long it takes to arrive."
            />

            <div className="mx-auto mt-16 flex max-w-3xl flex-col gap-14 px-5 sm:mt-20 sm:px-6">
                <PolicySection title="Shipping details">
                    <DetailGrid>
                        <DetailCard icon={FiMapPin} label="Ships from" accent={policy.accent}>
                            Spring, Texas.
                        </DetailCard>

                        <DetailCard icon={FiClock} label="Processing time" accent={policy.accent}>
                            2 days standard, before your order ships.
                        </DetailCard>

                        <DetailCard icon={FiDollarSign} label="Domestic (U.S.) shipping" accent={policy.accent}>
                            Free — the cost is already included in the item price.
                        </DetailCard>

                        <DetailCard icon={FiTruck} label="Carrier" accent={policy.accent}>
                            Shipped via USPS.
                        </DetailCard>
                    </DetailGrid>

                    <Callout>
                        International shipping is available at an additional cost,
                        calculated automatically at checkout. Expedited shipping is not
                        currently offered.
                    </Callout>
                </PolicySection>
            </div>

            <div className="px-5 sm:px-6">
                <PolicyNav current={policy.slug} />
            </div>
        </main>
    )
}

export default ShippingContent

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
import { FiCalendar, FiPackage, FiMessageSquare } from 'react-icons/fi'

const policy = getPolicy('returns')!

const ReturnsContent = () => {
    return (
        <main className="w-full bg-[#F7F8FC] pb-24 pt-32 sm:pb-28 sm:pt-36">
            <PolicyHero
                icon={policy.icon}
                accent={policy.accent}
                glow={policy.glow}
                label={policy.shortTitle}
                title={policy.title}
                summary="MEILID is a personal hygiene device intended for individual use. Due to the nature of the product, we accept returns only in cases of items received damaged or defective."
            />

            <div className="mx-auto mt-16 flex max-w-3xl flex-col gap-14 px-5 sm:mt-20 sm:px-6">
                <PolicySection title="The essentials">
                    <DetailGrid>
                        <DetailCard icon={FiCalendar} label="Return window" accent={policy.accent}>
                            7 days from the date of delivery.
                        </DetailCard>

                        <DetailCard icon={FiPackage} label="Eligibility" accent={policy.accent}>
                            Only items damaged upon arrival. Opened or unused makes no
                            difference to eligibility.
                        </DetailCard>

                        <DetailCard icon={FiMessageSquare} label="How to start" accent={policy.accent}>
                            Contact us with your order number and a description (photo if
                            you have one) of the damage.
                        </DetailCard>

                        <DetailCard icon={FiPackage} label="What happens next" accent={policy.accent}>
                            Once the damaged item is returned to us, it&rsquo;s disposed of
                            and a free replacement ships out.
                        </DetailCard>
                    </DetailGrid>
                </PolicySection>

                <PolicySection title="What’s covered">
                    <CheckList
                        variant="covered"
                        items={[
                            'Items received damaged or defective, reported within 7 days of delivery.',
                            'Coverage regardless of whether the item has been opened or used.',
                        ]}
                    />

                    <CheckList
                        variant="not-covered"
                        items={[
                            'Damage reported after the 7-day window from delivery.',
                            'Items damaged due to misuse after delivery.',
                            'Change-of-mind returns on items that arrived undamaged.',
                        ]}
                    />
                </PolicySection>
            </div>

            <div className="px-5 sm:px-6">
                <PolicyNav current={policy.slug} />
            </div>
        </main>
    )
}

export default ReturnsContent

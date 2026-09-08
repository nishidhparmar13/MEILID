'use client'

import PolicyHero from '../_components/PolicyHero'
import PolicyNav from '../_components/PolicyNav'
import {
    PolicySection,
    SubHeading,
    DetailCard,
    DetailGrid,
    CheckList,
    Callout,
} from '../_components/PolicyBlocks'
import { getPolicy } from '../_data'
import { FiClock, FiTool } from 'react-icons/fi'

const policy = getPolicy('warranty')!

const WarrantyContent = () => {
    return (
        <main className="w-full bg-[#F7F8FC] pb-24 pt-32 sm:pb-28 sm:pt-36">
            <PolicyHero
                icon={policy.icon}
                accent={policy.accent}
                glow={policy.glow}
                label={policy.shortTitle}
                title={policy.title}
                summary="Revijun LLC warrants MEILID against defects in materials and workmanship for a period of 4 months from the date of purchase."
            />

            <div className="mx-auto mt-16 flex max-w-3xl flex-col gap-14 px-5 sm:mt-20 sm:px-6">
                <PolicySection title="Coverage window">
                    <DetailGrid>
                        <DetailCard icon={FiClock} label="Warranty period" accent={policy.accent}>
                            4 months from the date of purchase.
                        </DetailCard>

                        <DetailCard icon={FiTool} label="Remedy" accent={policy.accent}>
                            A confirmed covered defect is replaced at no cost.
                        </DetailCard>
                    </DetailGrid>
                </PolicySection>

                <PolicySection title="What’s covered">
                    <SubHeading>Covered</SubHeading>
                    <CheckList
                        variant="covered"
                        items={[
                            'Structural defects present at time of manufacture — e.g. bristle detachment not caused by use.',
                            'Cracking of the silicone body under normal handling.',
                        ]}
                    />

                    <SubHeading>Not covered</SubHeading>
                    <CheckList
                        variant="not-covered"
                        items={[
                            'Normal wear and tear — expected softening, minor discoloration, or bristle wear from regular use.',
                            'Damage from misuse, dropping, improper cleaning, or use outside the intended eyelid hygiene purpose.',
                            'Devices used beyond the 4-month warranty window.',
                        ]}
                    />

                    <Callout>
                        Replacement under warranty does not include shipping costs outside
                        of the original 7-day damaged-on-arrival{' '}
                        <a href="/policies/returns" className="font-semibold underline underline-offset-2">
                            return window
                        </a>
                        . The customer is responsible for shipping costs on any
                        warranty-based return made after that window.
                    </Callout>
                </PolicySection>
            </div>

            <div className="px-5 sm:px-6">
                <PolicyNav current={policy.slug} />
            </div>
        </main>
    )
}

export default WarrantyContent

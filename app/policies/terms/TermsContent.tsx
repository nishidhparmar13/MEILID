'use client'

import PolicyHero from '../_components/PolicyHero'
import PolicyNav from '../_components/PolicyNav'
import { PolicySection, DetailCard, DetailGrid, Callout } from '../_components/PolicyBlocks'
import { getPolicy } from '../_data'
import { FiBriefcase, FiMapPin, FiEye, FiShield } from 'react-icons/fi'

const policy = getPolicy('terms')!

const TermsContent = () => {
    return (
        <main className="w-full bg-[#F7F8FC] pb-24 pt-32 sm:pb-28 sm:pt-36">
            <PolicyHero
                icon={policy.icon}
                accent={policy.accent}
                glow={policy.glow}
                label={policy.shortTitle}
                title={policy.title}
                summary="The legal basics of buying and using MEILID, and of using this website."
            />

            <div className="mx-auto mt-16 flex max-w-3xl flex-col gap-14 px-5 sm:mt-20 sm:px-6">
                <PolicySection title="Business & jurisdiction">
                    <DetailGrid>
                        <DetailCard icon={FiBriefcase} label="Business entity" accent={policy.accent}>
                            MEILID is a product owned and sold by Revijun LLC, a Texas
                            limited liability company based in Houston, Texas.
                        </DetailCard>

                        <DetailCard icon={FiMapPin} label="Governing law" accent={policy.accent}>
                            Governed by the laws of the State of Texas. Disputes are
                            brought exclusively in the state or federal courts of Harris
                            County, Texas, and you consent to their jurisdiction.
                        </DetailCard>
                    </DetailGrid>
                </PolicySection>

                <PolicySection title="Using MEILID">
                    <DetailGrid>
                        <DetailCard icon={FiEye} label="Intended use" accent={policy.accent}>
                            External eyelid margin and lash line hygiene only, as described
                            in the included instructions. Not intended to diagnose, treat,
                            cure, or prevent any disease.
                        </DetailCard>

                        <DetailCard icon={FiShield} label="Assumption of use risk" accent={policy.accent}>
                            You agree to use MEILID only as directed. Revijun LLC is not
                            liable for injury or adverse reaction from use inconsistent with
                            the provided instructions.
                        </DetailCard>
                    </DetailGrid>
                </PolicySection>

                <PolicySection title="Liability & changes">
                    <Callout tone="warning">
                        <span className="font-semibold">Limitation of liability:</span>{' '}
                        [Placeholder — standard limitation-of-liability clause capping
                        damages at purchase price; recommend attorney drafting given ocular
                        contact use.]
                    </Callout>

                    <DetailCard icon={FiBriefcase} label="Changes to terms" accent={policy.accent}>
                        Revijun LLC reserves the right to update these terms at any time.
                        Continued use of the website or product after changes constitutes
                        acceptance.
                    </DetailCard>
                </PolicySection>
            </div>

            <div className="px-5 sm:px-6">
                <PolicyNav current={policy.slug} />
            </div>
        </main>
    )
}

export default TermsContent

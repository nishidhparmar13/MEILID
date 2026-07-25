import React from 'react'
import { FiCheck, FiX } from 'react-icons/fi'

const comparison = [
    {
        traditional: 'Masks symptoms temporarily',
        meilid: 'Targets the root cause',
    },
    {
        traditional: 'Requires constant reapplication',
        meilid: 'Long-lasting relief',
    },
    {
        traditional: 'Messy, time-consuming',
        meilid: '60 seconds, no mess',
    },
    {
        traditional: 'Single-use waste',
        meilid: 'Reusable & eco-friendly',
    },
    {
        traditional: 'Expensive over time',
        meilid: 'One-time investment',
    },
]

const WhyMEILID = () => {
    return (
        <section className="container-box flex min-h-dvh w-full flex-col items-center gap-6 bg-background">

            {/* Badge */}
            <div className="badge">
                <div className="badge-dot" />
                Why MEILID
            </div>

            {/* Heading */}
            <div className="flex max-w-3xl flex-col items-center gap-4 text-center">
                <h2 className="heading">
                    Why drops and compresses aren&apos;t enough
                </h2>

                <p className="sub-heading">
                    Most treatments mask symptoms. MEILID treats the cause.
                </p>
            </div>

            {/* Comparison */}
            <div className="mt-10 w-full max-w-5xl overflow-hidden rounded-3xl border border-neutral-200/70 bg-white shadow-[0_20px_60px_rgba(35,39,100,0.08)]">

                {/* Header */}
                <div className="grid grid-cols-2 bg-primary text-white">
                    <div className="px-5 py-6 text-sm font-semibold md:px-8 md:text-base">
                        Traditional Methods
                    </div>

                    <div className="px-5 py-6 text-sm font-semibold md:px-8 md:text-base">
                        MEILID
                    </div>
                </div>

                {/* Rows */}
                {comparison.map((item, index) => (
                    <div
                        key={index}
                        className="grid grid-cols-2 border-t border-neutral-200/70"
                    >
                        {/* Traditional */}
                        <div className="flex items-center gap-3 px-4 py-6 md:px-8">
                            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F7E4DF] text-xs text-[#E87D68]">
                                <FiX />
                            </div>

                            <span className="text-sm text-neutral-500 md:text-base">
                                {item.traditional}
                            </span>
                        </div>

                        {/* MEILID */}
                        <div className="flex items-center gap-3 border-l border-neutral-200/70 bg-[#F4FBFA] px-4 py-6 md:px-8">
                            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#3DC5B8] text-xs text-white">
                                <FiCheck />
                            </div>

                            <span className="text-sm font-semibold text-primary md:text-base">
                                {item.meilid}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default WhyMEILID
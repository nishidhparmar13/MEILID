import React from 'react'
import { FiCheck, FiArrowRight } from 'react-icons/fi'

const benefits = [
    '60-Day Money-Back Guarantee',
    'Free Shipping Over $50',
    'Safe, Secure Checkout',
]

const FinalCTA = () => {
    return (
        <section className="relative flex min-h-[650px] w-full items-center justify-center overflow-hidden bg-primary px-6 py-24">

            {/* Background Decorations */}
            <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#3DC5B8]/5 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-60 -right-40 h-[600px] w-[600px] rounded-full bg-[#3DC5B8]/5 blur-3xl" />

            {/* Content */}
            <div className="relative z-10 flex w-full max-w-5xl flex-col items-center text-center">

                {/* Heading */}
                <h2 className="max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-6xl">
                    Ready to{' '}
                    <span className="text-[#5EDBD0]">
                        finally feel relief?
                    </span>
                </h2>

                {/* Description */}
                <p className="mt-8 max-w-3xl text-base leading-8 text-white/70 md:text-xl">
                    You&apos;ve lived with discomfort long enough. MEILID is backed
                    by clinical research, recommended by doctors, and trusted by
                    thousands.
                </p>

                {/* Benefits */}
                <div className="mt-12 flex flex-col items-center justify-center gap-5 md:flex-row md:gap-12">
                    {benefits.map((benefit) => (
                        <div
                            key={benefit}
                            className="flex items-center gap-3 text-sm text-white/80 md:text-base"
                        >
                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#3DC5B8] text-sm text-white">
                                <FiCheck />
                            </span>

                            <span>{benefit}</span>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <button
                    type="button"
                    className="group mt-14 flex items-center gap-3 rounded-full bg-[#3DC5B8] px-10 py-5 text-base font-bold text-white shadow-[0_15px_40px_rgba(61,197,184,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#49cfc3] hover:shadow-[0_20px_50px_rgba(61,197,184,0.35)]"
                >
                    Get MEILID Now — Start Feeling Relief

                    <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                {/* Shipping Text */}
                <p className="mt-7 text-sm text-white/60 md:text-base">
                    Limited launch pricing. Ships in 1–2 business days.
                </p>

            </div>
        </section>
    )
}

export default FinalCTA
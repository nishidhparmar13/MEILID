'use client'

import React from 'react'
import { motion, Transition, useReducedMotion, Variants } from 'framer-motion'
import { FiCheck, FiArrowRight } from 'react-icons/fi'

const benefits = [
    '60-Day Money-Back Guarantee',
    'Free Shipping Over $50',
    'Safe, Secure Checkout',
]

// Shared easing for the "breathing" rhythm — slow, calm, unhurried.
const BREATHE: Transition = { duration: 4, repeat: Infinity, ease: 'easeInOut' }

const containerStagger: Variants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.12, delayChildren: 0.05 },
    },
}

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 22 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
}

const FinalCTA = () => {
    const prefersReducedMotion = useReducedMotion()

    return (
        <section className="relative flex w-full items-center overflow-hidden bg-[#071C20] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">

            {/* ================= BACKGROUND ================= */}

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(61,197,184,0.16),transparent_30%),radial-gradient(circle_at_10%_90%,rgba(37,215,235,0.08),transparent_35%)]" />

            <motion.div
                className="pointer-events-none absolute right-[-25%] top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[#3DC5B8]/10 blur-[100px] sm:right-[-15%] sm:h-[650px] sm:w-[650px] sm:blur-[120px]"
                animate={prefersReducedMotion ? undefined : { scale: [1, 1.08, 1], opacity: [0.8, 1, 0.8] }}
                transition={BREATHE}
            />

            <motion.div
                className="pointer-events-none absolute left-[-20%] bottom-[-20%] h-[320px] w-[320px] rounded-full bg-[#25D7EB]/5 blur-[80px] sm:h-[500px] sm:w-[500px] sm:bottom-[-30%] sm:blur-[100px]"
                animate={prefersReducedMotion ? undefined : { scale: [1, 1.15, 1] }}
                transition={{ ...BREATHE, duration: 6 }}
            />

            <div className="pointer-events-none absolute right-[8%] top-1/2 hidden aspect-square w-[500px] -translate-y-1/2 rounded-full border border-white/[0.05] lg:block" />
            <div className="pointer-events-none absolute right-[13%] top-1/2 hidden aspect-square w-[380px] -translate-y-1/2 rounded-full border border-[#3DC5B8]/10 lg:block" />

            {/* ================= CONTENT ================= */}

            <motion.div
                className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16"
                variants={containerStagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.35 }}
            >

                {/* Left Content */}
                <div className="flex flex-col items-center text-center sm:items-start sm:text-left">

                    {/* Eyebrow */}
                    <motion.div variants={fadeUp} className="mb-6 flex items-center gap-3 sm:mb-7">
                        <motion.span
                            className="h-2 w-2 rounded-full bg-[#5EDBD0] shadow-[0_0_15px_rgba(94,219,208,0.8)]"
                            animate={prefersReducedMotion ? undefined : { opacity: [1, 0.4, 1], scale: [1, 1.3, 1] }}
                            transition={BREATHE}
                        />
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5EDBD0] sm:text-sm">
                            Your eyes deserve better
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h2
                        variants={fadeUp}
                        className="max-w-3xl text-[2.25rem] font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl lg:leading-[1.05]"
                    >
                        Ready to{' '}
                        <span className="text-[#5EDBD0]">finally feel relief?</span>
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        variants={fadeUp}
                        className="mt-6 max-w-2xl text-base leading-7 text-white/60 sm:mt-7 sm:text-lg sm:leading-8"
                    >
                        You&apos;ve lived with discomfort long enough. MEILID is
                        designed to make daily eyelid care simpler, gentler,
                        and more effective.
                    </motion.p>

                    {/* Benefits */}
                    <motion.div
                        variants={fadeUp}
                        className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 sm:mt-9 sm:justify-start sm:gap-x-8 sm:gap-y-4"
                    >
                        {benefits.map((benefit) => (
                            <div
                                key={benefit}
                                className="flex items-center gap-2.5 text-sm text-white/70"
                            >
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#3DC5B8]/15 text-[#5EDBD0]">
                                    <FiCheck className="text-sm" />
                                </span>
                                {benefit}
                            </div>
                        ))}
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        variants={fadeUp}
                        className="mt-10 flex flex-col items-center gap-4 sm:mt-11 sm:flex-row sm:items-center"
                    >
                        <motion.button
                            type="button"
                            whileHover={{ y: -4, boxShadow: '0 24px 70px rgba(61,197,184,0.4)' }}
                            whileTap={{ scale: 0.97, y: -1 }}
                            transition={{ duration: 0.25, ease: 'easeOut' }}
                            className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#3DC5B8] px-8 py-4 text-base font-bold text-[#071C20] shadow-[0_15px_50px_rgba(61,197,184,0.25)] transition-colors duration-300 hover:bg-[#5EDBD0] sm:w-auto sm:px-9 sm:py-5"
                        >
                            Get MEILID Now
                            <motion.span
                                animate={prefersReducedMotion ? undefined : { x: [0, 4, 0] }}
                                transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
                                className="flex"
                            >
                                <FiArrowRight />
                            </motion.span>
                        </motion.button>

                        <span className="text-sm text-white/40">
                            Ships in 1–2 business days
                        </span>
                    </motion.div>

                </div>


                {/* ================= SIGNATURE VISUAL: BREATHING RINGS ================= */}
                {/* Concentric rings expand and settle on a slow 4s cycle — the
                    same unhurried rhythm as a relief compress, tying the motion
                    itself to the product's promise instead of decorating it. */}

                <motion.div
                    variants={fadeUp}
                    className="relative flex min-h-[320px] items-center justify-center sm:min-h-[400px] lg:min-h-[450px]"
                >

                    {/* Ambient glow */}
                    <motion.div
                        className="absolute h-[220px] w-[220px] rounded-full bg-[#3DC5B8]/20 blur-[70px] sm:h-[320px] sm:w-[320px] sm:blur-[90px]"
                        animate={prefersReducedMotion ? undefined : { scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] }}
                        transition={BREATHE}
                    />

                    {/* Breathing rings, largest to smallest, staggered so they
                        pulse outward like a ripple with every cycle */}
                    {[220, 168, 116].map((size, i) => (
                        <motion.div
                            key={size}
                            className="absolute rounded-full border"
                            style={{
                                width: size,
                                height: size,
                                borderColor: i === 0 ? 'rgba(94,219,208,0.12)' : i === 1 ? 'rgba(61,197,184,0.18)' : 'rgba(94,219,208,0.28)',
                            }}
                            animate={prefersReducedMotion ? undefined : { scale: [1, 1.18, 1], opacity: [0.5, 1, 0.5] }}
                            transition={{ ...BREATHE, delay: i * 0.5 }}
                        />
                    ))}

                    {/* Product silhouette — soft eye-mask form */}
                    <motion.div
                        className="relative z-10 flex h-[260px] w-[190px] items-center justify-center sm:h-[320px] sm:w-[240px] lg:h-[360px] lg:w-[260px]"
                        animate={prefersReducedMotion ? undefined : { y: [0, -10, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        <div className="relative h-full w-[62%] rotate-[-8deg] rounded-[80px] border border-white/20 bg-gradient-to-br from-white/20 via-white/5 to-transparent shadow-[0_30px_80px_rgba(0,0,0,0.4)] backdrop-blur-xl">

                            <div className="absolute left-7 top-8 h-28 w-7 rounded-full bg-white/20 blur-md sm:left-8 sm:h-32 sm:w-8" />

                            <motion.div
                                className="absolute bottom-12 left-1/2 h-2 w-16 -translate-x-1/2 rounded-full bg-[#5EDBD0] sm:w-20"
                                animate={prefersReducedMotion ? undefined : {
                                    boxShadow: [
                                        '0 0 12px rgba(94,219,208,0.5)',
                                        '0 0 28px rgba(94,219,208,0.9)',
                                        '0 0 12px rgba(94,219,208,0.5)',
                                    ]
                                }}
                                transition={BREATHE}
                            />
                        </div>

                        <motion.div
                            className="absolute right-[-6px] top-[45px] h-8 w-8 rounded-full bg-[#5EDBD0]/20 blur-sm sm:right-[-10px] sm:top-[50px] sm:h-10 sm:w-10"
                            animate={prefersReducedMotion ? undefined : { y: [0, -14, 0], opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                        />

                        <motion.div
                            className="absolute bottom-[55px] left-[-16px] h-4 w-4 rounded-full bg-[#25D7EB]/30 blur-sm sm:bottom-[60px] sm:left-[-20px] sm:h-5 sm:w-5"
                            animate={prefersReducedMotion ? undefined : { y: [0, 12, 0], opacity: [0.4, 0.9, 0.4] }}
                            transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
                        />
                    </motion.div>

                    {/* Product Label */}
                    <div className="absolute bottom-2 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[11px] font-medium tracking-wide text-white/60 backdrop-blur-xl sm:bottom-5 sm:px-5 sm:py-2.5 sm:text-xs">
                        MEILID • Daily Eyelid Care
                    </div>

                </motion.div>

            </motion.div>

        </section>
    )
}

export default FinalCTA
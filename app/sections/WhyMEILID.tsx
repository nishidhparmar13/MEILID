"use client"

import React, { useRef } from 'react'
import { Easing, motion, useScroll, useTransform } from 'framer-motion'
import { FiCheck, FiX, FiArrowRight } from 'react-icons/fi'
import { HiOutlineSparkles } from 'react-icons/hi2'

const ease: Easing = [0.16, 1, 0.3, 1]

const comparison = [
    {
        traditional: 'Masks symptoms temporarily',
        meilid: 'Targets the root cause',
    },
    {
        traditional: 'Requires constant reapplication',
        meilid: 'Designed for lasting relief',
    },
    {
        traditional: 'Messy and time-consuming',
        meilid: 'Simple 60-second routine',
    },
    {
        traditional: 'Creates single-use waste',
        meilid: 'Reusable by design',
    },
    {
        traditional: 'Costs add up over time',
        meilid: 'One-time investment',
    },
]

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

const staggerGroup = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
}

const rowContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
}

const rowLeft = {
    hidden: { opacity: 0, x: -24 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease } },
}

const rowRight = {
    hidden: { opacity: 0, x: 24 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease } },
}

const WhyMEILID = () => {
    const sectionRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    })

    const blobLeftY = useTransform(scrollYProgress, [0, 1], [-40, 40])
    const blobRightY = useTransform(scrollYProgress, [0, 1], [40, -40])

    return (
        <section
            ref={sectionRef}
            className="relative w-full overflow-hidden bg-[#F7F8FC] py-20 sm:py-24 md:py-32"
        >

            {/* Background decoration */}
            <motion.div
                style={{ y: blobLeftY }}
                className="pointer-events-none absolute -left-24 top-10 h-[260px] w-[260px] rounded-full bg-[#3DC5B8]/10 blur-[60px] sm:-left-40 sm:top-20 sm:h-[500px] sm:w-[500px] sm:blur-[120px]"
            />

            <motion.div
                style={{ y: blobRightY }}
                className="pointer-events-none absolute -right-24 bottom-0 h-[260px] w-[260px] rounded-full bg-primary/10 blur-[70px] sm:-right-40 sm:h-[500px] sm:w-[500px] sm:blur-[120px]"
            />

            <div className="relative mx-auto px-5 sm:px-6 md:px-10 lg:px-16">

                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={staggerGroup}
                    className="mx-auto flex max-w-3xl flex-col items-center text-center"
                >

                    <motion.div variants={fadeUp} className="badge">
                        <span className="relative flex h-2 w-2 shrink-0">
                            <span className="badge-dot absolute inset-0 animate-ping opacity-40" />
                            <span className="badge-dot relative" />
                        </span>
                        Why MEILID
                    </motion.div>

                    <motion.h2 variants={fadeUp} className="heading mt-5 sm:mt-6">
                        Why <span className="heading-highlight">drops and compresses </span> aren&apos;t enough
                    </motion.h2>

                    <motion.p variants={fadeUp} className="sub-heading mt-4 sm:mt-5">
                        Most treatments focus on temporary relief. MEILID takes a
                        different approach — addressing the root of your eyelid care routine.
                    </motion.p>

                </motion.div>


                {/* Comparison */}
                <div className="relative mx-auto mt-12 w-full max-w-6xl sm:mt-16">

                    {/* Floating centre badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3, ease }}
                        className="absolute left-1/2 top-0 z-20 hidden -translate-x-1/2 -translate-y-1/2 md:flex"
                    >
                        <motion.div
                            animate={{ y: [0, -6, 0] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                            className="flex items-center gap-2 rounded-full border border-white bg-white px-5 py-2.5 text-sm font-bold text-primary shadow-xl shadow-primary/10"
                        >
                            <HiOutlineSparkles className="text-[#2FC8BA]" />
                            The MEILID Difference
                        </motion.div>
                    </motion.div>


                    <div className="grid overflow-hidden rounded-[1.5rem] border border-white bg-white shadow-[0_25px_80px_rgba(35,39,100,0.10)] sm:rounded-[2rem] md:grid-cols-2">


                        {/* Traditional Methods */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.7, ease }}
                            className="relative"
                        >

                            {/* Header */}
                            <div className="border-b border-neutral-200 bg-[#F4F5F8] px-5 py-6 sm:px-7 sm:py-8 md:px-10">

                                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-neutral-400 sm:text-xs sm:tracking-[0.18em]">
                                    The usual approach
                                </p>

                                <h3 className="mt-2 text-xl font-bold text-neutral-700 sm:text-2xl">
                                    Traditional Methods
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-neutral-500">
                                    Often focused on managing symptoms when they appear.
                                </p>

                            </div>


                            {/* Rows */}
                            <motion.div
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.1 }}
                                variants={rowContainer}
                            >
                                {comparison.map((item, index) => (

                                    <motion.div
                                        key={index}
                                        variants={rowLeft}
                                        className="flex min-h-[74px] items-center gap-3 border-b border-neutral-100 px-5 py-4 last:border-b-0 sm:min-h-[82px] sm:gap-4 sm:px-7 sm:py-5 md:px-10"
                                    >

                                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F7E8E5] text-[#D98372] sm:h-8 sm:w-8">
                                            <FiX />
                                        </div>

                                        <span className="text-sm leading-6 text-neutral-500 md:text-base">
                                            {item.traditional}
                                        </span>

                                    </motion.div>

                                ))}
                            </motion.div>

                        </motion.div>


                        {/* MEILID */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.7, ease }}
                            className="relative overflow-hidden bg-gradient-to-br from-[#20245F] via-[#292C82] to-[#31369A]"
                        >

                            {/* Decorative glow */}
                            <motion.div
                                animate={{ opacity: [0.6, 1, 0.6] }}
                                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                                className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#3DC5B8]/20 blur-3xl"
                            />

                            <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#5EDBD0]/10 blur-3xl" />


                            {/* Header */}
                            <div className="relative border-b border-white/10 px-5 py-6 sm:px-7 sm:py-8 md:px-10">

                                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#3DC5B8]/15 px-3 py-1.5 text-xs font-semibold text-[#6EE5D9]">

                                    <span className="relative flex h-1.5 w-1.5 shrink-0">
                                        <span className="absolute inset-0 animate-ping rounded-full bg-[#5EDBD0]/50" />
                                        <span className="relative h-1.5 w-1.5 rounded-full bg-[#5EDBD0]" />
                                    </span>

                                    A smarter approach

                                </div>

                                <h3 className="text-xl font-bold text-white sm:text-2xl">
                                    MEILID
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-white/60">
                                    Designed to make effective eyelid care simple,
                                    gentle, and consistent.
                                </p>

                            </div>


                            {/* Rows */}
                            <motion.div
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.1 }}
                                variants={rowContainer}
                                className="relative"
                            >

                                {comparison.map((item, index) => (

                                    <motion.div
                                        key={index}
                                        variants={rowRight}
                                        className="flex min-h-[74px] items-center gap-3 border-b border-white/10 px-5 py-4 last:border-b-0 sm:min-h-[82px] sm:gap-4 sm:px-7 sm:py-5 md:px-10"
                                    >

                                        <motion.div
                                            whileHover={{ scale: 1.15 }}
                                            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                                            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#3DC5B8] text-white shadow-[0_5px_15px_rgba(61,197,184,0.25)] sm:h-8 sm:w-8"
                                        >
                                            <FiCheck />
                                        </motion.div>

                                        <span className="text-sm font-semibold leading-6 text-white md:text-base">
                                            {item.meilid}
                                        </span>

                                    </motion.div>

                                ))}

                            </motion.div>

                        </motion.div>

                    </div>

                </div>


                {/* Bottom Takeaway */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.7, ease }}
                    className="mx-auto mt-8 flex max-w-6xl flex-col items-center justify-between gap-5 rounded-3xl border border-white bg-white/70 p-5 shadow-[0_15px_50px_rgba(35,39,100,0.05)] backdrop-blur-xl sm:mt-10 sm:gap-6 sm:p-6 md:flex-row md:px-8"
                >

                    <div className="flex items-center gap-4 text-center md:text-left">

                        <motion.div
                            whileHover={{ rotate: 8, scale: 1.08 }}
                            transition={{ type: 'spring', stiffness: 350, damping: 15 }}
                            className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E2F8F5] text-xl text-[#2FC8BA] sm:flex"
                        >
                            <HiOutlineSparkles />
                        </motion.div>

                        <div>
                            <p className="font-bold text-primary">
                                A better daily routine starts here.
                            </p>

                            <p className="mt-1 text-sm text-neutral-500">
                                Simple care. Less hassle. A routine you can actually stick with.
                            </p>
                        </div>

                    </div>


                    <motion.button
                        whileHover={{ scale: 1.04, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                        className="group flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-shadow duration-300 hover:shadow-lg md:w-auto"
                    >

                        See How It Works

                        <FiArrowRight className="transition-transform group-hover:translate-x-1" />

                    </motion.button>

                </motion.div>

            </div>

        </section>
    )
}

export default WhyMEILID
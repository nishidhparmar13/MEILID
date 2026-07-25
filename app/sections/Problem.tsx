"use client"

import React, { useRef } from 'react'
import { Easing, motion, useScroll, useTransform, Variants } from 'framer-motion'
import {
    FiArrowDown,
    FiAlertCircle,
    FiDroplet,
    FiEye,
    FiSun,
} from 'react-icons/fi'

const ease: Easing = [0.16, 1, 0.3, 1]

const symptoms = [
    { label: 'Burning', icon: FiSun },
    { label: 'Itching', icon: FiEye },
    { label: 'Grittiness', icon: FiDroplet },
    { label: 'Redness', icon: FiAlertCircle },
    { label: 'Crusty lashes', icon: FiEye },
]

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease },
    },
}

// Word-by-word reveal, mirrors the hero's heading treatment
const lineVariants: Variants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.045, delayChildren: 0.1 },
    },
}

const wordVariants: Variants = {
    hidden: { opacity: 0, y: '110%', rotate: 3 },
    show: {
        opacity: 1,
        y: '0%',
        rotate: 0,
        transition: { duration: 0.7, ease },
    },
}

const AnimatedLine = ({
    text,
    className = '',
}: {
    text: string
    className?: string
}) => (
    <motion.span
        variants={lineVariants}
        className={`inline-block overflow-hidden ${className}`}
        aria-label={text}
    >
        {text.split(' ').map((word, i) => (
            <span key={i} className="inline-block overflow-hidden pb-1 pr-[0.2em] sm:pr-[0.28em]">
                <motion.span variants={wordVariants} className="inline-block">
                    {word}
                </motion.span>
            </span>
        ))}
    </motion.span>
)

// Stagger wrapper so children (words) animate on scroll-into-view
const headingGroup: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
}

// Symptom chips: pop in with stagger
const symptomContainer: Variants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
}

const symptomItem: Variants = {
    hidden: { opacity: 0, y: 16, scale: 0.9 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease },
    },
}

const Problem = () => {
    const sectionRef = useRef<HTMLElement>(null)

    // Subtle scroll-linked drift on the background glows for depth
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    })

    const glowY = useTransform(scrollYProgress, [0, 1], [-60, 60])
    const orbY = useTransform(scrollYProgress, [0, 1], [40, -40])
    const orbRotate = useTransform(scrollYProgress, [0, 1], [0, 25])

    return (
        <section
            ref={sectionRef}
            className="relative flex min-h-dvh w-full items-center overflow-hidden bg-[#F4F5F3] px-5 py-24 sm:px-6 sm:py-28 md:px-10 lg:px-16 lg:py-32"
        >

            {/* Background Glow */}
            <motion.div
                style={{ y: glowY }}
                className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3DC5B8]/[0.06] blur-[80px] sm:h-[600px] sm:w-[600px] sm:blur-[120px]"
            />

            {/* Decorative Orb */}
            <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease }}
                style={{ y: orbY, rotate: orbRotate }}
                className="pointer-events-none absolute -right-20 top-[-80px] hidden h-[260px] w-[260px] rounded-full bg-[#3DC5B8]/[0.06] blur-2xl sm:block sm:h-[400px] sm:w-[400px] sm:blur-3xl"
            />

            <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center">

                {/* ================= BADGE ================= */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="flex items-center gap-2 rounded-full border border-[#2DB9AE]/20 bg-[#EAF8F6] px-4 py-2 text-xs font-medium text-[#239B92] sm:px-5 sm:text-sm"
                >
                    <span className="relative flex h-2 w-2 shrink-0">
                        <span className="absolute inset-0 animate-ping rounded-full bg-[#2DB9AE]/40" />
                        <span className="relative h-2 w-2 rounded-full bg-[#2DB9AE]" />
                    </span>
                    The Problem
                </motion.div>


                {/* ================= MAIN HEADING (word-by-word reveal) ================= */}
                <motion.h2
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={headingGroup}
                    className="mt-8 max-w-6xl text-center text-[clamp(2.4rem,9vw,8rem)] font-light leading-[1.05] tracking-[-0.03em] text-[#151B1A] sm:mt-10 sm:leading-[0.98] sm:tracking-[-0.04em]"
                >
                    <AnimatedLine text="You shouldn't have to" />
                    <br />
                    <AnimatedLine
                        text="live with discomfort."
                        className="font-medium text-[#2DB9AE]"
                    />
                </motion.h2>


                {/* ================= SYMPTOMS ================= */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={symptomContainer}
                    className="mt-10 flex max-w-5xl flex-wrap items-center justify-center gap-x-5 gap-y-4 sm:mt-14 sm:gap-x-8 sm:gap-y-5"
                >
                    {symptoms.map((item, index) => {
                        const Icon = item.icon

                        return (
                            <React.Fragment key={item.label}>

                                <motion.div
                                    variants={symptomItem}
                                    whileHover={{ y: -3 }}
                                    className="group flex items-center gap-2 text-xs font-medium uppercase tracking-[0.1em] text-neutral-500 transition-colors duration-300 hover:text-[#2DB9AE] sm:gap-2.5 sm:text-sm sm:tracking-[0.12em] md:text-base"
                                >
                                    <motion.span
                                        whileHover={{ rotate: 12, scale: 1.15 }}
                                        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                                        className="flex"
                                    >
                                        <Icon
                                            className="text-[#2DB9AE]"
                                            size={15}
                                            strokeWidth={1.5}
                                        />
                                    </motion.span>

                                    {item.label}
                                </motion.div>

                                {index !== symptoms.length - 1 && (
                                    <span className="hidden h-1 w-1 rounded-full bg-neutral-300 sm:block" />
                                )}

                            </React.Fragment>
                        )
                    })}
                </motion.div>


                {/* ================= MESSAGE ================= */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={fadeUp}
                    className="mt-12 flex max-w-3xl flex-col items-center text-center sm:mt-16"
                >

                    <p className="text-base font-light leading-7 text-neutral-600 sm:text-lg sm:leading-8 md:text-2xl md:leading-10">
                        Your eyes are trying to tell you something.
                        <br className="hidden md:block" />

                        Chronic irritation is often connected to
                        <span className="mx-1.5 font-medium text-[#2DB9AE] sm:mx-2">
                            eyelid inflammation
                        </span>
                        that disrupts your natural tear film.
                    </p>

                </motion.div>


                {/* ================= BOTTOM STATEMENT ================= */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={fadeUp}
                    className="mt-16 flex flex-col items-center sm:mt-24"
                >

                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease }}
                        className="h-px w-24 origin-center bg-[#2DB9AE]/30"
                    />

                    <p className="mt-6 max-w-xl text-center text-sm leading-6 text-neutral-500 sm:mt-7 sm:text-base sm:leading-7 md:text-lg">
                        You&apos;re not alone, and you don&apos;t have to
                        simply live with it.
                    </p>

                    <motion.div
                        whileHover={{ scale: 1.1, borderColor: 'rgba(45,185,174,0.5)' }}
                        animate={{ y: [0, 6, 0] }}
                        transition={{
                            y: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' },
                            scale: { duration: 0.2 },
                        }}
                        className="mt-6 flex h-10 w-10 items-center justify-center rounded-full border border-[#2DB9AE]/20 text-[#2DB9AE] sm:mt-7 sm:h-11 sm:w-11"
                    >
                        <FiArrowDown size={16} />
                    </motion.div>

                </motion.div>

            </div>

        </section>
    )
}

export default Problem
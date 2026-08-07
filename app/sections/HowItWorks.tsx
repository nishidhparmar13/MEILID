"use client"

import React, { useRef } from 'react'
import {
    Easing,
    motion,
    useMotionValue,
    useScroll,
    useSpring,
    useTransform,
    Variants,
} from 'framer-motion'
import {
    FiDroplet,
    FiEye,
    FiRefreshCw,
    FiArrowRight,
    FiCheck,
} from 'react-icons/fi'

const ease: Easing = [0.16, 1, 0.3, 1]

const steps = [
    {
        number: '01',
        icon: <FiDroplet />,
        title: 'Wet & lather',
        description:
            'Wet MEILID and add a gentle cleanser — or use it as-is with warm water.',
    },
    {
        number: '02',
        icon: <FiEye />,
        title: 'Cleanse',
        description:
            'Glide along your lash line in small circles. The soft bristles lift away buildup without irritation.',
    },
    {
        number: '03',
        icon: <FiRefreshCw />,
        title: 'Rinse & refresh',
        description:
            'Rinse your eyes and the device. Feel the difference immediately.',
    },
]

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

const staggerGroup: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
}

const stepCard: Variants = {
    hidden: { opacity: 0, y: 26 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}

const HowItWorks = () => {
    const sectionRef = useRef<HTMLElement | null>(null)
    const visualRef = useRef<HTMLDivElement | null>(null)

    // Scroll-linked parallax for the ambient background glows
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    })

    const blobLeftY = useTransform(scrollYProgress, [0, 1], [-40, 40])
    const blobRightY = useTransform(scrollYProgress, [0, 1], [40, -40])

    // Pointer-driven tilt on the center product visual (desktop only)
    const tiltX = useMotionValue(0)
    const tiltY = useMotionValue(0)
    const springTiltX = useSpring(tiltX, { stiffness: 150, damping: 20 })
    const springTiltY = useSpring(tiltY, { stiffness: 150, damping: 20 })
    const rotateX = useTransform(springTiltY, [-0.5, 0.5], [6, -6])
    const rotateY = useTransform(springTiltX, [-0.5, 0.5], [-6, 6])

    const handleVisualMove = (e: { clientX: number; clientY: number }) => {
        if (window.matchMedia('(pointer: coarse)').matches) return
        if (!visualRef.current) return

        const rect = visualRef.current.getBoundingClientRect()
        tiltX.set((e.clientX - rect.left) / rect.width - 0.5)
        tiltY.set((e.clientY - rect.top) / rect.height - 0.5)
    }

    const handleVisualLeave = () => {
        tiltX.set(0)
        tiltY.set(0)
    }

    return (
        <section
            ref={sectionRef}
            className="relative w-full overflow-hidden bg-background py-20 sm:py-24 md:py-32"
        >

            {/* Background glow */}
            <motion.div
                style={{ y: blobLeftY }}
                className="pointer-events-none absolute -left-24 top-10 h-[260px] w-[260px] rounded-full bg-[#3DC5B8]/10 blur-[60px] sm:-left-40 sm:top-20 sm:h-[500px] sm:w-[500px] sm:blur-[120px]"
            />

            <motion.div
                style={{ y: blobRightY }}
                className="pointer-events-none absolute -right-24 bottom-10 h-[260px] w-[260px] rounded-full bg-primary/10 blur-[70px] sm:-right-40 sm:h-[500px] sm:w-[500px] sm:blur-[120px]"
            />

            <div className="relative mx-auto px-5 sm:px-6 md:px-10 lg:px-16">

                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={staggerGroup}
                    className="mx-auto flex max-w-7xl flex-col items-center text-center"
                >

                    <motion.div variants={fadeUp} className="badge">
                        <span className="relative flex h-2 w-2 shrink-0">
                            <span className="badge-dot absolute inset-0 animate-ping opacity-40" />
                            <span className="badge-dot relative" />
                        </span>
                        How It Works
                    </motion.div>

                    <motion.h2 variants={fadeUp} className="heading mt-5 sm:mt-6">
                        Simple, effective relief in just <span className="heading-highlight">60 seconds</span>
                    </motion.h2>

                    <motion.p variants={fadeUp} className="sub-heading mt-4 sm:mt-5">
                        Three simple steps. Once or twice a day. That&apos;s it.
                    </motion.p>

                </motion.div>


                {/* Main Story */}
                <div className="mx-auto mt-12 grid max-w-6xl items-center gap-10 sm:mt-16 sm:gap-12 lg:grid-cols-[1fr_1.1fr_1fr]">


                    {/* LEFT STEPS */}
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={staggerGroup}
                        className="space-y-4 sm:space-y-5"
                    >

                        {steps.slice(0, 2).map((step) => (

                            <motion.div
                                key={step.number}
                                variants={stepCard}
                                whileHover={{ y: -4 }}
                                transition={{ duration: 0.3, ease }}
                                className="group relative rounded-3xl border border-white/80 bg-white/75 p-5 shadow-[0_15px_50px_rgba(30,35,90,0.06)] backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_20px_60px_rgba(30,35,90,0.10)] sm:p-6"
                            >

                                <div className="flex items-start gap-4 sm:gap-5">

                                    {/* Step number */}
                                    <motion.div
                                        whileHover={{ rotate: 8, scale: 1.08 }}
                                        transition={{ type: 'spring', stiffness: 350, damping: 15 }}
                                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary text-sm font-bold text-white shadow-lg shadow-primary/20 sm:h-12 sm:w-12"
                                    >
                                        {step.number}
                                    </motion.div>

                                    <div className="min-w-0">

                                        <div className="mb-2 flex items-center gap-2">

                                            <div className="text-lg text-[#2FC8BA] sm:text-xl">
                                                {step.icon}
                                            </div>

                                            <h3 className="text-base font-bold text-primary sm:text-lg">
                                                {step.title}
                                            </h3>

                                        </div>

                                        <p className="text-sm leading-6 text-neutral-500">
                                            {step.description}
                                        </p>

                                    </div>

                                </div>

                            </motion.div>

                        ))}

                    </motion.div>


                    {/* CENTER PRODUCT */}
                    <motion.div
                        ref={visualRef}
                        onMouseMove={handleVisualMove}
                        onMouseLeave={handleVisualLeave}
                        initial={{ opacity: 0, scale: 0.92 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.9, ease }}
                        style={{ perspective: 1000 }}
                        className="relative flex min-h-[340px] items-center justify-center sm:min-h-[420px] lg:min-h-[500px]"
                    >

                        {/* Main circular background */}
                        <motion.div
                            style={{ rotateX, rotateY }}
                            className="absolute h-[260px] w-[260px] rounded-full bg-gradient-to-br from-[#E4FAF7] via-[#EEF0FF] to-white sm:h-[340px] sm:w-[340px] lg:h-[420px] lg:w-[420px]"
                        />

                        {/* Inner ring */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                            className="absolute h-[210px] w-[210px] rounded-full border border-white/80 bg-white/30 backdrop-blur-sm sm:h-[280px] sm:w-[280px] lg:h-[340px] lg:w-[340px]"
                        />

                        {/* Glow */}
                        <motion.div
                            animate={{ opacity: [0.6, 1, 0.6] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute h-44 w-44 rounded-full bg-[#3DC5B8]/20 blur-2xl sm:h-72 sm:w-72 sm:blur-3xl"
                        />


                        {/* Product */}
                        <motion.div
                            style={{ x: tiltX, y: tiltY, rotateX, rotateY }}
                            className="relative z-10 overflow-hidden flex h-[240px] w-[240px] items-center justify-center sm:h-[320px] sm:w-[320px] lg:h-[380px] lg:w-[380px]"
                        >

                            <div className='w-full h-full rounded-full overflow-hidden'>
                                <motion.img
                                    src="/images/how-it-works.png"
                                    alt="MEILID eyelid care device"
                                    whileHover={{ scale: 1.06 }}
                                    transition={{ duration: 0.4, ease }}
                                    className="w-full object-cover drop-shadow-[0_35px_35px_rgba(20,25,80,0.20)] "
                                />
                            </div>

                        </motion.div>


                        {/* 60 Second Badge */}
                        <motion.div
                            initial={{ opacity: 0, x: 20, y: -10 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.5, ease }}
                            className="absolute right-0 top-4 z-20 sm:top-16"
                        >
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                                className="flex items-center gap-2.5 rounded-2xl border border-white/80 bg-white/90 px-3 py-2.5 shadow-xl shadow-primary/10 backdrop-blur-md sm:gap-3 sm:px-4 sm:py-3"
                            >
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#3DC5B8] text-xs font-bold text-white sm:h-11 sm:w-11 sm:text-sm">
                                    60s
                                </div>

                                <div>
                                    <p className="text-[10px] text-neutral-400 sm:text-xs">
                                        Your daily routine
                                    </p>

                                    <p className="text-xs font-bold text-primary sm:text-sm">
                                        Done in a minute
                                    </p>
                                </div>

                            </motion.div>
                        </motion.div>


                        {/* Doctor badge */}
                        <motion.div
                            initial={{ opacity: 0, x: -20, y: 10 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.7, ease }}
                            className="absolute bottom-4 left-0 z-20 sm:bottom-12"
                        >
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                                className="rounded-2xl border border-white/80 bg-primary px-4 py-2.5 text-white shadow-xl shadow-primary/20 sm:px-5 sm:py-3"
                            >
                                <p className="text-[10px] text-white/60 sm:text-xs">
                                    Doctor-developed
                                </p>

                                <p className="mt-0.5 text-xs font-semibold sm:mt-1 sm:text-sm">
                                    Gentle. Simple. Effective.
                                </p>
                            </motion.div>
                        </motion.div>

                    </motion.div>


                    {/* RIGHT STEP */}
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={staggerGroup}
                        className="flex flex-col gap-5 sm:gap-6"
                    >

                        <motion.div
                            variants={stepCard}
                            whileHover={{ y: -4 }}
                            transition={{ duration: 0.3, ease }}
                            className="group rounded-3xl border border-white/80 bg-white/75 p-5 shadow-[0_15px_50px_rgba(30,35,90,0.06)] backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_20px_60px_rgba(30,35,90,0.10)] sm:p-6"
                        >

                            <div className="flex items-start gap-4 sm:gap-5">

                                <motion.div
                                    whileHover={{ rotate: 8, scale: 1.08 }}
                                    transition={{ type: 'spring', stiffness: 350, damping: 15 }}
                                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#E5E5FF] text-sm font-bold text-primary sm:h-12 sm:w-12"
                                >
                                    03
                                </motion.div>

                                <div className="min-w-0">

                                    <div className="mb-2 flex items-center gap-2">

                                        <div className="text-lg text-primary sm:text-xl">
                                            <FiRefreshCw />
                                        </div>

                                        <h3 className="text-base font-bold text-primary sm:text-lg">
                                            Rinse & refresh
                                        </h3>

                                    </div>

                                    <p className="text-sm leading-6 text-neutral-500">
                                        Rinse your eyes and the device. Feel the difference immediately.
                                    </p>

                                </div>

                            </div>

                        </motion.div>


                        {/* Routine Card */}
                        <motion.div
                            variants={stepCard}
                            whileHover={{ y: -4 }}
                            transition={{ duration: 0.3, ease }}
                            className="rounded-3xl bg-gradient-to-br from-primary to-[#363A98] p-6 text-white shadow-xl shadow-primary/20 sm:p-7"
                        >

                            <motion.div
                                animate={{ rotate: [0, 12, -6, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                                className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 text-lg sm:mb-5 sm:h-12 sm:w-12 sm:text-xl"
                            >
                                ✦
                            </motion.div>

                            <h3 className="text-lg font-bold sm:text-xl">
                                Make it part of your routine
                            </h3>

                            <p className="mt-2.5 text-sm leading-6 text-white/70 sm:mt-3">
                                Use MEILID once or twice a day as part of your morning or nighttime routine — just like brushing your teeth.
                            </p>

                            <div className="mt-5 flex items-center gap-2 text-sm font-semibold sm:mt-6">

                                <FiCheck className="text-[#3DC5B8]" />

                                Easy to use every day

                            </div>

                        </motion.div>

                    </motion.div>

                </div>


                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2, ease }}
                    className="mt-14 flex justify-center sm:mt-16"
                >

                    <motion.button
                        whileHover={{ scale: 1.04, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                        className="group flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-[0_15px_35px_rgba(45,48,140,0.25)] transition-shadow duration-300 hover:shadow-[0_20px_40px_rgba(45,48,140,0.35)] sm:px-8 sm:py-4 sm:text-base"
                    >

                        Get Your MEILID Today

                        <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />

                    </motion.button>

                </motion.div>

            </div>

        </section>
    )
}

export default HowItWorks
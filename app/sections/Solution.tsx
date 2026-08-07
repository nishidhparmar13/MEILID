"use client"

import React, { useEffect, useRef } from 'react'
import {
    animate,
    Easing,
    motion,
    useMotionValue,
    useScroll,
    useSpring,
    useTransform,
} from 'framer-motion'
import { FiDroplet, FiArrowUpRight } from 'react-icons/fi'
import { LiaEyeSolid } from 'react-icons/lia'
import { PiTarget } from 'react-icons/pi'
import { HiOutlineSparkles } from 'react-icons/hi2'

const ease: Easing = [0.16, 1, 0.3, 1]

const features = [
    {
        icon: PiTarget,
        number: '01',
        title: 'Targets the root cause',
        description:
            'Removes the buildup that drives inflammation — not just the symptoms.',
        accent: 'bg-[#E4F8F5] text-[#27BDB2]',
    },
    {
        icon: FiDroplet,
        number: '02',
        title: 'Restores natural moisture',
        description:
            'Supports healthy oil gland function for a balanced, comfortable tear film.',
        accent: 'bg-[#EAE9FF] text-[#5552C8]',
    },
    {
        icon: LiaEyeSolid,
        number: '03',
        title: 'Gentle yet effective',
        description:
            'Designed for sensitive eyes — safe for daily or twice-daily use.',
        accent: 'bg-[#FFF2E7] text-[#E88B4A]',
    },
]

const stats = [
    { value: '20+', label: 'Years of clinical research', color: '#292C82' },
    { value: '60 sec', label: 'Simple daily routine', color: '#27BDB2' },
    { value: '2×', label: 'Daily use when needed', color: '#E88B4A' },
]

/* =============================================================
    ANIMATED STAT — counts the leading number up to its target
============================================================== */

const parseStat = (str: string) => {
    const match = str.match(/^([\d.]+)(.*)$/)
    if (!match) return { number: null, suffix: str }
    return { number: parseFloat(match[1]), suffix: match[2] }
}

const AnimatedStat = ({ value, delay = 0 }: { value: string; delay?: number }) => {
    const { number, suffix } = parseStat(value)
    const count = useMotionValue(0)
    const isInt = number !== null && Number.isInteger(number)
    const rounded = useTransform(count, (v) =>
        number === null ? value : isInt ? Math.round(v).toString() : v.toFixed(1)
    )

    useEffect(() => {
        if (number === null) return
        const controls = animate(count, number, { duration: 1.2, delay, ease })
        return () => controls.stop()
    }, [count, number, delay])

    return (
        <span>
            <motion.span>{rounded}</motion.span>
            {suffix}
        </span>
    )
}

/* =============================================================
    FEATURE ROW variants
============================================================== */

const featureContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const featureItem = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

const Solution = () => {
    const sectionRef = useRef(null)
    const visualRef = useRef<HTMLDivElement>(null)

    // Scroll-linked parallax for the background blobs
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    })

    const blobLeftY = useTransform(scrollYProgress, [0, 1], [-40, 40])
    const blobRightY = useTransform(scrollYProgress, [0, 1], [40, -40])

    // Gentle pointer-driven tilt on the product visual (desktop only)
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
            className="relative w-full overflow-hidden bg-[#F7F8FC] py-20 sm:py-24 md:py-32"
        >

            {/* Background decoration */}
            <motion.div
                style={{ y: blobLeftY }}
                className="pointer-events-none absolute -left-24 top-10 h-[260px] w-[260px] rounded-full bg-[#43C9BE]/10 blur-[60px] sm:-left-40 sm:top-20 sm:h-[500px] sm:w-[500px] sm:blur-[100px]"
            />

            <motion.div
                style={{ y: blobRightY }}
                className="pointer-events-none absolute -right-24 bottom-0 h-[260px] w-[260px] rounded-full bg-[#5B5BD6]/10 blur-[70px] sm:-right-40 sm:h-[500px] sm:w-[500px] sm:blur-[120px]"
            />

            <div className=" relative mx-auto px-5 sm:px-6 md:px-10 lg:px-16">

                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
                    className="mx-auto flex max-w-7xl flex-col items-center text-center"
                >

                    <motion.div variants={fadeUp} className="badge">
                        <span className="relative flex h-2 w-2 shrink-0">
                            <span className="badge-dot absolute inset-0 animate-ping opacity-40" />
                            <span className="badge-dot relative" />
                        </span>
                        The Solution
                    </motion.div>

                    <motion.h2 variants={fadeUp} className="heading mt-5 sm:mt-6">
                        Meet <span className="heading-highlight">MEILID</span>: the at-home eyelid care system that actually works
                    </motion.h2>

                    <motion.p variants={fadeUp} className="sub-heading mt-4 max-w-2xl sm:mt-5">
                        MEILID combines 20+ years of clinical research with gentle,
                        effective design to give you what drops can&apos;t — true,
                        lasting relief.
                    </motion.p>

                </motion.div>


                {/* Main Product Story */}
                <div className="mx-auto mt-12 grid max-w-6xl items-center gap-10 sm:mt-16 sm:gap-12 lg:grid-cols-[0.9fr_1.1fr]">

                    {/* Product Visual */}
                    <motion.div
                        ref={visualRef}
                        onMouseMove={handleVisualMove}
                        onMouseLeave={handleVisualLeave}
                        initial={{ opacity: 0, scale: 0.92 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.9, ease }}
                        style={{ perspective: 1000 }}
                        className="relative flex min-h-[360px] items-center justify-center sm:min-h-[440px] lg:min-h-[520px]"
                    >

                        {/* Decorative circles */}
                        <motion.div
                            style={{ rotateX, rotateY }}
                            className="absolute h-[280px] w-[280px] rounded-full bg-gradient-to-br from-[#DDF8F4] via-[#EDF0FF] to-white shadow-inner sm:h-[360px] sm:w-[360px] lg:h-[420px] lg:w-[420px]"
                        />

                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                            className="absolute h-[220px] w-[220px] rounded-full border border-white/80 bg-white/30 backdrop-blur-sm sm:h-[280px] sm:w-[280px] lg:h-[340px] lg:w-[340px]"
                        />

                        {/* Glow */}
                        <motion.div
                            animate={{ opacity: [0.6, 1, 0.6] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute h-40 w-40 rounded-full bg-[#3DC5B8]/20 blur-2xl sm:h-64 sm:w-64 sm:blur-3xl"
                        />

                        {/* Product image */}
                        <motion.div
                            style={{ x: tiltX, y: tiltY, rotateX, rotateY }}
                            className="relative z-10 flex h-[260px] w-[260px] items-center justify-center rounded-[50%] sm:h-[320px] sm:w-[320px] lg:h-[380px] lg:w-[380px]"
                        >
                            <div className='w-full h-full overflow-hidden flex items-center bg-white rounded-full'>
                                <motion.img
                                    src="/images/solution.png"
                                    alt="MEILID eyelid care device"
                                    whileHover={{ scale: 1.06 }}
                                    transition={{ duration: 0.4, ease }}
                                    className="relative z-20 w-full object-cover "
                                />
                            </div>
                        </motion.div>

                        {/* Floating badge */}
                        <motion.div
                            initial={{ opacity: 0, x: -20, y: 10 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.5, ease }}
                            className="absolute left-1 top-6 z-30 sm:left-4 sm:top-16"
                        >
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                                className="flex items-center gap-2.5 rounded-2xl border border-white/80 bg-white/80 px-3 py-2.5 shadow-xl shadow-[#22255A]/10 backdrop-blur-md sm:gap-3 sm:px-4 sm:py-3"
                            >
                                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#E4F8F5] text-[#27BDB2] sm:h-10 sm:w-10">
                                    <HiOutlineSparkles className="text-lg sm:text-xl" />
                                </div>

                                <div>
                                    <p className="text-[10px] font-medium text-[#777B96] sm:text-xs">
                                        Doctor-developed
                                    </p>
                                    <p className="text-xs font-bold text-[#171A4B] sm:text-sm">
                                        Clinically researched
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>


                        {/* Floating time badge */}
                        <motion.div
                            initial={{ opacity: 0, x: 20, y: -10 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.7, ease }}
                            className="absolute bottom-8 right-0 z-30 sm:bottom-20"
                        >
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                                className="flex items-center gap-2.5 rounded-2xl border border-white/80 bg-[#171A4B] px-3.5 py-3 text-white shadow-xl shadow-[#171A4B]/20 sm:gap-3 sm:px-5 sm:py-4"
                            >
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#3DC5B8] text-sm font-bold sm:h-10 sm:w-10 sm:text-base">
                                    <AnimatedStat value="60" delay={1.1} />
                                </div>

                                <div>
                                    <p className="text-[10px] text-white/60 sm:text-xs">
                                        Simple daily routine
                                    </p>
                                    <p className="text-xs font-semibold sm:text-sm">
                                        Seconds to cleaner eyelids
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>

                    </motion.div>


                    {/* Feature Content */}
                    <div>

                        <motion.div
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.5 }}
                            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
                            className="mb-7 sm:mb-8"
                        >
                            <motion.p
                                variants={fadeUp}
                                className="text-xs font-bold uppercase tracking-[0.16em] text-[#3DC5B8] sm:text-sm sm:tracking-[0.18em]"
                            >
                                Why MEILID is different
                            </motion.p>

                            <motion.h3
                                variants={fadeUp}
                                className="mt-3 max-w-xl text-2xl font-bold leading-tight tracking-[-0.02em] text-[#171A4B] sm:text-3xl sm:tracking-[-0.03em] md:text-4xl"
                            >
                                More than relief.
                                <br />
                                A better approach to eyelid care.
                            </motion.h3>
                        </motion.div>


                        {/* Features */}
                        <motion.div
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={featureContainer}
                            className="space-y-3 sm:space-y-4"
                        >

                            {features.map((feature) => {
                                const Icon = feature.icon

                                return (
                                    <motion.div
                                        key={feature.number}
                                        variants={featureItem}
                                        whileHover={{ y: -4 }}
                                        transition={{ duration: 0.3, ease }}
                                        className="group relative overflow-hidden rounded-2xl border border-white bg-white/70 p-4 shadow-[0_10px_40px_rgba(30,35,90,0.05)] backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(30,35,90,0.10)] sm:p-5"
                                    >

                                        {/* Hover accent */}
                                        <div className="absolute inset-y-0 left-0 w-1 bg-[#3DC5B8] opacity-0 transition group-hover:opacity-100" />

                                        <div className="flex gap-4 sm:gap-5">

                                            <motion.div
                                                whileHover={{ rotate: 8, scale: 1.08 }}
                                                transition={{ type: 'spring', stiffness: 350, damping: 15 }}
                                                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-xl sm:h-14 sm:w-14 sm:text-2xl ${feature.accent}`}
                                            >
                                                <Icon />
                                            </motion.div>

                                            <div className="min-w-0 flex-1">

                                                <div className="flex items-center justify-between gap-2">

                                                    <h4 className="text-base font-bold text-[#171A4B] sm:text-lg">
                                                        {feature.title}
                                                    </h4>

                                                    <span className="shrink-0 text-xs font-bold tracking-widest text-[#B2B5C7]">
                                                        {feature.number}
                                                    </span>

                                                </div>

                                                <p className="mt-1.5 max-w-lg text-sm leading-6 text-[#747993] sm:mt-2">
                                                    {feature.description}
                                                </p>

                                            </div>

                                        </div>

                                    </motion.div>
                                )
                            })}

                        </motion.div>


                        {/* Bottom CTA / Trust strip */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.3, ease }}
                            className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-4"
                        >

                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="group flex items-center gap-3 rounded-full bg-[#292C82] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#292C82]/20 transition-colors hover:bg-[#202366] sm:px-6 sm:py-3.5"
                            >
                                Discover how it works

                                <motion.span
                                    className="flex"
                                    transition={{ duration: 0.3 }}
                                >
                                    <FiArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                </motion.span>

                            </motion.button>

                            <div className="flex items-center gap-2 text-xs text-[#747993] sm:text-sm">

                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#DDF7F3] text-xs font-bold text-[#27BDB2]">
                                    ✓
                                </span>

                                Gentle enough for everyday care

                            </div>

                        </motion.div>

                    </div>

                </div>


                {/* Bottom Metrics */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.4 }}
                    variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
                    className="mx-auto mt-14 grid max-w-5xl grid-cols-1 overflow-hidden rounded-3xl border border-white bg-white/60 shadow-[0_15px_60px_rgba(30,35,90,0.06)] backdrop-blur-xl sm:mt-20 sm:grid-cols-3"
                >

                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            variants={fadeUp}
                            className={`p-5 text-center sm:p-6 ${i !== stats.length - 1 ? 'sm:border-r sm:border-[#E9EAF2]' : ''
                                } ${i !== 0 ? 'border-t border-[#E9EAF2] sm:border-t-0' : ''}`}
                        >
                            <p className="text-xl font-bold sm:text-2xl" style={{ color: stat.color }}>
                                <AnimatedStat value={stat.value} delay={0.2 + i * 0.15} />
                            </p>
                            <p className="mt-1 text-xs text-[#777B96] sm:text-sm">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}

                </motion.div>

            </div>
        </section>
    )
}

export default Solution
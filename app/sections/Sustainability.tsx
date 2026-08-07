"use client"

import React, { useEffect, useRef } from 'react'
import {
    animate,
    Easing,
    motion,
    useMotionValue,
    useScroll,
    useTransform,
} from 'framer-motion'
import { LuLeaf, LuRecycle, LuLeafyGreen } from 'react-icons/lu'

const ease: Easing = [0.16, 1, 0.3, 1]

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

const staggerGroup = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
}

/* =============================================================
    ANIMATED STAT — counts the leading number up to its target
============================================================== */

const parseStat = (str: string) => {
    const match = str.match(/^([\d.]+)(.*)$/)
    if (!match) return { number: null, suffix: str }
    return { number: parseFloat(match[1]), suffix: match[2] }
}

type AnimatedStatProps = { value: string; delay?: number }

const AnimatedStat = ({ value, delay = 0 }: AnimatedStatProps) => {
    const { number, suffix } = parseStat(value)
    const count = useMotionValue(0)
    const rounded = useTransform(count, (v) =>
        number === null ? value : Math.round(v).toString()
    )

    useEffect(() => {
        if (number === null) return
        const controls = animate(count, number, { duration: 1.4, delay, ease })
        return () => controls.stop()
    }, [count, number, delay])

    return (
        <span>
            <motion.span>{rounded}</motion.span>
            {suffix}
        </span>
    )
}

const Sustainability = () => {
    const sectionRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    })

    const shapeTopY = useTransform(scrollYProgress, [0, 1], [-30, 30])
    const shapeBottomY = useTransform(scrollYProgress, [0, 1], [30, -30])

    return (
        <section
            ref={sectionRef}
            className="flex min-h-dvh w-full items-center overflow-hidden bg-[#F3FAF9] px-5 py-20 sm:px-6 sm:py-24 md:px-10 md:py-28 lg:px-16"
        >

            <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

                {/* ================= LEFT CONTENT ================= */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.4 }}
                    variants={staggerGroup}
                    className="flex flex-col items-center text-center lg:items-start lg:text-left"
                >

                    {/* Badge */}
                    <motion.div variants={fadeUp} className="badge">
                        <span className="relative flex h-2 w-2 shrink-0">
                            <span className="badge-dot absolute inset-0 animate-ping opacity-40" />
                            <span className="badge-dot relative" />
                        </span>
                        Sustainability
                    </motion.div>

                    {/* Heading */}
                    <motion.h2
                        variants={fadeUp}
                        className="mt-6 max-w-xl heading flex flex-col items-start"
                    >
                        Good for your eyes.
                        <br />
                        <span className="heading-highlight">
                            Good for the planet.
                        </span>
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        variants={fadeUp}
                        className="mt-6 max-w-xl text-[15px] leading-7 text-neutral-500 sm:mt-7 sm:text-base sm:leading-8 md:text-lg"
                    >
                        Single-use wipes and disposable pads create unnecessary
                        waste. MEILID is reusable, durable, and designed to last —
                        helping you save money while reducing your environmental
                        footprint.
                    </motion.p>

                    {/* Stats */}
                    <motion.div
                        variants={{
                            hidden: {},
                            show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
                        }}
                        className="mt-8 grid w-full max-w-xl grid-cols-2 gap-3 sm:mt-10 sm:gap-4"
                    >

                        <motion.div
                            variants={fadeUp}
                            whileHover={{ y: -4 }}
                            transition={{ duration: 0.3, ease }}
                            className="rounded-2xl border border-white bg-white px-5 py-5 text-left shadow-[0_10px_30px_rgba(35,39,100,0.05)] sm:px-6 sm:py-6"
                        >
                            <p className="text-2xl font-bold tracking-tight text-[#2DB9AE] sm:text-3xl md:text-4xl">
                                <AnimatedStat value="700+" delay={0.4} />
                            </p>

                            <p className="mt-2 max-w-[140px] text-sm leading-6 text-neutral-500">
                                wipes replaced per year
                            </p>
                        </motion.div>

                        <motion.div
                            variants={fadeUp}
                            whileHover={{ y: -4 }}
                            transition={{ duration: 0.3, ease }}
                            className="rounded-2xl border border-white bg-white px-5 py-5 text-left shadow-[0_10px_30px_rgba(35,39,100,0.05)] sm:px-6 sm:py-6"
                        >
                            <p className="text-2xl font-bold tracking-tight text-[#2DB9AE] sm:text-3xl md:text-4xl">
                                <AnimatedStat value="12+" delay={0.55} /> mo
                            </p>

                            <p className="mt-2 max-w-[140px] text-sm leading-6 text-neutral-500">
                                typical device lifespan
                            </p>
                        </motion.div>

                    </motion.div>
                </motion.div>


                {/* ================= RIGHT VISUAL ================= */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.9, ease }}
                    className="relative flex min-h-[360px] items-center justify-center sm:min-h-[440px] lg:min-h-[500px]"
                >

                    {/* Background Decorative Shapes */}
                    <motion.div
                        style={{ y: shapeTopY }}
                        animate={{ scale: [1, 1.08, 1] }}
                        transition={{ scale: { duration: 6, repeat: Infinity, ease: 'easeInOut' } }}
                        className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#DDF5F1] sm:h-52 sm:w-52 lg:h-64 lg:w-64"
                    />

                    <motion.div
                        style={{ y: shapeBottomY }}
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ scale: { duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 } }}
                        className="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-[#E6F8F5] sm:h-32 sm:w-32 lg:h-40 lg:w-40"
                    />

                    {/* Main Visual */}
                    <div className="relative flex aspect-square w-full max-w-[340px] items-center justify-center sm:max-w-[400px] lg:max-w-[480px]">

                        {/* Outer Ring */}
                        <div className="absolute inset-4 rounded-full border border-[#CDEDE8] sm:inset-5" />

                        {/* Middle Ring */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
                            className="absolute inset-12 rounded-full border border-dashed border-[#B8E4DE] sm:inset-16"
                        />

                        {/* Main Card */}
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.4, ease }}
                            className="relative z-10 flex aspect-square w-[72%] flex-col items-center justify-center overflow-hidden rounded-full bg-white text-center shadow-[0_25px_70px_rgba(35,39,100,0.10)]"
                        >

                            {/* Soft Glow */}
                            <motion.div
                                animate={{ opacity: [0.6, 1, 0.6] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute -top-16 h-36 w-36 rounded-full bg-[#EAF8F6] sm:-top-20 sm:h-48 sm:w-48"
                            />

                            {/* Icon */}
                            <motion.div
                                whileHover={{ rotate: 10, scale: 1.08 }}
                                transition={{ type: 'spring', stiffness: 350, damping: 15 }}
                                className="relative mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#EAF8F6] text-2xl text-[#2DB9AE] sm:mb-5 sm:h-16 sm:w-16 sm:text-3xl"
                            >
                                <LuLeafyGreen />
                            </motion.div>

                            <p className="relative text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl">
                                <AnimatedStat value="700+" delay={0.6} />
                            </p>

                            <p className="relative mt-2 max-w-[220px] text-xs leading-6 text-neutral-500 sm:mt-3 sm:text-sm">
                                disposable eye wipes replaced
                                every year
                            </p>

                            <div className="relative mt-4 flex items-center gap-2 text-xs font-semibold text-[#2DB9AE] sm:mt-5 sm:text-sm">
                                <LuRecycle />
                                Less waste. More care.
                            </div>

                        </motion.div>

                        {/* Floating Leaf */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.6, rotate: -15 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: -15 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.7, ease }}
                            className="absolute left-[6%] top-[18%] sm:left-[8%] sm:top-[20%]"
                        >
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                whileHover={{ rotate: 0, scale: 1.1 }}
                                className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-xl text-[#2DB9AE] shadow-[0_12px_30px_rgba(35,39,100,0.08)] sm:h-14 sm:w-14 sm:text-2xl"
                            >
                                <LuLeaf />
                            </motion.div>
                        </motion.div>

                        {/* Floating Recycle */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.6, rotate: 12 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 12 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.9, ease }}
                            className="absolute bottom-[13%] right-[6%] sm:bottom-[15%] sm:right-[8%]"
                        >
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                                whileHover={{ rotate: 0, scale: 1.1 }}
                                className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-xl text-[#2DB9AE] shadow-[0_12px_30px_rgba(35,39,100,0.08)] sm:h-14 sm:w-14 sm:text-2xl"
                            >
                                <LuRecycle />
                            </motion.div>
                        </motion.div>

                    </div>
                </motion.div>

            </div>

        </section>
    )
}

export default Sustainability
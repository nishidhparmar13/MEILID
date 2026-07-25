"use client"

import Image from 'next/image'
import React from 'react'
import { HiSparkles } from 'react-icons/hi2'

import { useEffect, useRef, useState } from 'react'
import { motion, Variants, useInView, animate } from 'framer-motion'
import { GrLinkNext } from 'react-icons/gr'
import { FaShieldAlt, FaStar } from 'react-icons/fa'
import { FaRegCircleCheck } from 'react-icons/fa6'
import { HiOutlineEye } from 'react-icons/hi2'
import { IoWaterOutline } from 'react-icons/io5'
import { MdOutlineVerifiedUser } from 'react-icons/md'
const container: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
}

const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
}
const stats = [
    { icon: HiOutlineEye, label: 'Relieves\nIrritation', value: 92 },
    { icon: IoWaterOutline, label: 'Improves\nEyelid Health', value: 89 },
    { icon: MdOutlineVerifiedUser, label: 'Supports\nLong-Term Relief', value: 90 },
]

const StatNumber = ({ value, delay = 0 }: { value: number; delay?: number }) => {
    const ref = useRef<HTMLSpanElement>(null)
    const inView = useInView(ref, { once: true, margin: '-10% 0px' })
    const [display, setDisplay] = useState(0)

    useEffect(() => {
        if (!inView) return
        const controls = animate(0, value, {
            duration: 1.4,
            delay,
            ease: [0.22, 1, 0.36, 1],
            onUpdate: (v) => setDisplay(Math.round(v)),
        })
        return () => controls.stop()
    }, [inView, value, delay])

    return (
        <span ref={ref} className="text-xl font-extrabold text-[#30308d]">
            {display}%
        </span>
    )
}
const checkItems = ['Doctor-Developed', '20+ Years Research', 'Clinically Tested', 'Safe Daily Use']

const HeroOld = () => {
    return (
        <div className="py-16 flex min-h-screen px-[5vw] relative overflow-hidden bg-[#fbfbfe]">
            {/* Ambient background blobs */}
            <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.55, 0.35] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-40 -right-40 w-[560px] h-[560px] rounded-full bg-teal-200/40 blur-[100px] pointer-events-none"
            />
            <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.25, 0.45, 0.25] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-0 left-1/4 w-[420px] h-[420px] rounded-full bg-indigo-200/30 blur-[100px] pointer-events-none"
            />
            {/* subtle grain overlay for texture */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply"
                style={{
                    backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                }}
            />

            {/* Left: Text content */}
            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className="w-[50%] h-full flex flex-col justify-center gap-7 relative z-10 pr-14"
            >
                {/* Badge */}
                <motion.div
                    variants={item}
                    className="inline-flex w-fit items-center gap-2 rounded-full bg-teal-50 ring-1 ring-teal-200/60 px-4 py-1.5"
                >
                    <span className="relative flex h-2 w-2">
                        <motion.span
                            animate={{ scale: [1, 2.2], opacity: [0.6, 0] }}
                            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut' }}
                            className="absolute inline-flex h-full w-full rounded-full bg-teal-400"
                        />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
                    </span>
                    <span className="text-teal-700 font-semibold text-[13px] tracking-wide uppercase">
                        Doctor-Developed Eyelid Care
                    </span>
                </motion.div>

                {/* Heading */}
                <div className="text-6xl font-extrabold leading-[1.15] tracking-tight ">
                    <motion.div variants={item} className="text-[#0f0e2e]">
                        Tired of gritty,
                    </motion.div>
                    <motion.div variants={item} className="text-[#0f0e2e]">
                        burning eyes that
                    </motion.div>
                    <motion.div
                        variants={item}
                        className="bg-gradient-to-r from-teal-500 to-teal-300 bg-clip-text text-transparent"
                    >
                        never seem to
                    </motion.div>
                    <motion.span
                        variants={item}
                        className="relative w-fit inline-block bg-gradient-to-r from-teal-500 to-teal-300 bg-clip-text text-transparent"
                    >
                        get better?
                        <svg className="absolute -bottom-2 left-0 w-full" height="16" viewBox="0 0 300 16" fill="none">
                            <motion.path
                                d="M2 10 Q 75 2, 150 9 T 298 8"
                                stroke="#5eead4"
                                strokeWidth="5"
                                strokeLinecap="round"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 0.9, delay: 1, ease: 'easeInOut' }}
                            />
                        </svg>
                    </motion.span>
                </div>

                {/* Subheading + paragraph grouped, tighter to each other than to the rest */}
                <motion.div variants={item} className="flex flex-col gap-3 max-w-md">
                    <p className="text-[#30308d] font-bold text-lg leading-snug">
                        MEILID targets the root cause of chronic eye discomfort — so you can
                        finally feel relief that lasts.
                    </p>
                    <p className="text-neutral-500 text-[15px] leading-relaxed">
                        If drops, warm compresses, and expensive treatments haven&apos;t worked,
                        you&apos;re not alone. Most eye irritation starts at the eyelids, where
                        debris, oils, and inflammation build up every day.
                    </p>
                </motion.div>

                {/* CTA row */}
                <motion.div variants={item} className="flex items-center gap-6">
                    <button className="group/btn cursor-pointer relative flex items-center gap-2 rounded-full bg-gradient-to-r from-[#5b3fd9] to-[#30308d] text-white pl-7 pr-3 py-3 text-base font-semibold overflow-hidden transition-all duration-300 ease-out hover:shadow-xl hover:shadow-[#30308d]/40 hover:scale-[1.03] active:scale-95 ">
                        <span className="relative z-10">Get Relief Now</span>
                        <span className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm transition-transform duration-500 ease-out group-hover/btn:translate-x-1 group-hover/btn:rotate-45">
                            <GrLinkNext className="text-white text-sm" />
                        </span>
                        <span className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500 ease-out bg-gradient-to-r from-teal-600 to-teal-900" />
                    </button>

                    <div className="flex items-center gap-2">
                        <FaShieldAlt className="text-teal-500 text-xl shrink-0" />
                        <span className="text-neutral-600 text-sm font-medium">
                            60-day money-back guarantee
                        </span>
                    </div>
                </motion.div>

                {/* Social proof — one compact line instead of a separate stacked row */}
                <motion.div variants={item} className="flex items-center gap-2 text-sm text-neutral-500">
                    <div className="flex items-center gap-1 text-amber-400 text-xs">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <FaStar key={i} />
                        ))}
                    </div>
                    <span className="font-semibold text-neutral-700">4.9</span>
                    <span className="text-neutral-300">•</span>
                    <span>
                        Trusted by <span className="font-semibold text-neutral-700">12,400+</span> patients
                    </span>
                </motion.div>

                {/* Trust checklist */}
                <motion.div variants={container} className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-1 border-t border-neutral-100">
                    {checkItems.map((label) => (
                        <motion.div
                            key={label}
                            variants={item}
                            whileHover={{ x: 3 }}
                            className="flex items-center gap-2 mt-4"
                        >
                            <FaRegCircleCheck className="text-[#30308d] text-lg shrink-0" />
                            <span className="text-neutral-700 text-sm font-medium">{label}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Right: Image / visual section */}
            <motion.div
                initial={{ opacity: 0, scale: 0.92, x: 40 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="w-[50%] h-dvh flex items-start justify-center relative z-10 "
            >
                <div className="relative w-[500px] h-[500px] ">
                    {/* Glow rings */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
                        className="absolute inset-0 rounded-full border border-dashed border-teal-300/50"
                    />
                    <motion.div
                        animate={{ scale: [1, 1.06, 1] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute inset-10 rounded-full bg-gradient-to-br from-teal-100 via-indigo-50 to-purple-100 blur-2xl"
                    />

                    {/* Floating product image */}
                    <motion.div
                        animate={{ y: [0, -16, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        <div className="relative w-[500px] h-[500px] rounded-[2rem] overflow-hidden shadow-2xl shadow-indigo-900/20 bg-white/50 backdrop-blur-sm border border-white/70">
                            <Image
                                src="/images/hero.png"
                                alt="MEILID eyelid care product"
                                fill
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </motion.div>

                    {/* Floating proof card: relief stat */}
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: [0, -8, 0], scale: 1 }}
                        transition={{
                            opacity: { duration: 0.6, delay: 1.1 },
                            scale: { duration: 0.6, delay: 1.1 },
                            y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1.4 },
                        }}
                        className="absolute -top-2 -left-8 flex items-center gap-2 bg-white rounded-2xl shadow-xl shadow-indigo-900/10 px-4 py-3 ring-1 ring-black/5"
                    >
                        <div className="w-9 h-9 rounded-full bg-teal-50 flex items-center justify-center">
                            <HiSparkles className="text-teal-500 text-base" />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-[#0f0e2e] leading-none">98%</p>
                            <p className="text-[11px] text-neutral-500 mt-1">felt relief in 2 weeks</p>
                        </div>
                    </motion.div>

                    {/* Floating proof card: rating */}
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.9 }}
                        animate={{ opacity: 1, y: [0, 10, 0], scale: 1 }}
                        transition={{
                            opacity: { duration: 0.6, delay: 1.3 },
                            scale: { duration: 0.6, delay: 1.3 },
                            y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.6 },
                        }}
                        className="absolute -bottom-4 -right-6 flex items-center gap-2 bg-white rounded-2xl shadow-xl shadow-indigo-900/10 px-4 py-3 ring-1 ring-black/5"
                    >
                        <div className="flex items-center gap-1 text-amber-400 text-sm">
                            <FaStar />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-[#0f0e2e] leading-none">4.9 / 5</p>
                            <p className="text-[11px] text-neutral-500 mt-1">from 3,200 reviews</p>
                        </div>
                    </motion.div>

                    {/* Floating accent dots */}
                    <motion.span
                        animate={{ y: [0, -10, 0], opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute top-6 right-14 w-4 h-4 rounded-full bg-teal-300"
                    />
                    <motion.span
                        animate={{ y: [0, 12, 0], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
                        className="absolute bottom-14 left-2 w-3 h-3 rounded-full bg-indigo-400"
                    />
                </div>
                {/* Stats column */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{ visible: { transition: { staggerChildren: 0.15, delayChildren: 0.9 } } }}
                    className="flex flex-col items-center shrink-0 pl-4"
                >
                    {stats.map((stat, i) => (
                        <React.Fragment key={stat.label}>
                            {i !== 0 && (
                                <motion.span
                                    initial={{ scaleY: 0 }}
                                    animate={{ scaleY: 1 }}
                                    transition={{ duration: 0.4, delay: 0.9 + i * 0.15 }}
                                    className="w-px h-8 border-l border-dashed border-neutral-300 origin-top"
                                />
                            )}
                            <motion.div
                                variants={item}
                                whileHover={{ y: -3 }}
                                className="flex flex-col items-center text-center gap-2 py-1"
                            >
                                <div className="w-11 h-11 rounded-full bg-white ring-1 ring-teal-100 shadow-sm flex items-center justify-center">
                                    <stat.icon className="text-teal-500 text-xl" />
                                </div>
                                <p className="text-sm text-neutral-600 leading-tight whitespace-pre-line">
                                    {stat.label}
                                </p>
                                <StatNumber value={stat.value} delay={0.2 + i * 0.1} />
                            </motion.div>
                        </React.Fragment>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default HeroOld
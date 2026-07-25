"use client"

import { useRef, type ReactNode } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import {
    FiArrowRight,
    FiCheck,
    FiShield,
    FiStar,
    FiActivity,
} from 'react-icons/fi'

const ease = [0.16, 1, 0.3, 1] as const

interface MagneticButtonProps {
    children: ReactNode
}

const MagneticButton = ({ children }: MagneticButtonProps) => {
    const ref = useRef<HTMLButtonElement>(null)

    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const springX = useSpring(x, {
        stiffness: 200,
        damping: 15,
        mass: 0.4,
    })

    const springY = useSpring(y, {
        stiffness: 200,
        damping: 15,
        mass: 0.4,
    })

    const handleMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!ref.current) return

        const rect = ref.current.getBoundingClientRect()

        const relX = e.clientX - (rect.left + rect.width / 2)
        const relY = e.clientY - (rect.top + rect.height / 2)

        x.set(relX * 0.25)
        y.set(relY * 0.25)
    }

    const handleLeave = () => {
        x.set(0)
        y.set(0)
    }

    return (
        <motion.div
            style={{
                x: springX,
                y: springY,
            }}
        >
            <motion.button
                ref={ref}
                onMouseMove={handleMove}
                onMouseLeave={handleLeave}
                whileTap={{ scale: 0.96 }}
                className="group flex cursor-pointer items-center gap-3 rounded-full bg-[#11143F] px-7 py-4 text-base font-semibold text-white shadow-[0_15px_40px_rgba(17,20,63,0.18)] transition-all duration-300 hover:bg-[#2DB9AE] hover:shadow-[0_20px_50px_rgba(45,185,174,0.25)]"
            >
                {children}

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:bg-white/20">
                    <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
            </motion.button>
        </motion.div>
    )
}

interface FloatingBadgeProps {
    children: ReactNode
    className?: string
    delay?: number
}

const FloatingBadge = ({
    children,
    className = '',
    delay = 0,
}: FloatingBadgeProps) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 20,
                scale: 0.9,
            }}
            animate={{
                opacity: 1,
                y: 0,
                scale: 1,
            }}
            transition={{
                duration: 0.7,
                delay,
                ease,
            }}
            className={`absolute z-30 ${className}`}
        >
            <motion.div
                animate={{
                    y: [0, -8, 0],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay,
                }}
                className="flex items-center gap-3 rounded-2xl border border-white/70 bg-white/85 px-4 py-3 shadow-[0_15px_45px_rgba(17,20,63,0.10)] backdrop-blur-xl"
            >
                {children}
            </motion.div>
        </motion.div>
    )
}

const Hero = () => {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const springConfig = {
        stiffness: 50,
        damping: 20,
        mass: 0.7,
    }

    const smoothX = useSpring(mouseX, springConfig)
    const smoothY = useSpring(mouseY, springConfig)

    const productX = useTransform(smoothX, [-1, 1], [-20, 20])
    const productY = useTransform(smoothY, [-1, 1], [-15, 15])

    const glowX = useTransform(smoothX, [-1, 1], [-35, 35])
    const glowY = useTransform(smoothY, [-1, 1], [-25, 25])

    const handlePointerMove = (e: React.MouseEvent<HTMLElement>) => {
        const { innerWidth, innerHeight } = window

        mouseX.set((e.clientX / innerWidth) * 2 - 1)
        mouseY.set((e.clientY / innerHeight) * 2 - 1)
    }

    return (
        <section
            onMouseMove={handlePointerMove}
            className="relative min-h-dvh w-full overflow-hidden bg-[#F7F8F5]"
        >

            {/* =====================================================
                BACKGROUND
            ====================================================== */}

            {/* Main Teal Glow */}
            <motion.div
                style={{
                    x: glowX,
                    y: glowY,
                }}
                className="pointer-events-none absolute right-[-10%] top-[10%] h-[700px] w-[700px] rounded-full bg-[#2DB9AE]/[0.08] blur-[120px]"
            />

            {/* Secondary Glow */}
            <div className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-[#11143F]/[0.035] blur-[120px]" />

            {/* Decorative Circle */}
            <div className="pointer-events-none absolute right-[-150px] top-[-150px] h-[500px] w-[500px] rounded-full border border-[#2DB9AE]/10" />

            <div className="relative z-10 mx-auto flex min-h-dvh w-full max-w-[1500px] items-center px-6 py-24 md:px-10 lg:px-16">

                <div className="grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">


                    {/* =================================================
                        LEFT — CONTENT
                    ================================================== */}

                    <div className="relative z-20 flex flex-col items-start">

                        {/* Trust Badge */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.7,
                                ease,
                            }}
                            className="flex items-center gap-2 rounded-full border border-[#2DB9AE]/20 bg-[#EAF8F6] px-4 py-2 text-sm font-medium text-[#239B92]"
                        >
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="absolute inset-0 animate-ping rounded-full bg-[#2DB9AE]/40" />

                                <span className="relative h-2.5 w-2.5 rounded-full bg-[#2DB9AE]" />
                            </span>

                            Advanced Eyelid Hygiene Solution
                        </motion.div>


                        {/* Main Heading */}
                        <motion.h1
                            initial={{
                                opacity: 0,
                                y: 40,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.9,
                                delay: 0.1,
                                ease,
                            }}
                            className="mt-8 max-w-3xl text-[clamp(3.8rem,6.5vw,7rem)] font-light leading-[0.9] tracking-[-0.06em] text-[#11143F]"
                        >
                            Gentle cleaning.
                            <br />

                            <span className="font-medium text-[#2DB9AE]">
                                Better eyelid health.
                            </span>
                        </motion.h1>


                        {/* Description */}
                        <motion.p
                            initial={{
                                opacity: 0,
                                y: 25,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.8,
                                delay: 0.3,
                                ease,
                            }}
                            className="mt-8 max-w-xl text-base leading-8 text-[#11143F]/55 md:text-lg"
                        >
                            A medical-grade silicone brush designed to
                            gently clean the lash line and support a
                            healthier daily eyelid care routine.
                        </motion.p>


                        {/* CTA */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 25,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.8,
                                delay: 0.4,
                                ease,
                            }}
                            className="mt-9"
                        >
                            <MagneticButton>
                                Explore MEILID
                            </MagneticButton>
                        </motion.div>


                        {/* Trust Points */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.8,
                                delay: 0.55,
                                ease,
                            }}
                            className="mt-8 flex flex-wrap gap-x-6 gap-y-3"
                        >
                            <div className="flex items-center gap-2 text-sm text-[#11143F]/50">
                                <FiCheck className="text-[#2DB9AE]" />
                                Doctor-developed
                            </div>

                            <div className="flex items-center gap-2 text-sm text-[#11143F]/50">
                                <FiCheck className="text-[#2DB9AE]" />
                                Medical-grade silicone
                            </div>

                            <div className="flex items-center gap-2 text-sm text-[#11143F]/50">
                                <FiCheck className="text-[#2DB9AE]" />
                                Reusable
                            </div>
                        </motion.div>

                    </div>


                    {/* =================================================
                        RIGHT — PRODUCT VISUAL
                    ================================================== */}

                    <div className="relative flex min-h-[550px] items-center justify-center lg:min-h-[700px]">

                        {/* Large Product Glow */}
                        <motion.div
                            style={{
                                x: glowX,
                                y: glowY,
                            }}
                            className="absolute h-[420px] w-[420px] rounded-full bg-[#2DB9AE]/20 blur-[100px]"
                        />

                        {/* Decorative Rings */}
                        <div className="absolute h-[520px] w-[520px] rounded-full border border-[#2DB9AE]/10" />

                        <motion.div
                            animate={{
                                rotate: 360,
                            }}
                            transition={{
                                duration: 45,
                                repeat: Infinity,
                                ease: 'linear',
                            }}
                            className="absolute h-[620px] w-[620px] rounded-full border border-dashed border-[#2DB9AE]/10"
                        />


                        {/* Product */}
                        <motion.div
                            style={{
                                x: productX,
                                y: productY,
                            }}
                            initial={{
                                opacity: 0,
                                scale: 0.75,
                                y: 50,
                                rotate: -8,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                y: [0, -12, 0],
                                rotate: 0,
                            }}
                            transition={{
                                opacity: {
                                    duration: 0.9,
                                    delay: 0.2,
                                    ease,
                                },
                                scale: {
                                    duration: 0.9,
                                    delay: 0.2,
                                    ease,
                                },
                                rotate: {
                                    duration: 0.9,
                                    delay: 0.2,
                                    ease,
                                },
                                y: {
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                    delay: 1,
                                },
                            }}
                            className="relative z-20"
                        >
                            <img
                                src="/images/product.png"
                                alt="MEILID eyelid care device"
                                width={560}
                                height={560}
                                className="relative z-10 h-auto w-[360px] object-contain drop-shadow-[0_35px_60px_rgba(17,20,63,0.18)] sm:w-[440px] lg:w-[540px]"
                            />
                        </motion.div>


                        {/* =================================================
                            FLOATING TRUST BADGES
                        ================================================== */}

                        {/* Doctor Developed */}
                        <FloatingBadge
                            delay={0.8}
                            className="left-[2%] top-[18%] lg:left-[4%]"
                        >
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF8F6] text-[#2DB9AE]">
                                <FiShield />
                            </div>

                            <div>
                                <p className="text-xs font-semibold text-[#11143F]">
                                    Doctor Developed
                                </p>

                                <p className="mt-0.5 text-[10px] text-[#11143F]/40">
                                    Designed for daily care
                                </p>
                            </div>
                        </FloatingBadge>


                        {/* Rating */}
                        <FloatingBadge
                            delay={1}
                            className="right-[0%] top-[25%] lg:right-[2%]"
                        >
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF7E8] text-[#E7A73D]">
                                <FiStar />
                            </div>

                            <div>
                                <div className="flex items-center gap-1">
                                    <span className="text-sm font-bold text-[#11143F]">
                                        4.9
                                    </span>

                                    <div className="flex gap-0.5 text-[#E7A73D]">
                                        <FiStar size={10} fill="currentColor" />
                                        <FiStar size={10} fill="currentColor" />
                                        <FiStar size={10} fill="currentColor" />
                                        <FiStar size={10} fill="currentColor" />
                                        <FiStar size={10} fill="currentColor" />
                                    </div>
                                </div>

                                <p className="mt-0.5 text-[10px] text-[#11143F]/40">
                                    Customer rated
                                </p>
                            </div>
                        </FloatingBadge>


                        {/* Medical Grade */}
                        <FloatingBadge
                            delay={1.2}
                            className="bottom-[15%] left-[5%] lg:left-[8%]"
                        >
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#11143F]/5 text-[#11143F]">
                                <FiActivity />
                            </div>

                            <div>
                                <p className="text-xs font-semibold text-[#11143F]">
                                    Medical-Grade
                                </p>

                                <p className="mt-0.5 text-[10px] text-[#11143F]/40">
                                    Soft silicone bristles
                                </p>
                            </div>
                        </FloatingBadge>


                        {/* Small Floating Dot */}
                        <motion.div
                            animate={{
                                y: [0, -12, 0],
                                opacity: [0.4, 1, 0.4],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                            className="absolute right-[18%] bottom-[20%] h-3 w-3 rounded-full bg-[#2DB9AE] shadow-[0_0_25px_rgba(45,185,174,0.5)]"
                        />

                    </div>

                </div>

            </div>


            {/* =========================================================
                BOTTOM SCROLL INDICATOR
            ========================================================== */}

            <motion.div
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    delay: 1.5,
                    duration: 1,
                }}
                className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
            >
                <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#11143F]/30">
                    Discover
                </span>

                <motion.div
                    animate={{
                        y: [0, 6, 0],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className="h-8 w-px bg-[#2DB9AE]/40"
                />
            </motion.div>

        </section>
    )
}

export default Hero
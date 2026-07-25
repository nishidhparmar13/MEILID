"use client"

import { useRef } from 'react'
import type { IconType } from 'react-icons'
import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
    useMotionTemplate,
    useReducedMotion,
    type Easing,
    type Variants,
    type TargetAndTransition,
} from 'framer-motion'
import {
    FiEye,
    FiSmile,
    FiWind,
    FiActivity,
} from 'react-icons/fi'

const ease: Easing = [0.16, 1, 0.3, 1]

interface Audience {
    Icon: IconType
    number: string
    title: string
    description: string
    bg: string
    circleA: string
    circleB: string
    iconColor: string
    iconTransform: TargetAndTransition
}

const audiences: Audience[] = [
    {
        Icon: FiEye,
        number: '01',
        title: 'Chronic eye irritation',
        description:
            'Get to the root of blepharitis, MGD, and inflammation.',
        bg: '#F8FAFA',
        circleA: '#DDF7F3',
        circleB: '#BDECE5',
        iconColor: '#2DB9AE',
        iconTransform: { scale: 1.1, rotate: -5 },
    },
    {
        Icon: FiSmile,
        number: '02',
        title: 'Makeup & lash extensions',
        description:
            'Remove mascara, liner, and glue residue without harsh rubbing.',
        bg: '#F8FAFA',
        circleA: '#F4E9FF',
        circleB: '#E6D2FF',
        iconColor: '#9B6FE8',
        iconTransform: { scale: 1.1, rotate: -5 },
    },
    {
        Icon: FiWind,
        number: '03',
        title: 'Allergy sufferers',
        description:
            'Clear away pollen and allergens trapped in your lashes.',
        bg: '#F8FAFA',
        circleA: '#E8F2FF',
        circleB: '#CFE3FF',
        iconColor: '#5797E8',
        iconTransform: { x: 8 },
    },
    {
        Icon: FiActivity,
        number: '04',
        title: 'Post-procedure care',
        description:
            'Ideal after LASIK, cataract surgery, or other eye procedures.',
        bg: '#F8FAFA',
        circleA: '#FFF1DC',
        circleB: '#FFE2B5',
        iconColor: '#E89A3D',
        iconTransform: { scale: 1.1 },
    },
]

const staggerGroup: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
}

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

const cardGrid: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const cardEntrance: Variants = {
    hidden: { opacity: 0, y: 34 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}

const accentVariants: Variants = {
    rest: { width: 40 },
    hover: { width: 80 },
}

const floatIconVariants: Variants = {
    rest: { y: 0, scale: 1, rotate: 0 },
    hover: { y: -4, scale: 1.08, rotate: -6 },
}

/* ================= AUDIENCE CARD ================= */
/* Cursor-reactive tilt + spotlight, spring-driven lift, a shine sweep,
   and color-reactive content — all keyed off each card's own accent color. */

interface AudienceCardProps {
    item: Audience
    prefersReducedMotion: boolean
}

const AudienceCard = ({ item, prefersReducedMotion }: AudienceCardProps) => {
    const { Icon } = item
    const cardRef = useRef<HTMLDivElement | null>(null)

    const mouseX = useMotionValue(0.5)
    const mouseY = useMotionValue(0.5)

    const springConfig = { stiffness: 220, damping: 22, mass: 0.4 }
    const rotateX = useSpring(useTransform(mouseY, [0, 1], [8, -8]), springConfig)
    const rotateY = useSpring(useTransform(mouseX, [0, 1], [-8, 8]), springConfig)

    const spotlightX = useTransform(mouseX, (v) => `${v * 100}%`)
    const spotlightY = useTransform(mouseY, (v) => `${v * 100}%`)
    const spotlightBg = useMotionTemplate`radial-gradient(260px circle at ${spotlightX} ${spotlightY}, ${item.iconColor}1A, transparent 75%)`

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (prefersReducedMotion || !cardRef.current) return
        const rect = cardRef.current.getBoundingClientRect()
        mouseX.set((e.clientX - rect.left) / rect.width)
        mouseY.set((e.clientY - rect.top) / rect.height)
    }

    const handleMouseLeave = () => {
        mouseX.set(0.5)
        mouseY.set(0.5)
    }

    const cardMotion: Variants = {
        rest: {
            y: 0,
            borderColor: 'rgba(229,229,229,0.7)',
            boxShadow: '0 10px 35px rgba(35,39,100,0.04)',
        },
        hover: {
            y: -10,
            borderColor: `${item.iconColor}55`,
            boxShadow: `0 28px 60px rgba(35,39,100,0.12), 0 0 0 1px ${item.iconColor}22`,
        },
    }

    const iconVariants: Variants = {
        rest: { scale: 1, rotate: 0, x: 0 },
        hover: item.iconTransform,
    }

    const numberVariants: Variants = {
        rest: { scale: 1, color: '#a3a3a3' },
        hover: { scale: 1.15, color: item.iconColor },
    }

    const titleVariants: Variants = {
        rest: { color: '#11143F' },
        hover: { color: item.iconColor },
    }

    const descriptionVariants: Variants = {
        rest: { opacity: 0.85, y: 0 },
        hover: { opacity: 1, y: -2 },
    }

    const shineVariants: Variants = {
        rest: { x: '-130%' },
        hover: { x: '230%' },
    }

    return (
        <motion.div
            variants={cardEntrance}
            className="group"
            style={{ perspective: 900 }}
        >
            <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                initial="rest"
                animate="rest"
                whileHover="hover"
                variants={cardMotion}
                transition={{ duration: 0.45, ease }}
                style={{
                    rotateX: prefersReducedMotion ? 0 : rotateX,
                    rotateY: prefersReducedMotion ? 0 : rotateY,
                    transformStyle: 'preserve-3d',
                }}
                className="relative flex min-h-[340px] flex-col overflow-hidden rounded-[24px] border bg-white sm:min-h-[380px] sm:rounded-[28px] lg:min-h-[400px]"
            >
                {/* Cursor spotlight */}
                {!prefersReducedMotion && (
                    <motion.div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        style={{ background: spotlightBg }}
                    />
                )}

                {/* Visual Area */}
                <div
                    className="relative h-[170px] w-full sm:h-[190px] lg:h-[210px]"
                    style={{ backgroundColor: item.bg }}
                >
                    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">

                        {/* Shine sweep */}
                        <motion.div
                            aria-hidden
                            variants={shineVariants}
                            transition={{ duration: 0.9, ease }}
                            className="pointer-events-none absolute -inset-y-12 left-0 z-10 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                        />

                        <motion.div
                            animate={prefersReducedMotion ? undefined : { scale: [1, 1.06, 1] }}
                            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute h-28 w-28 rounded-full sm:h-32 sm:w-32 lg:h-36 lg:w-36"
                            style={{ backgroundColor: item.circleA }}
                        />

                        <motion.div
                            animate={prefersReducedMotion ? undefined : { scale: [1, 1.1, 1] }}
                            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                            className="absolute -right-5 -top-5 h-20 w-20 rounded-full sm:h-24 sm:w-24"
                            style={{ backgroundColor: item.circleB }}
                        />

                        <motion.div
                            variants={iconVariants}
                            transition={{ type: 'spring', stiffness: 260, damping: 15 }}
                            className="relative z-10"
                            style={{ color: item.iconColor, transform: 'translateZ(30px)' }}
                        >
                            <Icon className="text-[70px] sm:text-[80px] lg:text-[90px]" />
                        </motion.div>

                    </div>

                    {/* Number */}
                    <motion.span
                        variants={numberVariants}
                        transition={{ duration: 0.35, ease }}
                        className="absolute left-5 top-4 text-xs font-semibold tracking-[0.2em] sm:left-6 sm:top-5"
                    >
                        {item.number}
                    </motion.span>

                    {/* Floating Icon */}
                    <motion.div
                        variants={floatIconVariants}
                        transition={{ type: 'spring', stiffness: 300, damping: 14 }}
                        className="absolute bottom-[-20px] left-5 flex h-10 w-10 items-center justify-center rounded-xl border border-white bg-white text-base shadow-lg sm:bottom-[-22px] sm:left-6 sm:h-11 sm:w-11 sm:text-lg"
                        style={{ color: item.iconColor }}
                    >
                        <Icon />
                    </motion.div>
                </div>

                {/* Content */}
                <div className="relative flex flex-1 flex-col p-6 pt-9 sm:p-7 sm:pt-10">
                    <motion.h3
                        variants={titleVariants}
                        transition={{ duration: 0.3, ease }}
                        className="text-lg font-semibold leading-tight sm:text-xl"
                    >
                        {item.title}
                    </motion.h3>

                    <motion.p
                        variants={descriptionVariants}
                        transition={{ duration: 0.3, ease }}
                        className="mt-3 text-sm leading-7 text-neutral-500 sm:mt-4"
                    >
                        {item.description}
                    </motion.p>

                    {/* Bottom Accent */}
                    <div className="mt-auto pt-7 sm:pt-8">
                        <motion.div
                            variants={accentVariants}
                            transition={{ duration: 0.4, ease }}
                            className="h-1 rounded-full"
                            style={{ backgroundColor: item.iconColor }}
                        />
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

const WhoItsFor = () => {
    const prefersReducedMotion = useReducedMotion() ?? false

    return (
        <section className="flex min-h-dvh w-full flex-col items-center gap-5 bg-background px-5 py-20 sm:gap-6 sm:px-6 sm:py-24 md:px-10 md:py-32 lg:px-16">

            {/* Badge */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease }}
                className="badge"
            >
                <span className="relative flex h-2 w-2 shrink-0">
                    <span className="badge-dot absolute inset-0 animate-ping opacity-40" />
                    <span className="badge-dot relative" />
                </span>
                Who It&apos;s For
            </motion.div>

            {/* Heading */}
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.6 }}
                variants={staggerGroup}
                className="flex max-w-4xl flex-col items-center gap-4 text-center"
            >
                <motion.h2 variants={fadeUp} className="heading">
                    Not just for dry eyes — your all-in-one eyelid care solution
                </motion.h2>
            </motion.div>

            {/* Audience Cards */}
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                variants={cardGrid}
                className="mt-8 grid w-full max-w-7xl grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4"
                style={{ perspective: 1200 }}
            >
                {audiences.map((item) => (
                    <AudienceCard
                        key={item.title}
                        item={item}
                        prefersReducedMotion={prefersReducedMotion}
                    />
                ))}
            </motion.div>

        </section>
    )
}

export default WhoItsFor
'use client'

import type { ReactNode } from 'react'
import { motion, type Easing } from 'framer-motion'
import type { IconType } from 'react-icons'
import { FiCheck, FiX, FiAlertTriangle } from 'react-icons/fi'

const ease: Easing = [0.16, 1, 0.3, 1]

const fadeUp = {
    hidden: { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
}

/* Section — a titled block of content, staggers its children in on view */
export const PolicySection = ({
    title,
    children,
}: {
    title: string
    children: ReactNode
}) => (
    <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
        className="scroll-mt-28"
    >
        <motion.h2
            variants={fadeUp}
            className="text-2xl font-bold tracking-tight text-[#171A4B] md:text-3xl"
        >
            {title}
        </motion.h2>

        <div className="mt-5 flex flex-col gap-5">{children}</div>
    </motion.section>
)

export const Lede = ({ children }: { children: ReactNode }) => (
    <motion.p variants={fadeUp} className="text-base leading-relaxed text-[#4B4F6E]">
        {children}
    </motion.p>
)

export const SubHeading = ({ children }: { children: ReactNode }) => (
    <motion.h3 variants={fadeUp} className="text-lg font-bold text-[#171A4B]">
        {children}
    </motion.h3>
)

/* DetailCard — a single labeled fact, laid out in a grid of cards */
export const DetailCard = ({
    icon: Icon,
    label,
    accent = 'bg-[#E4F8F5] text-[#27BDB2]',
    children,
}: {
    icon: IconType
    label: string
    accent?: string
    children: ReactNode
}) => (
    <motion.div
        variants={fadeUp}
        whileHover={{ y: -3 }}
        transition={{ duration: 0.25, ease }}
        className="flex gap-4 rounded-2xl border border-white bg-white/70 p-5 shadow-[0_10px_40px_rgba(30,35,90,0.05)] backdrop-blur-xl"
    >
        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg ${accent}`}>
            <Icon />
        </div>

        <div className="min-w-0">
            <p className="text-sm font-bold text-[#171A4B]">{label}</p>
            <p className="mt-1 text-sm leading-6 text-[#747993]">{children}</p>
        </div>
    </motion.div>
)

export const DetailGrid = ({ children }: { children: ReactNode }) => (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">{children}</div>
)

/* Covered / not covered lists */
export const CheckList = ({
    items,
    variant = 'covered',
}: {
    items: ReactNode[]
    variant?: 'covered' | 'not-covered'
}) => {
    const covered = variant === 'covered'

    return (
        <motion.ul
            variants={fadeUp}
            className={`flex flex-col gap-3 rounded-2xl border p-5 ${covered
                    ? 'border-[#CFF3EE] bg-[#F3FDFB]'
                    : 'border-[#F5E3E3] bg-[#FDF6F6]'
                }`}
        >
            {items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm leading-6 text-[#4B4F6E]">
                    <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs ${covered ? 'bg-[#27BDB2] text-white' : 'bg-[#D8676A] text-white'
                            }`}
                    >
                        {covered ? <FiCheck /> : <FiX />}
                    </span>
                    <span>{item}</span>
                </li>
            ))}
        </motion.ul>
    )
}

/* Callout — for legal/attention notes */
export const Callout = ({ children, tone = 'info' }: { children: ReactNode; tone?: 'info' | 'warning' }) => (
    <motion.div
        variants={fadeUp}
        className={`flex gap-3 rounded-2xl border p-5 text-sm leading-6 ${tone === 'warning'
                ? 'border-[#F6E3C4] bg-[#FFF8EC] text-[#8A5A17]'
                : 'border-[#E3E7FA] bg-[#F5F7FF] text-[#3A3F7A]'
            }`}
    >
        <FiAlertTriangle className="mt-0.5 shrink-0 text-base" />
        <p>{children}</p>
    </motion.div>
)

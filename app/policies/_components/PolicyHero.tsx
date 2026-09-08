'use client'

import Link from 'next/link'
import { motion, type Easing } from 'framer-motion'
import { FiChevronRight } from 'react-icons/fi'
import type { IconType } from 'react-icons'

const ease: Easing = [0.16, 1, 0.3, 1]

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}

interface PolicyHeroProps {
    icon: IconType
    accent: string
    glow: string
    label: string
    title: string
    summary: string
}

const PolicyHero = ({ icon: Icon, accent, glow, label, title, summary }: PolicyHeroProps) => {
    return (
        <div className="relative overflow-hidden text-center">
            <motion.div
                animate={{ opacity: [0.5, 0.9, 0.5], scale: [1, 1.08, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="pointer-events-none absolute left-1/2 top-0 h-[260px] w-[260px] -translate-x-1/2 rounded-full blur-[90px] sm:h-[360px] sm:w-[360px]"
                style={{ background: `${glow}22` }}
            />

            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.6 }}
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
                className="relative mx-auto flex max-w-2xl flex-col items-center"
            >
                {/* Breadcrumb */}
                <motion.nav
                    variants={fadeUp}
                    aria-label="Breadcrumb"
                    className="flex items-center gap-1.5 text-xs font-medium text-[#8B8FB0] sm:text-sm"
                >
                    <Link href="/policies" className="transition-colors hover:text-[#3DC5B8]">
                        Policies
                    </Link>
                    <FiChevronRight className="text-[#B2B5C7]" />
                    <span className="text-[#171A4B]">{label}</span>
                </motion.nav>

                <motion.div
                    variants={fadeUp}
                    className={`mt-6 flex h-16 w-16 items-center justify-center rounded-2xl text-2xl shadow-sm sm:h-20 sm:w-20 sm:text-3xl ${accent}`}
                >
                    <Icon />
                </motion.div>

                <motion.h1
                    variants={fadeUp}
                    className="mt-6 text-3xl font-bold tracking-tight text-[#171A4B] sm:text-4xl md:text-5xl"
                >
                    {title}
                </motion.h1>

                <motion.p
                    variants={fadeUp}
                    className="mt-4 max-w-xl text-base leading-relaxed text-[#747993] sm:text-lg"
                >
                    {summary}
                </motion.p>
            </motion.div>
        </div>
    )
}

export default PolicyHero

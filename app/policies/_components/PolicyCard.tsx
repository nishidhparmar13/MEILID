'use client'

import Link from 'next/link'
import { motion, type Easing } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import type { PolicyMeta } from '../_data'

const ease: Easing = [0.16, 1, 0.3, 1]

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}

const PolicyCard = ({ policy }: { policy: PolicyMeta }) => {
    const Icon = policy.icon

    return (
        <motion.div variants={fadeUp}>
            <Link href={`/policies/${policy.slug}`} className="block h-full">
                <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3, ease }}
                    className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white bg-white/70 p-6 shadow-[0_10px_40px_rgba(30,35,90,0.05)] backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(30,35,90,0.10)] sm:p-7"
                >
                    <div
                        className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-20"
                        style={{ background: policy.glow }}
                    />

                    <motion.div
                        whileHover={{ rotate: 8, scale: 1.08 }}
                        transition={{ type: 'spring', stiffness: 350, damping: 15 }}
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-xl sm:h-14 sm:w-14 sm:text-2xl ${policy.accent}`}
                    >
                        <Icon />
                    </motion.div>

                    <h3 className="mt-5 text-lg font-bold text-[#171A4B] sm:text-xl">
                        {policy.title}
                    </h3>

                    <p className="mt-2 flex-1 text-sm leading-6 text-[#747993]">
                        {policy.summary}
                    </p>

                    <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#3DC5B8]">
                        Read policy
                        <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                </motion.div>
            </Link>
        </motion.div>
    )
}

export default PolicyCard

'use client'

import Link from 'next/link'
import { motion, type Easing } from 'framer-motion'
import { FiArrowUpRight, FiMail } from 'react-icons/fi'
import { policies } from '../_data'

const ease: Easing = [0.16, 1, 0.3, 1]

const PolicyNav = ({ current }: { current: string }) => {
    const others = policies.filter((p) => p.slug !== current)

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease }}
            className="mx-auto mt-20 max-w-3xl sm:mt-24"
        >
            <p className="text-center text-xs font-bold uppercase tracking-[0.16em] text-[#B2B5C7]">
                Other policies
            </p>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
                {others.map((p) => {
                    const Icon = p.icon
                    return (
                        <Link
                            key={p.slug}
                            href={`/policies/${p.slug}`}
                            className="group flex items-center gap-2 rounded-full border border-[#E9EAF2] bg-white px-4 py-2.5 text-sm font-medium text-[#171A4B]/75 shadow-[0_4px_16px_rgba(17,20,63,0.04)] transition-colors hover:border-[#3DC5B8]/40 hover:text-[#171A4B]"
                        >
                            <span className={`flex h-6 w-6 items-center justify-center rounded-full text-xs ${p.accent}`}>
                                <Icon />
                            </span>
                            {p.shortTitle}
                        </Link>
                    )
                })}
            </div>

            <div className="mt-10 flex flex-col items-center gap-4 rounded-3xl border border-white bg-white/70 p-6 text-center shadow-[0_10px_40px_rgba(30,35,90,0.05)] backdrop-blur-xl sm:mt-12 sm:p-8">
                <p className="text-base font-semibold text-[#171A4B] sm:text-lg">
                    Still have questions?
                </p>
                <p className="max-w-md text-sm leading-6 text-[#747993]">
                    Our team is happy to help with anything about your order,
                    your device, or these policies.
                </p>

                <a
                    href="mailto:Revijunllc@gmail.com"
                    className="group mt-1 inline-flex items-center gap-2 rounded-full bg-[#171A4B] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#171A4B]/20 transition-colors hover:bg-[#292C82]"
                >
                    <FiMail />
                    Revijunllc@gmail.com
                    <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
            </div>
        </motion.div>
    )
}

export default PolicyNav

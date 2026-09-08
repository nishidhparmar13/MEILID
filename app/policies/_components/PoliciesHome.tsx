'use client'

import { motion, type Easing } from 'framer-motion'
import { FiMail } from 'react-icons/fi'
import PolicyCard from './PolicyCard'
import { policies } from '../_data'

const ease: Easing = [0.16, 1, 0.3, 1]

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}

const PoliciesHome = () => {
    return (
        <main className="relative w-full overflow-hidden bg-[#F7F8FC] pb-24 pt-32 sm:pb-28 sm:pt-36">

            {/* Background decoration */}
            <motion.div
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="pointer-events-none absolute -left-24 top-10 h-[260px] w-[260px] rounded-full bg-[#43C9BE]/10 blur-[60px] sm:-left-40 sm:top-20 sm:h-[500px] sm:w-[500px] sm:blur-[100px]"
            />

            <motion.div
                animate={{ opacity: [1, 0.7, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="pointer-events-none absolute -right-24 bottom-0 h-[260px] w-[260px] rounded-full bg-[#5B5BD6]/10 blur-[70px] sm:-right-40 sm:h-[500px] sm:w-[500px] sm:blur-[120px]"
            />

            <div className="relative mx-auto max-w-6xl px-5 sm:px-6 md:px-10 lg:px-16">

                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
                    className="mx-auto flex max-w-2xl flex-col items-center text-center"
                >
                    <motion.div variants={fadeUp} className="badge">
                        <span className="relative flex h-2 w-2 shrink-0">
                            <span className="badge-dot absolute inset-0 animate-ping opacity-40" />
                            <span className="badge-dot relative" />
                        </span>
                        Policies
                    </motion.div>

                    <motion.h1 variants={fadeUp} className="heading mt-5 sm:mt-6">
                        Straightforward answers,{' '}
                        <span className="heading-highlight">no fine print maze</span>
                    </motion.h1>

                    <motion.p variants={fadeUp} className="sub-heading mt-4 sm:mt-5">
                        Everything you need to know about ordering, returning, and caring
                        for your MEILID — in plain language.
                    </motion.p>
                </motion.div>

                {/* Cards */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
                    className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {policies.map((policy) => (
                        <PolicyCard key={policy.slug} policy={policy} />
                    ))}
                </motion.div>

                {/* Contact strip */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.7, ease }}
                    className="mx-auto mt-14 flex max-w-3xl flex-col items-center gap-4 rounded-3xl border border-white bg-white/70 p-7 text-center shadow-[0_10px_40px_rgba(30,35,90,0.05)] backdrop-blur-xl sm:mt-16 sm:p-9"
                >
                    <p className="text-lg font-bold text-[#171A4B] sm:text-xl">
                        Can&rsquo;t find what you&rsquo;re looking for?
                    </p>
                    <p className="max-w-md text-sm leading-6 text-[#747993]">
                        Reach out and our team will get you a straight answer.
                    </p>

                    <a
                        href="mailto:Revijunllc@gmail.com"
                        className="group mt-1 inline-flex items-center gap-2 rounded-full bg-[#171A4B] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#171A4B]/20 transition-colors hover:bg-[#292C82]"
                    >
                        <FiMail />
                        Revijunllc@gmail.com
                    </a>
                </motion.div>
            </div>
        </main>
    )
}

export default PoliciesHome

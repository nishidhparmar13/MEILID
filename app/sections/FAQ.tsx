"use client"

import React, { useState } from 'react'
import { AnimatePresence, Easing, motion, Variants } from 'framer-motion'
import { FiMinus, FiPlus } from 'react-icons/fi'

const ease: Easing = [0.16, 1, 0.3, 1]

const faqs = [
    {
        question: 'Is MEILID safe for sensitive eyes?',
        answer:
            'Yes. MEILID is designed specifically for delicate eye tissue. The soft silicone bristles are gentler than cotton swabs or washcloths.',
    },
    {
        question: 'How often should I use it?',
        answer:
            'MEILID can be used once or twice a day as part of your regular eyelid hygiene routine. Follow your eye care professional’s recommendations if you are using it for a specific condition.',
    },
    {
        question: 'Can I use it with my current eye drops or medications?',
        answer:
            'In most cases, MEILID can be used alongside your existing eye care routine. If you use prescription eye medications, consult your eye care professional about the best timing and routine for your specific treatment.',
    },
    {
        question: 'How long does it last?',
        answer:
            'MEILID is designed to be reusable and durable for long-term daily use. With proper cleaning and care, the device can last for many months.',
    },
    {
        question: "What if it doesn't work for me?",
        answer:
            'If MEILID does not meet your expectations, please contact our support team. We are here to help you get the most out of your eyelid care routine.',
    },
]

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

const staggerGroup: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
}

const listContainer: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
}

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const toggleFAQ = (index: number) => {
        setOpenIndex((current) => (current === index ? null : index))
    }

    return (
        <section
            id="faq"
            className="flex min-h-dvh w-full flex-col items-center bg-background px-5 py-20 sm:px-6 sm:py-24 md:px-10 md:py-28 lg:px-16">

            {/* Header */}
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.6 }}
                variants={staggerGroup}
                className="flex max-w-3xl flex-col items-center text-center"
            >

                {/* Badge */}
                <motion.div variants={fadeUp} className="badge">
                    <span className="relative flex h-2 w-2 shrink-0">
                        <span className="badge-dot absolute inset-0 animate-ping opacity-40" />
                        <span className="badge-dot relative" />
                    </span>
                    FAQ
                </motion.div>

                <motion.h2 variants={fadeUp} className="heading mt-5 sm:mt-6">
                    Your questions,
                    <span className="heading-highlight"> answered.</span>
                </motion.h2>

                <motion.p
                    variants={fadeUp}
                    className="mt-4 max-w-2xl text-[15px] leading-7 text-neutral-500 sm:mt-5 sm:text-base md:text-lg"
                >
                    Everything you need to know about MEILID and
                    making it part of your daily eyelid care routine.
                </motion.p>
            </motion.div>

            {/* FAQ List */}
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
                variants={listContainer}
                className="mt-10 flex w-full max-w-4xl flex-col gap-3 sm:mt-14 sm:gap-4"
            >

                {faqs.map((faq, index) => {
                    const isOpen = openIndex === index

                    return (
                        <motion.div
                            key={faq.question}
                            variants={itemVariants}
                            whileHover={{ y: -2 }}
                            transition={{ duration: 0.25, ease }}
                            className={`
                                group overflow-hidden rounded-[20px] sm:rounded-[24px]
                                border transition-colors duration-500
                                ${isOpen
                                    ? 'border-[#BFE9E3] bg-[#F5FCFB] shadow-[0_15px_45px_rgba(45,185,174,0.08)]'
                                    : 'border-neutral-200/60 bg-white hover:border-[#CDEDE8] hover:bg-[#FCFEFD]'
                                }
                            `}
                        >

                            {/* Question */}
                            <button
                                type="button"
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={isOpen}
                                className="flex w-full items-center gap-4 px-5 py-5 text-left sm:gap-5 sm:px-6 sm:py-7 md:px-8 md:py-8"
                            >

                                {/* Number */}
                                <span
                                    className={`
                                        hidden text-xs font-semibold tracking-[0.2em]
                                        transition-colors duration-300 sm:block
                                        ${isOpen
                                            ? 'text-[#2DB9AE]'
                                            : 'text-neutral-300'
                                        }
                                    `}
                                >
                                    {String(index + 1).padStart(2, '0')}
                                </span>

                                {/* Question */}
                                <span
                                    className={`
                                        flex-1 text-[15px] font-semibold leading-6
                                        transition-colors duration-300 sm:text-base sm:leading-7 md:text-lg
                                        ${isOpen
                                            ? 'text-primary'
                                            : 'text-primary/90'
                                        }
                                    `}
                                >
                                    {faq.question}
                                </span>

                                {/* Toggle */}
                                <motion.span
                                    animate={{ rotate: isOpen ? 180 : 0 }}
                                    transition={{ duration: 0.4, ease }}
                                    className={`
                                        flex h-9 w-9 shrink-0 items-center
                                        justify-center rounded-full border
                                        transition-colors duration-300 sm:h-10 sm:w-10
                                        ${isOpen
                                            ? 'border-[#2DB9AE] bg-[#2DB9AE] text-white'
                                            : 'border-neutral-200 bg-white text-[#2DB9AE] group-hover:border-[#2DB9AE] group-hover:bg-[#EAF8F6]'
                                        }
                                    `}
                                >
                                    <AnimatePresence mode="wait" initial={false}>
                                        {isOpen ? (
                                            <motion.span
                                                key="minus"
                                                initial={{ opacity: 0, scale: 0.6 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.6 }}
                                                transition={{ duration: 0.2 }}
                                                className="flex"
                                            >
                                                <FiMinus className="text-base sm:text-lg" />
                                            </motion.span>
                                        ) : (
                                            <motion.span
                                                key="plus"
                                                initial={{ opacity: 0, scale: 0.6 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.6 }}
                                                transition={{ duration: 0.2 }}
                                                className="flex"
                                            >
                                                <FiPlus className="text-base sm:text-lg" />
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </motion.span>

                            </button>

                            {/* Answer */}
                            <AnimatePresence initial={false}>
                                {isOpen && (
                                    <motion.div
                                        key="content"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease }}
                                        className="overflow-hidden"
                                    >

                                        <div className="px-5 pb-6 sm:px-6 sm:pb-8 sm:pl-[76px] sm:pr-16 md:pb-9">

                                            {/* Divider */}
                                            <div className="mb-5 h-px w-full bg-[#DDF2EF] sm:mb-6" />

                                            <p className="max-w-3xl text-sm leading-6 text-neutral-500 sm:leading-7 md:text-base md:leading-8">
                                                {faq.answer}
                                            </p>

                                        </div>

                                    </motion.div>
                                )}
                            </AnimatePresence>

                        </motion.div>
                    )
                })}

            </motion.div>

            {/* Bottom Support Message */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease }}
                className="mt-10 flex items-center gap-2 text-sm text-neutral-400 sm:mt-12"
            >
                <span>Still have questions?</span>

                <motion.button
                    whileHover={{ y: -1 }}
                    type="button"
                    className="font-semibold text-[#2DB9AE] transition-colors hover:text-[#239B92]"
                >
                    Contact us
                </motion.button>
            </motion.div>

        </section>
    )
}

export default FAQ
"use client"
import React, { useState } from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'

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

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const toggleFAQ = (index: number) => {
        setOpenIndex((current) => (current === index ? null : index))
    }

    return (
        <section className="container-box flex min-h-dvh w-full flex-col items-center gap-6 bg-background">

            {/* Badge */}
            <div className="badge">
                <div className="badge-dot" />
                FAQ
            </div>

            {/* Heading */}
            <div className="flex max-w-3xl flex-col items-center text-center">
                <h2 className="heading">
                    Your questions, answered
                </h2>
            </div>

            {/* Accordion */}
            <div className="mt-10 flex w-full max-w-5xl flex-col gap-4">
                {faqs.map((faq, index) => {
                    const isOpen = openIndex === index

                    return (
                        <div
                            key={faq.question}
                            className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${isOpen
                                ? 'border-[#2FC8BA] shadow-[0_10px_35px_rgba(35,39,100,0.06)]'
                                : 'border-neutral-200/70'
                                }`}
                        >
                            {/* Question */}
                            <button
                                type="button"
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={isOpen}
                                className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left md:px-8 md:py-7"
                            >
                                <span className="text-lg font-semibold text-primary md:text-xl">
                                    {faq.question}
                                </span>

                                <span
                                    className={`flex h-8 w-8 shrink-0 items-center justify-center text-xl text-[#2DB9AE] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                                        }`}
                                >
                                    {isOpen ? <FiMinus /> : <FiPlus />}
                                </span>
                            </button>

                            {/* Answer */}
                            <div
                                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen
                                    ? 'grid-rows-[1fr]'
                                    : 'grid-rows-[0fr]'
                                    }`}
                            >
                                <div className="overflow-hidden">
                                    <div className="px-6 pb-7 md:px-8">
                                        <p className="max-w-4xl text-base leading-7 text-neutral-500 md:text-lg">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </section>
    )
}

export default FAQ
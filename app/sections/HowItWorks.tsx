import React from 'react'
import { FiDroplet, FiEye, FiRefreshCw, FiArrowRight } from 'react-icons/fi'

const steps = [
    {
        number: '01',
        icon: <FiDroplet />,
        title: 'Wet & lather',
        description:
            'Wet MEILID and add a gentle cleanser — or use it as-is with warm water.',
    },
    {
        number: '02',
        icon: <FiEye />,
        title: 'Cleanse',
        description:
            'Glide along your lash line in small circles. The soft bristles lift away buildup without irritation.',
    },
    {
        number: '03',
        icon: <FiRefreshCw />,
        title: 'Rinse & refresh',
        description:
            'Rinse your eyes and the device. Feel the difference immediately.',
    },
]

const HowItWorks = () => {
    return (
        <section className="container-box flex min-h-dvh w-full flex-col items-center gap-6 bg-background">

            {/* Badge */}
            <div className="badge">
                <div className="badge-dot" />
                How It Works
            </div>

            {/* Heading */}
            <div className="flex max-w-3xl flex-col items-center gap-4 text-center">
                <h2 className="heading">
                    Simple, effective relief in just 60 seconds
                </h2>

                <p className="sub-heading">
                    Three simple steps. Once or twice a day. That&apos;s it.
                </p>
            </div>

            {/* Steps */}
            <div className="mt-10 grid w-full max-w-6xl grid-cols-1 gap-5 md:grid-cols-3">
                {steps.map((step) => (
                    <div
                        key={step.number}
                        className="group relative flex min-h-[250px] flex-col rounded-2xl border border-neutral-200/70 bg-white p-7 shadow-[0_10px_35px_rgba(35,39,100,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(35,39,100,0.10)]"
                    >
                        {/* Number */}
                        <div className="mb-7 flex items-center justify-between">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-lg font-bold text-white shadow-sm">
                                {step.number}
                            </div>

                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3DC5B826] text-xl text-primary transition-transform duration-300 group-hover:rotate-6">
                                {step.icon}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="mt-auto">
                            <h3 className="text-xl font-semibold text-primary">
                                {step.title}
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-neutral-500">
                                {step.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pro Tip */}
            <div className="mt-6 flex w-full max-w-6xl items-center gap-4 rounded-2xl border border-neutral-200/70 border-l-4 border-l-[#2FC8BA] bg-white px-6 py-5 shadow-[0_8px_30px_rgba(35,39,100,0.04)]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#3DC5B826] text-lg text-[#2FC8BA]">
                    ✦
                </div>

                <p className="text-sm text-neutral-600 md:text-base">
                    <span className="font-semibold text-primary">
                        Pro tip:
                    </span>{' '}
                    Use MEILID as part of your morning or nighttime routine —
                    just like brushing your teeth.
                </p>
            </div>

            {/* CTA */}
            <button
                className="group mt-5 flex items-center gap-3 rounded-full bg-primary px-8 py-4 font-semibold text-white shadow-[0_12px_25px_rgba(45,48,140,0.22)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(45,48,140,0.30)]"
            >
                Get Your MEILID Today

                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
        </section>
    )
}

export default HowItWorks
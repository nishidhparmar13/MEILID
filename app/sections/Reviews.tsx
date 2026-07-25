import React from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { LuStethoscope } from 'react-icons/lu'

const reviews = [
    {
        initials: 'SM',
        name: 'Sarah M.',
        age: 34,
        review:
            "I've struggled with dry, irritated eyes for years. Drops, compresses, prescriptions — nothing worked long-term. MEILID changed everything. Within a week, my eyes felt clearer than they have in a decade.",
    },
    {
        initials: 'RT',
        name: 'Robert T.',
        age: 52,
        review:
            "As a daily contacts wearer, I used to wake up with crusty lashes and red eyes. MEILID takes 60 seconds and has completely eliminated that morning discomfort. I wish I'd found this sooner.",
    },
    {
        initials: 'JL',
        name: 'Jessica L.',
        age: 27,
        review:
            "I love my lash extensions, but buildup was causing constant irritation. MEILID gently cleans without damaging my lashes. It's now part of my nightly routine — my eyes have never felt better.",
    },
]

const Reviews = () => {
    return (
        <section className="container-box flex min-h-dvh w-full flex-col items-center gap-6 bg-background">

            {/* Badge */}
            <div className="badge">
                <div className="badge-dot" />
                Reviews
            </div>

            {/* Heading */}
            <div className="flex max-w-3xl flex-col items-center gap-4 text-center">
                <h2 className="heading">
                    Thousands are already feeling the difference
                </h2>

                <p className="sub-heading">
                    Real stories from people who finally found relief that lasts.
                </p>
            </div>

            {/* Reviews */}
            <div className="mt-10 grid w-full max-w-6xl grid-cols-1 gap-5 md:grid-cols-3">
                {reviews.map((review) => (
                    <article
                        key={review.name}
                        className="group flex min-h-[270px] flex-col rounded-2xl border border-neutral-200/70 bg-white p-7 shadow-[0_10px_35px_rgba(35,39,100,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(35,39,100,0.09)]"
                    >
                        {/* Stars */}
                        <div className="mb-5 flex gap-1 text-lg text-[#FFAE3D]">
                            {'★★★★★'.split('').map((star, index) => (
                                <span key={index}>{star}</span>
                            ))}
                        </div>

                        {/* Review */}
                        <p className="text-[15px] leading-7 text-neutral-600">
                            &quot;{review.review}&quot;
                        </p>

                        {/* User */}
                        <div className="mt-auto flex items-center gap-3 pt-7">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-[#2FC8BA] text-xs font-bold text-white">
                                {review.initials}
                            </div>

                            <p className="text-sm font-semibold text-primary">
                                {review.name}, {review.age}
                            </p>
                        </div>
                    </article>
                ))}
            </div>

            {/* Doctor Review */}
            <div className="mt-5 flex w-full max-w-6xl flex-col gap-6 rounded-2xl bg-primary p-7 text-white shadow-[0_15px_40px_rgba(35,39,130,0.18)] md:flex-row md:items-center md:p-9">

                {/* Icon */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-2xl text-[#5EDBD0]">
                    <LuStethoscope />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3">
                    <div className="flex gap-1 text-lg text-[#FFAE3D]">
                        {'★★★★★'.split('').map((star, index) => (
                            <span key={index}>{star}</span>
                        ))}
                    </div>

                    <p className="text-base italic leading-7 text-white/90 md:text-lg">
                        &quot;MEILID is the most effective at-home eyelid hygiene
                        tool I&apos;ve seen in my 15 years of practice. I recommend
                        it to nearly every patient dealing with chronic dry eye
                        or blepharitis.&quot;
                    </p>

                    <p className="text-sm font-semibold text-[#5EDBD0]">
                        — Dr. Andrea Williams, OD
                    </p>
                </div>
            </div>

            {/* CTA */}
            <button
                className="group mt-5 flex items-center gap-3 rounded-full bg-primary px-8 py-4 font-semibold text-white shadow-[0_12px_25px_rgba(45,48,140,0.22)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(45,48,140,0.30)]"
            >
                Join Thousands Finding Relief

                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>

        </section>
    )
}

export default Reviews
"use client"

import React, { useRef } from 'react'
import { Easing, motion, useScroll, useTransform } from 'framer-motion'
import { BsQuote } from 'react-icons/bs'
import { FiArrowRight, FiCheck } from 'react-icons/fi'
import { LuStethoscope } from 'react-icons/lu'

const ease: Easing = [0.16, 1, 0.3, 1]

const reviews = [
    {
        initials: 'SM',
        name: 'Sarah M.',
        age: 34,
        rotate: -1,
        review:
            "I've struggled with dry, irritated eyes for years. Drops, compresses, prescriptions — nothing worked long-term. MEILID changed everything. Within a week, my eyes felt clearer than they have in a decade.",
    },
    {
        initials: 'RT',
        name: 'Robert T.',
        age: 52,
        rotate: 0,
        review:
            "As a daily contacts wearer, I used to wake up with crusty lashes and red eyes. MEILID takes 60 seconds and has completely eliminated that morning discomfort.",
    },
    {
        initials: 'JL',
        name: 'Jessica L.',
        age: 27,
        rotate: 1,
        review:
            "I love my lash extensions, but buildup was causing constant irritation. MEILID gently cleans without damaging my lashes. It's now part of my nightly routine.",
    },
]

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

const staggerGroup = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
}

const starContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06 } },
}

const starItem = {
    hidden: { opacity: 0, scale: 0, rotate: -30 },
    show: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: { duration: 0.35, ease },
    },
}

const Stars = ({ delay = 0 }) => (
    <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.06, delayChildren: delay } },
        }}
        className="flex gap-1 text-[#FFAE3D]"
    >
        {'★★★★★'.split('').map((star, index) => (
            <motion.span key={index} variants={starItem}>
                {star}
            </motion.span>
        ))}
    </motion.div>
)

const Reviews = () => {
    const sectionRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    })

    const blobLeftY = useTransform(scrollYProgress, [0, 1], [-30, 30])
    const blobRightY = useTransform(scrollYProgress, [0, 1], [30, -30])

    return (
        <section
            id="reviews"
            ref={sectionRef}
            className="relative flex min-h-dvh w-full flex-col items-center overflow-hidden bg-background px-5 py-20 sm:px-6 sm:py-24 md:px-10 md:py-32 lg:px-16"
        >

            {/* Decorative background */}
            <motion.div
                style={{ y: blobLeftY }}
                className="pointer-events-none absolute left-[-100px] top-[10%] h-[200px] w-[200px] rounded-full bg-[#3DC5B826] blur-2xl sm:left-[-120px] sm:top-[15%] sm:h-[300px] sm:w-[300px] sm:blur-3xl"
            />
            <motion.div
                style={{ y: blobRightY }}
                className="pointer-events-none absolute right-[-110px] top-[25%] h-[220px] w-[220px] rounded-full bg-[#2D308C12] blur-2xl sm:right-[-150px] sm:top-[30%] sm:h-[350px] sm:w-[350px] sm:blur-3xl"
            />

            {/* Badge */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease }}
                className="badge relative z-10"
            >
                <span className="relative flex h-2 w-2 shrink-0">
                    <span className="badge-dot absolute inset-0 animate-ping opacity-40" />
                    <span className="badge-dot relative" />
                </span>
                Reviews
            </motion.div>

            {/* Heading */}
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.6 }}
                variants={staggerGroup}
                className="relative z-10 flex max-w-3xl flex-col items-center gap-3 text-center sm:gap-4"
            >
                <motion.h2 variants={fadeUp} className="heading">
                    Thousands are already feeling the <span className='heading-highlight'>difference</span>
                </motion.h2>

                <motion.p variants={fadeUp} className="sub-heading">
                    Real stories from people who finally found relief that lasts.
                </motion.p>
            </motion.div>

            {/* Featured Doctor Testimonial */}
            <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, ease }}
                className="relative z-10 mt-10 w-full max-w-6xl overflow-hidden rounded-[1.75rem] bg-primary shadow-[0_25px_70px_rgba(35,39,130,0.20)] sm:mt-12 sm:rounded-[2rem]"
            >

                {/* Decorative quote */}
                <motion.div
                    animate={{ rotate: [0, -6, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute right-4 top-2 text-white/5 sm:right-8 sm:top-6 md:right-14 md:top-2"
                >
                    <BsQuote className="text-[90px] sm:text-[120px] md:text-[150px]" />
                </motion.div>

                <div className="relative grid md:grid-cols-[0.8fr_2fr]">

                    {/* Doctor Profile */}
                    <div className="relative flex flex-col justify-between gap-8 bg-white/5 p-6 sm:p-8 md:p-10">

                        <div>
                            <motion.div
                                whileHover={{ rotate: 8, scale: 1.06 }}
                                transition={{ type: 'spring', stiffness: 350, damping: 15 }}
                                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#3DC5B826] text-2xl text-[#5EDBD0] sm:h-16 sm:w-16 sm:text-3xl"
                            >
                                <LuStethoscope />
                            </motion.div>

                            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#5EDBD0] sm:mt-6 sm:tracking-[0.2em]">
                                Clinical Perspective
                            </p>
                        </div>

                        <div>
                            <p className="text-lg font-semibold text-white sm:text-xl">
                                Dr. Andrea Williams
                            </p>

                            <p className="mt-1 text-sm text-white/60">
                                Optometrist · 15+ Years of Practice
                            </p>
                        </div>
                    </div>

                    {/* Testimonial */}
                    <div className="flex flex-col justify-center p-6 sm:p-8 md:p-12">

                        <Stars delay={0.4} />

                        <blockquote className="mt-6 max-w-3xl text-lg font-medium leading-[1.5] text-white sm:mt-7 sm:text-2xl md:text-3xl">
                            &quot;MEILID is the most effective at-home eyelid
                            hygiene tool I&apos;ve seen in my 15 years of
                            practice. I recommend it to nearly every patient
                            dealing with chronic dry eye or blepharitis.&quot;
                        </blockquote>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="mt-7 flex items-center gap-3 sm:mt-8"
                        >
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.6, ease }}
                                className="h-px w-10 origin-left bg-[#5EDBD0]"
                            />

                            <p className="text-sm font-semibold text-[#5EDBD0]">
                                Dr. Andrea Williams, OD
                            </p>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Customer Stories */}
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }}
                className="relative z-10 mt-8 grid w-full max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
                {reviews.map((review) => (
                    <motion.article
                        key={review.name}
                        variants={{
                            hidden: { opacity: 0, y: 30, rotate: 0 },
                            show: {
                                opacity: 1,
                                y: 0,
                                rotate: review.rotate,
                                transition: { duration: 0.7, ease },
                            },
                        }}
                        whileHover={{ y: -6, rotate: 0 }}
                        transition={{ duration: 0.3, ease }}
                        className="group relative flex flex-col rounded-2xl border border-neutral-200/70 bg-white p-5 shadow-[0_10px_30px_rgba(35,39,100,0.05)] transition-shadow duration-300 hover:shadow-[0_18px_45px_rgba(35,39,100,0.10)] sm:p-6"
                    >
                        {/* Stars */}
                        <Stars delay={0.1} />

                        {/* Quote */}
                        <p className="mt-4 text-sm leading-6 text-neutral-600 sm:mt-5">
                            &quot;{review.review}&quot;
                        </p>

                        {/* User */}
                        <div className="mt-6 flex items-center gap-3 border-t border-neutral-100 pt-5 sm:mt-7">
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: 'spring', stiffness: 350, damping: 15 }}
                                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-[#2FC8BA] text-xs font-bold text-white"
                            >
                                {review.initials}
                            </motion.div>

                            <div className="min-w-0">
                                <p className="text-sm font-semibold text-primary">
                                    {review.name}
                                </p>

                                <p className="text-xs text-neutral-400">
                                    Verified customer · {review.age}
                                </p>
                            </div>

                            <FiCheck className="ml-auto shrink-0 text-[#2FC8BA]" />
                        </div>
                    </motion.article>
                ))}
            </motion.div>

            {/* Trust Strip */}
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
                className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-xs text-neutral-500 sm:gap-x-8 sm:text-sm"
            >
                {['Doctor recommended', 'Thousands of customers', '5-star experience'].map((item) => (
                    <motion.div
                        key={item}
                        variants={fadeUp}
                        className="flex items-center gap-2"
                    >
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#3DC5B826] text-xs text-[#2FC8BA]">
                            ✓
                        </span>
                        {item}
                    </motion.div>
                ))}
            </motion.div>

            {/* CTA */}
            <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15, ease }}
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="group relative z-10 mt-8 flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_25px_rgba(45,48,140,0.22)] transition-shadow duration-300 hover:shadow-[0_18px_35px_rgba(45,48,140,0.30)] sm:px-8 sm:py-4 sm:text-base"
            >
                Join Thousands Finding Relief

                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>

        </section>
    )
}

export default Reviews
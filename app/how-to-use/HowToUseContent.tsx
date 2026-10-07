'use client'

import { motion, type Easing, type Variants } from 'framer-motion'
import type { IconType } from 'react-icons'
import { FiArrowRight, FiMail } from 'react-icons/fi'
import {
    LuDroplets,
    LuEye,
    LuHand,
    LuMoon,
    LuRepeat,
    LuShieldAlert,
    LuShowerHead,
    LuSparkles,
    LuSunrise,
    LuThermometerSun,
    LuTimer,
    LuWaves,
} from 'react-icons/lu'
import { useContactDialog } from '@/components/contact/ContactDialogContext'

const ease: Easing = [0.16, 1, 0.3, 1]

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}

const staggerGroup: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
}

interface Step {
    number: number
    icon: IconType
    text: React.ReactNode
    caution?: boolean
}

const eachUseSteps: Step[] = [
    {
        number: 2,
        icon: LuHand,
        text: 'Slide the brush onto any finger, either hand.',
    },
    {
        number: 3,
        icon: LuDroplets,
        text: (
            <>
                Wet the bristles with warm water and add any face wash or soap you already
                use &mdash; <strong className="font-semibold text-[#171A4B]">no special product needed.</strong>
            </>
        ),
    },
    {
        number: 4,
        icon: LuEye,
        text: (
            <>
                Close eyes gently (not a tight squeeze) and brush along the lid and lash
                margin for <strong className="font-semibold text-[#171A4B]">20 seconds.</strong>
            </>
        ),
    },
    {
        number: 5,
        icon: LuShieldAlert,
        text: (
            <>
                <strong className="font-semibold">Not for use on the ocular surface</strong> &mdash; lid
                and lash margin only.
            </>
        ),
        caution: true,
    },
    {
        number: 6,
        icon: LuShowerHead,
        text: 'Rinse the brush thoroughly.',
    },
    {
        number: 7,
        icon: LuRepeat,
        text: 'Brush again with just water to remove any leftover soap.',
    },
    {
        number: 8,
        icon: LuSunrise,
        text: (
            <>
                Use up to <strong className="font-semibold text-[#171A4B]">twice a day</strong> &mdash;
                morning and evening.
            </>
        ),
    },
]

const quickFacts = [
    { icon: LuTimer, label: '20 seconds' },
    { icon: LuMoon, label: 'Up to 2× daily' },
    { icon: LuWaves, label: 'Any face wash' },
]

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
    <motion.div variants={fadeUp} className="mb-5 flex items-center gap-3">
        <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-primary sm:text-sm">
            {children}
        </h2>
        <span className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
    </motion.div>
)

const StepRow = ({ step, isLast }: { step: Step; isLast: boolean }) => {
    const Icon = step.icon

    return (
        <motion.li variants={fadeUp} className="relative flex gap-4 sm:gap-5">
            {/* Timeline rail */}
            {!isLast && (
                <span
                    aria-hidden
                    className="absolute left-[21px] top-12 bottom-[-12px] w-px bg-gradient-to-b from-primary/40 to-primary/10 sm:left-[23px]"
                />
            )}

            <div
                className={`relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-sm font-bold shadow-lg sm:h-12 sm:w-12 ${
                    step.caution
                        ? 'bg-[#FFF1EC] text-[#D9572B] shadow-[#D9572B]/10 ring-1 ring-[#F6C9B8]'
                        : 'bg-primary text-white shadow-primary/20'
                }`}
            >
                {String(step.number).padStart(2, '0')}
            </div>

            <div
                className={`mb-3 flex flex-1 items-start gap-3 rounded-2xl p-4 sm:p-5 ${
                    step.caution
                        ? 'border border-[#F6C9B8] bg-[#FFF7F3] text-[#8A3A1C]'
                        : 'border border-white/80 bg-white/80 text-[#4A4F6A] shadow-[0_10px_35px_rgba(30,35,90,0.05)] backdrop-blur-xl'
                }`}
            >
                <Icon
                    aria-hidden
                    className={`mt-0.5 shrink-0 text-lg sm:text-xl ${
                        step.caution ? 'text-[#D9572B]' : 'text-primary'
                    }`}
                />
                <p className="text-[15px] leading-relaxed sm:text-base">{step.text}</p>
            </div>
        </motion.li>
    )
}

const HowToUseContent = () => {
    const { open: openContact } = useContactDialog()

    return (
        <main className="relative w-full overflow-hidden bg-[#F7F8FC] pb-24 pt-32 sm:pb-28 sm:pt-36">
            {/* Ambient glows */}
            <motion.div
                animate={{ opacity: [0.5, 0.9, 0.5], scale: [1, 1.08, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="pointer-events-none absolute left-1/2 top-10 h-[260px] w-[260px] -translate-x-1/2 rounded-full bg-primary/15 blur-[90px] sm:h-[380px] sm:w-[380px]"
            />
            <div className="pointer-events-none absolute -right-32 top-[45%] h-[300px] w-[300px] rounded-full bg-secondary/10 blur-[100px]" />

            {/* Hero */}
            <motion.div
                initial="hidden"
                animate="show"
                variants={staggerGroup}
                className="relative mx-auto flex max-w-2xl flex-col items-center px-5 text-center sm:px-6"
            >
                <motion.div variants={fadeUp} className="badge mb-0">
                    <span className="relative flex h-2 w-2 shrink-0">
                        <span className="badge-dot absolute inset-0 animate-ping opacity-40" />
                        <span className="badge-dot relative" />
                    </span>
                    Usage Instructions
                </motion.div>

                <motion.h1
                    variants={fadeUp}
                    className="mt-6 text-4xl font-light leading-[1.1] tracking-tight text-[#151515] sm:text-5xl"
                >
                    How to use your <span className="font-medium text-primary">MEILID</span>
                </motion.h1>

                <motion.p
                    variants={fadeUp}
                    className="mt-4 max-w-xl text-base font-light leading-relaxed text-gray-700 sm:text-lg"
                >
                    Gentle lid and lash care, in just a few simple steps.
                </motion.p>

                <motion.ul variants={fadeUp} className="mt-7 flex flex-wrap justify-center gap-2.5">
                    {quickFacts.map(({ icon: Icon, label }) => (
                        <li
                            key={label}
                            className="flex items-center gap-2 rounded-full border border-white/80 bg-white/80 px-4 py-2 text-sm font-medium text-[#171A4B] shadow-sm backdrop-blur"
                        >
                            <Icon aria-hidden className="text-primary" />
                            {label}
                        </li>
                    ))}
                </motion.ul>
            </motion.div>

            <div className="relative mx-auto mt-14 flex max-w-2xl flex-col gap-12 px-5 sm:mt-16 sm:gap-14 sm:px-6">
                {/* Before first use */}
                <motion.section
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={staggerGroup}
                >
                    <SectionLabel>Before First Use</SectionLabel>

                    <motion.div
                        variants={fadeUp}
                        className="flex items-start gap-4 rounded-3xl bg-gradient-to-br from-secondary to-[#363A98] p-5 text-white shadow-xl shadow-secondary/20 sm:gap-5 sm:p-7"
                    >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-sm font-bold sm:h-12 sm:w-12">
                            01
                        </div>
                        <div>
                            <p className="text-lg font-semibold leading-snug sm:text-xl">
                                Wash the MEILID thoroughly with soap and water.
                            </p>
                            <p className="mt-1.5 text-sm text-white/65">One time, right out of the box.</p>
                        </div>
                    </motion.div>
                </motion.section>

                {/* Each use */}
                <motion.section
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={staggerGroup}
                >
                    <SectionLabel>Each Use</SectionLabel>

                    <ol>
                        {eachUseSteps.map((step, i) => (
                            <StepRow key={step.number} step={step} isLast={i === eachUseSteps.length - 1} />
                        ))}
                    </ol>
                </motion.section>

                {/* Tip */}
                <motion.aside
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, ease }}
                    className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-[#E4FAF7] via-[#EEF0FF] to-white p-6 sm:p-7"
                >
                    <LuSparkles
                        aria-hidden
                        className="absolute -right-3 -top-3 text-7xl text-primary/10"
                    />
                    <div className="relative flex items-start gap-4">
                        <motion.div
                            animate={{ y: [0, -4, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary text-xl text-white shadow-lg shadow-primary/20 sm:h-12 sm:w-12"
                        >
                            <LuThermometerSun aria-hidden />
                        </motion.div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Tip</p>
                            <p className="mt-1.5 text-[15px] leading-relaxed text-[#171A4B] sm:text-base">
                                The silicone retains warmth from the water, giving a mild warming effect
                                during use.
                            </p>
                        </div>
                    </div>
                </motion.aside>

                {/* Help */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease }}
                    className="flex flex-col items-center text-center"
                >
                    <p className="text-lg font-semibold text-[#171A4B]">Questions about your MEILID?</p>
                    <p className="mt-1 text-sm text-[#747993]">We&apos;re happy to help.</p>
                    <motion.button
                        type="button"
                        onClick={openContact}
                        whileHover={{ scale: 1.04, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                        className="group mt-5 flex items-center gap-2.5 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-[0_15px_35px_rgba(45,48,140,0.25)] sm:px-8 sm:text-base"
                    >
                        <FiMail aria-hidden />
                        Contact Us
                        <FiArrowRight
                            aria-hidden
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </motion.button>
                </motion.div>
            </div>
        </main>
    )
}

export default HowToUseContent

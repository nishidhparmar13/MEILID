"use client"
import React from "react";
import { motion, Variants } from "framer-motion";
import {
    FiEye,
    FiAlertCircle,
    FiDroplet,
    FiSun,
    FiWind,
    FiPlus,
} from "react-icons/fi";
import { GrLinkNext } from "react-icons/gr";

const symptoms = [
    {
        title: "Chronic dry, irritated eyes",
        description: "Persistent dryness that never seems to go away.",
        icon: FiEye,
        color: "text-secondary",
        bg: "bg-secondary/10",
    },
    {
        title: "Red, inflamed eyelids",
        description: "Visible redness and swelling around the eyelid area.",
        icon: FiAlertCircle,
        color: "text-[#F29B86]",
        bg: "bg-[#F29B86]/10",
    },
    {
        title: "Styes or recurring bumps",
        description: "Painful bumps that keep coming back.",
        icon: FiPlus,
        color: "text-[#6D96F5]",
        bg: "bg-[#6D96F5]/10",
    },
    {
        title: "Allergy discomfort",
        description: "Itchy, watery eyes from environmental triggers.",
        icon: FiSun,
        color: "text-[#45CBB5]",
        bg: "bg-[#45CBB5]/10",
    },
    {
        title: "Post-lash extension irritation",
        description: "Irritation and sensitivity after lash extensions.",
        icon: FiWind,
        color: "text-secondary",
        bg: "bg-secondary/10",
    },
    {
        title: `"Something in my eye" feeling`,
        description: "That constant foreign body sensation.",
        icon: FiDroplet,
        color: "text-[#F29B86]",
        bg: "bg-[#F29B86]/10",
    },
];

// ---- Animation variants ---------------------------------------------------

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 28 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
};

const blurIn: Variants = {
    hidden: { opacity: 0, y: 24, filter: "blur(10px)" },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
};

const labelPop: Variants = {
    hidden: { opacity: 0, scale: 0.7, y: -10 },
    show: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { type: "spring", stiffness: 260, damping: 18 },
    },
};

const pillContainer: Variants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.06, delayChildren: 0.3 },
    },
};

const pillItem: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const cardGrid: Variants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
};

const cardItem: Variants = {
    hidden: { opacity: 0, y: 46, scale: 0.92, rotate: -1.5 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        rotate: 0,
        transition: { type: "spring", stiffness: 120, damping: 16, mass: 0.7 },
    },
};

const iconPop: Variants = {
    hidden: { scale: 0, rotate: -90, opacity: 0 },
    show: {
        scale: 1,
        rotate: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 300, damping: 14, delay: 0.15 },
    },
};

// ---------------------------------------------------------------------------

const Problem = () => {
    return (
        <section className="w-full min-h-dvh bg-[#ebebeb] px-5 py-20 md:px-10 lg:px-[9dvh] overflow-hidden">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="bg-primary/20 right-[30%] w-[200px] h-[200px] rounded-full absolute blur-3xl"
            />

            <div className="mx-auto flex w-full max-w-[1500px] flex-col items-center">

                {/* Label */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.8 }}
                    variants={labelPop}
                    className="mb-7 flex items-center gap-2 rounded-full bg-[#3DC5B826] px-5 py-2 text-sm font-semibold text-primary"
                >
                    <motion.span
                        className="h-2.5 w-2.5 rounded-full bg-primary"
                        animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <span>The Problem</span>
                </motion.div>

                {/* Heading */}
                <motion.h2
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.6 }}
                    variants={blurIn}
                    className="max-w-4xl text-center text-4xl font-extralight leading-[1.1] tracking-tight text-[#151515] md:text-5xl lg:text-6xl"
                >
                    You shouldn&apos;t have to live with{" "}
                    <br className="hidden md:block" />
                    constant eye discomfort
                </motion.h2>

                {/* Symptoms */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.8 }}
                    variants={pillContainer}
                    className="my-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-sm font-normal uppercase tracking-wide text-gray-500 md:text-base"
                >
                    {[
                        "Burning",
                        "Itching",
                        "Grittiness",
                        "Redness",
                        "Crusty lashes",
                    ].map((item, index) => (
                        <React.Fragment key={item}>
                            <motion.span variants={pillItem}>{item}</motion.span>

                            {index !== 4 && (
                                <span className="h-1 w-1 rounded-full bg-gray-400" />
                            )}
                        </React.Fragment>
                    ))}
                </motion.div>

                {/* Description */}
                <motion.p
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.7 }}
                    variants={fadeUp}
                    className="max-w-4xl text-center text-base font-light leading-relaxed text-gray-700 md:text-xl"
                >
                    Your eyes are trying to tell you something. Chronic irritation
                    is often caused by{" "}
                    <motion.span
                        initial={{ backgroundSize: "0% 100%" }}
                        whileInView={{ backgroundSize: "100% 100%" }}
                        viewport={{ once: true, amount: 0.7 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        className="mx-1 rounded-sm bg-secondary px-1 text-white"
                        style={{ backgroundRepeat: "no-repeat" }}
                    >
                        eyelid inflammation
                    </motion.span>
                    that disrupts your natural tear film.
                </motion.p>

                {/* Symptom Cards */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={cardGrid}
                    className="mt-16 grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
                >
                    {symptoms.map((item) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.title}
                                variants={cardItem}
                                whileHover={{
                                    y: -4,
                                    scale: 1.02,
                                    boxShadow: "0 20px 50px rgba(30,30,80,0.12)",
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="group relative overflow-hidden rounded-3xl border border-white/40 bg-white/50 backdrop-blur-3xl p-6 shadow-[0_10px_40px_rgba(30,30,80,0.04)]"
                            >
                                {/* Soft hover glow */}
                                <motion.div
                                    className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/30 blur-2xl"
                                    initial={{ scale: 0.6, opacity: 0 }}
                                    whileHover={{ scale: 1.6, opacity: 1 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                />

                                <div className="relative flex items-start gap-5">

                                    {/* Icon */}
                                    <motion.div
                                        variants={iconPop}
                                        whileHover={{ rotate: 8, scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 12 }}
                                        className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-white bg-primary"
                                    >
                                        <Icon size={27} strokeWidth={1.5} />
                                    </motion.div>

                                    {/* Content */}
                                    <div className="pt-1">
                                        <h3 className="text-lg font-medium leading-snug text-secondary md:text-xl">
                                            {item.title}
                                        </h3>

                                        <p className="mt-2 max-w-xs text-sm font-light leading-relaxed text-gray-500 md:text-base">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 60, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ type: "spring", stiffness: 100, damping: 16, delay: 0.1 }}
                    className="mt-8 flex w-full flex-col items-start justify-between gap-5 rounded-3xl border border-primary/10 bg-white/50 px-7 py-6 backdrop-blur-md md:flex-row md:items-center md:px-10"
                >
                    <div>
                        <h3 className="text-lg font-medium text-primary md:text-xl">
                            You&apos;re not alone and you don&apos;t have to just live with it.
                        </h3>

                        <p className="mt-1 text-sm font-light text-gray-500 md:text-base">
                            The right care can bring you lasting relief and healthier,
                            happier eyes.
                        </p>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group/btn font-medium cursor-pointer flex items-center gap-2 rounded-full bg-[#30308d] text-white pl-4 pr-4 py-2 text-sm overflow-hidden transition-all duration-300 ease-out hover:pr-3 hover:gap-3 hover:shadow-lg hover:shadow-[#30308d]/30 active:scale-95"
                    >
                        <span>There is a better way</span>
                        <GrLinkNext className="transition-all duration-300 ease-out opacity-0 -translate-x-2 w-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 group-hover/btn:w-4" />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default Problem;
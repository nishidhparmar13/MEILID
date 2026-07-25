'use client'

import type { ReactNode } from 'react'
import { motion, useReducedMotion, type Transition, type Variants, type Easing } from 'framer-motion'
import {
    FiArrowUpRight,
    FiInstagram,
    FiFacebook,
    FiTwitter,
    FiMail,
} from 'react-icons/fi'

const ease: Easing = [0.16, 1, 0.3, 1]

const BREATHE: Transition = { duration: 4, repeat: Infinity, ease: 'easeInOut' }

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease },
    },
}

const containerStagger: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

interface FooterLinkItem {
    href: string
    label: string
    arrow?: boolean
}

const productLinks: FooterLinkItem[] = [
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#reviews', label: 'Reviews' },
    { href: '#faq', label: 'FAQ' },
    { href: '#shop', label: 'Shop', arrow: true },
]

const supportLinks: FooterLinkItem[] = [
    { href: '#contact', label: 'Contact' },
    { href: '#shipping', label: 'Shipping' },
    { href: '#returns', label: 'Returns' },
    { href: '#warranty', label: 'Warranty' },
]

interface SocialItem {
    label: string
    icon: ReactNode
}

const socials: SocialItem[] = [
    { label: 'Instagram', icon: <FiInstagram /> },
    { label: 'Facebook', icon: <FiFacebook /> },
    { label: 'Twitter', icon: <FiTwitter /> },
]

interface FooterLinkProps {
    href: string
    children: ReactNode
}

const FooterLink = ({ href, children }: FooterLinkProps) => (
    <motion.a
        href={href}
        whileHover={{ x: 3 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="flex w-fit items-center gap-1 text-sm text-white/60 transition-colors hover:text-[#5EDBD0]"
    >
        {children}
    </motion.a>
)

const Footer = () => {
    const prefersReducedMotion = useReducedMotion() ?? false

    return (
        <footer className="relative w-full overflow-hidden bg-[#11143F] px-5 pb-7 pt-12 text-white sm:px-8 sm:pt-14 md:px-10 lg:px-16">

            {/* Subtle Background Glow */}
            <motion.div
                className="pointer-events-none absolute -right-32 -top-32 h-[300px] w-[300px] rounded-full bg-[#3DC5B8]/[0.07] blur-[80px] sm:-right-40 sm:-top-40 sm:h-[450px] sm:w-[450px] sm:blur-[100px]"
                animate={prefersReducedMotion ? undefined : { scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
                transition={BREATHE}
            />

            <div className="relative z-10 mx-auto max-w-7xl">

                {/* ================= TOP CTA ================= */}
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.7, ease }}
                    className="mb-12 flex flex-col gap-7 rounded-[24px] border border-white/[0.08] bg-white/[0.035] p-6 backdrop-blur-xl sm:mb-14 sm:gap-8 sm:rounded-[28px] sm:p-7 md:flex-row md:items-center md:justify-between md:p-9"
                >

                    {/* Text */}
                    <div>
                        <div className="flex items-center gap-2.5">
                            <motion.span
                                className="h-1.5 w-1.5 rounded-full bg-[#5EDBD0] shadow-[0_0_12px_rgba(94,219,208,0.8)]"
                                animate={prefersReducedMotion ? undefined : { opacity: [1, 0.4, 1], scale: [1, 1.3, 1] }}
                                transition={BREATHE}
                            />
                            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#5EDBD0] sm:text-sm">
                                Stay in the loop
                            </p>
                        </div>

                        <h3 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl">
                            Better care starts here.
                        </h3>

                        <p className="mt-2 max-w-lg text-sm leading-6 text-white/50">
                            Get helpful eye care tips, product updates, and
                            exclusive offers delivered to your inbox.
                        </p>
                    </div>

                    {/* Newsletter */}
                    <div className="flex w-full flex-col gap-3 sm:flex-row md:max-w-md">
                        <div className="flex h-12 flex-1 items-center gap-3 rounded-full border border-white/10 bg-white/[0.05] px-5 transition-colors duration-300 focus-within:border-[#3DC5B8]/50">
                            <FiMail className="shrink-0 text-white/35" />

                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/30"
                            />
                        </div>

                        <motion.button
                            type="button"
                            whileHover={{ y: -2, boxShadow: '0 12px 30px rgba(61,197,184,0.3)' }}
                            whileTap={{ scale: 0.96 }}
                            transition={{ duration: 0.2, ease: 'easeOut' }}
                            className="group flex h-12 items-center justify-center gap-2 rounded-full bg-[#3DC5B8] px-6 text-sm font-semibold text-[#11143F] transition-colors duration-300 hover:bg-[#5EDBD0]"
                        >
                            Subscribe
                            <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </motion.button>
                    </div>

                </motion.div>


                {/* ================= MAIN FOOTER ================= */}
                <motion.div
                    variants={containerStagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    className="grid grid-cols-1 gap-10 text-center sm:grid-cols-2 sm:gap-12 sm:text-left md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.5fr]"
                >

                    {/* Brand */}
                    <motion.div variants={fadeUp} className="flex flex-col items-center sm:items-start">

                        {/* Logo */}
                        <a href="#" className="inline-flex items-center gap-2">
                            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#3DC5B8] text-sm font-bold text-[#11143F]">
                                M
                            </span>

                            <span className="text-xl font-bold tracking-[0.15em]">
                                MEILID
                            </span>
                        </a>

                        <p className="mt-5 max-w-xs text-sm leading-6 text-white/45">
                            Doctor-developed eyelid care designed to bring
                            lasting comfort to your daily routine.
                        </p>

                        {/* Social */}
                        <div className="mt-6 flex items-center gap-2">
                            {socials.map((social) => (
                                <motion.a
                                    key={social.label}
                                    href="#"
                                    aria-label={social.label}
                                    whileHover={{ y: -3 }}
                                    whileTap={{ scale: 0.92 }}
                                    transition={{ duration: 0.2, ease: 'easeOut' }}
                                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-sm text-white/45 transition-colors duration-300 hover:border-[#3DC5B8]/50 hover:bg-[#3DC5B8]/10 hover:text-[#5EDBD0]"
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>

                    </motion.div>


                    {/* Product */}
                    <motion.div variants={fadeUp} className="flex flex-col items-center sm:items-start">
                        <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                            Product
                        </h3>

                        <nav className="mt-5 flex flex-col items-center gap-3 sm:items-start">
                            {productLinks.map((link) => (
                                <FooterLink key={link.label} href={link.href}>
                                    {link.label}
                                    {link.arrow && <FiArrowUpRight className="text-xs" />}
                                </FooterLink>
                            ))}
                        </nav>
                    </motion.div>


                    {/* Support */}
                    <motion.div variants={fadeUp} className="flex flex-col items-center sm:items-start">
                        <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                            Support
                        </h3>

                        <nav className="mt-5 flex flex-col items-center gap-3 sm:items-start">
                            {supportLinks.map((link) => (
                                <FooterLink key={link.label} href={link.href}>
                                    {link.label}
                                </FooterLink>
                            ))}
                        </nav>
                    </motion.div>


                    {/* Contact */}
                    <motion.div variants={fadeUp} className="flex flex-col items-center sm:items-start">
                        <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                            Get in touch
                        </h3>

                        <p className="mt-5 max-w-xs text-sm leading-6 text-white/50">
                            Have questions about MEILID or your order?
                            Our team is here to help.
                        </p>

                        <motion.a
                            href="mailto:hello@meilid.com"
                            whileHover={{ x: 3 }}
                            transition={{ duration: 0.2, ease: 'easeOut' }}
                            className="group mt-5 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-[#5EDBD0]"
                        >
                            hello@meilid.com
                            <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </motion.a>
                    </motion.div>

                </motion.div>


                {/* ================= BOTTOM ================= */}
                <div className="my-8 h-px w-full bg-white/[0.08] sm:my-10" />

                <div className="flex flex-col items-center gap-4 text-center text-xs text-white/35 md:flex-row md:items-center md:justify-between md:text-left">

                    <p>
                        © {new Date().getFullYear()} MEILID. All rights reserved.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 md:justify-start">
                        <a href="#privacy" className="transition-colors hover:text-white/70">
                            Privacy
                        </a>

                        <a href="#terms" className="transition-colors hover:text-white/70">
                            Terms
                        </a>

                        <a href="#returns" className="transition-colors hover:text-white/70">
                            Returns
                        </a>

                        <span className="w-full text-white/25 sm:w-auto">
                            For external use only. Not intended to diagnose or treat any medical condition.
                        </span>
                    </div>

                </div>

            </div>
        </footer>
    )
}

export default Footer
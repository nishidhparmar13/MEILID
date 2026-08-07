"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion, Variants } from 'framer-motion'
import {
    FiArrowRight,
    FiMenu,
    FiX,
} from 'react-icons/fi'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeLink, setActiveLink] = useState("#how-it-works");



    const navLinks = [
        { href: '#how-it-works', label: 'How it works' },
        { href: '#reviews', label: 'Reviews' },
        { href: '#faq', label: 'FAQ' },
    ]

    useEffect(() => {
        const sections = navLinks.map((l) =>
            document.querySelector(l.href)
        );

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveLink(`#${entry.target.id}`);
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );

        sections.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    // Track scroll position so the pill can react (subtle shadow/scale shift)
    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 8)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // Lock body scroll while the mobile menu is open
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : ''
        return () => {
            document.body.style.overflow = ''
        }
    }, [isMenuOpen])

    const navContainerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.06,
                delayChildren: 0.15,
            },
        },
    }

    const navItemVariants: Variants = {
        hidden: { opacity: 0, y: -8 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
        },
    }

    const mobileMenuVariants: Variants = {
        hidden: { opacity: 0, y: -12, scale: 0.98 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.28, ease: [0.16, 1, 0.3, 1] },
        },
        exit: {
            opacity: 0,
            y: -12,
            scale: 0.98,
            transition: { duration: 0.18, ease: [0.4, 0, 1, 1] },
        },
    }

    const mobileLinkVariants: Variants = {
        hidden: { opacity: 0, x: -12 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: { delay: 0.05 * i, duration: 0.3, ease: [0.16, 1, 0.3, 1] },
        }),
    }

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed left-0 top-0 z-[100] w-full px-3 pt-3 sm:px-4 sm:pt-4 md:px-6 md:pt-5"
        >

            <div className="mx-auto w-full">

                {/* Main Header */}
                <motion.div
                    animate={{
                        boxShadow: isScrolled
                            ? '0 10px 40px rgba(17,20,63,0.10)'
                            : '0 10px 40px rgba(17,20,63,0.06)',
                    }}
                    transition={{ duration: 0.3 }}
                    className="relative flex h-[60px] items-center justify-between rounded-full border border-white/70 bg-white/70 px-3 shadow-[0_10px_40px_rgba(17,20,63,0.06)] backdrop-blur-xl sm:h-[64px] sm:px-4 md:h-[72px] md:px-6"
                >

                    {/* Logo */}
                    <Link
                        href="/"
                        className="group relative flex shrink-0 items-center"
                    >
                        <motion.div
                            whileHover={{ scale: 1.06 }}
                            whileTap={{ scale: 0.96 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                        >
                            <Image
                                src="/logos/logo.svg"
                                alt="MEILID"
                                width={90}
                                height={40}
                                priority
                                className="h-auto w-[64px] sm:w-[75px] md:w-[90px]"
                            />
                        </motion.div>
                    </Link>


                    {/* Desktop Navigation */}
                    <motion.div
                        variants={navContainerVariants}
                        initial="hidden"
                        animate="visible"
                        className="hidden items-center gap-6 lg:flex lg:gap-8"
                    >

                        <nav className="flex items-center gap-6 lg:gap-8">
                            {navLinks.map((link) => (
                                <motion.div key={link.href} variants={navItemVariants}>
                                    <Link
                                        href={link.href}
                                        className={`group relative py-2 text-sm font-medium transition-colors duration-300 ${activeLink === link.href
                                                ? "text-[#11143F]"
                                                : "text-[#11143F]/60 hover:text-[#11143F]"
                                            }`}
                                    >
                                        {link.label}

                                        <span
                                            className={`absolute -bottom-0.5 left-1/2 h-[2px] rounded-full bg-[#2DB9AE] transition-all duration-300
        ${activeLink === link.href
                                                    ? "w-full -translate-x-1/2"
                                                    : "w-0 -translate-x-1/2 group-hover:w-full"
                                                }`}
                                        />
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>


                        {/* CTA */}
                        <motion.div variants={navItemVariants}>
                            <Link
                                href="#shop"
                                className="group flex items-center gap-2 rounded-full bg-[#11143F] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_8px_25px_rgba(17,20,63,0.15)] transition-colors duration-300 hover:bg-[#2DB9AE] lg:px-5 lg:py-3"
                            >
                                <motion.span
                                    whileHover={{ y: -1 }}
                                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                                    className="flex items-center gap-2"
                                >
                                    <span>Shop Now</span>

                                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:translate-x-0.5 group-hover:bg-white/20">
                                        <FiArrowRight className="text-xs" />
                                    </span>
                                </motion.span>
                            </Link>
                        </motion.div>

                    </motion.div>


                    {/* Mobile / Tablet Menu Button */}
                    <motion.button
                        type="button"
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isMenuOpen}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#11143F]/5 text-[#11143F] transition-colors hover:bg-[#EAF8F6] sm:h-10 sm:w-10 lg:hidden"
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            {isMenuOpen ? (
                                <motion.span
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="flex items-center justify-center"
                                >
                                    <FiX size={18} className="sm:h-5 sm:w-5" />
                                </motion.span>
                            ) : (
                                <motion.span
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="flex items-center justify-center"
                                >
                                    <FiMenu size={18} className="sm:h-5 sm:w-5" />
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </motion.button>


                    {/* Mobile / Tablet Navigation */}
                    <AnimatePresence>
                        {isMenuOpen && (
                            <motion.div
                                key="mobile-nav"
                                variants={mobileMenuVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="absolute left-0 right-0 top-[calc(100%+10px)] overflow-hidden rounded-[24px] border border-white/70 bg-white/90 shadow-[0_20px_50px_rgba(17,20,63,0.10)] backdrop-blur-xl lg:hidden"
                            >
                                <nav className="flex flex-col p-3 sm:p-4">

                                    {navLinks.map((link, i) => (
                                        <motion.div
                                            key={link.href}
                                            custom={i}
                                            variants={mobileLinkVariants}
                                            initial="hidden"
                                            animate="visible"
                                        >
                                            <Link
                                                href={link.href}
                                                onClick={() => setIsMenuOpen(false)}
                                                className="block rounded-xl px-4 py-3.5 text-sm font-medium text-[#11143F]/70 transition-colors hover:bg-[#EAF8F6] hover:text-[#11143F]"
                                            >
                                                {link.label}
                                            </Link>
                                        </motion.div>
                                    ))}

                                    <motion.div
                                        custom={navLinks.length}
                                        variants={mobileLinkVariants}
                                        initial="hidden"
                                        animate="visible"
                                    >
                                        <Link
                                            href="#shop"
                                            onClick={() => setIsMenuOpen(false)}
                                            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#11143F] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#2DB9AE]"
                                        >
                                            Shop Now
                                            <FiArrowRight />
                                        </Link>
                                    </motion.div>

                                </nav>
                            </motion.div>
                        )}
                    </AnimatePresence>

                </motion.div>

            </div>

        </motion.header>
    )
}

export default Header
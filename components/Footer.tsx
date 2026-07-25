import React from 'react'
import {
    FiArrowUpRight,
    FiInstagram,
    FiFacebook,
    FiTwitter,
} from 'react-icons/fi'

const Footer = () => {
    return (
        <footer className="w-full bg-[#11143F] px-6 py-16 text-white md:px-12 lg:px-16">

            <div className="mx-auto max-w-7xl">

                {/* Main Footer */}
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center">
                            {/* Replace with your actual logo */}
                            <span className="text-2xl font-semibold tracking-wide">
                                MEILID
                            </span>
                        </div>

                        <p className="mt-7 max-w-xs text-sm leading-7 text-white/65 md:text-base">
                            Doctor-developed eyelid care for lasting relief
                            from chronic eye discomfort.
                        </p>

                        {/* Social */}
                        <div className="mt-7 flex items-center gap-3">
                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-[#3DC5B8] hover:text-[#3DC5B8]"
                                aria-label="Instagram"
                            >
                                <FiInstagram />
                            </a>

                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-[#3DC5B8] hover:text-[#3DC5B8]"
                                aria-label="Facebook"
                            >
                                <FiFacebook />
                            </a>

                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-[#3DC5B8] hover:text-[#3DC5B8]"
                                aria-label="Twitter"
                            >
                                <FiTwitter />
                            </a>
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider">
                            Product
                        </h3>

                        <nav className="mt-7 flex flex-col gap-5">
                            <a
                                href="#how-it-works"
                                className="text-sm text-white/65 transition-colors hover:text-[#5EDBD0] md:text-base"
                            >
                                How It Works
                            </a>

                            <a
                                href="#reviews"
                                className="text-sm text-white/65 transition-colors hover:text-[#5EDBD0] md:text-base"
                            >
                                Reviews
                            </a>

                            <a
                                href="#faq"
                                className="text-sm text-white/65 transition-colors hover:text-[#5EDBD0] md:text-base"
                            >
                                FAQ
                            </a>

                            <a
                                href="#shop"
                                className="flex items-center gap-1 text-sm text-white/65 transition-colors hover:text-[#5EDBD0] md:text-base"
                            >
                                Shop
                                <FiArrowUpRight className="text-xs" />
                            </a>
                        </nav>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider">
                            Support
                        </h3>

                        <nav className="mt-7 flex flex-col gap-5">
                            <a
                                href="#contact"
                                className="text-sm text-white/65 transition-colors hover:text-[#5EDBD0] md:text-base"
                            >
                                Contact
                            </a>

                            <a
                                href="#shipping"
                                className="text-sm text-white/65 transition-colors hover:text-[#5EDBD0] md:text-base"
                            >
                                Shipping
                            </a>

                            <a
                                href="#returns"
                                className="text-sm text-white/65 transition-colors hover:text-[#5EDBD0] md:text-base"
                            >
                                Returns
                            </a>

                            <a
                                href="#warranty"
                                className="text-sm text-white/65 transition-colors hover:text-[#5EDBD0] md:text-base"
                            >
                                Warranty
                            </a>
                        </nav>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider">
                            Company
                        </h3>

                        <nav className="mt-7 flex flex-col gap-5">
                            <a
                                href="#about"
                                className="text-sm text-white/65 transition-colors hover:text-[#5EDBD0] md:text-base"
                            >
                                About
                            </a>

                            <a
                                href="#research"
                                className="text-sm text-white/65 transition-colors hover:text-[#5EDBD0] md:text-base"
                            >
                                Research
                            </a>

                            <a
                                href="#press"
                                className="text-sm text-white/65 transition-colors hover:text-[#5EDBD0] md:text-base"
                            >
                                Press
                            </a>

                            <a
                                href="#privacy"
                                className="text-sm text-white/65 transition-colors hover:text-[#5EDBD0] md:text-base"
                            >
                                Privacy
                            </a>
                        </nav>
                    </div>

                </div>

                {/* Bottom Divider */}
                <div className="my-12 h-px w-full bg-white/10" />

                {/* Bottom Footer */}
                <div className="flex flex-col gap-5 text-sm text-white/60 md:flex-row md:items-center md:justify-between md:text-base">

                    <p>
                        © {new Date().getFullYear()} MEILID. All rights reserved.
                    </p>

                    <p className="max-w-2xl leading-6 md:text-right">
                        For external use only. Not intended to diagnose or treat
                        any medical condition.
                    </p>

                </div>

            </div>
        </footer>
    )
}

export default Footer
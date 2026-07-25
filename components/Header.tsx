import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GrLinkNext } from 'react-icons/gr'

const Header = () => {
    const navLinks = [
        { href: '#how-it-works', label: 'How it works' },
        { href: '#reviews', label: 'Reviews' },
        { href: '#faq', label: 'FAQ' },
    ]
    return (
        <div className='w-full p-5 fixed top-0 left-0 z-100'>
            <div className='w-full bg-white/60 backdrop-blur-lg border border-white/50 rounded-lg px-5 py-2 flex items-center justify-between'>
                <Image
                    src="/logos/logo.svg"
                    className="transition-transform duration-300 ease-out group-hover:scale-110 "
                    alt="Logo"
                    width={80}
                    height={80}
                />
                <div className='flex items-center gap-8'>
                    <div className='flex items-center gap-4'>
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="relative py-1 font-medium transition-colors duration-300 hover:text-[#30308d] after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[3px] after:w-full after:origin-left after:scale-x-0 after:bg-[#49c1b9] after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                    <button className="group/btn font-medium cursor-pointer flex items-center gap-2 rounded-full bg-[#30308d] text-white pl-4 pr-4 py-2 text-sm overflow-hidden transition-all duration-300 ease-out hover:pr-3 hover:gap-3 hover:shadow-lg hover:shadow-[#30308d]/30 hover:scale-105 active:scale-95">
                        <span>Shop Now</span>
                        <GrLinkNext className="transition-all duration-300 ease-out opacity-0 -translate-x-2 w-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 group-hover/btn:w-4" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header
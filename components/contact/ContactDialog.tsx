'use client'

import { useEffect, useState, type FormEvent } from 'react'
import { AnimatePresence, motion, type Easing, type Variants } from 'framer-motion'
import {
    FiX,
    FiUser,
    FiPhone,
    FiMail,
    FiMessageSquare,
    FiArrowUpRight,
    FiCheck,
    FiAlertTriangle,
} from 'react-icons/fi'
import { useContactDialog } from './ContactDialogContext'

const ease: Easing = [0.16, 1, 0.3, 1]

const SCRIPT_URL =
    'https://script.google.com/macros/s/AKfycbz0JS1Gm1c7WpFPco-YhDoXec06ysQ9LNAImGAczFNQ_WRcaqyuj3HDxTKwfwE4RkWD/exec'

type Status = 'idle' | 'sending' | 'success' | 'error'

const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
}

const fieldUp: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
}

interface FieldProps {
    icon: typeof FiUser
    accent: string
    children: React.ReactNode
}

const FieldShell = ({ icon: Icon, accent, children }: FieldProps) => (
    <motion.div variants={fieldUp} className="group relative flex items-center gap-3 rounded-2xl border border-[#E9EAF2] bg-white px-4 py-3 transition-all duration-300 focus-within:border-transparent focus-within:shadow-[0_0_0_2px_#3DC5B8,0_8px_24px_rgba(61,197,184,0.18)]">
        <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-sm transition-transform duration-300 group-focus-within:scale-110 ${accent}`}>
            <Icon />
        </span>
        {children}
    </motion.div>
)

const inputClasses =
    'w-full bg-transparent text-sm text-[#171A4B] outline-none placeholder:text-neutral-500'

const ContactDialog = () => {
    const { isOpen, close } = useContactDialog()

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [comment, setComment] = useState('')
    const [status, setStatus] = useState<Status>('idle')

    // Lock body scroll while open, close on Escape
    useEffect(() => {
        if (!isOpen) return

        document.body.style.overflow = 'hidden'
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') close()
        }
        window.addEventListener('keydown', onKeyDown)

        return () => {
            document.body.style.overflow = ''
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen, close])

    // Reset status whenever the dialog is reopened
    useEffect(() => {
        if (isOpen) setStatus('idle')
    }, [isOpen])

    const resetFields = () => {
        setName('')
        setPhone('')
        setEmail('')
        setComment('')
    }

    const handleClose = () => {
        close()
        if (status !== 'sending') resetFields()
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        if (status === 'sending' || status === 'success') return

        setStatus('sending')

        try {
            const res = await fetch(SCRIPT_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain',
                },
                body: JSON.stringify({
                    name,
                    phone,
                    email,
                    message: comment,
                }),
            })

            const data = await res.json()

            if (data.success) {
                setStatus('success')
                resetFields()
            } else {
                setStatus('error')
            }
        } catch (err) {
            console.error('Failed to send contact form', err)
            setStatus('error')
        }
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    key="contact-dialog-backdrop"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    onClick={handleClose}
                    className="fixed inset-0 z-[200] flex items-center justify-center bg-[#080A24]/70 p-4 backdrop-blur-md"
                >
                    <motion.div
                        key="contact-dialog"
                        initial={{ opacity: 0, y: 32, scale: 0.94 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.4, ease }}
                        onClick={(e) => e.stopPropagation()}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="contact-dialog-title"
                        className="relative w-full max-w-md overflow-hidden rounded-[32px] bg-white shadow-[0_40px_100px_rgba(8,10,36,0.45)]"
                    >
                        {/* Gradient rim */}
                        <div className="pointer-events-none absolute inset-0 rounded-[32px] bg-gradient-to-br from-[#3DC5B8]/40 via-transparent to-[#5552C8]/30 p-[1.5px] [mask-image:linear-gradient(#fff_0_0)] [mask-composite:exclude]" />

                        {/* Header */}
                        <div className="relative overflow-hidden bg-[#171A4B] px-6 pb-9 pt-7 sm:px-8">

                            {/* Animated glow blobs */}
                            <motion.div
                                animate={{ opacity: [0.5, 0.9, 0.5], scale: [1, 1.15, 1] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                className="pointer-events-none absolute -left-10 -top-16 h-40 w-40 rounded-full bg-[#3DC5B8]/30 blur-[50px]"
                            />
                            <motion.div
                                animate={{ opacity: [0.9, 0.5, 0.9], scale: [1.1, 1, 1.1] }}
                                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                                className="pointer-events-none absolute -right-8 -top-10 h-36 w-36 rounded-full bg-[#5552C8]/30 blur-[50px]"
                            />

                            {/* Close */}
                            <button
                                type="button"
                                onClick={handleClose}
                                aria-label="Close contact form"
                                className="group absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 backdrop-blur-md transition-colors hover:bg-white/20 hover:text-white"
                            >
                                <FiX className="transition-transform duration-300 group-hover:rotate-90" />
                            </button>

                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 0.5, ease, delay: 0.1 }}
                                className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#3DC5B8] to-[#27BDB2] text-2xl text-white shadow-[0_10px_30px_rgba(61,197,184,0.4)]"
                            >
                                <FiMessageSquare />
                                {/* <motion.span
                                    animate={{ opacity: [0.6, 0, 0.6], scale: [1, 1.6, 1] }}
                                    transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut' }}
                                    className="absolute inset-0 rounded-2xl border-2 border-[#5EDBD0]"
                                /> */}
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.15, ease }}
                                className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-[#5EDBD0]"
                            >
                                Get in touch
                            </motion.p>

                            <motion.h2
                                id="contact-dialog-title"
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2, ease }}
                                className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-[28px]"
                            >
                                {status === 'success' ? 'Message sent' : 'Let’s talk'}
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.25, ease }}
                                className="mt-2 max-w-xs text-sm leading-6 text-white/50"
                            >
                                {status === 'success'
                                    ? 'Thanks for reaching out.'
                                    : 'Send a message and it’ll land straight in our inbox.'}
                            </motion.p>
                        </div>

                        <AnimatePresence mode="wait" initial={false}>
                            {status === 'success' ? (
                                /* ================= SUCCESS ================= */
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -12 }}
                                    transition={{ duration: 0.35, ease }}
                                    className="relative flex flex-col items-center px-6 pb-8 pt-7 text-center sm:px-8"
                                >
                                    <motion.div
                                        initial={{ scale: 0.5, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1], delay: 0.05 }}
                                        className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#E4F8F5] text-3xl text-[#27BDB2]"
                                    >
                                        <FiCheck />
                                        <motion.span
                                            animate={{ opacity: [0.5, 0, 0.5], scale: [1, 1.5, 1] }}
                                            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }}
                                            className="absolute inset-0 rounded-full border-2 border-[#27BDB2]"
                                        />
                                    </motion.div>

                                    <h3 className="mt-5 text-xl font-bold text-[#171A4B]">
                                        Thank you for contacting us!
                                    </h3>

                                    <p className="mt-2 max-w-xs text-sm leading-6 text-[#747993]">
                                        We&rsquo;ve got your email and we&rsquo;ll get back to
                                        you as soon as we can.
                                    </p>

                                    <button
                                        type="button"
                                        onClick={handleClose}
                                        className="mt-7 w-full cursor-pointer rounded-full bg-[#171A4B] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_15px_35px_rgba(23,26,75,0.35)] transition-colors hover:bg-[#292C82]"
                                    >
                                        Close
                                    </button>
                                </motion.div>
                            ) : (
                                /* ================= FORM ================= */
                                <motion.form
                                    key="form"
                                    initial="hidden"
                                    animate="show"
                                    exit={{ opacity: 0 }}
                                    variants={container}
                                    onSubmit={handleSubmit}
                                    className="relative flex flex-col gap-3.5 px-6 pb-7 pt-6 sm:px-8"
                                >
                                    <fieldset
                                        disabled={status === 'sending'}
                                        className="contents disabled:opacity-60"
                                    >
                                        <FieldShell icon={FiUser} accent="bg-[#E4F8F5] text-[#27BDB2]">
                                            <input
                                                type="text"
                                                required
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                placeholder="Your name"
                                                className={inputClasses}
                                            />
                                        </FieldShell>

                                        <FieldShell icon={FiPhone} accent="bg-[#EAE9FF] text-[#5552C8]">
                                            <input
                                                type="tel"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                placeholder="Phone number"
                                                className={inputClasses}
                                            />
                                        </FieldShell>

                                        <FieldShell icon={FiMail} accent="bg-[#FFF2E7] text-[#E88B4A]">
                                            <input
                                                type="email"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="Email address"
                                                className={inputClasses}
                                            />
                                        </FieldShell>

                                        <motion.div
                                            variants={fieldUp}
                                            className="group relative flex items-start gap-3 rounded-2xl border border-[#E9EAF2] bg-white px-4 py-3 transition-all duration-300 focus-within:border-transparent focus-within:shadow-[0_0_0_2px_#3DC5B8,0_8px_24px_rgba(61,197,184,0.18)]"
                                        >
                                            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#FDEAF3] text-sm text-[#C24E86] transition-transform duration-300 group-focus-within:scale-110">
                                                <FiMessageSquare />
                                            </span>
                                            <textarea
                                                required
                                                value={comment}
                                                onChange={(e) => setComment(e.target.value)}
                                                placeholder="How can we help?"
                                                rows={4}
                                                className={`${inputClasses} resize-none pt-1.5`}
                                            />
                                        </motion.div>
                                    </fieldset>

                                    {status === 'error' && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -6 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="flex items-center gap-2 rounded-2xl bg-[#FDF6F6] px-4 py-3 text-sm text-[#B84B4E]"
                                        >
                                            <FiAlertTriangle className="shrink-0" />
                                            Something went wrong sending your message. Please
                                            try again.
                                        </motion.p>
                                    )}

                                    <motion.button
                                        variants={fieldUp}
                                        type="submit"
                                        disabled={status === 'sending'}
                                        whileHover={status === 'sending' ? undefined : { y: -2 }}
                                        whileTap={status === 'sending' ? undefined : { scale: 0.97 }}
                                        transition={{ duration: 0.2, ease: 'easeOut' }}
                                        className="group relative mt-2 flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#171A4B] to-[#292C82] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_15px_35px_rgba(23,26,75,0.35)] transition-opacity disabled:cursor-not-allowed disabled:opacity-80"
                                    >
                                        {/* Shine sweep */}
                                        <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/20 opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />

                                        <AnimatePresence mode="wait" initial={false}>
                                            {status === 'sending' ? (
                                                <motion.span
                                                    key="sending"
                                                    initial={{ opacity: 0, y: 6 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -6 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="flex items-center gap-2"
                                                >
                                                    <motion.span
                                                        animate={{ rotate: 360 }}
                                                        transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                                                        className="flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-white/40 border-t-white"
                                                    />
                                                    Sending
                                                </motion.span>
                                            ) : (
                                                <motion.span
                                                    key="idle"
                                                    initial={{ opacity: 0, y: 6 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -6 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="flex items-center gap-2"
                                                >
                                                    Send message
                                                    <FiArrowUpRight className="transition-transform cursor-pointer duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                                </motion.span>
                                            )}
                                        </AnimatePresence>
                                    </motion.button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default ContactDialog

"use client"

import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, Easing, motion, useScroll, useTransform, Variants } from 'framer-motion'
import { FiMaximize, FiMinimize, FiPause, FiPlay, FiVolume2, FiVolumeX } from 'react-icons/fi'

const ease: Easing = [0.16, 1, 0.3, 1]

// ---------------------------------------------------------------------------
// Replace the titles/descriptions below with copy that matches what's
// actually happening in each clip — these are placeholders based on the
// "60 second routine" story told elsewhere on the page.
// ---------------------------------------------------------------------------
const videos = [
    {
        id: 1,
        src: '/videos/1.mov',
        title: 'Meet the device',
        description: 'A closer look at the MEILID applicator.',
    },
    {
        id: 2,
        src: '/videos/2.mov',
        title: 'Wet & lather',
        description: 'Prepping the pad before you begin.',
    },
    {
        id: 3,
        src: '/videos/3.mp4',
        title: 'Cleanse the lid',
        description: 'The gentle massaging motion, step by step.',
    },
    {
        id: 4,
        src: '/videos/4.mp4',
        title: 'Finishing touches',
        description: 'Completing the 60-second routine.',
    },
    {
        id: 5,
        src: '/videos/5.mp4',
        title: 'Clean device',
        description: 'What patients notice after a few weeks.',
    },
]

// ================= Shared motion variants (mirrors Problem.tsx) =================
const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
}

const lineVariants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.045, delayChildren: 0.1 } },
}

const wordVariants: Variants = {
    hidden: { opacity: 0, y: '110%', rotate: 3 },
    show: { opacity: 1, y: '0%', rotate: 0, transition: { duration: 0.7, ease } },
}

const AnimatedLine = ({ text, className = '' }: { text: string; className?: string }) => (
    <motion.span variants={lineVariants} className={`inline-block overflow-hidden ${className}`} aria-label={text}>
        {text.split(' ').map((word, i) => (
            <span key={i} className="inline-block overflow-hidden pb-1 pr-[0.2em] sm:pr-[0.28em]">
                <motion.span variants={wordVariants} className="inline-block">
                    {word}
                </motion.span>
            </span>
        ))}
    </motion.span>
)

const headingGroup: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
}

const filmContainer: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
}

const filmItem: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease } },
}

const VideoShowcase = () => {
    const sectionRef = useRef<HTMLElement>(null)
    const stageRef = useRef<HTMLDivElement>(null)
    const mainVideoRef = useRef<HTMLVideoElement>(null)
    const thumbRefs = useRef<(HTMLVideoElement | null)[]>([])

    const [activeIndex, setActiveIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(true)
    const [isMuted, setIsMuted] = useState(true)
    const [progress, setProgress] = useState(0)
    const [isFullscreen, setIsFullscreen] = useState(false)

    const active = videos[activeIndex]

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    })
    const glowY = useTransform(scrollYProgress, [0, 1], [-60, 60])

    // Reload + autoplay whenever the active clip changes
    useEffect(() => {
        const el = mainVideoRef.current
        if (!el) return
        el.currentTime = 0
        setProgress(0)
        el.load()
        if (isPlaying) {
            el.play().catch(() => { })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeIndex])

    // Track native fullscreen state (handles Esc key exits too)
    useEffect(() => {
        const handleChange = () => {
            setIsFullscreen(document.fullscreenElement === stageRef.current)
        }
        document.addEventListener('fullscreenchange', handleChange)
        return () => document.removeEventListener('fullscreenchange', handleChange)
    }, [])

    const togglePlay = () => {
        const el = mainVideoRef.current
        if (!el) return
        if (isPlaying) {
            el.pause()
        } else {
            el.play().catch(() => { })
        }
        setIsPlaying(!isPlaying)
    }

    const toggleMute = () => {
        const el = mainVideoRef.current
        if (!el) return
        el.muted = !isMuted
        setIsMuted(!isMuted)
    }

    const toggleFullscreen = () => {
        const el = stageRef.current
        if (!el) return
        if (document.fullscreenElement) {
            document.exitFullscreen().catch(() => { })
        } else {
            el.requestFullscreen().catch(() => { })
        }
    }

    const handleTimeUpdate = () => {
        const el = mainVideoRef.current
        if (!el || !el.duration) return
        setProgress((el.currentTime / el.duration) * 100)
    }

    const handleEnded = () => {
        setActiveIndex((prev) => (prev + 1) % videos.length)
    }

    const selectVideo = (index: number) => {
        if (index === activeIndex) return
        setActiveIndex(index)
    }

    const hoverThumb = (index: number) => {
        const el = thumbRefs.current[index]
        if (el) el.play().catch(() => { })
    }

    const leaveThumb = (index: number) => {
        const el = thumbRefs.current[index]
        if (el) {
            el.pause()
            el.currentTime = 0
        }
    }

    return (
        <section
            ref={sectionRef}
            className="relative w-full overflow-hidden bg-[#0B1413] px-5 py-24 sm:px-6 sm:py-28 md:px-10 lg:px-16 lg:py-32"
        >
            {/* Ambient glow */}
            <motion.div
                style={{ y: glowY }}
                className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#3DC5B8]/[0.08] blur-[100px] sm:h-[600px] sm:w-[600px] sm:blur-[140px]"
            />
            <div className="pointer-events-none absolute -left-24 bottom-0 h-[300px] w-[300px] rounded-full bg-[#3DC5B8]/[0.05] blur-[100px] sm:h-[420px] sm:w-[420px]" />

            <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center">
                {/* ================= BADGE ================= */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="flex items-center gap-2 rounded-full border border-[#2DB9AE]/20 bg-white/5 px-4 py-2 text-xs font-medium text-[#3DC5B8] sm:px-5 sm:text-sm"
                >
                    <span className="relative flex h-2 w-2 shrink-0">
                        <span className="absolute inset-0 animate-ping rounded-full bg-[#2DB9AE]/40" />
                        <span className="relative h-2 w-2 rounded-full bg-[#2DB9AE]" />
                    </span>
                    See It In Action
                </motion.div>

                {/* ================= HEADING ================= */}
                <motion.h2
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={headingGroup}
                    className="mt-8 max-w-4xl text-center text-[clamp(2.2rem,7vw,5.5rem)] font-light leading-[1.05] tracking-[-0.03em] text-white sm:mt-10 sm:leading-[0.98] sm:tracking-[-0.04em]"
                >
                    <AnimatedLine text="Watch the routine" />
                    <br />
                    <AnimatedLine text="in real time." className="font-medium text-[#3DC5B8]" />
                </motion.h2>

                <motion.p
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={fadeUp}
                    className="mt-5 max-w-xl text-center text-sm font-light leading-6 text-white/50 sm:mt-6 sm:text-base sm:leading-7"
                >
                    Every step of the MEILID routine, filmed up close from first rinse to visible results.
                </motion.p>

                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease }}
                    className="mt-8 h-px w-16 origin-center bg-[#2DB9AE]/30 sm:mt-10"
                />

                {/* ================= MAIN STAGE ================= */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.9, ease }}
                    className="relative mt-10 w-full sm:mt-12"
                >
                    {/* Gradient bezel */}
                    <div className="relative rounded-[1.75rem] bg-gradient-to-br from-[#3DC5B8]/50 via-white/10 to-[#3DC5B8]/15 p-[1.5px] sm:rounded-[2rem]">
                        <div
                            ref={stageRef}
                            className="group relative aspect-video w-full overflow-hidden rounded-[calc(1.75rem-1.5px)] bg-black shadow-[0_0_100px_-30px_rgba(45,185,174,0.45)] sm:rounded-[calc(2rem-1.5px)]"
                        >
                            <AnimatePresence mode="wait">
                                <motion.video
                                    key={active.id}
                                    ref={mainVideoRef}
                                    autoPlay
                                    muted={isMuted}
                                    playsInline
                                    onTimeUpdate={handleTimeUpdate}
                                    onEnded={handleEnded}
                                    initial={{ opacity: 0, scale: 1.03 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.98 }}
                                    transition={{ duration: 0.5, ease }}
                                    className={`h-full w-full ${isFullscreen ? 'object-contain' : 'object-cover'}`}
                                >
                                    <source src={active.src} />
                                </motion.video>
                            </AnimatePresence>

                            {/* Viewfinder corner brackets — a nod to close, precise focus */}
                            <div className="pointer-events-none absolute inset-4 sm:inset-6">
                                <span className="absolute left-0 top-0 h-6 w-6 border-l-2 border-t-2 border-[#3DC5B8]/60 sm:h-8 sm:w-8" />
                                <span className="absolute right-0 top-0 h-6 w-6 border-r-2 border-t-2 border-[#3DC5B8]/60 sm:h-8 sm:w-8" />
                                <span className="absolute bottom-0 left-0 h-6 w-6 border-b-2 border-l-2 border-[#3DC5B8]/60 sm:h-8 sm:w-8" />
                                <span className="absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-[#3DC5B8]/60 sm:h-8 sm:w-8" />
                            </div>

                            {/* Legibility gradients */}
                            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/85 to-transparent" />
                            <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/40 to-transparent" />

                            {/* Title + controls overlay */}
                            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between sm:bottom-7 sm:left-7 sm:right-7">
                                <div>
                                    <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#3DC5B8]">
                                        {String(activeIndex + 1).padStart(2, '0')} / {String(videos.length).padStart(2, '0')}
                                    </span>
                                    <h3 className="mt-1 text-lg font-light text-white sm:text-2xl">{active.title}</h3>
                                </div>

                                <div className="flex items-center gap-2 sm:gap-3">
                                    <motion.button
                                        whileHover={{ scale: 1.08 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={toggleMute}
                                        aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                                        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-md transition-colors duration-300 hover:border-[#3DC5B8]/60 hover:text-[#3DC5B8] sm:h-10 sm:w-10"
                                    >
                                        {isMuted ? <FiVolumeX size={15} /> : <FiVolume2 size={15} />}
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.08 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={togglePlay}
                                        aria-label={isPlaying ? 'Pause video' : 'Play video'}
                                        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-md transition-colors duration-300 hover:border-[#3DC5B8]/60 hover:text-[#3DC5B8] sm:h-10 sm:w-10"
                                    >
                                        {isPlaying ? <FiPause size={15} /> : <FiPlay size={15} />}
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.08 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={toggleFullscreen}
                                        aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
                                        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-md transition-colors duration-300 hover:border-[#3DC5B8]/60 hover:text-[#3DC5B8] sm:h-10 sm:w-10"
                                    >
                                        {isFullscreen ? <FiMinimize size={15} /> : <FiMaximize size={15} />}
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Progress bar */}
                    <div className="mt-4 h-[3px] w-full overflow-hidden rounded-full bg-white/10">
                        <motion.div
                            className="h-full rounded-full bg-[#3DC5B8] shadow-[0_0_12px_rgba(61,197,184,0.8)]"
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.15, ease: 'linear' }}
                        />
                    </div>
                </motion.div>

                {/* ================= FILMSTRIP ================= */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={filmContainer}
                    className="mt-6 grid w-full grid-cols-3 gap-3 sm:mt-8 sm:grid-cols-5 sm:gap-4"
                >
                    {videos.map((v, i) => {
                        const isActive = i === activeIndex
                        return (
                            <motion.button
                                key={v.id}
                                variants={filmItem}
                                onClick={() => selectVideo(i)}
                                onMouseEnter={() => hoverThumb(i)}
                                onMouseLeave={() => leaveThumb(i)}
                                whileHover={{ y: -4 }}
                                whileTap={{ scale: 0.97 }}
                                className={`group relative aspect-[3/4] overflow-hidden rounded-xl border transition-all duration-300 ${isActive
                                    ? 'border-[#3DC5B8] shadow-[0_0_0_3px_rgba(61,197,184,0.18),0_12px_30px_-12px_rgba(45,185,174,0.5)]'
                                    : 'border-white/10 hover:border-white/30'
                                    }`}
                            >
                                <video
                                    ref={(el) => {
                                        thumbRefs.current[i] = el
                                    }}
                                    muted
                                    loop
                                    playsInline
                                    preload="metadata"
                                    className={`h-full w-full object-cover transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-55 group-hover:opacity-90'
                                        }`}
                                >
                                    <source src={v.src} />
                                </video>

                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

                                <span className="absolute left-2 top-2 rounded-full bg-black/40 px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-[0.15em] text-white/70 backdrop-blur-sm sm:left-3 sm:top-3">
                                    {String(i + 1).padStart(2, '0')}
                                </span>

                                {isActive ? (
                                    <span className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-[#3DC5B8] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-[#04211D] sm:right-3 sm:top-3">
                                        <motion.span
                                            animate={{ opacity: [1, 0.3, 1] }}
                                            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
                                            className="h-1.5 w-1.5 rounded-full bg-[#04211D]"
                                        />
                                        Playing
                                    </span>
                                ) : (
                                    <span className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md">
                                            <FiPlay size={13} className="translate-x-[1px]" />
                                        </span>
                                    </span>
                                )}

                                <span className="absolute bottom-2 left-2 right-2 text-left text-[11px] font-medium leading-tight text-white sm:bottom-3 sm:left-3 sm:right-3 sm:text-xs">
                                    {v.title}
                                </span>
                            </motion.button>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}

export default VideoShowcase
import React from 'react'
import { LuLeafyGreen } from 'react-icons/lu'

const Sustainability = () => {
    return (
        <section className="container-box flex min-h-dvh w-full items-center bg-[#F3FAF9]">

            <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">

                {/* Left Content */}
                <div className="flex flex-col items-start">

                    {/* Badge */}
                    <div className="badge">
                        <div className="badge-dot" />
                        Sustainability
                    </div>

                    {/* Heading */}
                    <h2 className="mt-7 max-w-xl text-4xl font-bold leading-[1.1] tracking-tight text-primary md:text-5xl">
                        Good for your eyes.
                        <br />
                        Good for the planet.
                    </h2>

                    {/* Description */}
                    <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-500 md:text-lg">
                        Single-use wipes and disposable pads create unnecessary
                        waste. MEILID is reusable, durable, and designed to last —
                        saving you money and reducing your environmental footprint.
                    </p>

                    {/* Stats */}
                    <div className="mt-8 flex flex-wrap gap-5">

                        <div className="min-w-[180px] rounded-2xl bg-white px-7 py-6 shadow-[0_10px_30px_rgba(35,39,100,0.06)]">
                            <p className="text-3xl font-bold text-[#2DB9AE]">
                                700+
                            </p>

                            <p className="mt-2 text-sm text-neutral-500">
                                wipes replaced per year
                            </p>
                        </div>

                        <div className="min-w-[180px] rounded-2xl bg-white px-7 py-6 shadow-[0_10px_30px_rgba(35,39,100,0.06)]">
                            <p className="text-3xl font-bold text-[#2DB9AE]">
                                12+ mo
                            </p>

                            <p className="mt-2 text-sm text-neutral-500">
                                typical device lifespan
                            </p>
                        </div>

                    </div>
                </div>

                {/* Right Highlight */}
                <div className="relative">

                    {/* Decorative Circle */}
                    <div className="absolute -right-1 -top-1 h-32 w-32 rounded-full bg-[#EAF8F6]" />

                    <div className="relative flex min-h-[260px] flex-col items-center justify-center overflow-hidden rounded-[2rem] bg-white px-8 py-12 text-center shadow-[0_20px_60px_rgba(35,39,100,0.08)]">

                        {/* Icon */}
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#EAF8F6] text-xl text-[#2DB9AE]">
                            <LuLeafyGreen />
                        </div>

                        <p className="text-6xl font-bold tracking-tight text-primary md:text-7xl">
                            700+
                        </p>

                        <p className="mt-3 max-w-md text-base leading-7 text-neutral-500">
                            disposable eye wipes the average person uses each
                            year.
                        </p>

                        <p className="mt-1 font-semibold text-primary">
                            MEILID replaces them all.
                        </p>

                    </div>
                </div>

            </div>

        </section>
    )
}

export default Sustainability
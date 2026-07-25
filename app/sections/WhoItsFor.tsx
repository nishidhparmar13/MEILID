import React from 'react'
import {
    FiEye,
    FiSmile,
    FiWind,
    FiActivity,
} from 'react-icons/fi'

const audiences = [
    {
        icon: <FiEye />,
        title: 'Chronic eye irritation',
        description:
            'Get to the root of blepharitis, MGD, and inflammation.',
    },
    {
        icon: <FiSmile />,
        title: 'Makeup & lash extensions',
        description:
            'Remove mascara, liner, and glue residue without harsh rubbing.',
    },
    {
        icon: <FiWind />,
        title: 'Allergy sufferers',
        description:
            'Clear away pollen and allergens trapped in your lashes.',
    },
    {
        icon: <FiActivity />,
        title: 'Post-procedure care',
        description:
            'Ideal after LASIK, cataract surgery, or other eye procedures.',
    },
]

const WhoItsFor = () => {
    return (
        <section className="container-box flex min-h-dvh w-full flex-col items-center gap-6 bg-background">

            {/* Badge */}
            <div className="badge">
                <div className="badge-dot" />
                Who It&apos;s For
            </div>

            {/* Heading */}
            <div className="flex max-w-4xl flex-col items-center gap-4 text-center">
                <h2 className="heading">
                    Not just for dry eyes — your all-in-one eyelid care solution
                </h2>
            </div>

            {/* Audience Cards */}
            <div className="mt-10 grid w-full max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {audiences.map((item) => (
                    <div
                        key={item.title}
                        className="group flex min-h-[280px] flex-col rounded-2xl border border-neutral-200/70 bg-white p-8 shadow-[0_10px_35px_rgba(35,39,100,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(35,39,100,0.08)]"
                    >
                        {/* Icon */}
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF8F6] text-2xl text-[#2DB9AE] transition-transform duration-300 group-hover:scale-105">
                            {item.icon}
                        </div>

                        {/* Content */}
                        <div className="mt-auto">
                            <h3 className="text-xl font-semibold leading-tight text-primary">
                                {item.title}
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-neutral-500">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default WhoItsFor
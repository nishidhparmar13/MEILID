import React from 'react'
import { FiDroplet } from 'react-icons/fi'
import { LiaEyeSolid } from 'react-icons/lia'
import { PiTarget } from 'react-icons/pi'

const Solution = () => {
    return (
        <div className='container-box gap-6 flex flex-col items-center bg-background w-full min-h-dvh'>

            <div className='badge'>
                <div className='badge-dot'></div>
                The Solution
            </div>
            <p className='heading'>Meet MEILID: the at-home eyelid care system that actually works</p>
            <p className='sub-heading'>MEILID combines 20+ years of clinical research with gentle, effective design to give you what drops can&apos;t — true, lasting relief.</p>

            <div className='flex items-start bg-white/50 w-[700px] gap-4 border-[0.5px] p-4 rounded-xl'>
                <div className='bg-primary text-white h-[50px] w-[50px] rounded-lg text-4xl flex items-center justify-center'>
                    <PiTarget />
                </div>
                <div className='flex flex-col'>
                    <p className='text-xl font-semibold'>
                        Targets the root cause
                    </p>
                    <p className='text-base font-light'>
                        Removes the buildup that drives inflammation — not just the symptoms.
                    </p>
                </div>

            </div>
            <div className='flex items-start bg-white/50 w-[700px] gap-4 border-[0.5px] p-4 rounded-xl'>
                <div className='bg-primary text-white h-[50px] w-[50px] rounded-lg text-4xl flex items-center justify-center'>
                    <FiDroplet />
                </div>
                <div className='flex flex-col'>
                    <p className='text-xl font-semibold'>
                        Restores natural moisture
                    </p>
                    <p className='text-base font-light'>
                        Supports healthy oil gland function for a balanced, comfortable tear film.
                    </p>
                </div>

            </div>
            <div className='flex items-start bg-white/50 w-[700px] gap-4 border-[0.5px] p-4 rounded-xl'>
                <div className='bg-primary text-white h-[50px] w-[50px] rounded-lg text-4xl flex items-center justify-center'>
                    <LiaEyeSolid />
                </div>
                <div className='flex flex-col'>
                    <p className='text-xl font-semibold'>
                        Gentle yet effective
                    </p>
                    <p className='text-base font-light'>
                        Designed for sensitive eyes — safe for daily or twice-daily use.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Solution
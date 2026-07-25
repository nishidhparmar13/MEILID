import { GrLinkNext } from "react-icons/gr";
import { MdOutlineShoppingCart } from "react-icons/md";
import {
    FaMicroscope,
    FaShieldAlt,
    FaStar,
    FaUserMd,
} from "react-icons/fa";
import { HiOutlineBadgeCheck } from "react-icons/hi";

const Hero = () => {
    return (
        <div className="min-h-dvh flex w-full justify-between bg-secondary py-30 px-10">
            <div className=" flex flex-col items-start gap-6 max-w-2xl">
                <div className="capitalize px-4 py-2 border border-primary flex items-center gap-2 text-primary rounded-full">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    Doctor Developed Eyelid Care
                </div>

                <h1 className="text-7xl uppercase font-black leading-[0.95] text-white">
                    Relief That <br />
                    Starts At The <br />
                    <span className="text-primary">Source.</span>
                </h1>

                <p className="text-lg text-white/85 max-w-[520px]">
                    MEILID targets the root cause of chronic dry eye and eyelid
                    irritation, helping you experience cleaner, healthier, and more
                    comfortable eyes every day.
                </p>

                {/* Buttons */}
                <div className="flex items-center gap-5">
                    <button className="bg-white text-black flex items-center gap-2 px-7 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition">
                        <MdOutlineShoppingCart className="text-2xl" />
                        Shop Now
                    </button>

                    <button className="border border-primary text-primary flex items-center gap-2 px-7 py-3 rounded-full hover:bg-primary hover:text-white transition">
                        Learn How It Works
                        <GrLinkNext />
                    </button>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-4 text-white mt-2">
                    <div className="flex text-yellow-400 text-xl">
                        {[...Array(5)].map((_, i) => (
                            <FaStar key={i} />
                        ))}
                    </div>

                    <span className="font-semibold text-lg">4.9/5</span>

                    <span className="text-white/40">|</span>

                    <span className="text-white/80 font-medium">
                        100+ Verified Customers
                    </span>
                </div>

                {/* Trust Cards */}
                {/* <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md py-4">
                    <div className="grid grid-cols-4 divide-x divide-white/10">
                        <div className="flex flex-col items-center gap-3 w-[140px]">
                            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
                                <FaUserMd className="text-primary text-2xl" />
                            </div>

                            <p className="text-center text-white font-semibold text-sm">
                                Doctor
                                <br />
                                Developed
                            </p>
                        </div>

                        <div className="flex flex-col items-center gap-3 w-[140px]">
                            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
                                <FaMicroscope className="text-primary text-2xl" />
                            </div>

                            <p className="text-center text-white font-semibold text-sm">
                                20+ Years
                                <br />
                                Research
                            </p>
                        </div>

                        <div className="flex flex-col items-center gap-3 w-[140px]">
                            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
                                <FaShieldAlt className="text-primary text-2xl" />
                            </div>

                            <p className="text-center text-white font-semibold text-sm">
                                Clinically
                                <br />
                                Tested
                            </p>
                        </div>

                        <div className="flex flex-col items-center gap-3 w-[140px]">
                            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
                                <HiOutlineBadgeCheck className="text-primary text-2xl" />
                            </div>

                            <p className="text-center text-white font-semibold text-sm">
                                60-Day
                                <br />
                                Money Back
                            </p>
                        </div>
                    </div>
                </div> */}
            </div>
            <div className="w-1/2 flex items-center justify-center  ">

            </div>
        </div>
    );
};

export default Hero;
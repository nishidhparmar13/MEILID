// "use client"
// import { useRef } from "react"
// import { GrLinkNext } from "react-icons/gr"
// import { motion, useMotionValue, useSpring, useTransform, Variants } from "framer-motion"


// const ease = [0.16, 1, 0.3, 1]

// const container: Variants = {
//     hidden: {},
//     show: {
//         transition: { staggerChildren: 0.1, delayChildren: 0.2 },
//     },
// }

// const fadeUp = {
//     hidden: { opacity: 0, y: 28 },
//     show: {
//         opacity: 1,
//         y: 0,
//         transition: { duration: 0.8, ease },
//     },
// }

// const word = {
//     hidden: { opacity: 0, y: "100%" },
//     show: {
//         opacity: 1,
//         y: "0%",
//         transition: { duration: 0.7, ease },
//     },
// }

// // Splits a headline into words, each wrapped so it can clip-reveal upward
// const RevealWords = ({ text, className = "" }) => (
//     <span className={`inline-flex flex-wrap justify-center ${className}`}>
//         {text.split(" ").map((w, i) => (
//             <span key={i} className="overflow-hidden inline-block pb-1 mr-[0.3em]">
//                 <motion.span variants={word} className="inline-block">
//                     {w}
//                 </motion.span>
//             </span>
//         ))}
//     </span>
// )

// // Floating ambient dots behind the product image
// const Particles = () => {
//     const dots = [
//         { left: "20%", top: "30%", size: 6, dur: 6, delay: 0 },
//         { left: "78%", top: "20%", size: 4, dur: 7.5, delay: 0.6 },
//         { left: "68%", top: "62%", size: 5, dur: 5.5, delay: 1.1 },
//         { left: "30%", top: "68%", size: 4, dur: 8, delay: 0.3 },
//         { left: "85%", top: "45%", size: 3, dur: 6.5, delay: 1.4 },
//     ]
//     return (
//         <div className="absolute inset-0 pointer-events-none">
//             {dots.map((d, i) => (
//                 <motion.span
//                     key={i}
//                     className="absolute rounded-full bg-primary/30"
//                     style={{ left: d.left, top: d.top, width: d.size, height: d.size }}
//                     animate={{
//                         y: [0, -22, 0],
//                         opacity: [0.15, 0.6, 0.15],
//                     }}
//                     transition={{
//                         duration: d.dur,
//                         delay: d.delay,
//                         repeat: Infinity,
//                         ease: "easeInOut",
//                     }}
//                 />
//             ))}
//         </div>
//     )
// }

// // CTA that leans toward the cursor within its hover radius, then springs back
// const MagneticButton = ({ children }) => {
//     const ref = useRef(null)
//     const x = useMotionValue(0)
//     const y = useMotionValue(0)
//     const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.4 })
//     const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.4 })

//     const handleMove = (e) => {
//         const rect = ref.current.getBoundingClientRect()
//         const relX = e.clientX - (rect.left + rect.width / 2)
//         const relY = e.clientY - (rect.top + rect.height / 2)
//         x.set(relX * 0.35)
//         y.set(relY * 0.35)
//     }

//     const handleLeave = () => {
//         x.set(0)
//         y.set(0)
//     }

//     return (
//         <motion.div variants={fadeUp} style={{ x: springX, y: springY }}>
//             <motion.button
//                 ref={ref}
//                 onMouseMove={handleMove}
//                 onMouseLeave={handleLeave}
//                 whileHover={{ scale: 1.06 }}
//                 whileTap={{ scale: 0.94 }}
//                 className="group/btn font-medium cursor-pointer flex items-center gap-2 rounded-full bg-[#30308d] text-white pl-6 pr-4 py-2 overflow-hidden transition-[padding,gap,box-shadow] duration-300 ease-out hover:pr-3 hover:gap-3 text-lg hover:shadow-xl hover:shadow-[#30308d]/40"
//             >
//                 {children}
//             </motion.button>
//         </motion.div>
//     )
// }

// const Hero = () => {
//     // Scene-wide parallax driven by pointer position
//     const mvX = useMotionValue(0)
//     const mvY = useMotionValue(0)
//     const springConf = { stiffness: 60, damping: 18, mass: 0.6 }
//     const sX = useSpring(mvX, springConf)
//     const sY = useSpring(mvY, springConf)

//     const imageX = useTransform(sX, [-1, 1], [-18, 18])
//     const imageY = useTransform(sY, [-1, 1], [-14, 14])
//     const blobX = useTransform(sX, [-1, 1], [-30, 30])
//     const blobY = useTransform(sY, [-1, 1], [-20, 20])
//     const labelX = useTransform(sX, [-1, 1], [6, -6])
//     const secondBlobX = useTransform(sX, [-1, 1], [20, -20])

//     const handlePointerMove = (e) => {
//         const { innerWidth, innerHeight } = window
//         mvX.set((e.clientX / innerWidth) * 2 - 1)
//         mvY.set((e.clientY / innerHeight) * 2 - 1)
//     }

//     return (
//         <div
//             onMouseMove={handlePointerMove}
//             className="min-h-dvh overflow-hidden flex flex-col relative p-[9dvh] items-center w-full bg-[#ebebeb]"
//         >
//             {/* Ambient blob — morphs shape and drifts with the pointer */}
//             <motion.div
//                 style={{
//                     clipPath: "ellipse(25% 40% at 50% 50%)",
//                     x: blobX,
//                     y: blobY,
//                 }}
//                 className="absolute top-[-40%] left-[-25%] w-[800px] h-[800px] bg-[#D9D9D933]"
//                 animate={{
//                     rotate: [0, 10, -4, 0],
//                     scale: [1, 1.08, 0.97, 1],
//                 }}
//                 transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
//             />

//             {/* Vertical label — drifts opposite the pointer for depth */}
//             <motion.div
//                 style={{ x: labelX }}
//                 initial={{ opacity: 0, x: 30 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.9, delay: 0.7, ease }}
//                 className="uppercase top-1/2 -translate-y-1/2 rotate-90 absolute -right-[5%] text-gray-600 font-light flex items-center gap-4"
//             >
//                 <p>precision</p>
//                 <div className="w-[5px] h-[5px] bg-gray-400 rounded-full" />
//                 <p>care</p>
//                 <div className="w-[5px] h-[5px] bg-gray-400 rounded-full" />
//                 <p>comfort</p>
//             </motion.div>

//             {/* Product image — dramatic entrance, then floats + parallaxes */}
//             <div className="relative">
//                 <Particles />
//                 <motion.img
//                     src={'/images/product.png'}
//                     alt="product"
//                     width={400}
//                     height={400}
//                     style={{ x: imageX, y: imageY }}
//                     initial={{ opacity: 0, scale: 0.6, rotate: -8, filter: "blur(12px)" }}
//                     animate={{
//                         opacity: 1,
//                         scale: 1,
//                         rotate: 0,
//                         filter: "blur(0px)",
//                     }}
//                     transition={{ duration: 1.1, ease, delay: 0.1 }}
//                     className="z-10 relative"
//                 />
//                 <motion.div
//                     className="absolute inset-0 -z-10"
//                     animate={{ y: [0, -14, 0] }}
//                     transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.3 }}
//                 />
//             </div>

//             <motion.div
//                 variants={container}
//                 initial="hidden"
//                 animate="show"
//                 className="space-y-5 z-10 flex items-center flex-col"
//             >
//                 <motion.div
//                     variants={fadeUp}
//                     className="relative text-primary bg-[#3DC5B826] px-4 rounded-full py-2 flex font-semibold text-base items-center gap-2 overflow-hidden"
//                 >
//                     {/* shimmer sweep across the badge */}
//                     <motion.span
//                         className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
//                         initial={{ x: "-120%" }}
//                         animate={{ x: "220%" }}
//                         transition={{ duration: 1.8, delay: 1.4, ease: "easeInOut" }}
//                     />
//                     <motion.span
//                         className="w-[10px] h-[10px] rounded-full bg-primary block relative"
//                         animate={{ scale: [1, 1.35, 1], opacity: [1, 0.6, 1] }}
//                         transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//                     />
//                     <span className="relative">Advanced Eyelid Hygiene Solution</span>
//                 </motion.div>

//                 <motion.div
//                     variants={fadeUp}
//                     style={{ transformOrigin: "center" }}
//                     className="relative w-[100px] h-[1px] bg-primary overflow-hidden"
//                 >
//                     <motion.div
//                         className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white to-transparent"
//                         animate={{ x: ["-100%", "300%"] }}
//                         transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 1, ease: "easeInOut" }}
//                     />
//                 </motion.div>

//                 <motion.p
//                     variants={container}
//                     className="text-5xl font-extralight mb-4"
//                 >
//                     <RevealWords text="Gentle Cleaning." />
//                 </motion.p>
//                 <motion.p variants={container} className="text-5xl font-extralight flex items-baseline">
//                     <RevealWords text="Better Eyelid" />
//                     <span className="overflow-hidden inline-block pb-1">
//                         <motion.span
//                             variants={word}
//                             className="inline-block"
//                         >
//                             <motion.span
//                                 initial={{ backgroundSize: "0% 100%" }}
//                                 animate={{ backgroundSize: "100% 100%" }}
//                                 transition={{ duration: 0.7, delay: 1.15, ease: "easeOut" }}
//                                 style={{ backgroundRepeat: "no-repeat" }}
//                                 className="bg-secondary px-4 text-white inline-block"
//                             >
//                                 Health..
//                             </motion.span>
//                         </motion.span>
//                     </span>
//                 </motion.p>

//                 <motion.p
//                     variants={fadeUp}
//                     className="text-gray-500 font-normal text-base text-center"
//                 >
//                     A medical-grade silicone brush designed to gently clean the lash <br />
//                     line for better daily eyelid hygiene.
//                 </motion.p>

//                 <MagneticButton>
//                     <span className="font-light">
//                         Explore <span className="font-bold">MEILID</span>
//                     </span>
//                     <GrLinkNext className="transition-all duration-300 ease-out opacity-0 -translate-x-2 w-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 group-hover/btn:w-4" />
//                 </MagneticButton>
//             </motion.div>

//             {/* Ambient blob — counter-drifts against the pointer */}
//             <motion.div
//                 style={{
//                     clipPath: "ellipse(25% 40% at 50% 50%)",
//                     x: secondBlobX,
//                 }}
//                 className="absolute -top-[13vw] w-[800px] h-[120vw] rotate-90 bg-white/30"
//                 animate={{ x: [0, 24, 0], scale: [1, 1.04, 1] }}
//                 transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
//             />
//         </div>
//     )
// }

// export default Hero
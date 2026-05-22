'use client'

import { motion } from 'framer-motion'

export default function BackgroundBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Top-right large blob */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-30 -right-20 w-[300px] h-[100px] rounded-full bg-[#E3EAF8] dark:bg-[#3A3760]/40 blur-[2px]"
      />
      {/* Right-mid blob */}
      <motion.div
        animate={{ scale: [1, 1.05, 1], rotate: [0, -4, 0] }}
        transition={{ duration: 8, delay: 1, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-65 -right-10 w-[350px] h-[120px] rounded-full bg-[#E3EAF8] dark:bg-[#3A3760]/30 blur-[2px]"
      />
      
      {/* Bottom-right blob */}
      <motion.div
        animate={{ scale: [1, 1.05, 1], rotate: [0, -4, 0] }}
        transition={{ duration: 8, delay: 1, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-20 -right-10 w-[300px] h-[100px] rounded-full bg-[#E3EAF8] dark:bg-[#3A3760]/30 blur-[2px]"
      />

      {/* Left edge blob */}
      <motion.div
        animate={{ scale: [1, 1.07, 1] }}
        transition={{ duration: 11, delay: 0.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-40 -left-16 w-[180px] h-[90px] rounded-full bg-[#E3EAF8] dark:bg-[#3A3760]/30 blur-[2px]"
      />
      {/* Bottom-left blob */}
      <motion.div
        animate={{ scale: [1, 1.09, 1], rotate: [0, -3, 0] }}
        transition={{ duration: 12, delay: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-5 -left-16 w-[220px] h-[110px] rounded-full bg-[#E3EAF8] dark:bg-[#3A3760]/28 blur-[1px]"
      />

        <motion.div
        animate={{ scale: [1, 1.09, 1], rotate: [0, -3, 0] }}
        transition={{ duration: 12, delay: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-30 -left-20 w-[320px] h-[110px] rounded-full bg-[#E3EAF8] dark:bg-[#3A3760]/28 blur-[1px]"
      />
     
    </div>
  )
}
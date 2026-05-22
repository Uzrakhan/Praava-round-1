'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface PortalCardProps {
  name: string
  message: string
  meta: string
  className?: string
  rotation?: number
  floatDelay?: number
  entranceDelay?: number
}

export default function PortalCard({
  name,
  message,
  meta,
  className = '',
  rotation = 0,
  floatDelay = 1,
  entranceDelay = 0.5,
}: PortalCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: entranceDelay,
        ease: [0.34, 1.56, 0.64, 1],
      }}
      className={className}
      style={{ rotate: rotation }}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 5.5,
          delay: floatDelay,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
        className="
          flex items-center gap-3 px-1 py-0.2 rounded-full cursor-pointer
          bg-[#A4AAEF] dark:bg-[#A4AAEF]/80
          shadow-[0_16px_40px_rgba(197,200,232,0.35)]
          dark:shadow-[0_16px_40px_rgba(0,0,0,0.3)]
          backdrop-blur-sm min-w-[240px] max-w-[280px] 
        "
      >
        {/* Left accent bar */}
        <div className="w-[4px] h-[28px] rounded-full bg-[#E07B39] shrink-0 mt-1 ml-4" />

        {/* Avatar */}
        <div className="shrink-0 mt-0.5">
          <div className="w-9 h-7 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold text-sm">
            
            <Image
                src="/avatar.png"
                alt="Avatar"
                width={60}
                height={60}
                className="rounded-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col p-1">
          <span className="font-semibold text-[#2D2B45] dark:text-white text-[0.7em] leading-tight">{name}</span>
          <p className="text-zinc-600 dark:text-white/60 text-[0.5em] mt-0.5 leading-snug line-clamp-2">{message}</p>
          <span className="text-[#2D2B45]/40 dark:text-white/30 text-[0.2em] mt-1">{meta}</span>
        </div>
      </motion.div>
    </motion.div>
  )
}
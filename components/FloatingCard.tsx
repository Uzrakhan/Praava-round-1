'use client'

import { motion } from 'framer-motion'
import {
  LucideIcon,
  Gavel,
  FileText,
  CheckSquare,
  Receipt,
} from 'lucide-react'

type CardColor = 'blue' | 'orange' | 'dark' | 'lavender'

interface FloatingCardProps {
  color: CardColor
  rotation: number
  icon: LucideIcon
  label: string
  className?: string
  floatDelay?: number
  floatDuration?: number
  floatReverse?: boolean
  entranceDelay?: number
}

const colorMap: Record<CardColor, { bg: string; text: string; iconBg: string; shadow: string }> = {
  blue: {
    bg:     'bg-[#2E43FF]',
    text:   'text-white',
    iconBg: 'bg-[#2E43FF]',
    shadow: 'shadow-[0_20px_50px_rgba(67,97,238,0.40)]',
  },
  orange: {
    bg:     'bg-[#E37B2C]',
    text:   'text-white',
    iconBg: 'bg-[#E37B2C]',
    shadow: 'shadow-[0_20px_50px_rgba(224,123,57,0.40)]',
  },
  dark: {
    bg:     'bg-[#322847]',
    text:   'text-[#E37B2C]',
    iconBg: 'bg-[#322847]',
    shadow: 'shadow-[0_20px_50px_rgba(45,43,69,0.40)]',
  },
  lavender: {
    bg:     'bg-[#A4AAEF]',
    text:   'text-[#232B64]',
    iconBg: 'bg-[#A4AAEF]',
    shadow: 'shadow-[0_20px_50px_rgba(197,200,232,0.40)]',
  },
}

export default function FloatingCard({
  color,
  rotation,
  icon: Icon,
  label,
  className = '',
  floatDelay = 0,
  floatDuration = 6,
  floatReverse = false,
  entranceDelay = 0,
}: FloatingCardProps) {
  const { bg, text, iconBg, shadow } = colorMap[color]

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
        animate={{ y: floatReverse ? [0, 12, 0] : [0, -12, 0] }}
        transition={{
          duration: floatDuration,
          delay: floatDelay,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        whileHover={{ scale: 1.06, transition: { duration: 0.2 } }}
        className={`
          flex items-start justify-start gap-3 px-15 py-2.5 pl-[1rem] pr-[6rem] rounded-[2em] cursor-pointer
          ${bg} ${text} ${shadow}
          transition-shadow duration-300
        `}
      >
        <span className={`flex items-center justify-center w-6 h-6 rounded-full ${iconBg}`}>
          <Icon size={18} strokeWidth={2.1} />
        </span>
        <span className="text-[1rem] font-semibold tracking-tight whitespace-nowrap text-left">{label}</span>
      </motion.div>
    </motion.div>
  )
}
'use client'

import { motion } from 'framer-motion'
import { Receipt, Milestone, CheckSquare, FileText, Gavel } from 'lucide-react'
import FloatingCard from './FloatingCard'
import PortalCard from './PortalCard'
import BackgroundBlobs from './BackgroundBlobs'

const fadeUpVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function HeroSection() {
  return (
    <section className="
      relative min-h-screen w-full
      bg-[#EEF0F8] dark:bg-[#13111F]
      transition-colors duration-500
      flex items-center
      overflow-hidden
    ">
      <BackgroundBlobs />

      <div className="
        relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12
        flex flex-col lg:flex-row items-start
        gap-12 lg:gap-0
        py-20 lg:py-0
      ">

        {/* ── LEFT: Text Content ── */}
        <div className="w-full lg:w-[50%] pt-15 lg:pt-20">
          <motion.h1
            custom={0.1}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="
              text-[4rem] sm:text-5xl lg:text-[3rem] leading-[1.1] font-sans
              text-[#797DA7] dark:text-white
              mb-5
            "
          >
            A single platform to{' '}
            <strong className="font-bold">manage</strong>{' '}
            every part of{' '}
            your<strong className="font-bold"> legal work</strong>
          </motion.h1>

          <motion.p
            custom={0.28}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="
              text-sm text-[#2E43FF] dark:text-[#9CA3AF]
              leading-relaxed  mb-9 
            "
          >
            Track matters, coordinate schedules, manage {' '}
            <p>
            </p>
            clients, centralize documents, and handle {' '}
            <p>

            </p>
            communication – all in one system.
          </motion.p>

          
        </div>

        {/* ── RIGHT: Floating Cards Canvas (tablet+) ── */}
        <div className="
          w-full lg:w-[50%]
          relative
          h-[480px] sm:h-[540px] lg:h-[600px]
          w-full lg:w-auto left-[10%]
          hidden sm:block
        ">
          {/* BILLING */}
          <FloatingCard
            color="blue"
            rotation={10}
            icon={Receipt}
            label="Billing"
            className="absolute bottom-[45%] left-[10%]"
            floatDelay={0}
            floatDuration={6}
            entranceDelay={0.5}
          />

          {/* MATTERS */}
          <FloatingCard
            color="orange"
            rotation={-10}
            icon={Gavel}
            label="Matters"
            className="absolute bottom-[36%] right-[60%]"
            floatDelay={0.8}
            floatDuration={7}
            floatReverse
            entranceDelay={0.7}
          />

          {/* PORTAL MESSAGE */}
          <PortalCard
            name="John Doe – Portal"
            message="Hey! Could you please review a document for me?"
            meta="MAT-2233 · 2 h ago"
            rotation={2}
            className="absolute bottom-[20%] left-[8%]"
            floatDelay={1.2}
            entranceDelay={0.9}
          />

          {/* TASKS */}
          <FloatingCard
            color="dark"
            rotation={0}
            icon={CheckSquare}
            label="Tasks"
            className="absolute bottom-[8%] right-[50%]"
            floatDelay={0.4}
            floatDuration={5.5}
            entranceDelay={1.1}
          />

          {/* DOCUMENTS */}
          <FloatingCard
            color="dark"
            rotation={-9}
            icon={FileText}
            label="Documents"
            className="absolute bottom-[10%] ml-10 left-[30%]"
            floatDelay={1.5}
            floatDuration={6.5}
            floatReverse
            entranceDelay={1.3}
          />
        </div>

        {/* ── MOBILE: simplified flat pills ── */}
        <div className="sm:hidden w-full flex flex-wrap gap-3 justify-center">
          {[
            { color: 'blue'   as const, icon: Receipt,     label: 'Billing'   },
            { color: 'orange' as const, icon: Milestone,   label: 'Matters'   },
            { color: 'dark'   as const, icon: CheckSquare, label: 'Tasks'     },
            { color: 'dark'   as const, icon: FileText,    label: 'Documents' },
          ].map(({ color, icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}
            >
              <FloatingCard
                color={color}
                rotation={0}
                icon={icon}
                label={label}
                floatDelay={i * 0.3}
                floatDuration={5 + i}
                entranceDelay={0}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
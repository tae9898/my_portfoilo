"use client"

import * as React from "react"
import { motion, Variants } from "framer-motion"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"

export interface NavigationItem {
  label: string
  href: string
}

interface NavigationProps {
  items: NavigationItem[]
  className?: string
}

const navigationVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3
    }
  }
}

export function Navigation({ items, className }: NavigationProps) {
  const router = useRouter()

  const handleNavigate = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <nav className={cn("flex items-center gap-1", className)}>
      {items.map((item, index) => (
        <motion.div
          key={item.href}
          initial="hidden"
          animate="visible"
          transition={{ delay: index * 0.05, duration: 0.3 }}
          variants={navigationVariants}
          className="relative group px-3 py-2"
        >
          <a
            href={item.href}
            onClick={(e) => handleNavigate(e, item.href)}
            className="relative z-10 text-sm font-medium tracking-[0.5em] uppercase text-foreground/70 hover:text-foreground transition-colors duration-300 cursor-pointer"
          >
            {item.label}
          </a>

          {/* Hover glow effect */}
          <span className="absolute inset-0 bg-accent/50 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
        </motion.div>
      ))}
    </nav>
  )
}

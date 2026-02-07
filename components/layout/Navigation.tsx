"use client"

import * as React from "react"
import { motion, Variants } from "framer-motion"
import { cn } from "@/lib/utils"

export interface NavigationItem {
  label: string
  href: string
}

interface NavigationProps {
  items: NavigationItem[]
  className?: string
  onNavigate?: (href: string) => void
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

export function Navigation({ items, className, onNavigate }: NavigationProps) {
  const [activeSection, setActiveSection] = React.useState<string>("")

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = items.map(item => item.href.substring(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [items])

  const handleClick = (href: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const targetId = href.substring(1)
    const element = document.getElementById(targetId)

    if (element) {
      const offsetTop = element.offsetTop - 64 // Header height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      })
      onNavigate?.(href)
    }
  }

  return (
    <nav className={cn("flex items-center gap-1", className)}>
      {items.map((item, index) => {
        const isActive = activeSection === item.href.substring(1)

        return (
          <motion.a
            key={item.href}
            href={item.href}
            onClick={(e) => handleClick(item.href, e)}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.05, duration: 0.3 }}
            variants={navigationVariants}
            className="relative group px-3 py-2"
          >
            <span className="relative z-10 text-sm font-medium tracking-[0.5em] uppercase text-foreground/70 hover:text-foreground transition-colors duration-300">
              {item.label}
            </span>

            {/* Active indicator */}
            <motion.span
              className="absolute bottom-0 left-0 right-0 h-px bg-foreground origin-center"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isActive ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />

            {/* Hover glow effect */}
            <span className="absolute inset-0 bg-accent/50 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
          </motion.a>
        )
      })}
    </nav>
  )
}

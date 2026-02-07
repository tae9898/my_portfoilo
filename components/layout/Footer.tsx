"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Github, Mail, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface SocialLink {
  label: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}

const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/tae9898", icon: Github },
  { label: "Blog", href: "https://tae-98.tistory.com/", icon: BookOpen },
  { label: "Email", href: "mailto:k99779004@naver.com", icon: Mail },
]

const socialVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1] as const
    }
  })
}

interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={cn("border-t border-border/50 bg-muted/30", className)}>
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center gap-8">
          {/* Social Links */}
          <nav className="flex items-center gap-2">
            {socialLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={socialVariants}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 rounded-full"
                    aria-label={link.label}
                  >
                    <Icon className="h-4 w-4" />
                  </Button>
                </motion.a>
              )
            })}
          </nav>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-sm text-muted-foreground font-mono"
          >
            &copy; {currentYear} <span className="mx-1">[</span>TAE<span className="mx-1">]</span>. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  )
}

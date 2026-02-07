"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Mail, Github, MapPin, BookOpen } from "lucide-react"
import Link from "next/link"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
}

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center py-20 px-4">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent dark:from-blue-900/20 dark:via-transparent -z-10" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center"
      >
        {/* Profile Image */}
        <motion.div variants={itemVariants} className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 p-1 shadow-xl shadow-blue-500/20">
              <div className="w-full h-full rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                <span className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  T
                </span>
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-white dark:border-gray-900" />
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground mb-4">
          Hi, I&apos;m
        </motion.p>

        {/* Name with gradient */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
        >
          <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer">
            TAE
          </span>
        </motion.h1>

        {/* Role */}
        <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
          Linux Middleware & Embedded Systems Developer
        </motion.h2>

        {/* Location */}
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
          <MapPin className="w-5 h-5" />
          <span>Seoul, South Korea</span>
        </motion.div>

        {/* Bio */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Specialized in developing robust middleware solutions and embedded systems.
          Proficient in C, C++, Python, and Linux kernel development with deep expertise
          in Broadcom SDK and network infrastructure.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button asChild size="lg" className="text-base px-8 py-6 h-auto bg-blue-600 hover:bg-blue-700">
            <Link href="#projects">
              <Github className="w-5 h-5" />
              View Projects
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-base px-8 py-6 h-auto border-2 hover:bg-accent">
            <a href="https://tae-98.tistory.com/" target="_blank" rel="noopener noreferrer">
              <BookOpen className="w-5 h-5" />
              Visit Blog
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-base px-8 py-6 h-auto border-2 hover:bg-accent">
            <Link href="mailto:k99779004@naver.com">
              <Mail className="w-5 h-5" />
              Contact Me
            </Link>
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="flex gap-4 justify-center">
          <a
            href="https://github.com/tae9898"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://tae-98.tistory.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Blog"
          >
            <BookOpen className="w-5 h-5" />
          </a>
          <a
            href="mailto:k99779004@naver.com"
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

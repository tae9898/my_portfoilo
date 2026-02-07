"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Code2, Cpu, Terminal, Database, Network, Wrench, ArrowRight } from "lucide-react"
import Link from "next/link"
import { type LucideIcon } from "lucide-react"

const skillsData = {
  languages: [
    { name: "C", icon: Code2, level: "Expert" },
    { name: "C++", icon: Code2, level: "Advanced" },
    { name: "Python", icon: Code2, level: "Advanced" },
    { name: "MATLAB", icon: Code2, level: "Intermediate" },
  ],
  tools: [
    { name: "Linux", icon: Terminal, level: "Expert" },
    { name: "Broadcom SDK", icon: Cpu, level: "Advanced" },
    { name: "Git", icon: Database, level: "Advanced" },
    { name: "GDB", icon: Wrench, level: "Intermediate" },
  ],
  domains: [
    { name: "Embedded Systems", icon: Cpu, level: "Expert" },
    { name: "Middleware", icon: Network, level: "Expert" },
    { name: "Kernel Development", icon: Terminal, level: "Advanced" },
    { name: "Network Programming", icon: Network, level: "Advanced" },
  ],
}

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

function SkillBadge({ skill }: { skill: { name: string; icon: LucideIcon; level: string } }) {
  const Icon = skill.icon

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.05, y: -2 }}
      className="group"
    >
      <Badge
        variant="secondary"
        className="px-4 py-2 text-sm font-medium cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-200"
      >
        <Icon className="w-4 h-4 mr-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
        {skill.name}
        <span className="ml-2 text-xs text-muted-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400">
          {skill.level}
        </span>
      </Badge>
    </motion.div>
  )
}

export function Skills() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-950">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and domains I work with professionally
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid gap-12 md:gap-16">
          {/* Languages */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <h3 className="text-2xl font-semibold">Programming Languages</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skillsData.languages.map((skill) => (
                <SkillBadge key={skill.name} skill={skill} />
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-6">
              <Terminal className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
              <h3 className="text-2xl font-semibold">Tools & Frameworks</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skillsData.tools.map((skill) => (
                <SkillBadge key={skill.name} skill={skill} />
              ))}
            </div>
          </motion.div>

          {/* Domains */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-6">
              <Cpu className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              <h3 className="text-2xl font-semibold">Domains</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skillsData.domains.map((skill) => (
                <SkillBadge key={skill.name} skill={skill} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA Link */}
        <motion.div variants={itemVariants} className="text-center mt-12">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors font-medium"
          >
            View Full About Page
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}

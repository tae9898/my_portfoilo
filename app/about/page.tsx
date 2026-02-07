"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Code2,
  Cpu,
  Terminal,
  Database,
  Network,
  Wrench,
  Calendar,
  MapPin,
  Github,
  Mail,
  Download,
  Briefcase
} from "lucide-react"
import Link from "next/link"
import { type LucideIcon } from "lucide-react"

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

const skillsData = {
  languages: [
    { name: "C", icon: Code2, level: "Expert", years: 8 },
    { name: "C++", icon: Code2, level: "Advanced", years: 7 },
    { name: "Python", icon: Code2, level: "Advanced", years: 5 },
    { name: "MATLAB", icon: Code2, level: "Intermediate", years: 3 },
    { name: "Shell", icon: Terminal, level: "Advanced", years: 6 },
    { name: "JavaScript", icon: Code2, level: "Intermediate", years: 2 },
  ],
  tools: [
    { name: "Linux", icon: Terminal, level: "Expert", years: 8 },
    { name: "Broadcom SDK", icon: Cpu, level: "Advanced", years: 6 },
    { name: "Git", icon: Database, level: "Advanced", years: 6 },
    { name: "GDB", icon: Wrench, level: "Advanced", years: 5 },
    { name: "Make", icon: Wrench, level: "Expert", years: 7 },
    { name: "CMake", icon: Wrench, level: "Advanced", years: 4 },
    { name: "Docker", icon: Database, level: "Intermediate", years: 2 },
    { name: "Jenkins", icon: Database, level: "Intermediate", years: 2 },
  ],
  domains: [
    { name: "Embedded Systems", icon: Cpu, level: "Expert", years: 7 },
    { name: "Middleware", icon: Network, level: "Expert", years: 8 },
    { name: "Kernel Development", icon: Terminal, level: "Advanced", years: 5 },
    { name: "Network Programming", icon: Network, level: "Advanced", years: 6 },
    { name: "System Architecture", icon: Cpu, level: "Advanced", years: 6 },
    { name: "Performance Optimization", icon: Wrench, level: "Advanced", years: 5 },
  ],
  hardware: [
    { name: "ARM Architecture", icon: Cpu, level: "Advanced", years: 6 },
    { name: "Network Processors", icon: Network, level: "Expert", years: 5 },
    { name: "FPGA", icon: Cpu, level: "Intermediate", years: 2 },
    { name: "PCIe", icon: Network, level: "Advanced", years: 4 },
    { name: "DMA", icon: Wrench, level: "Advanced", years: 5 },
  ]
}

const experienceData = [
  {
    title: "Senior Linux Middleware Engineer",
    company: "Network Systems Company",
    period: "2021 - Present",
    description: "Leading middleware development for network systems, focusing on performance optimization and scalability.",
    achievements: [
      "Optimized packet processing pipeline by 40%",
      "Developed custom Linux kernel modules",
      "Led team of 5 engineers on major project",
      "Reduced memory footprint by 30%"
    ]
  },
  {
    title: "Embedded Systems Developer",
    company: "Telecommunications Solutions",
    period: "2019 - 2021",
    description: "Developed embedded software for network equipment using Broadcom SDK and Linux kernel.",
    achievements: [
      "Implemented real-time data processing systems",
      "Developed device drivers for network interfaces",
      "Created comprehensive test suites",
      "Reduced system latency by 25%"
    ]
  },
  {
    title: "Software Engineer",
    company: "Tech Startup",
    period: "2017 - 2019",
    description: "Worked on IoT devices and embedded systems, developing firmware and middleware components.",
    achievements: [
      "Built custom communication protocols",
      "Optimized power consumption for battery devices",
      "Implemented secure boot mechanisms",
      "Created automation tools for testing"
    ]
  }
]

const educationData = [
  {
    degree: "Master of Science in Computer Engineering",
    institution: "Seoul National University",
    period: "2015 - 2017",
    description: "Specialized in embedded systems and real-time computing"
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Korea University",
    period: "2011 - 2015",
    description: "Focus on systems programming and operating systems"
  }
]

function SkillBadge({ skill }: { skill: { name: string; icon: LucideIcon; level: string; years: number } }) {
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
          {skill.level} • {skill.years}y
        </span>
      </Badge>
    </motion.div>
  )
}

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Hello, I&apos;m TAE
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Linux Middleware & Embedded Systems Developer specializing in high-performance,
              reliable systems for network equipment and embedded platforms.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                Seoul, South Korea
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Briefcase className="w-4 h-4" />
                8+ Years Experience
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <Button asChild className="gap-2">
                <Link href="mailto:k99779004@naver.com">
                  <Mail className="w-4 h-4" />
                  Contact
                </Link>
              </Button>
              <Button variant="outline" asChild className="gap-2">
                <Link href="/resume" className="gap-2">
                  <Download className="w-4 h-4" />
                  Download Resume
                </Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={itemVariants} className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-muted-foreground mb-4">
                  I&apos;m a passionate developer with 8+ years of experience in Linux kernel programming,
                  embedded systems, and middleware development. My expertise lies in creating high-performance,
                  reliable software for network equipment and embedded platforms.
                </p>
                <p className="text-muted-foreground mb-4">
                  Throughout my career, I&apos;ve worked extensively with Broadcom SDK, developed custom Linux
                  kernel modules, and optimized system performance for high-throughput network processing.
                  I thrive in low-level programming environments and enjoy solving complex system-level challenges.
                </p>
                <p className="text-muted-foreground">
                  My technical approach combines deep understanding of hardware-software interaction with
                  modern software engineering practices to deliver robust, maintainable code.
                </p>
              </div>
            </motion.div>

            {/* Skills Section */}
            <motion.div variants={itemVariants} className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Skills & Expertise</h2>
              <div className="grid gap-8 md:gap-12">
                {/* Programming Languages */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Code2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      Programming Languages
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3">
                      {skillsData.languages.map((skill) => (
                        <SkillBadge key={skill.name} skill={skill} />
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Tools & Frameworks */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Terminal className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                      Tools & Frameworks
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3">
                      {skillsData.tools.map((skill) => (
                        <SkillBadge key={skill.name} skill={skill} />
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Domains */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Network className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                      Domains
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3">
                      {skillsData.domains.map((skill) => (
                        <SkillBadge key={skill.name} skill={skill} />
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Hardware */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Cpu className="w-6 h-6 text-green-600 dark:text-green-400" />
                      Hardware & Systems
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3">
                      {skillsData.hardware.map((skill) => (
                        <SkillBadge key={skill.name} skill={skill} />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Experience Section */}
            <motion.div variants={itemVariants} className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Professional Experience</h2>
              <div className="space-y-8">
                {experienceData.map((exp, index) => (
                  <Card key={index} className="border-l-4 border-l-blue-600">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <CardTitle className="text-xl">{exp.title}</CardTitle>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                      </div>
                      <p className="text-lg text-muted-foreground font-medium">{exp.company}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{exp.description}</p>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Education Section */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Education</h2>
              <div className="space-y-6">
                {educationData.map((edu, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <CardTitle className="text-xl">{edu.degree}</CardTitle>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </div>
                      </div>
                      <p className="text-lg text-muted-foreground font-medium">{edu.institution}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{edu.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-50 dark:bg-gray-900">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Let&apos;s Work Together</h2>
            <p className="text-xl text-muted-foreground">
              Interested in collaborating on a project or have questions about my work?
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href="mailto:k99779004@naver.com">
                  <Mail className="w-5 h-5" />
                  Get In Touch
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="gap-2">
                <Link href="https://github.com/tae9898" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                  View GitHub
                </Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
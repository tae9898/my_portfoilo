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
import Image from "next/image"
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
    { name: "C", icon: Code2, level: "Expert" },
    { name: "C++", icon: Code2, level: "Advanced" },
    { name: "Python", icon: Code2, level: "Advanced" },
    { name: "Shell", icon: Terminal, level: "Advanced" },
  ],
  tools: [
    { name: "Linux", icon: Terminal, level: "Expert" },
    { name: "Broadcom SDK", icon: Cpu, level: "Advanced" },
    { name: "Git", icon: Database, level: "Advanced" },
    { name: "Make", icon: Wrench, level: "Expert" },
    { name: "CMake", icon: Wrench, level: "Advanced" },
    { name: "Docker", icon: Database, level: "Intermediate" },
  ],
  domains: [
    { name: "Embedded Systems", icon: Cpu, level: "Expert" },
    { name: "Middleware", icon: Network, level: "Expert" },
    { name: "Network Programming", icon: Network, level: "Advanced" },
    { name: "System Architecture", icon: Cpu, level: "Advanced" },
    { name: "Performance Optimization", icon: Wrench, level: "Advanced" },
  ]
}

const experienceData = [
  {
    title: "nftables migration",
    company: "Network Middleware Development",
    period: "Network Protocol Stack",
    description: "iptables에서 nftables로 마이그레이션 및 네이티브 환경 최적화",
    achievements: [
      "iptables 포팅 (Hidden API, PON 관련 Ebtables 함수, Access Control, Port Loop Detect, DHCPD Update)",
      "Port Trigger 기능을 iptables 모듈에서 nftables rule base로 포팅",
      "map, set, mark를 이용한 구현 (set: related port 개방, map: NAT)",
      "iptables 모듈 의존성 제거 및 nftables 네이티브 환경 구조 최적화",
      "커널 모듈 없이 Rule 조합만으로 구현"
    ]
  },
  {
    title: "Hidden Log exe 제작",
    company: "Debugging Tool Development [협업]",
    period: "Productivity Tool",
    description: "필드 이슈시 원격 디버깅을 위한 자동화 도구 개발",
    achievements: [
      "LAN 내 원격 PC tool(AnyDesk) 없이 디버깅 가능하도록 API 개발",
      "한 번의 API 실행(POST)으로 현 위치에 log, sys info 등 요구 파일 자동 저장",
      "파일 encryption 기능 추가",
      "Python 프로그램을 통해 API 실행 명령어 간소화 및 decryption 기능 구현",
      "WiFi 파트와 협업하여 개발팀 전체 생산성 향상에 기여"
    ]
  },
  {
    title: "Spirent 계측기 테스트 자동화",
    company: "Network Testing",
    period: "Test Automation",
    description: "Spirent 계측기를 활용한 네트워크 장비 테스트 환경 구축",
    achievements: [
      "Device와 Packet Gen 생성 및 컨트랙 테이블 이해",
      "WAN, LAN에 적합한 디바이스와 패킷 생성",
      "매크로 기능을 활용한 원하는 테스트 자동화 실행",
      "DevOps 협업으로 네트워크실 계측기를 원격에서 console 확인 가능하도록 구성",
      "회사 내부 계측기 사용 자립화로 타부서 의존성 제거"
    ]
  }
]

const devOpsData = {
  title: "DevOps & Tooling",
  description: "생산성을 극대화하는 커스텀 개발 환경 구축",
  items: [
    {
      category: "Shell Scripting",
      description: "Fish Shell 기반으로 복잡한 펌웨어 빌드 및 배포 파이프라인을 함수화(mk*, upgrade_fw)하여, 반복 작업에 소요되는 시간을 일 30분 이상 단축하고 휴먼 에러를 방지"
    },
    {
      category: "Code Analysis",
      description: "대규모 커널 소스 분석을 위해 Clangd와 Bear를 연동한 Neovim 환경을 구축, IDE 수준의 코드 네비게이션과 정적 분석 기능을 경량화된 환경에서 구현"
    },
    {
      category: "AI Integration",
      description: "에디터 내에 LLM(ChatGPT)을 통합하여 레거시 코드 리팩토링 및 문서화 작업을 반자동화하고, Tmux 로깅 플러그인을 활용해 장기 테스트 로그 관리 프로세스를 정립"
    }
  ]
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
            {/* Profile Photo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8 flex justify-center"
            >
              <div className="relative w-32 h-32 md:w-40 md:h-40">
                <Image
                  src="/profile.jpg"
                  alt="TAE Profile"
                  fill
                  className="rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg"
                  priority
                />
              </div>
            </motion.div>

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
                2+ Years Experience
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
                  I&apos;m a passionate developer with 2+ years of experience in Linux kernel programming,
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

            {/* DevOps & Tooling Section */}
            <motion.div variants={itemVariants} className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{devOpsData.title}</h2>
              <p className="text-lg text-muted-foreground mb-8">{devOpsData.description}</p>
              <div className="space-y-4">
                {devOpsData.items.map((item, index) => (
                  <Card key={index} className="border-l-4 border-l-purple-600">
                    <CardHeader>
                      <CardTitle className="text-lg text-purple-600 dark:text-purple-400">
                        {item.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.description}</p>
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
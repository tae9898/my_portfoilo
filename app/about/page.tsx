"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
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
  Briefcase,
  Check
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { type LucideIcon } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

const EMAIL = "k99779004@naver.com"

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

function SkillBadge({ skill, levelText }: { skill: { name: string; icon: LucideIcon; level: string }; levelText: string }) {
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
          {levelText}
        </span>
      </Badge>
    </motion.div>
  )
}

function CopyEmailButton({ className, size = "default", copyText, copiedText }: {
  className?: string;
  size?: "default" | "lg" | "sm";
  copyText: string;
  copiedText: string;
}) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy email:", err)
    }
  }

  const iconSize = size === "lg" ? "w-5 h-5" : "w-4 h-4"

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        onClick={handleCopy}
        size={size}
        className={`gap-2 cursor-pointer transition-all duration-200 hover:shadow-lg ${className || ""}`}
      >
        <AnimatePresence mode="wait">
          {copied ? (
            <motion.div
              key="check"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-2"
            >
              <Check className={iconSize} />
              {copiedText}
            </motion.div>
          ) : (
            <motion.div
              key="mail"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-2"
            >
              <Mail className={iconSize} />
              {copyText}
            </motion.div>
          )}
        </AnimatePresence>
      </Button>
    </motion.div>
  )
}

export default function About() {
  const { t, language } = useLanguage()

  const skillsData = {
    languages: [
      { name: "C", icon: Code2, level: "expert" },
      { name: "C++", icon: Code2, level: "advanced" },
      { name: "Python", icon: Code2, level: "advanced" },
      { name: "Shell", icon: Terminal, level: "advanced" },
    ],
    tools: [
      { name: "Linux", icon: Terminal, level: "expert" },
      { name: "Broadcom SDK", icon: Cpu, level: "advanced" },
      { name: "Git", icon: Database, level: "advanced" },
      { name: "Make", icon: Wrench, level: "expert" },
      { name: "CMake", icon: Wrench, level: "advanced" },
      { name: "Docker", icon: Database, level: "intermediate" },
    ],
    domains: [
      { name: t("skills.domains.embedded"), icon: Cpu, level: "expert" },
      { name: t("skills.domains.middleware"), icon: Network, level: "expert" },
      { name: t("skills.domains.network"), icon: Network, level: "advanced" },
      { name: t("skills.domains.architecture"), icon: Cpu, level: "advanced" },
      { name: t("skills.domains.optimization"), icon: Wrench, level: "advanced" },
    ]
  }

  const experienceData = [
    {
      title: t("experience.tfliteChatbot.title"),
      company: t("experience.tfliteChatbot.category"),
      period: t("experience.tfliteChatbot.period"),
      description: t("experience.tfliteChatbot.description"),
      achievements: language === "ko" ? [
        "TFLite 모델을 활용한 intent 분류 시스템 구현 및 threshold 최적화",
        "모델 연산 최적화 (2회→1회) 및 RAG 아키텍처 설계",
        "백엔드 API 연동 및 access token 캐싱 함수 구현",
        "8가지 테스트 케이스 API 구현 및 검증 완료"
      ] : [
        "Implemented intent classification system using TFLite model with threshold optimization",
        "Optimized model inference (2→1 operations) and designed RAG architecture",
        "Integrated backend API with access token caching",
        "Implemented and verified 8 test case APIs"
      ]
    },
    {
      title: t("experience.sdkMigration.title"),
      company: t("experience.sdkMigration.category"),
      period: t("experience.sdkMigration.period"),
      description: t("experience.sdkMigration.description"),
      achievements: language === "ko" ? [
        "Bringup 이후 POCS 브랜치 마이그레이션 수행",
        "Python 자동화 스크립트 개발로 마이그레이션 시간 80% 단축",
        "실패 내역 자동 수집 및 엑셀 리포트 생성, 업무 분배 체계화",
        "충돌 항목 수동 merge 및 Jira daily 진척 보고"
      ] : [
        "Performed POCS branch migration after bringup",
        "Developed Python automation scripts reducing migration time by 80%",
        "Automated failure tracking with Excel reports and task distribution",
        "Manual merge of conflicts and daily Jira progress reporting"
      ]
    },
    {
      title: t("experience.nftables.title"),
      company: t("experience.nftables.category"),
      period: t("experience.nftables.period"),
      description: t("experience.nftables.description"),
      achievements: language === "ko" ? [
        "iptables 포팅 (Hidden API, PON 관련 Ebtables 함수, Access Control, Port Loop Detect, DHCPD Update)",
        "Port Trigger 기능을 iptables 모듈에서 nftables rule base로 포팅",
        "map, set, mark를 이용한 구현 (set: related port 개방, map: NAT)",
        "iptables 모듈 의존성 제거 및 nftables 네이티브 환경 구조 최적화",
        "커널 모듈 없이 Rule 조합만으로 구현"
      ] : [
        "Ported iptables (Hidden API, PON-related Ebtables functions, Access Control, Port Loop Detect, DHCPD Update)",
        "Ported Port Trigger functionality from iptables module to nftables rule base",
        "Implemented using map, set, mark (set: related port opening, map: NAT)",
        "Removed iptables module dependencies and optimized nftables native environment structure",
        "Implemented with rule combinations only, without kernel modules"
      ]
    },
    {
      title: t("experience.hiddenLog.title"),
      company: t("experience.hiddenLog.category"),
      period: t("experience.hiddenLog.period"),
      description: t("experience.hiddenLog.description"),
      achievements: language === "ko" ? [
        "LAN 내 원격 PC tool(AnyDesk) 없이 디버깅 가능하도록 API 개발",
        "한 번의 API 실행(POST)으로 현 위치에 log, sys info 등 요구 파일 자동 저장",
        "파일 encryption 기능 추가",
        "Python 프로그램을 통해 API 실행 명령어 간소화 및 decryption 기능 구현",
        "WiFi 파트와 협업하여 개발팀 전체 생산성 향상에 기여"
      ] : [
        "Developed API for debugging without remote PC tools (AnyDesk) within LAN",
        "Auto-save logs, sys info, and requested files at current location with single API call (POST)",
        "Added file encryption functionality",
        "Simplified API execution commands and implemented decryption via Python program",
        "Contributed to overall development team productivity improvement through collaboration with WiFi team"
      ]
    },
    {
      title: t("experience.spirent.title"),
      company: t("experience.spirent.category"),
      period: t("experience.spirent.period"),
      description: t("experience.spirent.description"),
      achievements: language === "ko" ? [
        "Device와 Packet Gen 생성 및 컨트랙 테이블 이해",
        "WAN, LAN에 적합한 디바이스와 패킷 생성",
        "매크로 기능을 활용한 원하는 테스트 자동화 실행",
        "DevOps 협업으로 네트워크실 계측기를 원격에서 console 확인 가능하도록 구성",
        "회사 내부 계측기 사용 자립화로 타부서 의존성 제거"
      ] : [
        "Understanding Device and Packet Gen creation and contract tables",
        "Creating devices and packets suitable for WAN and LAN",
        "Executing desired test automation using macro functionality",
        "Configured remote console access to network room test equipment through DevOps collaboration",
        "Eliminated dependency on other departments by enabling self-sufficient test equipment usage"
      ]
    }
  ]

  const devOpsData = {
    title: t("about.devopsTitle"),
    description: t("about.devopsDesc"),
    items: [
      {
        category: t("devops.shellScripting"),
        description: t("devops.shellScriptingDesc")
      },
      {
        category: t("devops.codeAnalysis"),
        description: t("devops.codeAnalysisDesc")
      },
      {
        category: t("devops.aiIntegration"),
        description: t("devops.aiIntegrationDesc")
      }
    ]
  }

  const getLevelText = (level: string) => {
    return t(`skills.levels.${level}`)
  }

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

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
              >
                {t("about.titleLine1")}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
              >
                {t("about.titleLine2")}
              </motion.span>
            </h1>
            <div className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto space-y-1">
              {t("about.subtitle").split('\n').map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                {t("about.location")}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Briefcase className="w-4 h-4" />
                {t("about.experience")}
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <CopyEmailButton
                copyText={t("about.copyEmail")}
                copiedText={t("about.copiedToClipboard")}
              />
              <Button variant="outline" asChild className="gap-2">
                <Link href="/resume" className="gap-2">
                  <Download className="w-4 h-4" />
                  {t("about.downloadResume")}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("about.aboutMeTitle")}</h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-muted-foreground mb-4">
                  {t("about.aboutMeP1")}
                </p>
                <p className="text-muted-foreground mb-4">
                  {t("about.aboutMeP2")}
                </p>
                <p className="text-muted-foreground">
                  {t("about.aboutMeP3")}
                </p>
              </div>
            </motion.div>

            {/* Skills Section */}
            <motion.div variants={itemVariants} className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">{t("about.skillsTitle")}</h2>
              <div className="grid gap-8 md:gap-12">
                {/* Programming Languages */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Code2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      {t("about.programmingLanguages")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3">
                      {skillsData.languages.map((skill) => (
                        <SkillBadge key={skill.name} skill={skill} levelText={getLevelText(skill.level)} />
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Tools & Frameworks */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Terminal className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                      {t("about.toolsFrameworks")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3">
                      {skillsData.tools.map((skill) => (
                        <SkillBadge key={skill.name} skill={skill} levelText={getLevelText(skill.level)} />
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Domains */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Network className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                      {t("about.domains")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3">
                      {skillsData.domains.map((skill) => (
                        <SkillBadge key={skill.name} skill={skill} levelText={getLevelText(skill.level)} />
                      ))}
                    </div>
                  </CardContent>
                </Card>

              </div>
            </motion.div>

            {/* Experience Section */}
            <motion.div variants={itemVariants} className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">{t("about.experienceTitle")}</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold">{t("about.ctaTitle")}</h2>
            <p className="text-xl text-muted-foreground">
              {t("about.ctaSubtitle")}
            </p>
            <div className="flex justify-center gap-4">
              <CopyEmailButton
                size="lg"
                copyText={t("about.copyEmail")}
                copiedText={t("about.copiedToClipboard")}
              />
              <Button variant="outline" size="lg" asChild className="gap-2">
                <Link href="https://github.com/tae9898" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                  {t("about.viewGithub")}
                </Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}

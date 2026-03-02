"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

type Language = "en" | "ko"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("ko")

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language
    if (saved && (saved === "en" || saved === "ko")) {
      setLanguage(saved)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    const keys = key.split(".")
    let value: unknown = translations[language]
    for (const k of keys) {
      if (value && typeof value === "object") {
        value = (value as Record<string, unknown>)[k]
      }
    }
    return typeof value === "string" ? value : key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

// Translations
const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      resume: "Resume",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I'm",
      title: "Linux Middleware & Embedded Systems Developer",
      subtitle: "Building high-performance, reliable systems for network equipment and embedded platforms.",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
    },
    about: {
      title: "Hello, I'm TAE",
      subtitle: "Linux Middleware & Embedded Systems Developer specializing in high-performance, reliable systems for network equipment and embedded platforms.",
      location: "Seoul, South Korea",
      experience: "2+ Years Experience",
      copyEmail: "Copy email",
      copiedToClipboard: "Copied to clipboard",
      downloadResume: "Download Resume",
      aboutMeTitle: "About Me",
      aboutMeP1: "I'm a passionate developer with 2+ years of experience in Linux kernel programming, embedded systems, and middleware development. My expertise lies in creating high-performance, reliable software for network equipment and embedded platforms.",
      aboutMeP2: "Throughout my career, I've worked extensively with Broadcom SDK, developed custom Linux kernel modules, and optimized system performance for high-throughput network processing. I thrive in low-level programming environments and enjoy solving complex system-level challenges.",
      aboutMeP3: "My technical approach combines deep understanding of hardware-software interaction with modern software engineering practices to deliver robust, maintainable code.",
      skillsTitle: "Skills & Expertise",
      programmingLanguages: "Programming Languages",
      toolsFrameworks: "Tools & Frameworks",
      domains: "Domains",
      experienceTitle: "Professional Experience",
      devopsTitle: "DevOps & Tooling",
      devopsDesc: "생산성을 극대화하는 커스텀 개발 환경 구축",
      ctaTitle: "Let's Work Together",
      ctaSubtitle: "Interested in collaborating on a project or have questions about my work?",
      getInTouch: "Get In Touch",
      viewGithub: "View GitHub",
    },
    skills: {
      languages: {
        c: "C",
        cpp: "C++",
        python: "Python",
        shell: "Shell",
      },
      tools: {
        linux: "Linux",
        broadcomSdk: "Broadcom SDK",
        git: "Git",
        make: "Make",
        cmake: "CMake",
        docker: "Docker",
      },
      domains: {
        embedded: "Embedded Systems",
        middleware: "Middleware",
        network: "Network Programming",
        architecture: "System Architecture",
        optimization: "Performance Optimization",
      },
      levels: {
        expert: "Expert",
        advanced: "Advanced",
        intermediate: "Intermediate",
      },
    },
    experience: {
      nftables: {
        title: "nftables migration",
        category: "Network Middleware Development",
        period: "Network Protocol Stack",
        description: "iptables에서 nftables로 마이그레이션 및 네이티브 환경 최적화",
        achievements: [
          "iptables 포팅 (Hidden API, PON 관련 Ebtables 함수, Access Control, Port Loop Detect, DHCPD Update)",
          "Port Trigger 기능을 iptables 모듈에서 nftables rule base로 포팅",
          "map, set, mark를 이용한 구현 (set: related port 개방, map: NAT)",
          "iptables 모듈 의존성 제거 및 nftables 네이티브 환경 구조 최적화",
          "커널 모듈 없이 Rule 조합만으로 구현",
        ],
      },
      hiddenLog: {
        title: "Hidden Log exe 제작",
        category: "Debugging Tool Development [협업]",
        period: "Productivity Tool",
        description: "필드 이슈시 원격 디버깅을 위한 자동화 도구 개발",
        achievements: [
          "LAN 내 원격 PC tool(AnyDesk) 없이 디버깅 가능하도록 API 개발",
          "한 번의 API 실행(POST)으로 현 위치에 log, sys info 등 요구 파일 자동 저장",
          "파일 encryption 기능 추가",
          "Python 프로그램을 통해 API 실행 명령어 간소화 및 decryption 기능 구현",
          "WiFi 파트와 협업하여 개발팀 전체 생산성 향상에 기여",
        ],
      },
      spirent: {
        title: "Spirent 계측기 테스트 자동화",
        category: "Network Testing",
        period: "Test Automation",
        description: "Spirent 계측기를 활용한 네트워크 장비 테스트 환경 구축",
        achievements: [
          "Device와 Packet Gen 생성 및 컨트랙 테이블 이해",
          "WAN, LAN에 적합한 디바이스와 패킷 생성",
          "매크로 기능을 활용한 원하는 테스트 자동화 실행",
          "DevOps 협업으로 네트워크실 계측기를 원격에서 console 확인 가능하도록 구성",
          "회사 내부 계측기 사용 자립화로 타부서 의존성 제거",
        ],
      },
    },
    devops: {
      shellScripting: "Shell Scripting",
      shellScriptingDesc: "Fish Shell 기반으로 복잡한 펌웨어 빌드 및 배포 파이프라인을 함수화(mk*, upgrade_fw)하여, 반복 작업에 소요되는 시간을 일 30분 이상 단축하고 휴먼 에러를 방지",
      codeAnalysis: "Code Analysis",
      codeAnalysisDesc: "대규모 커널 소스 분석을 위해 Clangd와 Bear를 연동한 Neovim 환경을 구축, IDE 수준의 코드 네비게이션과 정적 분석 기능을 경량화된 환경에서 구현",
      aiIntegration: "AI Integration",
      aiIntegrationDesc: "에디터 내에 LLM(ChatGPT)을 통합하여 레거시 코드 리팩토링 및 문서화 작업을 반자동화하고, Tmux 로깅 플러그인을 활용해 장기 테스트 로그 관리 프로세스를 정립",
    },
    projects: {
      title: "Projects",
      subtitle: "A collection of my work and side projects",
      viewCode: "View Code",
      viewDetails: "View Details",
      technologies: "Technologies",
    },
    contact: {
      title: "Get in Touch",
      subtitle: "Have a question or want to work together? Feel free to reach out!",
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "your@email.com",
        message: "Message",
        messagePlaceholder: "Your message...",
        send: "Send Message",
        sending: "Sending...",
        success: "Message sent successfully!",
        error: "Failed to send message. Please try again.",
      },
    },
    resume: {
      title: "Resume",
      subtitle: "Download my resume or view my experience below",
      download: "Download PDF",
    },
    footer: {
      copyright: "All rights reserved.",
      language: "Language",
    },
  },
  ko: {
    nav: {
      home: "홈",
      about: "소개",
      projects: "프로젝트",
      resume: "이력서",
      contact: "연락처",
    },
    hero: {
      greeting: "안녕하세요, 저는",
      title: "Linux 미들웨어 & 임베디드 시스템 개발자",
      subtitle: "네트워크 장비와 임베디드 플랫폼을 위한 고성능, 신뢰성 있는 시스템을 구축합니다.",
      viewProjects: "프로젝트 보기",
      contactMe: "연락하기",
    },
    about: {
      title: "안녕하세요, TAE입니다",
      subtitle: "네트워크 장비와 임베디드 플랫폼을 위한 고성능, 신뢰성 있는 시스템을 전문으로 하는 Linux 미들웨어 & 임베디드 시스템 개발자입니다.",
      location: "대한민국 서울",
      experience: "2년 이상 경력",
      copyEmail: "이메일 복사",
      copiedToClipboard: "클립보드에 복사됨",
      downloadResume: "이력서 다운로드",
      aboutMeTitle: "소개",
      aboutMeP1: "저는 Linux 커널 프로그래밍, 임베디드 시스템, 미들웨어 개발 분야에서 2년 이상의 경력을 가진 열정적인 개발자입니다. 네트워크 장비와 임베디드 플랫폼을 위한 고성능, 신뢰성 있는 소프트웨어를 개발하는 것이 저의 전문 분야입니다.",
      aboutMeP2: "그동안 Broadcom SDK를 활용한 작업, 커스텀 Linux 커널 모듈 개발, 고처리량 네트워크 처리를 위한 시스템 성능 최적화 등을 수행했습니다. 저는 저수준 프로그래밍 환경에서 일하는 것을 즐기며 복잡한 시스템 수준의 과제를 해결하는 것을 좋아합니다.",
      aboutMeP3: "제 기술적 접근 방식은 하드웨어-소프트웨어 상호작용에 대한 깊은 이해와 현대적인 소프트웨어 엔지니어링 실천 방법을 결합하여 견고하고 유지보수 가능한 코드를 제공하는 것입니다.",
      skillsTitle: "기술 & 전문분야",
      programmingLanguages: "프로그래밍 언어",
      toolsFrameworks: "도구 & 프레임워크",
      domains: "도메인",
      experienceTitle: "실무 경력",
      devopsTitle: "DevOps & 툴링",
      devopsDesc: "생산성을 극대화하는 커스텀 개발 환경 구축",
      ctaTitle: "함께 일해요",
      ctaSubtitle: "프로젝트 협업이나 제 작업에 대해 궁금한 점이 있으신가요?",
      getInTouch: "연락하기",
      viewGithub: "GitHub 보기",
    },
    skills: {
      languages: {
        c: "C",
        cpp: "C++",
        python: "Python",
        shell: "Shell",
      },
      tools: {
        linux: "Linux",
        broadcomSdk: "Broadcom SDK",
        git: "Git",
        make: "Make",
        cmake: "CMake",
        docker: "Docker",
      },
      domains: {
        embedded: "임베디드 시스템",
        middleware: "미들웨어",
        network: "네트워크 프로그래밍",
        architecture: "시스템 아키텍처",
        optimization: "성능 최적화",
      },
      levels: {
        expert: "전문가",
        advanced: "고급",
        intermediate: "중급",
      },
    },
    experience: {
      nftables: {
        title: "nftables 마이그레이션",
        category: "네트워크 미들웨어 개발",
        period: "네트워크 프로토콜 스택",
        description: "iptables에서 nftables로 마이그레이션 및 네이티브 환경 최적화",
        achievements: [
          "iptables 포팅 (Hidden API, PON 관련 Ebtables 함수, Access Control, Port Loop Detect, DHCPD Update)",
          "Port Trigger 기능을 iptables 모듈에서 nftables rule base로 포팅",
          "map, set, mark를 이용한 구현 (set: related port 개방, map: NAT)",
          "iptables 모듈 의존성 제거 및 nftables 네이티브 환경 구조 최적화",
          "커널 모듈 없이 Rule 조합만으로 구현",
        ],
      },
      hiddenLog: {
        title: "Hidden Log exe 제작",
        category: "디버깅 툴 개발 [협업]",
        period: "생산성 도구",
        description: "필드 이슈시 원격 디버깅을 위한 자동화 도구 개발",
        achievements: [
          "LAN 내 원격 PC tool(AnyDesk) 없이 디버깅 가능하도록 API 개발",
          "한 번의 API 실행(POST)으로 현 위치에 log, sys info 등 요구 파일 자동 저장",
          "파일 encryption 기능 추가",
          "Python 프로그램을 통해 API 실행 명령어 간소화 및 decryption 기능 구현",
          "WiFi 파트와 협업하여 개발팀 전체 생산성 향상에 기여",
        ],
      },
      spirent: {
        title: "Spirent 계측기 테스트 자동화",
        category: "네트워크 테스팅",
        period: "테스트 자동화",
        description: "Spirent 계측기를 활용한 네트워크 장비 테스트 환경 구축",
        achievements: [
          "Device와 Packet Gen 생성 및 컨트랙 테이블 이해",
          "WAN, LAN에 적합한 디바이스와 패킷 생성",
          "매크로 기능을 활용한 원하는 테스트 자동화 실행",
          "DevOps 협업으로 네트워크실 계측기를 원격에서 console 확인 가능하도록 구성",
          "회사 내부 계측기 사용 자립화로 타부서 의존성 제거",
        ],
      },
    },
    devops: {
      shellScripting: "Shell 스크립팅",
      shellScriptingDesc: "Fish Shell 기반으로 복잡한 펌웨어 빌드 및 배포 파이프라인을 함수화(mk*, upgrade_fw)하여, 반복 작업에 소요되는 시간을 일 30분 이상 단축하고 휴먼 에러를 방지",
      codeAnalysis: "코드 분석",
      codeAnalysisDesc: "대규모 커널 소스 분석을 위해 Clangd와 Bear를 연동한 Neovim 환경을 구축, IDE 수준의 코드 네비게이션과 정적 분석 기능을 경량화된 환경에서 구현",
      aiIntegration: "AI 통합",
      aiIntegrationDesc: "에디터 내에 LLM(ChatGPT)을 통합하여 레거시 코드 리팩토링 및 문서화 작업을 반자동화하고, Tmux 로깅 플러그인을 활용해 장기 테스트 로그 관리 프로세스를 정립",
    },
    projects: {
      title: "프로젝트",
      subtitle: "제 작업과 사이드 프로젝트 모음",
      viewCode: "코드 보기",
      viewDetails: "상세 보기",
      technologies: "기술 스택",
    },
    contact: {
      title: "연락하기",
      subtitle: "질문이 있거나 함께 일하고 싶으시면 언제든지 연락해 주세요!",
      form: {
        name: "이름",
        namePlaceholder: "이름을 입력하세요",
        email: "이메일",
        emailPlaceholder: "your@email.com",
        message: "메시지",
        messagePlaceholder: "메시지를 입력하세요...",
        send: "메시지 보내기",
        sending: "전송 중...",
        success: "메시지가 성공적으로 전송되었습니다!",
        error: "메시지 전송에 실패했습니다. 다시 시도해 주세요.",
      },
    },
    resume: {
      title: "이력서",
      subtitle: "이력서를 다운로드하거나 아래에서 경력을 확인하세요",
      download: "PDF 다운로드",
    },
    footer: {
      copyright: "All rights reserved.",
      language: "언어",
    },
  },
}

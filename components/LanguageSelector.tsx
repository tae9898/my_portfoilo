"use client"

import { motion } from "framer-motion"
import { Globe } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-muted-foreground" />
      <div className="flex items-center gap-1 bg-muted/50 rounded-full p-1">
        <motion.button
          onClick={() => setLanguage("ko")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 cursor-pointer ${
            language === "ko"
              ? "bg-blue-600 text-white shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          KO
        </motion.button>
        <motion.button
          onClick={() => setLanguage("en")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 cursor-pointer ${
            language === "en"
              ? "bg-blue-600 text-white shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          EN
        </motion.button>
      </div>
    </div>
  )
}

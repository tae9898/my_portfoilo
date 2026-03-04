"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, ExternalLink, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function Resume() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 flex flex-col">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="p-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-800"
      >
        <Button variant="ghost" size="sm" asChild>
          <Link href="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Link>
        </Button>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" asChild>
            <a href="/resume.pdf" download>
              <Download className="w-4 h-4 mr-2" />
              Download
            </a>
          </Button>
          <Button size="sm" asChild>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              New Tab
            </a>
          </Button>
        </div>
      </motion.div>

      {/* PDF Viewer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex-1 p-4"
      >
        <embed
          src="/resume.pdf#toolbar=1&navpanes=0&scrollbar=1"
          type="application/pdf"
          className="w-full rounded-lg border border-gray-200 dark:border-gray-800"
          style={{ height: 'calc(100vh - 80px)' }}
        />
      </motion.div>
    </div>
  )
}
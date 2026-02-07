"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import Link from "next/link"

export default function Resume() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full"
      >
        <Card className="text-center p-8">
          <CardContent className="space-y-6">
            <h1 className="text-3xl font-bold">Resume Download</h1>
            <p className="text-muted-foreground">
              The resume download feature is currently in development.
              Please contact me directly for a copy of my resume.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="mailto:k99779004@naver.com">
                  Contact Me
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/about">
                  Back to About Page
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
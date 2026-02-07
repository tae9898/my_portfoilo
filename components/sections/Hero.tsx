"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Terminal, File, Folder } from "lucide-react"
import { useRouter } from "next/navigation"

interface FileItem {
    name: string
    type: "file" | "folder"
    path: string
}

const fileTree: FileItem[] = [
    { name: "about.me", type: "file", path: "/about" },
    { name: "projects/", type: "folder", path: "/projects" },
    { name: "contact.md", type: "file", path: "/contact" },
    { name: "resume.pdf", type: "file", path: "/resume" },
    { name: "blog/", type: "folder", path: "https://tae-98.tistory.com/" },
]

export function Hero() {
    const router = useRouter()
    const [terminalText, setTerminalText] = useState('')
    const [showNvim, setShowNvim] = useState(false)
    const [showFileTree, setShowFileTree] = useState(false)
    const [showWelcome, setShowWelcome] = useState(false)
    const hasStartedTyping = useRef(false)

    useEffect(() => {
        if (hasStartedTyping.current) return
        hasStartedTyping.current = true

        const terminalCommand = "nvim devtae.xyz"
        let currentIndex = 0

        // Start typing after a short delay
        const startDelay = setTimeout(() => {
            const intervalId = setInterval(() => {
                if (currentIndex <= terminalCommand.length) {
                    setTerminalText(terminalCommand.slice(0, currentIndex))
                    currentIndex++
                } else {
                    clearInterval(intervalId)
                    // Open NVIM after typing completes
                    setTimeout(() => {
                        setShowNvim(true)
                        setTimeout(() => setShowWelcome(true), 300)
                        setTimeout(() => setShowFileTree(true), 800)
                    }, 400)
                }
            }, 100)

            return () => clearInterval(intervalId)
        }, 500)

        return () => clearTimeout(startDelay)
    }, [])

    const handleFileClick = (item: FileItem) => {
        if (item.path.startsWith("http")) {
            window.open(item.path, "_blank")
        } else {
            router.push(item.path)
        }
    }

    return (
        <section className="relative min-h-[100vh] flex items-center justify-center py-20 px-4">
            {/* Static Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 -z-10" />
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />
            </div>

            <div className="max-w-4xl mx-auto w-full relative z-10">
                <AnimatePresence>
                    {!showNvim ? (
                        /* Terminal */
                        <motion.div
                            key="terminal"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                            transition={{ duration: 0.4 }}
                        >
                            {/* Terminal Header */}
                            <div className="bg-gradient-to-r from-gray-800 via-gray-800 to-gray-900 rounded-t-lg px-4 py-3 flex items-center justify-between border-b border-gray-700">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                <div className="flex items-center gap-2">
                                    <Terminal className="w-4 h-4 text-cyan-400" />
                                    <span className="text-sm font-mono">
                                        <span className="text-green-400">tae</span>
                                        <span className="text-gray-500">@</span>
                                        <span className="text-blue-400">linux</span>
                                    </span>
                                </div>
                                <span className="text-xs text-cyan-400 font-mono">fish</span>
                            </div>

                            {/* Terminal Body */}
                            <div className="bg-gray-950/95 backdrop-blur-xl rounded-b-lg border border-gray-700 p-6 min-h-[200px] font-mono">
                                <div className="text-gray-300">
                                    <div className="flex items-center gap-2">
                                        <span className="text-green-400">tae</span>
                                        <span className="text-gray-500">@</span>
                                        <span className="text-blue-400">linux</span>
                                        <span className="text-gray-500">~</span>
                                        <span className="text-cyan-400">&gt;</span>
                                        <span className="ml-2 text-green-400">{terminalText}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        /* NVIM Window */
                        <motion.div
                            key="nvim"
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            {/* NVIM Header */}
                            <div className="bg-gradient-to-r from-green-900/50 via-gray-800 to-green-900/50 rounded-t-lg px-4 py-2 flex items-center justify-between border-b border-green-700/50">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-gray-600" />
                                    <div className="w-3 h-3 rounded-full bg-gray-600" />
                                    <div className="w-3 h-3 rounded-full bg-green-600" />
                                </div>
                                <div className="flex items-center gap-2 text-sm font-mono">
                                    <Terminal className="w-4 h-4 text-green-400" />
                                    <span className="text-green-400 font-bold">NVIM</span>
                                    <span className="text-gray-500"> -</span>
                                    <span className="text-yellow-400">devtae.xyz</span>
                                    <span className="text-gray-600 mx-2">|</span>
                                    <span className="text-cyan-400">NORMAL</span>
                                </div>
                                <div className="text-xs font-mono text-green-400">0:00</div>
                            </div>

                            {/* NVIM Body */}
                            <div className="bg-gray-950/95 backdrop-blur-xl rounded-b-lg border border-gray-700 min-h-[500px] p-6 relative">
                                {/* Line Numbers */}
                                <div className="absolute left-0 top-6 bottom-6 w-12 text-right pr-3 text-gray-600 font-mono text-sm select-none border-r border-gray-800">
                                    {[...Array(25)].map((_, i) => (
                                        <div key={i}>{i + 1}</div>
                                    ))}
                                </div>

                                {/* Content */}
                                <div className="pl-12 font-mono text-sm">
                                    {/* Welcome Message */}
                                    <AnimatePresence>
                                        {showWelcome && (
                                            <motion.div
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                className="mb-6 pb-4 border-b border-gray-700"
                                            >
                                                <p className="text-cyan-400 mb-1">{"// "}</p>
                                                <p className="text-green-400 text-lg mb-1">
                                                    <span className="text-gray-500">Welcome </span>
                                                    <span className="text-yellow-400">devtae</span>
                                                    <span className="text-gray-500">!</span>
                                                </p>
                                                <p className="text-gray-500 text-sm mb-4">Navigate using the keys or click to explore</p>

                                                {/* Self Introduction */}
                                                <div className="space-y-1 text-sm">
                                                    <p className="text-gray-400">
                                                        <span className="text-cyan-400">name</span>
                                                        <span className="text-gray-600">: </span>
                                                        <span className="text-yellow-400">kim kyung tae</span>
                                                    </p>
                                                    <p className="text-gray-400">
                                                        <span className="text-cyan-400">lang</span>
                                                        <span className="text-gray-600">: </span>
                                                        <span className="text-green-400">c, python</span>
                                                    </p>
                                                    <p className="text-gray-400">
                                                        <span className="text-cyan-400">email</span>
                                                        <span className="text-gray-600">: </span>
                                                        <span className="text-gray-300">k99779004@naver.com</span>
                                                    </p>
                                                    <p className="text-gray-400">
                                                        <span className="text-cyan-400">call</span>
                                                        <span className="text-gray-600">: </span>
                                                        <span className="text-gray-300">+82)10-3205-9801</span>
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* File Tree */}
                                    <AnimatePresence>
                                        {showFileTree && (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.2 }}
                                                className="space-y-1"
                                            >
                                                <p className="text-gray-500 mb-3">// Portfolio</p>
                                                {fileTree.map((item, index) => (
                                                    <motion.div
                                                        key={item.name}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: 0.1 * index }}
                                                        onClick={() => handleFileClick(item)}
                                                        className="flex items-center gap-2 py-1 px-2 rounded hover:bg-gray-800/50 cursor-pointer transition-colors group"
                                                    >
                                                        {item.type === "folder" ? (
                                                            <>
                                                                <Folder className="w-4 h-4 text-cyan-400" />
                                                                <span className="text-cyan-400">{item.name}</span>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <File className="w-4 h-4 text-gray-400 group-hover:text-green-400" />
                                                                <span className="text-gray-300 group-hover:text-green-400">{item.name}</span>
                                                            </>
                                                        )}
                                                    </motion.div>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Cursor */}
                                    <motion.span
                                        className="inline-block w-0.5 h-5 bg-green-400 ml-0.5"
                                        animate={{ opacity: [1, 0, 1] }}
                                        transition={{ duration: 1, repeat: Infinity }}
                                    />
                                </div>

                                {/* Status Bar */}
                                <div className="absolute bottom-0 left-0 right-0 bg-green-900/30 border-t border-green-700/30 px-4 py-2 flex items-center justify-between text-xs font-mono">
                                    <div className="flex items-center gap-4">
                                        <span className="text-cyan-400">NORMAL</span>
                                        <span className="text-gray-400">--</span>
                                        <span className="text-gray-400">readonly</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="text-gray-400">devtae.xyz</span>
                                        <span className="text-gray-400">100%</span>
                                        <span className="text-green-400">✓</span>
                                    </div>
                                </div>

                                {/* Glow Effect */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-green-600/20 via-cyan-600/20 to-green-600/20 rounded-lg blur-xl -z-10" />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    )
}

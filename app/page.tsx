import { Hero } from "@/components/sections/Hero"
import { Skills } from "@/components/sections/Skills"
import { FeaturedProjects } from "@/components/sections/FeaturedProjects"

export default function Home() {
  return (
    <main className="min-h-screen">
      <section id="home" className="scroll-mt-16">
        <Hero />
      </section>
      <section id="about" className="scroll-mt-16">
        <Skills />
      </section>
      <section id="projects" className="scroll-mt-16">
        <FeaturedProjects />
      </section>
      <section id="contact" className="scroll-mt-16 min-h-[50vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer">Get In Touch</h2>
          <p className="text-muted-foreground mb-6">Feel free to reach out for collaborations or just a friendly hello</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/25"
            >
              Contact Form
            </a>
            <a
              href="mailto:k99779004@naver.com"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-700 text-foreground rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              Email Directly
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

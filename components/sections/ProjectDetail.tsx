'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, ExternalLink, ArrowLeft, Calendar, Folder } from 'lucide-react';
import Link from 'next/link';
import { Project } from '@/lib/data';
import { ProjectCard } from '@/components/ProjectCard';

interface ProjectDetailProps {
  project: Project;
  relatedProjects: Project[];
}

const categoryLabels: Record<Project['category'], string> = {
  embedded: 'Embedded Systems',
  'python-tools': 'Python Tools',
  web: 'Web Development',
  config: 'Configuration',
  trading: 'Trading & DeFi',
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export function ProjectDetail({ project, relatedProjects }: ProjectDetailProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-background"
    >
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <Link href="/projects">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <motion.div variants={itemVariants}>
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/projects" className="hover:text-foreground transition-colors">
              Projects
            </Link>
            <span>/</span>
            <span className="text-foreground">{project.title}</span>
          </div>

          {/* Project Header */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <h1 className="text-4xl font-bold tracking-tight">{project.title}</h1>
              {project.featured && (
                <Badge variant="default" className="shrink-0">
                  Featured
                </Badge>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-1.5">
                <Folder className="w-4 h-4" />
                <span>{categoryLabels[project.category]}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>Project ID: {project.id}</span>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <Button asChild size="lg" className="gap-2">
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </Link>
            </Button>
            {project.liveUrl && (
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </Link>
              </Button>
            )}
          </div>

          {/* Tech Stack */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Tech Stack</CardTitle>
              <CardDescription>
                Technologies and tools used in this project
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech) => (
                  <motion.div
                    key={tech}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Badge variant="secondary" className="text-sm px-4 py-2">
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Project Gallery Placeholder */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Project Gallery</CardTitle>
              <CardDescription>
                Screenshots and demo images
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted/50 rounded-lg flex items-center justify-center border-2 border-dashed border-muted-foreground/25">
                <div className="text-center text-muted-foreground">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-2xl">📷</span>
                  </div>
                  <p className="font-medium">Project screenshots coming soon</p>
                  <p className="text-sm mt-1">Check the GitHub repository for demos</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Project Details */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Project Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">About This Project</h3>
                <p className="text-muted-foreground">
                  This project showcases expertise in {categoryLabels[project.category].toLowerCase()}.
                  The implementation focuses on clean code, best practices, and deliverable results.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Key Features</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Well-structured and documented codebase</li>
                  <li>Modular architecture for easy maintenance</li>
                  <li>Best practices and design patterns</li>
                  <li>Comprehensive error handling</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-semibold mb-6">Related Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((relatedProject, index) => (
                <ProjectCard
                  key={relatedProject.id}
                  project={relatedProject}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t mt-16">
        <div className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
          <Link href="/projects" className="hover:text-foreground transition-colors">
            View All Projects
          </Link>
        </div>
      </footer>
    </motion.div>
  );
}

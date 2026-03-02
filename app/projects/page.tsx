'use client';

import { useState, useMemo } from 'react';
import { projects, projectCategories, type ProjectCategory } from '@/lib/data';
import { ProjectCard } from '@/components/ProjectCard';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');

  const filteredProjects = useMemo(() => {
    return selectedCategory === 'all'
      ? projects
      : projects.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  const featuredProjects = useMemo(() => {
    return projects.filter(p => p.featured);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-16 z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
            <p className="text-muted-foreground mt-1">
              A collection of my work in embedded systems, trading automation, and Python tools
            </p>
          </div>

          {/* Category Filters */}
          <nav className="flex flex-wrap gap-2">
            {projectCategories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category.value as ProjectCategory)}
                className="text-sm"
              >
                {category.label}
              </Button>
            ))}
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {/* Section title based on selection */}
            {selectedCategory === 'all' && featuredProjects.length > 0 && (
              <section className="mb-16">
                <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {featuredProjects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                  ))}
                </div>

                {filteredProjects.length > featuredProjects.length && (
                  <div className="mt-16">
                    <h2 className="text-2xl font-semibold mb-6">All Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredProjects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                      ))}
                    </div>
                  </div>
                )}
              </section>
            )}

            {/* Category-specific view or non-featured projects */}
            {(selectedCategory !== 'all' || featuredProjects.length === 0) && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.length > 0 ? (
                  filteredProjects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <p className="text-muted-foreground">
                      No projects found in this category.
                    </p>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Project count */}
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
          {selectedCategory !== 'all' && ` in ${projectCategories.find(c => c.value === selectedCategory)?.label.toLowerCase()}`}
        </div>
      </main>
    </div>
  );
}

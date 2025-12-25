"use client"

import { useState } from "react"
import { ExternalLink, Github, Folder, Grid3x3, List, ChevronRight } from "lucide-react"

interface ProjectsProps {
  isDarkMode?: boolean
}

interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  techStack: string[]
  githubUrl?: string
  liveUrl?: string
  image?: string
  category: string
  featured?: boolean
  year?: string
}

export default function Projects({ isDarkMode = true }: ProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const textColor = isDarkMode ? "text-white" : "text-gray-800"
  const bgColor = isDarkMode ? "bg-gray-900" : "bg-white"
  const sidebarBg = isDarkMode ? "bg-gray-800" : "bg-gray-100"
  const borderColor = isDarkMode ? "border-gray-700" : "border-gray-200"
  const hoverBg = isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
  const selectedBg = isDarkMode ? "bg-gray-700" : "bg-gray-300"
  const cardBg = isDarkMode ? "bg-gray-800" : "bg-gray-50"
  const toolbarBg = isDarkMode ? "bg-gray-800" : "bg-gray-100"

  // Sample projects - replace with your actual projects
  const projects: Project[] = [
    {
      id: "1",
      title: "Portfolio Website",
      description: "A modern macOS-inspired portfolio built with Next.js",
      longDescription: "An interactive portfolio website that mimics the macOS interface, featuring a dock, launchpad, and various apps. Built with Next.js, TypeScript, and Tailwind CSS.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
      githubUrl: "https://github.com/kaaboura12/my-portfolio",
      liveUrl: "https://danielprior.dev",
      category: "web",
      featured: true,
      year: "2024",
    },
    {
      id: "2",
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration",
      longDescription: "A complete e-commerce platform with user authentication, product management, shopping cart, and secure payment processing. Features admin dashboard and real-time inventory management.",
      techStack: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com/yourusername/ecommerce",
      category: "web",
      featured: true,
      year: "2023",
    },
    {
      id: "3",
      title: "Mobile App",
      description: "Cross-platform mobile application for task management",
      longDescription: "A beautiful and intuitive task management app built with React Native. Features include offline sync, push notifications, and collaborative workspaces.",
      techStack: ["React Native", "Firebase", "TypeScript"],
      githubUrl: "https://github.com/yourusername/mobile-app",
      category: "mobile",
      year: "2023",
    },
    {
      id: "4",
      title: "Data Visualization Tool",
      description: "Interactive dashboard for data analysis and visualization",
      longDescription: "A powerful data visualization tool that helps users analyze complex datasets through interactive charts, graphs, and custom dashboards. Supports multiple data formats and real-time updates.",
      techStack: ["Python", "D3.js", "Flask", "PostgreSQL"],
      githubUrl: "https://github.com/yourusername/data-viz",
      category: "data",
      year: "2024",
    },
    {
      id: "5",
      title: "API Gateway",
      description: "Microservices architecture with API gateway",
      longDescription: "A scalable API gateway solution for managing microservices. Features include rate limiting, authentication, request routing, and monitoring.",
      techStack: ["Go", "Docker", "Kubernetes", "Redis"],
      githubUrl: "https://github.com/yourusername/api-gateway",
      category: "backend",
      year: "2024",
    },
    {
      id: "6",
      title: "Machine Learning Model",
      description: "Deep learning model for image classification",
      longDescription: "A convolutional neural network trained on custom datasets for accurate image classification. Includes model training pipeline and inference API.",
      techStack: ["Python", "TensorFlow", "PyTorch", "FastAPI"],
      githubUrl: "https://github.com/yourusername/ml-model",
      category: "ai",
      year: "2023",
    },
  ]

  const categories = [
    { id: "all", name: "All Projects", count: projects.length },
    { id: "web", name: "Web", count: projects.filter((p) => p.category === "web").length },
    { id: "mobile", name: "Mobile", count: projects.filter((p) => p.category === "mobile").length },
    { id: "backend", name: "Backend", count: projects.filter((p) => p.category === "backend").length },
    { id: "data", name: "Data", count: projects.filter((p) => p.category === "data").length },
    { id: "ai", name: "AI/ML", count: projects.filter((p) => p.category === "ai").length },
  ]

  const filteredProjects =
    selectedCategory === "all" ? projects : projects.filter((p) => p.category === selectedCategory)

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
  }

  return (
    <div className={`flex h-full ${bgColor} ${textColor}`}>
      {/* Sidebar */}
      <div className={`w-64 ${sidebarBg} border-r ${borderColor} flex flex-col`}>
        <div className={`p-3 border-b ${borderColor}`}>
          <h2 className="font-semibold text-sm">Projects</h2>
        </div>
        <div className="overflow-y-auto flex-1 p-2">
          {categories.map((category) => {
            const isActive = selectedCategory === category.id
            return (
              <div
                key={category.id}
                className={`flex items-center justify-between px-3 py-2 rounded-md cursor-pointer text-sm ${
                  isActive ? selectedBg : hoverBg
                }`}
                onClick={() => {
                  setSelectedCategory(category.id)
                  setSelectedProject(null)
                }}
              >
                <div className="flex items-center gap-2">
                  <Folder className="w-4 h-4" />
                  <span>{category.name}</span>
                </div>
                <span className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                  {category.count}
                </span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Toolbar */}
        <div className={`${toolbarBg} border-b ${borderColor} px-4 py-2 flex items-center justify-between`}>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-1.5 rounded ${viewMode === "grid" ? (isDarkMode ? "bg-gray-700" : "bg-gray-200") : hoverBg}`}
            >
              <Grid3x3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-1.5 rounded ${viewMode === "list" ? (isDarkMode ? "bg-gray-700" : "bg-gray-200") : hoverBg}`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
          <div className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
            {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-auto">
          {selectedProject ? (
            // Detail View
            <div className="p-8 max-w-4xl">
              <button
                onClick={() => setSelectedProject(null)}
                className={`mb-6 flex items-center gap-2 text-sm ${isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-800"}`}
              >
                <ChevronRight className="w-4 h-4 rotate-180" />
                Back to Projects
              </button>

              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-semibold mb-2">{selectedProject.title}</h1>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span>{selectedProject.category}</span>
                    {selectedProject.year && <span>• {selectedProject.year}</span>}
                  </div>
                  <p className={`text-base leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                    {selectedProject.longDescription}
                  </p>
                </div>

                <div>
                  <h2 className="text-lg font-semibold mb-3">Technologies</h2>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 text-sm rounded-md ${
                          isDarkMode ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm ${
                        isDarkMode
                          ? "bg-gray-800 hover:bg-gray-700 text-white"
                          : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                      }`}
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  )}
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm ${
                        isDarkMode
                          ? "bg-blue-600 hover:bg-blue-700 text-white"
                          : "bg-blue-500 hover:bg-blue-600 text-white"
                      }`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Visit Site
                    </a>
                  )}
                </div>
              </div>
            </div>
          ) : viewMode === "grid" ? (
            // Grid View
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    className={`${cardBg} ${borderColor} border rounded-lg overflow-hidden cursor-pointer transition-colors ${hoverBg}`}
                    onClick={() => handleProjectClick(project)}
                  >
                    <div className={`h-32 ${isDarkMode ? "bg-gray-700" : "bg-gray-200"} flex items-center justify-center`}>
                      {project.image ? (
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                      ) : (
                        <Folder className={`w-12 h-12 ${isDarkMode ? "text-gray-600" : "text-gray-400"}`} />
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-1">{project.title}</h3>
                      <p className={`text-sm mb-3 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                        {project.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1">
                          {project.techStack.slice(0, 2).map((tech) => (
                            <span
                              key={tech}
                              className={`px-2 py-0.5 text-xs rounded ${
                                isDarkMode ? "bg-gray-700 text-gray-400" : "bg-gray-200 text-gray-600"
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                          {project.techStack.length > 2 && (
                            <span
                              className={`px-2 py-0.5 text-xs rounded ${
                                isDarkMode ? "bg-gray-700 text-gray-400" : "bg-gray-200 text-gray-600"
                              }`}
                            >
                              +{project.techStack.length - 2}
                            </span>
                          )}
                        </div>
                        {project.year && (
                          <span className={`text-xs ${isDarkMode ? "text-gray-500" : "text-gray-400"}`}>
                            {project.year}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {filteredProjects.length === 0 && (
                <div className="text-center py-12">
                  <p className={`${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>No projects found.</p>
                </div>
              )}
            </div>
          ) : (
            // List View
            <div className="p-4">
              <div className="space-y-1">
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    className={`flex items-center gap-4 px-4 py-3 rounded-md cursor-pointer ${hoverBg}`}
                    onClick={() => handleProjectClick(project)}
                  >
                    <div className={`w-12 h-12 ${isDarkMode ? "bg-gray-700" : "bg-gray-200"} rounded flex items-center justify-center flex-shrink-0`}>
                      {project.image ? (
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded" />
                      ) : (
                        <Folder className={`w-6 h-6 ${isDarkMode ? "text-gray-500" : "text-gray-400"}`} />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold truncate">{project.title}</h3>
                      <p className={`text-sm truncate ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                        {project.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <div className="flex gap-1">
                        {project.techStack.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className={`px-2 py-0.5 text-xs rounded ${
                              isDarkMode ? "bg-gray-700 text-gray-400" : "bg-gray-200 text-gray-600"
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      {project.year && (
                        <span className={`text-xs w-12 text-right ${isDarkMode ? "text-gray-500" : "text-gray-400"}`}>
                          {project.year}
                        </span>
                      )}
                      <ChevronRight className={`w-4 h-4 ${isDarkMode ? "text-gray-500" : "text-gray-400"}`} />
                    </div>
                  </div>
                ))}
              </div>
              {filteredProjects.length === 0 && (
                <div className="text-center py-12">
                  <p className={`${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>No projects found.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

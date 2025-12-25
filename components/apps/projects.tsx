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

  const projects: Project[] = [
    {
      id: "sayarti",
      title: "Sayarti",
      description: "A professional car service platform connecting vehicle owners with service providers through a cross-platform mobile application.",
      longDescription: "Sayarti is a full-stack mobile application designed to connect vehicle owners with car service providers in an efficient and user-friendly way. The project was developed using Flutter for the mobile frontend and a Node.js backend built with Express. The system communicates via RESTful APIs and uses a MySQL database for data persistence. Key features include car browsing, user profiles, favorites management, secure JWT-based authentication, and real-time messaging between users and service providers. The application follows a scalable full-stack architecture with a focus on performance, security, and responsive mobile UI design.",
      techStack: [
        "Flutter",
        "Node.js",
        "Express.js",
        "MySQL",
        "REST API",
        "JWT Authentication"
      ],
      githubUrl: "",
      liveUrl: "",
      image: "",
      category: "mobile",
      featured: true,
      year: "2025"
    },
    {
      id: "artxcape-web",
      title: "ArtXcape Web",
      description: "A full-stack web application for managing and exploring artistic content, built with Symfony and a shared database architecture.",
      longDescription: "ArtXcape Web is a full-stack web application developed using Symfony 6 and Doctrine ORM as part of an academic project at ESPRIT. The application provides dynamic content management and interactive user experiences using AJAX. It connects to a shared MySQL database that is also used by a desktop client, ensuring data consistency across platforms. The project follows Agile development methodologies, with tasks and collaboration managed via GitHub Projects and Trello, focusing on clean architecture, maintainability, and scalability.",
      techStack: [
        "Symfony 6",
        "PHP",
        "Doctrine ORM",
        "MySQL",
        "AJAX",
        "Git",
        "GitHub"
      ],
      githubUrl: "",
      liveUrl: "",
      image: "",
      category: "web",
      featured: true,
      year: "2025"
    },
    {
      id: "artxcape-desktop",
      title: "ArtXcape Desktop",
      description: "A Java desktop application built with JavaFX, sharing a centralized database with the ArtXcape web platform.",
      longDescription: "ArtXcape Desktop is a cross-platform desktop application developed using Java and JavaFX. It connects directly to a shared MySQL database via JDBC, allowing seamless data synchronization with the ArtXcape web application. The desktop client focuses on performance, usability, and rich UI interactions while maintaining consistency with the web platform's data model. The project was developed following Agile practices, with version control and task management handled through Git and GitHub.",
      techStack: [
        "Java",
        "JavaFX",
        "JDBC",
        "MySQL",
        "Git",
        "GitHub"
      ],
      githubUrl: "",
      liveUrl: "",
      image: "",
      category: "desktop",
      featured: false,
      year: "2025"
    },
    {
      id: "hayya-explora",
      title: "Hayya Explora",
      description: "A responsive web application developed to explore and interact with various content using integrated APIs.",
      longDescription: "Hayya Explora is a collaborative web development project built using HTML, CSS, JavaScript, and PHP, hosted with XAMPP. The application features a fully responsive design and integrates multiple APIs to provide advanced functionalities and dynamic content. Developed as part of an academic project at ESPRIT, it emphasizes user-friendly navigation, performance, and cross-browser compatibility, while demonstrating full-stack web development skills including front-end design, backend logic, and database interaction with MySQL.",
      techStack: [
        "HTML",
        "CSS",
        "JavaScript",
        "PHP",
        "MySQL",
        "XAMPP",
        "APIs"
      ],
      githubUrl: "",
      liveUrl: "",
      image: "",
      category: "web",
      featured: false,
      year: "2024"
    },
    {
      id: "auditpro",
      title: "AuditPro",
      description: "A desktop application for audit and control management, integrating hardware for secure access and advanced business workflows.",
      longDescription: "AuditPro is a collaborative desktop application developed as part of a Smart Business Management project at ESPRIT. The application was implemented in C++ using Qt Creator for a responsive GUI and connects to an Oracle Database managed via SQL Developer. A key feature is the integration of an RFID-based system, enabling secure and interactive door access by bridging the software with physical hardware. The project demonstrates full-stack desktop development, database management, and embedded systems integration, emphasizing security, usability, and real-world business applications.",
      techStack: [
        "C++",
        "Qt Creator",
        "Oracle Database",
        "SQL",
        "Arduino",
        "RFID"
      ],
      githubUrl: "",
      liveUrl: "",
      image: "",
      category: "desktop",
      featured: false,
      year: "2023"
    },
    {
      id: "macos-portfolio",
      title: "macOS Portfolio",
      description: "A stunning, interactive macOS-inspired portfolio website built with Next.js and Tailwind CSS, showcasing skills, projects, and personal info.",
      longDescription: "macOS Portfolio is an interactive web portfolio designed to emulate a realistic macOS desktop experience. Built with Next.js and Tailwind CSS, it features dark/light mode, working windows, and multiple apps to showcase skills and projects, including Safari, Notes, Terminal, VSCode, Mail, GitHub, Spotify, YouTube, FaceTime, Snake, and Weather. The portfolio also includes a working Control Center for brightness and volume, boot/login/sleep sequences, and is almost fully responsive. Personalization options allow you to customize wallpapers, app icons, terminal commands, and social links. This project demonstrates advanced front-end development, interactive UI/UX design, and creative portfolio presentation.",
      techStack: [
        "Next.js",
        "Tailwind CSS",
        "React",
        "JavaScript",
        "UI/UX Design"
      ],
      githubUrl: "https://github.com/daprior/danielprior-macos",
      liveUrl: "http://danielprior.dev",
      image: "",
      category: "web",
      featured: true,
      year: "2025"
    },
    {
      id: "chaos-backend",
      title: "Chaos Backend",
      description: "A humorously chaotic AI assistant backend built with NestJS that delivers confidently wrong responses with style, featuring real-time WebSocket and REST API support.",
      longDescription: "Chaos Backend is a playful yet production-ready NestJS backend that powers an AI assistant intentionally designed to give hilariously wrong answers. Using Groq's Llama 3.3 70B model, it transforms ordinary questions into absurd, creative responses. The backend supports real-time interactions via a WebSocket gateway and traditional REST API endpoints. It follows clean architecture principles, TypeScript for type safety, and includes concise response handling, demonstrating advanced backend development, WebSocket communication, and AI integration in a humorous project context.",
      techStack: [
        "NestJS",
        "TypeScript",
        "WebSocket (Socket.IO)",
        "REST API",
        "Groq Llama 3.3",
      ],
      githubUrl: "",
      liveUrl: "",
      image: "",
      category: "backend",
      featured: false,
      year: "2025"
    },
    {
      id: "teamflow",
      title: "TeamFlow",
      description: "An AI-powered collaboration platform for development teams, integrating GitHub, real-time communication, project management, and analytics in one unified system.",
      longDescription: "TeamFlow is a modern development team collaboration platform built with Next.js, TypeScript, Tailwind CSS, and Supabase. It provides AI-powered insights, real-time messaging, GitHub integration, and intelligent project management tools. Key features include smart task assignment, kanban boards, commit analysis, team performance dashboards, group and role management, and a comprehensive analytics suite. The platform leverages Google Gemini 2.0 for AI recommendations, real-time database subscriptions via Supabase, and integrates seamlessly with multiple Git repositories. TeamFlow demonstrates full-stack development skills, advanced AI integration, real-time web applications, and scalable architecture for professional team workflows.",
      techStack: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
        "PostgreSQL",
        "Framer Motion",
        "Recharts",
        "Git Integration",
        "Google Gemini AI"
      ],
      githubUrl: "https://github.com/your-username/teamflow",
      liveUrl: "",
      image: "",
      category: "web",
      featured: true,
      year: "2025"
    },
    {
      id: "emotionsense",
      title: "EmotionSense",
      description: "A real-time, privacy-focused web app that detects and analyzes facial emotions directly in the browser using the camera.",
      longDescription: "EmotionSense is a web application that performs real-time emotion recognition using face-api.js, analyzing facial expressions for six primary emotions: Joy, Sadness, Anger, Fear, Surprise, and Neutral. All processing is done in-browser, ensuring user privacy. The app features a clean, responsive UI, visual feedback with facial landmarks, and emotion history tracking. Built with React, TypeScript, Vite, Tailwind CSS, and shadcn/ui, EmotionSense demonstrates advanced front-end development, real-time computer vision integration, and privacy-conscious design principles.",
      techStack: [
        "React",
        "TypeScript",
        "Vite",
        "face-api.js",
        "Tailwind CSS",
        "shadcn/ui"
      ],
      githubUrl: "https://github.com/kaaboura12/vibe-catcher",
      liveUrl: "",
      image: "",
      category: "web",
      featured: false,
      year: "2025"
    },
    {
      id: "weldiwin-backend",
      title: "WeldiWin Backend",
      description: "A complete user management system with authentication, roles, parent-child relationships, real-time messaging, SOS alerts, and danger zone tracking built with NestJS and MongoDB Atlas.",
      longDescription: "WeldiWin Backend is a production-ready RESTful API built with NestJS that provides comprehensive user management capabilities. The system supports multi-role authentication (ADMIN, PARENT, CHILD) with JWT-based security. It features real-time messaging via WebSocket, SOS alert system for emergency situations, danger zone tracking for child safety, and todo management. The backend includes voice cloning integration, WebRTC audio calling capabilities, and multi-channel notifications (Email, SMS, Voice). It's deployed on Vercel as a serverless application with MongoDB Atlas as the database. The API includes Swagger documentation, comprehensive validation, role-based access control, and is fully ready for frontend integration.",
      techStack: [
        "NestJS",
        "TypeScript",
        "Node.js",
        "MongoDB",
        "Mongoose",
        "Socket.io",
        "JWT",
        "Passport",
        "bcrypt",
        "Cloudinary",
        "Twilio",
        "Nodemailer",
        "Google Generative AI",
        "WebRTC",
        "Swagger",
        "Vercel",
        "Express",
        "class-validator",
        "class-transformer"
      ],
      githubUrl: "",
      liveUrl: "https://weldiwinbackend-git-main-kaaboura12s-projects.vercel.app",
      image: "",
      category: "backend",
      featured: true,
      year: "2024"
    },
    {
      id: "weldiwin-child-safety-app",
      title: "WeldiWin - Child Safety & Family Communication Platform",
      description: "A comprehensive iOS app for real-time child location tracking, danger zone alerts, family communication, and educational gaming.",
      longDescription: "WeldiWin is a full-featured child safety and family communication platform built with SwiftUI. The app enables parents to track their children's real-time location, set up danger zones with instant alerts, communicate through messaging and video calls, assign and track tasks, and engage in educational games together. The platform features AI-powered analytics for child behavior insights, real-time location updates, WebSocket-based communication, and a beautiful, intuitive interface designed for both parents and children. Key features include danger zone mapping with entry/exit notifications, SOS emergency calls, app usage tracking, comprehensive analytics dashboard powered by Groq AI, and multiple educational game types including puzzles, memory games, math challenges, and story-based activities.",
      techStack: [
        "Swift",
        "SwiftUI",
        "iOS",
        "CoreLocation",
        "MapKit",
        "WebSocket",
        "Socket.IO",
        "Firebase",
        "Core Data",
        "AVFoundation",
        "UserNotifications",
        "Combine",
        "URLSession",
        "JWT Authentication",
        "REST API",
        "Real-time Communication",
        "AI Integration (Groq AI, Gemini AI)"
      ],
      githubUrl: "",
      liveUrl: "",
      image: "",
      category: "mobile",
      featured: true,
      year: "2025"
    },
    {
      id: "weldiwin-child-safety-app-android",
      title: "WeldiWin - Child Safety & Family Communication Platform (Android)",
      description: "A comprehensive Android app for real-time child location tracking, danger zone alerts, family communication, and educational gaming, built with Kotlin.",
      longDescription: "WeldiWin Android is a full-featured child safety and family communication platform developed using Kotlin in Android Studio. The app enables parents to monitor their children's real-time location, define danger zones with instant alerts, communicate through messaging and video calls, assign and track tasks, and engage in educational games. The platform features AI-powered analytics for child behavior insights, real-time location updates, and WebSocket-based communication for instant notifications. Key features include SOS emergency calls, app usage tracking, danger zone entry/exit notifications, a comprehensive analytics dashboard, and multiple educational game types (puzzles, memory games, math challenges, story-based activities). WeldiWin Android emphasizes a modern, intuitive Material Design UI, offline support with Room database, and secure REST & WebSocket integration for a professional mobile experience.",
      techStack: [
        "Kotlin",
        "Android Studio",
        "Jetpack Compose",
        "Material Design",
        "Google Maps SDK",
        "Location Services",
        "Firebase",
        "WebSocket",
        "Room Database",
        "LiveData & ViewModel",
        "Coroutines",
        "Retrofit (REST API)",
        "Socket.IO",
        "Push Notifications",
        "JWT Authentication",
        "AI Integration (Groq AI, Gemini AI)"
      ],
      githubUrl: "",
      liveUrl: "",
      image: "",
      category: "mobile",
      featured: true,
      year: "2025"
    }
  ]

  const categories = [
    { id: "all", name: "All Projects", count: projects.length },
    { id: "web", name: "Web", count: projects.filter((p) => p.category === "web").length },
    { id: "mobile", name: "Mobile", count: projects.filter((p) => p.category === "mobile").length },
    { id: "backend", name: "Backend", count: projects.filter((p) => p.category === "backend").length },
    { id: "desktop", name: "Desktop", count: projects.filter((p) => p.category === "desktop").length },
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

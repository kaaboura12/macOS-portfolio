"use client"

import { useState, useEffect } from "react"
import { Code, Server, Gamepad2, Settings, TrendingUp, Sparkles, Zap } from "lucide-react"

interface SkillsProps {
  isDarkMode?: boolean
}

interface Skill {
  name: string
  level: number
  category: string
  icon?: string
}

interface SkillCategory {
  id: string
  name: string
  icon: React.ReactNode
  color: string
  skills: Skill[]
}

export default function Skills({ isDarkMode = true }: SkillsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [animatedLevels, setAnimatedLevels] = useState<Record<string, number>>({})
  const [viewMode, setViewMode] = useState<"grid" | "radar">("grid")

  const textColor = isDarkMode ? "text-white" : "text-gray-800"
  const bgColor = isDarkMode ? "bg-gray-900" : "bg-white"
  const sidebarBg = isDarkMode ? "bg-gray-800" : "bg-gray-100"
  const borderColor = isDarkMode ? "border-gray-700" : "border-gray-200"
  const hoverBg = isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
  const selectedBg = isDarkMode ? "bg-gray-700" : "bg-gray-300"
  const cardBg = isDarkMode ? "bg-gray-800" : "bg-gray-50"
  const toolbarBg = isDarkMode ? "bg-gray-800" : "bg-gray-100"

  const skillCategories: SkillCategory[] = [
    {
      id: "frontend",
      name: "Frontend",
      icon: <Code className="w-5 h-5" />,
      color: isDarkMode ? "#3B82F6" : "#2563EB", // Blue
      skills: [
        { name: "React/Next.js", level: 95, category: "frontend" },
        { name: "TypeScript/JavaScript", level: 95, category: "frontend" },
        { name: "Tailwind CSS", level: 92, category: "frontend" },
        { name: "HTML/CSS", level: 95, category: "frontend" },
        { name: "Vite", level: 90, category: "frontend" },
        { name: "UI/UX Design", level: 88, category: "frontend" },
        { name: "Responsive Web Dev", level: 95, category: "frontend" },
        { name: "shadcn/ui", level: 85, category: "frontend" },
        { name: "Framer Motion", level: 80, category: "frontend" },
        { name: "Recharts", level: 75, category: "frontend" },
        { name: "face-api.js", level: 75, category: "frontend" },
        { name: "AJAX", level: 88, category: "frontend" },
      ],
    },
    {
      id: "backend",
      name: "Backend",
      icon: <Server className="w-5 h-5" />,
      color: isDarkMode ? "#3B82F6" : "#2563EB", // Blue
      skills: [
        { name: "Node.js/Express", level: 90, category: "backend" },
        { name: "NestJS", level: 88, category: "backend" },
        { name: "PHP", level: 88, category: "backend" },
        { name: "Symfony 6", level: 85, category: "backend" },
        { name: "Python", level: 85, category: "backend" },
        { name: "Java", level: 85, category: "backend" },
        { name: "RESTful APIs", level: 92, category: "backend" },
        { name: "WebSocket/Socket.IO", level: 88, category: "backend" },
        { name: "JWT Authentication", level: 90, category: "backend" },
        { name: "Passport.js", level: 85, category: "backend" },
        { name: "Swagger", level: 80, category: "backend" },
        { name: "Doctrine ORM", level: 80, category: "backend" },
        { name: "JDBC", level: 80, category: "backend" },
      ],
    },
    {
      id: "mobile",
      name: "Mobile Development",
      icon: <Gamepad2 className="w-5 h-5" />,
      color: isDarkMode ? "#3B82F6" : "#2563EB", // Blue
      skills: [
        { name: "Flutter", level: 90, category: "mobile" },
        { name: "Flutterflow", level: 80, category: "mobile" },
        { name: "Swift", level: 88, category: "mobile" },
        { name: "SwiftUI", level: 88, category: "mobile" },
        { name: "iOS Development", level: 85, category: "mobile" },
        { name: "Kotlin", level: 85, category: "mobile" },
        { name: "Android Studio", level: 85, category: "mobile" },
        { name: "Jetpack Compose", level: 80, category: "mobile" },
        { name: "Material Design", level: 85, category: "mobile" },
        { name: "CoreLocation/MapKit", level: 80, category: "mobile" },
        { name: "Google Maps SDK", level: 80, category: "mobile" },
        { name: "Core Data", level: 75, category: "mobile" },
        { name: "Room Database", level: 75, category: "mobile" },
        { name: "Coroutines", level: 80, category: "mobile" },
        { name: "Retrofit", level: 80, category: "mobile" },
      ],
    },
    {
      id: "database",
      name: "Database",
      icon: <Server className="w-5 h-5" />,
      color: isDarkMode ? "#3B82F6" : "#2563EB", // Blue
      skills: [
        { name: "MySQL", level: 90, category: "database" },
        { name: "PostgreSQL", level: 85, category: "database" },
        { name: "MongoDB", level: 88, category: "database" },
        { name: "Mongoose", level: 85, category: "database" },
        { name: "Oracle Database", level: 80, category: "database" },
        { name: "SQL", level: 90, category: "database" },
        { name: "PL/SQL", level: 75, category: "database" },
        { name: "Supabase", level: 80, category: "database" },
      ],
    },
    {
      id: "devops",
      name: "DevOps & Tools",
      icon: <Settings className="w-5 h-5" />,
      color: isDarkMode ? "#3B82F6" : "#2563EB", // Blue
      skills: [
        { name: "Docker", level: 85, category: "devops" },
        { name: "Kubernetes", level: 75, category: "devops" },
        { name: "Jenkins", level: 75, category: "devops" },
        { name: "CI/CD Pipelines", level: 80, category: "devops" },
        { name: "Git/GitHub", level: 95, category: "devops" },
        { name: "Agile/Scrum", level: 88, category: "devops" },
        { name: "Linux/Unix", level: 85, category: "devops" },
        { name: "Vercel", level: 85, category: "devops" },
        { name: "XAMPP", level: 80, category: "devops" },
        { name: "Project Management", level: 85, category: "devops" },
        { name: "Teamwork", level: 90, category: "devops" },
      ],
    },
    {
      id: "desktop",
      name: "Desktop & Embedded",
      icon: <Settings className="w-5 h-5" />,
      color: isDarkMode ? "#3B82F6" : "#2563EB", // Blue
      skills: [
        { name: "C++", level: 85, category: "desktop" },
        { name: "C", level: 80, category: "desktop" },
        { name: "Qt Creator", level: 85, category: "desktop" },
        { name: "Qt Designer", level: 80, category: "desktop" },
        { name: "JavaFX", level: 85, category: "desktop" },
        { name: "Arduino", level: 80, category: "desktop" },
        { name: "RFID", level: 75, category: "desktop" },
        { name: "SDL", level: 70, category: "desktop" },
      ],
    },
    {
      id: "services",
      name: "Services & APIs",
      icon: <Zap className="w-5 h-5" />,
      color: isDarkMode ? "#3B82F6" : "#2563EB", // Blue
      skills: [
        { name: "Firebase", level: 85, category: "services" },
        { name: "Cloudinary", level: 80, category: "services" },
        { name: "Twilio", level: 75, category: "services" },
        { name: "Nodemailer", level: 80, category: "services" },
        { name: "WebRTC", level: 75, category: "services" },
        { name: "Real-time Communication", level: 88, category: "services" },
        { name: "APIs Integration", level: 90, category: "services" },
      ],
    },
    {
      id: "ai",
      name: "AI & Machine Learning",
      icon: <Sparkles className="w-5 h-5" />,
      color: isDarkMode ? "#3B82F6" : "#2563EB", // Blue
      skills: [
        { name: "Google Gemini AI", level: 85, category: "ai" },
        { name: "Groq Llama 3.3", level: 80, category: "ai" },
        { name: "Google Generative AI", level: 80, category: "ai" },
        { name: "Machine Learning", level: 75, category: "ai" },
        { name: "AI Integration", level: 85, category: "ai" },
      ],
    },
    {
      id: "other",
      name: "Other Skills",
      icon: <TrendingUp className="w-5 h-5" />,
      color: isDarkMode ? "#3B82F6" : "#2563EB", // Blue
      skills: [
        { name: "Object-Oriented Programming", level: 90, category: "other" },
        { name: "UML", level: 80, category: "other" },
        { name: "After Effects", level: 70, category: "other" },
        { name: "bcrypt", level: 85, category: "other" },
        { name: "class-validator", level: 80, category: "other" },
        { name: "class-transformer", level: 80, category: "other" },
      ],
    },
  ]

  // Animate skill levels on mount and category change
  useEffect(() => {
    const category = skillCategories.find((cat) => cat.id === selectedCategory)
    const skillsToAnimate = selectedCategory === "all" 
      ? skillCategories.flatMap((cat) => cat.skills)
      : category?.skills || []

    skillsToAnimate.forEach((skill, index) => {
      setTimeout(() => {
        setAnimatedLevels((prev) => ({
          ...prev,
          [skill.name]: skill.level,
        }))
      }, index * 50)
    })
  }, [selectedCategory])

  const allSkills = skillCategories.flatMap((cat) => cat.skills)
  const displayedSkills = selectedCategory === "all" 
    ? allSkills 
    : skillCategories.find((cat) => cat.id === selectedCategory)?.skills || []

  const getLevelColor = (categoryColor: string) => {
    return categoryColor
  }

  return (
    <div className={`flex h-full ${bgColor} ${textColor}`}>
      {/* Sidebar */}
      <div className={`w-64 ${sidebarBg} border-r ${borderColor} flex flex-col`}>
        <div className={`p-3 border-b ${borderColor}`}>
          <h2 className="font-semibold text-sm">Skills</h2>
        </div>
        <div className="overflow-y-auto flex-1 p-2">
          <div
            className={`flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer text-sm mb-1 ${
              selectedCategory === "all" ? selectedBg : hoverBg
            }`}
            onClick={() => setSelectedCategory("all")}
          >
            <Sparkles className="w-4 h-4" />
            <span>All Skills</span>
            <span className={`ml-auto text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
              {allSkills.length}
            </span>
          </div>
          {skillCategories.map((category) => {
            const isActive = selectedCategory === category.id
            return (
              <div
                key={category.id}
                className={`flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer text-sm ${
                  isActive ? selectedBg : hoverBg
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <div style={{ color: category.color }}>{category.icon}</div>
                <span>{category.name}</span>
                <span className={`ml-auto text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                  {category.skills.length}
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
              className={`px-3 py-1.5 rounded text-sm ${
                viewMode === "grid" 
                  ? (isDarkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-800")
                  : (isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-800")
              }`}
            >
              Grid View
            </button>
            <button
              onClick={() => setViewMode("radar")}
              className={`px-3 py-1.5 rounded text-sm ${
                viewMode === "radar"
                  ? (isDarkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-800")
                  : (isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-800")
              }`}
            >
              Overview
            </button>
          </div>
          <div className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
            {displayedSkills.length} {displayedSkills.length === 1 ? "skill" : "skills"}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-auto p-6">
          {viewMode === "radar" && selectedCategory === "all" ? (
            // Overview/Radar View
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Skills Overview</h2>
                <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                  Comprehensive view of technical expertise across all categories
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {skillCategories.map((category) => {
                  const avgLevel = Math.round(
                    category.skills.reduce((sum, skill) => sum + skill.level, 0) / category.skills.length
                  )
                  return (
                    <div
                      key={category.id}
                      className={`${cardBg} ${borderColor} border rounded-lg p-6`}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div style={{ color: category.color }}>{category.icon}</div>
                        <h3 className="text-lg font-semibold">{category.name}</h3>
                      </div>
                      <div className="space-y-3">
                        {category.skills.slice(0, 3).map((skill) => {
                          const animatedLevel = animatedLevels[skill.name] || 0
                          return (
                            <div key={skill.name}>
                              <div className="flex items-center justify-between mb-1">
                                <span className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                                  {skill.name}
                                </span>
                              </div>
                              <div className={`h-2 rounded-full ${isDarkMode ? "bg-gray-700" : "bg-gray-200"}`}>
                                <div
                                  className="h-2 rounded-full transition-all duration-1000 ease-out"
                                  style={{
                                    width: `${animatedLevel}%`,
                                    backgroundColor: getLevelColor(category.color),
                                  }}
                                />
                              </div>
                            </div>
                          )
                        })}
                        {category.skills.length > 3 && (
                          <div className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"} pt-2`}>
                            +{category.skills.length - 3} more skills
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Stats Summary */}
              <div className={`${cardBg} ${borderColor} border rounded-lg p-6`}>
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Zap className={`w-5 h-5 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`} />
                  Summary Statistics
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div>
                    <div className={`text-2xl font-bold mb-1 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                      {allSkills.length}
                    </div>
                    <div className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                      Total Skills
                    </div>
                  </div>
                  <div>
                    <div className={`text-2xl font-bold mb-1 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                      {skillCategories.length}
                    </div>
                    <div className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                      Categories
                    </div>
                  </div>
                  <div>
                    <div className={`text-2xl font-bold mb-1 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                      {allSkills.filter((s) => s.level >= 90).length}
                    </div>
                    <div className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                      Expert Level
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Grid View
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {displayedSkills.map((skill) => {
                  const category = skillCategories.find((cat) => cat.id === skill.category)
                  const animatedLevel = animatedLevels[skill.name] || 0
                  const levelColor = getLevelColor(category?.color || "#3B82F6")
                  
                  return (
                    <div
                      key={skill.name}
                      className={`${cardBg} ${borderColor} border rounded-lg p-5 transition-all duration-300 hover:shadow-lg`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className={`font-semibold text-sm ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                          {skill.name}
                        </h3>
                      </div>
                      
                      <div className="mb-2">
                        <div className={`h-2.5 rounded-full overflow-hidden ${isDarkMode ? "bg-gray-700" : "bg-gray-200"}`}>
                          <div
                            className="h-full rounded-full transition-all duration-1000 ease-out relative"
                            style={{
                              width: `${animatedLevel}%`,
                              backgroundColor: levelColor,
                            }}
                          >
                            <div
                              className="absolute inset-0 rounded-full"
                              style={{
                                background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)`,
                                animation: "shimmer 2s infinite",
                              }}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mt-3">
                        <div
                          className="w-1 h-1 rounded-full"
                          style={{ backgroundColor: category?.color || "#3B82F6" }}
                        />
                        <span className={`text-xs ${isDarkMode ? "text-gray-500" : "text-gray-500"}`}>
                          {category?.name}
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  )
}


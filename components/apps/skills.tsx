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
      color: isDarkMode ? "#3B82F6" : "#2563EB",
      skills: [
        { name: "React/Next.js", level: 95, category: "frontend" },
        { name: "Vue.js/Nuxt.js", level: 90, category: "frontend" },
        { name: "TypeScript/JavaScript", level: 95, category: "frontend" },
        { name: "Tailwind CSS/SCSS", level: 92, category: "frontend" },
        { name: "UI/UX Design", level: 88, category: "frontend" },
        { name: "Responsive Web Dev", level: 95, category: "frontend" },
        { name: "Vite/Webpack", level: 85, category: "frontend" },
        { name: "WordPress/Umbraco", level: 80, category: "frontend" },
      ],
    },
    {
      id: "backend",
      name: "Backend",
      icon: <Server className="w-5 h-5" />,
      color: isDarkMode ? "#10B981" : "#059669",
      skills: [
        { name: "Node.js/Express", level: 90, category: "backend" },
        { name: "PHP/Laravel/Slim", level: 88, category: "backend" },
        { name: "Python/Django", level: 85, category: "backend" },
        { name: "Rust & Go", level: 60, category: "backend" },
        { name: "SQL (MySQL, PostgreSQL)", level: 90, category: "backend" },
        { name: "NoSQL (MongoDB)", level: 85, category: "backend" },
        { name: "RESTful APIs/GraphQL", level: 92, category: "backend" },
      ],
    },
    {
      id: "gamedev",
      name: "Game Development",
      icon: <Gamepad2 className="w-5 h-5" />,
      color: isDarkMode ? "#8B5CF6" : "#7C3AED",
      skills: [
        { name: "Unity/Unreal Engine", level: 85, category: "gamedev" },
        { name: "C# & C++", level: 80, category: "gamedev" },
        { name: "Game Design", level: 75, category: "gamedev" },
        { name: "Blender 3D", level: 70, category: "gamedev" },
        { name: "Godot Engine", level: 75, category: "gamedev" },
      ],
    },
    {
      id: "devops",
      name: "DevOps & Tools",
      icon: <Settings className="w-5 h-5" />,
      color: isDarkMode ? "#F59E0B" : "#D97706",
      skills: [
        { name: "Docker/Containerization", level: 85, category: "devops" },
        { name: "CI/CD Pipelines", level: 80, category: "devops" },
        { name: "Git/GitHub", level: 95, category: "devops" },
        { name: "Agile/Scrum", level: 88, category: "devops" },
        { name: "AWS/Cloud Services", level: 75, category: "devops" },
        { name: "Linux/Unix", level: 85, category: "devops" },
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

  const getLevelColor = (level: number, categoryColor: string) => {
    if (level >= 90) return isDarkMode ? "#10B981" : "#059669" // Green
    if (level >= 75) return categoryColor
    return isDarkMode ? "#F59E0B" : "#D97706" // Orange
  }

  const getLevelLabel = (level: number) => {
    if (level >= 90) return "Expert"
    if (level >= 75) return "Advanced"
    if (level >= 60) return "Intermediate"
    return "Learning"
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
                        <div className="ml-auto flex items-center gap-2">
                          <TrendingUp className={`w-4 h-4 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`} />
                          <span className={`text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                            {avgLevel}%
                          </span>
                        </div>
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
                                <span className={`text-xs font-medium ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                                  {animatedLevel}%
                                </span>
                              </div>
                              <div className={`h-2 rounded-full ${isDarkMode ? "bg-gray-700" : "bg-gray-200"}`}>
                                <div
                                  className="h-2 rounded-full transition-all duration-1000 ease-out"
                                  style={{
                                    width: `${animatedLevel}%`,
                                    backgroundColor: getLevelColor(skill.level, category.color),
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
                  <Zap className="w-5 h-5" style={{ color: skillCategories[0].color }} />
                  Summary Statistics
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <div className={`text-2xl font-bold mb-1 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>
                      {allSkills.length}
                    </div>
                    <div className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                      Total Skills
                    </div>
                  </div>
                  <div>
                    <div className={`text-2xl font-bold mb-1 ${isDarkMode ? "text-green-400" : "text-green-600"}`}>
                      {Math.round(allSkills.reduce((sum, s) => sum + s.level, 0) / allSkills.length)}%
                    </div>
                    <div className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                      Average Level
                    </div>
                  </div>
                  <div>
                    <div className={`text-2xl font-bold mb-1 ${isDarkMode ? "text-purple-400" : "text-purple-600"}`}>
                      {allSkills.filter((s) => s.level >= 90).length}
                    </div>
                    <div className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                      Expert Level
                    </div>
                  </div>
                  <div>
                    <div className={`text-2xl font-bold mb-1 ${isDarkMode ? "text-orange-400" : "text-orange-600"}`}>
                      {skillCategories.length}
                    </div>
                    <div className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                      Categories
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
                  const levelColor = getLevelColor(skill.level, category?.color || "#3B82F6")
                  
                  return (
                    <div
                      key={skill.name}
                      className={`${cardBg} ${borderColor} border rounded-lg p-5 transition-all duration-300 hover:shadow-lg`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className={`font-semibold text-sm ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                          {skill.name}
                        </h3>
                        <span
                          className={`text-xs font-bold px-2 py-1 rounded ${
                            skill.level >= 90
                              ? isDarkMode
                                ? "bg-green-900/30 text-green-400"
                                : "bg-green-100 text-green-700"
                              : skill.level >= 75
                              ? isDarkMode
                                ? "bg-blue-900/30 text-blue-400"
                                : "bg-blue-100 text-blue-700"
                              : isDarkMode
                              ? "bg-orange-900/30 text-orange-400"
                              : "bg-orange-100 text-orange-700"
                          }`}
                        >
                          {getLevelLabel(skill.level)}
                        </span>
                      </div>
                      
                      <div className="mb-2">
                        <div className="flex items-center justify-between mb-1">
                          <span className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                            Proficiency
                          </span>
                          <span
                            className="text-sm font-semibold"
                            style={{ color: levelColor }}
                          >
                            {animatedLevel}%
                          </span>
                        </div>
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


"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Code2, Server, Sparkles, ChevronRight } from "lucide-react"

interface WelcomeProps {
  isDarkMode?: boolean
  onClose?: () => void
}

export default function Welcome({ isDarkMode = true, onClose }: WelcomeProps) {
  const [mounted, setMounted] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [photoLoaded, setPhotoLoaded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const roleTimeoutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    // Staggered mount animation
    const timer = setTimeout(() => setMounted(true), 50)
    
    // Smooth role rotation with better timing
    const rotateRoles = () => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % 3
        return next
      })
    }

    // Initial delay, then rotate every 3.5 seconds
    roleTimeoutRef.current = setTimeout(() => {
      const interval = setInterval(rotateRoles, 3500)
      return () => clearInterval(interval)
    }, 2000)
    
    return () => {
      clearTimeout(timer)
      if (roleTimeoutRef.current) clearTimeout(roleTimeoutRef.current)
    }
  }, [])

  const textColor = isDarkMode ? "text-white" : "text-gray-900"
  const bgColor = isDarkMode ? "bg-gray-900" : "bg-white"
  const subtleBg = isDarkMode ? "bg-gray-800/50" : "bg-gray-50/80"
  const borderColor = isDarkMode ? "border-gray-800/50" : "border-gray-200/80"

  const roles = [
    { label: "Full Stack Developer", icon: Server },
    { label: "Web & Mobile Developer", icon: Code2 },
    { label: "Creative Developer", icon: Sparkles },
  ]

  // Smooth easing functions
  const easeOutCubic = "cubic-bezier(0.33, 1, 0.68, 1)"
  const easeInOutCubic = "cubic-bezier(0.65, 0, 0.35, 1)"
  const easeOutExpo = "cubic-bezier(0.19, 1, 0.22, 1)"

  return (
    <div
      ref={containerRef}
      className={`h-full ${bgColor} ${textColor} overflow-auto`}
      style={{
        opacity: mounted ? 1 : 0,
        transition: `opacity 0.8s ${easeOutExpo}`,
      }}
    >
      <div className="min-h-full flex items-center justify-center p-6 md:p-8">
        <div className="w-full max-w-3xl relative">
          {/* Main Content Card */}
          <div
            className={`${subtleBg} backdrop-blur-xl ${borderColor} border rounded-2xl p-6 md:p-10 shadow-2xl`}
            style={{
              transform: mounted ? "translateY(0) scale(1)" : "translateY(24px) scale(0.98)",
              opacity: mounted ? 1 : 0,
              transition: `transform 1s ${easeOutCubic}, opacity 1s ${easeOutExpo}`,
              willChange: "transform, opacity",
            }}
          >
            {/* Profile Section */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-5 md:gap-7 mb-8">
              <div className="relative flex-shrink-0">
                <div 
                  className="relative w-28 h-28 md:w-32 md:h-32"
                  style={{
                    transform: mounted && photoLoaded ? "scale(1)" : "scale(0.9)",
                    opacity: mounted && photoLoaded ? 1 : 0,
                    transition: `transform 0.9s ${easeOutCubic} 0.2s, opacity 0.9s ${easeOutExpo} 0.2s`,
                    willChange: "transform, opacity",
                  }}
                >
                  {/* Animated glow effect */}
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: isDarkMode
                        ? "linear-gradient(135deg, rgba(59, 130, 246, 0.4), rgba(139, 92, 246, 0.4))"
                        : "linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))",
                      filter: "blur(16px)",
                      transform: "scale(1.15)",
                      opacity: mounted ? 0.6 : 0,
                      transition: `opacity 1.2s ${easeOutExpo} 0.3s`,
                      animation: "pulse-glow 3s ease-in-out infinite",
                    }}
                  />
                  <div 
                    className="relative w-full h-full rounded-full overflow-hidden ring-2 ring-white/20"
                    style={{
                      boxShadow: isDarkMode
                        ? "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
                        : "0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.5)",
                    }}
                  >
                    <Image
                      src="/placeholder-user.jpg"
                      alt="Sayari Amin"
                      width={128}
                      height={128}
                      className="object-cover w-full h-full"
                      priority
                      onLoad={() => setPhotoLoaded(true)}
                    />
                  </div>
                </div>
              </div>

              <div 
                className="flex-1 text-center md:text-left"
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "translateY(0)" : "translateY(12px)",
                  transition: `opacity 0.8s ${easeOutExpo} 0.4s, transform 0.8s ${easeOutCubic} 0.4s`,
                  willChange: "transform, opacity",
                }}
              >
                <h1
                  className="text-3xl md:text-4xl font-semibold mb-3 tracking-tight"
                  style={{
                    background: isDarkMode
                      ? "linear-gradient(135deg, #ffffff 0%, #e5e7eb 100%)"
                      : "linear-gradient(135deg, #111827 0%, #374151 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Sayari Amin
                </h1>

                {/* Role Display with Smooth Transition */}
                <div className="h-8 md:h-10 mb-4 flex items-center justify-center md:justify-start overflow-hidden">
                  <div className="relative inline-block" style={{ minWidth: "200px" }}>
                    {roles.map((role, index) => {
                      const Icon = role.icon
                      const isActive = index === activeIndex
                      const isNext = index === (activeIndex + 1) % 3
                      
                      return (
                        <div
                          key={index}
                          className="absolute inset-0 flex items-center gap-2.5"
                          style={{
                            opacity: isActive ? 1 : 0,
                            transform: isActive 
                              ? "translateY(0) translateX(0)" 
                              : isNext 
                              ? "translateY(8px) translateX(4px)" 
                              : "translateY(-8px) translateX(-4px)",
                            transition: `opacity 0.6s ${easeInOutCubic}, transform 0.6s ${easeInOutCubic}`,
                            willChange: "transform, opacity",
                            pointerEvents: isActive ? "auto" : "none",
                          }}
                        >
                          <Icon
                            className={`w-4 h-4 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}
                            style={{
                              transform: isActive ? "scale(1) rotate(0deg)" : "scale(0.85) rotate(-5deg)",
                              transition: `transform 0.6s ${easeInOutCubic}`,
                              filter: isActive 
                                ? isDarkMode 
                                  ? "drop-shadow(0 0 8px rgba(59, 130, 246, 0.4))"
                                  : "drop-shadow(0 0 4px rgba(59, 130, 246, 0.3))"
                                : "none",
                            }}
                          />
                          <span
                            className={`text-base md:text-lg font-medium ${
                              isDarkMode ? "text-gray-300" : "text-gray-700"
                            }`}
                            style={{
                              letterSpacing: "-0.01em",
                            }}
                          >
                            {role.label}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <p
                  className={`text-lg md:text-xl leading-relaxed ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                  style={{
                    letterSpacing: "-0.01em",
                    lineHeight: "1.6",
                  }}
                >
                  I build interactive, high-performance web experiences.
                </p>
              </div>
            </div>

            {/* Divider with animation */}
            <div
              className={`h-px mb-6 ${isDarkMode ? "bg-gray-800" : "bg-gray-200"}`}
              style={{
                background: isDarkMode
                  ? "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)"
                  : "linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)",
                transform: mounted ? "scaleX(1)" : "scaleX(0)",
                transformOrigin: "center",
                transition: `transform 0.8s ${easeOutCubic} 0.6s`,
                willChange: "transform",
              }}
            />

            {/* Quick Links / Actions */}
            <div 
              className="flex flex-col sm:flex-row items-center justify-between gap-4"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(8px)",
                transition: `opacity 0.8s ${easeOutExpo} 0.8s, transform 0.8s ${easeOutCubic} 0.8s`,
                willChange: "transform, opacity",
              }}
            >
              <div className={`text-sm ${isDarkMode ? "text-gray-500" : "text-gray-500"}`}>
                Welcome to my portfolio. Explore my work and projects.
              </div>
              {onClose && (
                <button
                  onClick={onClose}
                  className={`group flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 ${
                    isDarkMode
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-blue-500 hover:bg-blue-600 text-white"
                  }`}
                  style={{
                    boxShadow: isDarkMode
                      ? "0 4px 16px rgba(37, 99, 235, 0.25), 0 0 0 0 rgba(37, 99, 235, 0.4)"
                      : "0 4px 16px rgba(37, 99, 235, 0.2), 0 0 0 0 rgba(37, 99, 235, 0.3)",
                    transform: "translateY(0)",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-1px)"
                    e.currentTarget.style.boxShadow = isDarkMode
                      ? "0 6px 20px rgba(37, 99, 235, 0.35), 0 0 0 4px rgba(37, 99, 235, 0.1)"
                      : "0 6px 20px rgba(37, 99, 235, 0.3), 0 0 0 4px rgba(37, 99, 235, 0.1)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)"
                    e.currentTarget.style.boxShadow = isDarkMode
                      ? "0 4px 16px rgba(37, 99, 235, 0.25), 0 0 0 0 rgba(37, 99, 235, 0.4)"
                      : "0 4px 16px rgba(37, 99, 235, 0.2), 0 0 0 0 rgba(37, 99, 235, 0.3)"
                  }}
                >
                  <span>Continue</span>
                  <ChevronRight
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    style={{
                      transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  />
                </button>
              )}
            </div>
          </div>

          {/* Subtle Background Elements with smooth animation */}
          <div 
            className="absolute inset-0 pointer-events-none overflow-hidden" 
            style={{ zIndex: -1 }}
          >
            <div
              className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
              style={{
                background: isDarkMode
                  ? "radial-gradient(circle, rgba(59, 130, 246, 0.15), transparent 70%)"
                  : "radial-gradient(circle, rgba(59, 130, 246, 0.08), transparent 70%)",
                opacity: mounted ? 1 : 0,
                transform: mounted ? "scale(1)" : "scale(0.8)",
                transition: `opacity 1.5s ${easeOutExpo} 0.5s, transform 1.5s ${easeOutCubic} 0.5s`,
                animation: "float 8s ease-in-out infinite",
              }}
            />
            <div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
              style={{
                background: isDarkMode
                  ? "radial-gradient(circle, rgba(139, 92, 246, 0.15), transparent 70%)"
                  : "radial-gradient(circle, rgba(139, 92, 246, 0.08), transparent 70%)",
                opacity: mounted ? 1 : 0,
                transform: mounted ? "scale(1)" : "scale(0.8)",
                transition: `opacity 1.5s ${easeOutExpo} 0.7s, transform 1.5s ${easeOutCubic} 0.7s`,
                animation: "float 10s ease-in-out infinite reverse",
              }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1.15);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.2);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(20px, -20px) scale(1.05);
          }
        }
      `}</style>
    </div>
  )
}

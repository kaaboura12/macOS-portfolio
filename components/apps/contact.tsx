"use client"

import { useState } from "react"
import Image from "next/image"
import { Mail, Globe, Github, Linkedin, MapPin, Phone, Plus, Search } from "lucide-react"

interface ContactProps {
  isDarkMode?: boolean
}

export default function Contact({ isDarkMode = true }: ContactProps) {
  const [searchTerm, setSearchTerm] = useState("")

  const textColor = isDarkMode ? "text-white" : "text-gray-800"
  const bgColor = isDarkMode ? "bg-gray-900" : "bg-white"
  const sidebarBg = isDarkMode ? "bg-gray-800" : "bg-gray-100"
  const borderColor = isDarkMode ? "border-gray-700" : "border-gray-200"
  const hoverBg = isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
  const cardBg = isDarkMode ? "bg-gray-800" : "bg-gray-50"

  const contact = {
    name: "Sayari Amin",
    firstName: "Sayari",
    lastName: "Amin",
    email: "mail@danielprior.dk",
    website: "danielprior.dev",
    github: "github.com/kaaboura12",
    linkedin: "linkedin.com/in/daniel-prior-53a679195/",
    location: "Denmark",
    phone: "+45 XX XX XX XX", // You can update this with your actual phone
  }

  const contactInfo = [
    {
      label: "email",
      value: contact.email,
      icon: Mail,
      link: `mailto:${contact.email}`,
      color: isDarkMode ? "text-blue-400" : "text-blue-600",
    },
    {
      label: "website",
      value: contact.website,
      icon: Globe,
      link: `https://${contact.website}`,
      color: isDarkMode ? "text-green-400" : "text-green-600",
    },
    {
      label: "github",
      value: contact.github,
      icon: Github,
      link: `https://${contact.github}`,
      color: isDarkMode ? "text-gray-300" : "text-gray-700",
    },
    {
      label: "linkedin",
      value: contact.linkedin,
      icon: Linkedin,
      link: `https://${contact.linkedin}`,
      color: isDarkMode ? "text-blue-400" : "text-blue-600",
    },
    {
      label: "location",
      value: contact.location,
      icon: MapPin,
      link: null,
      color: isDarkMode ? "text-gray-400" : "text-gray-600",
    },
  ]

  return (
    <div className={`flex h-full ${bgColor} ${textColor}`}>
      {/* Sidebar */}
      <div className={`w-64 ${sidebarBg} border-r ${borderColor} flex flex-col`}>
        {/* Search Bar */}
        <div className="p-3 border-b border-gray-700">
          <div className={`relative ${isDarkMode ? "bg-gray-700" : "bg-gray-200"} rounded-md`}>
            <Search className={`absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`} />
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-8 pr-3 py-2 bg-transparent ${textColor} text-sm focus:outline-none`}
            />
          </div>
        </div>

        {/* Groups/Contacts List */}
        <div className="flex-1 overflow-y-auto p-2">
          <div className="mb-2">
            <div className={`px-3 py-1 text-xs font-semibold ${isDarkMode ? "text-gray-500" : "text-gray-500"} uppercase tracking-wide`}>
              All Contacts
            </div>
          </div>
          <div className={`${cardBg} rounded-md p-3 cursor-pointer ${hoverBg} border ${borderColor}`}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-600 flex items-center justify-center flex-shrink-0">
                <Image
                  src="/placeholder-user.jpg"
                  alt={contact.name}
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-medium truncate">{contact.name}</div>
                <div className={`text-xs truncate ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                  {contact.email}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add Contact Button */}
        <div className="p-3 border-t border-gray-700">
          <button
            className={`w-full flex items-center justify-center gap-2 px-3 py-2 rounded-md ${isDarkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-200 hover:bg-gray-300"} transition-colors`}
          >
            <Plus className="w-4 h-4" />
            <span className="text-sm font-medium">New Contact</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Toolbar */}
        <div className={`${sidebarBg} border-b ${borderColor} px-4 py-2 flex items-center justify-between`}>
          <div className="flex items-center gap-2">
            <button className={`p-1.5 rounded ${isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"}`}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className={`p-1.5 rounded ${isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"}`}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="flex items-center gap-2">
            <button className={`px-3 py-1.5 rounded text-sm font-medium ${isDarkMode ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-blue-500 hover:bg-blue-600 text-white"}`}>
              Edit
            </button>
          </div>
        </div>

        {/* Contact Details */}
        <div className="flex-1 overflow-auto">
          <div className="max-w-3xl mx-auto p-8">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-700 ring-4 ring-white/10">
                  <Image
                    src="/placeholder-user.jpg"
                    alt={contact.name}
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              <div className="flex-1">
                <h1 className="text-3xl font-semibold mb-2">{contact.name}</h1>
                <div className={`text-base ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                  Frontend Developer & Full-Stack Engineer
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-1">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <div
                    key={index}
                    className={`${cardBg} border ${borderColor} rounded-lg p-4 hover:shadow-md transition-shadow`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-10 h-10 rounded-full ${isDarkMode ? "bg-gray-700" : "bg-gray-200"} flex items-center justify-center`}>
                        <Icon className={`w-5 h-5 ${info.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className={`text-xs font-medium uppercase tracking-wide mb-1 ${isDarkMode ? "text-gray-500" : "text-gray-500"}`}>
                          {info.label}
                        </div>
                        {info.link ? (
                          <a
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-base ${isDarkMode ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-700"} hover:underline`}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className={`text-base ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                            {info.value}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Notes Section */}
            <div className={`mt-8 ${cardBg} border ${borderColor} rounded-lg p-6`}>
              <h2 className={`text-lg font-semibold mb-4 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                Notes
              </h2>
              <div className={`text-sm leading-relaxed ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                Senior Full Stack Developer specializing in building accessible, performant, and scalable web applications. 
                Experienced in leading development teams and implementing best practices for modern web development.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


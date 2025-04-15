export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "A web application built with React and Node.js",
      image: "/modern-web-app-dashboard.png",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#",
    },
    {
      id: 2,
      title: "Project Two",
      description: "Mobile app for tracking fitness goals",
      image: "/vibrant-workout-interface.png",
      tags: ["React Native", "Firebase"],
      link: "#",
    },
    {
      id: 3,
      title: "Project Three",
      description: "E-commerce platform with payment integration",
      image: "/modern-ecommerce-interface.png",
      tags: ["Next.js", "Stripe", "Tailwind CSS"],
      link: "#",
    },
  ]

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
            <div className="h-40 overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="text-blue-500 hover:text-blue-700 text-sm font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

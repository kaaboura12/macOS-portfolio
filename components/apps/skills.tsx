export default function Skills() {
  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
        { name: "Next.js", level: 75 },
        { name: "Tailwind CSS", level: 85 },
      ],
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", level: 70 },
        { name: "Express", level: 65 },
        { name: "MongoDB", level: 60 },
        { name: "SQL", level: 55 },
      ],
    },
    {
      name: "Tools & Others",
      skills: [
        { name: "Git", level: 80 },
        { name: "Docker", level: 50 },
        { name: "AWS", level: 45 },
        { name: "Figma", level: 60 },
      ],
    },
  ]

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Skills</h2>

      <div className="space-y-8">
        {skillCategories.map((category, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

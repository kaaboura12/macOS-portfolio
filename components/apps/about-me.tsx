export default function AboutMe() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <div className="rounded-lg overflow-hidden mb-4">
            <img src="/confident-professional.png" alt="Profile" className="w-full h-auto" />
          </div>
        </div>
        <div className="md:w-2/3">
          <p className="mb-4">
            Hello! I'm Daniel, a passionate developer with a love for creating beautiful and functional web
            applications.
          </p>
          <p className="mb-4">
            I specialize in front-end development with React and Next.js, but I'm also comfortable working with back-end
            technologies.
          </p>
          <p className="mb-4">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
            enjoying the outdoors.
          </p>
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Quick Facts</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Based in [Your Location]</li>
              <li>[Number] years of experience in web development</li>
              <li>Graduated from [Your University/School]</li>
              <li>Currently working as [Your Position] at [Your Company]</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

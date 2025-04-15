export default function Resume() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Resume</h2>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
          Download PDF
        </button>
      </div>

      <div className="space-y-8">
        {/* Education Section */}
        <section>
          <h3 className="text-xl font-semibold border-b pb-2 mb-4">Education</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between">
                <h4 className="font-medium">University Name</h4>
                <span className="text-gray-500">2018 - 2022</span>
              </div>
              <p className="text-gray-700">Bachelor of Science in Computer Science</p>
              <p className="text-gray-600 text-sm mt-1">
                Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems
              </p>
            </div>

            <div>
              <div className="flex justify-between">
                <h4 className="font-medium">Another Institution</h4>
                <span className="text-gray-500">2016 - 2018</span>
              </div>
              <p className="text-gray-700">Associate Degree in Information Technology</p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section>
          <h3 className="text-xl font-semibold border-b pb-2 mb-4">Work Experience</h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between">
                <h4 className="font-medium">Software Developer</h4>
                <span className="text-gray-500">Jan 2023 - Present</span>
              </div>
              <p className="text-gray-700">Company Name, Location</p>
              <ul className="list-disc list-inside mt-2 text-gray-600 space-y-1">
                <li>Developed and maintained web applications using React and Node.js</li>
                <li>Collaborated with design team to implement responsive UI components</li>
                <li>Optimized application performance and reduced load times by 30%</li>
                <li>Participated in code reviews and mentored junior developers</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between">
                <h4 className="font-medium">Web Developer Intern</h4>
                <span className="text-gray-500">May 2022 - Dec 2022</span>
              </div>
              <p className="text-gray-700">Internship Company, Location</p>
              <ul className="list-disc list-inside mt-2 text-gray-600 space-y-1">
                <li>Assisted in developing front-end features using HTML, CSS, and JavaScript</li>
                <li>Fixed bugs and improved website accessibility</li>
                <li>Created documentation for internal tools and processes</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section>
          <h3 className="text-xl font-semibold border-b pb-2 mb-4">Certifications</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="font-medium">AWS Certified Developer</span>
              <span className="text-gray-500">2023</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">React Developer Certification</span>
              <span className="text-gray-500">2022</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Google Analytics Certification</span>
              <span className="text-gray-500">2021</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

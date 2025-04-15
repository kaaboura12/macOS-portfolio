import {
  FolderOpen,
  FileText,
  ImageIcon as Image,
  Video,
  MusicIcon,
  Download,
  ComputerIcon as Desktop,
  Home,
} from "lucide-react"

export default function Finder() {
  const files = [
    { name: "Documents", icon: <FileText className="w-5 h-5" />, type: "folder" },
    { name: "Pictures", icon: <Image className="w-5 h-5" />, type: "folder" },
    { name: "Videos", icon: <Video className="w-5 h-5" />, type: "folder" },
    { name: "Music", icon: <MusicIcon className="w-5 h-5" />, type: "folder" },
    { name: "Downloads", icon: <Download className="w-5 h-5" />, type: "folder" },
    { name: "resume.pdf", icon: <FileText className="w-5 h-5" />, type: "file" },
    { name: "portfolio.jpg", icon: <Image className="w-5 h-5" />, type: "file" },
    { name: "project-demo.mp4", icon: <Video className="w-5 h-5" />, type: "file" },
  ]

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <div className="w-48 bg-gray-100 p-2">
        <div className="text-xs font-semibold text-gray-500 mb-1 px-2">Favorites</div>
        <div className="space-y-1">
          <div className="flex items-center px-2 py-1 rounded hover:bg-blue-500 hover:text-white cursor-pointer">
            <Desktop className="w-4 h-4 mr-2" />
            <span>Desktop</span>
          </div>
          <div className="flex items-center px-2 py-1 rounded hover:bg-blue-500 hover:text-white cursor-pointer">
            <Download className="w-4 h-4 mr-2" />
            <span>Downloads</span>
          </div>
          <div className="flex items-center px-2 py-1 rounded hover:bg-blue-500 hover:text-white cursor-pointer">
            <FileText className="w-4 h-4 mr-2" />
            <span>Documents</span>
          </div>
          <div className="flex items-center px-2 py-1 rounded hover:bg-blue-500 hover:text-white cursor-pointer">
            <Home className="w-4 h-4 mr-2" />
            <span>Home</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-4">
        <div className="grid grid-cols-4 gap-4">
          {files.map((file, index) => (
            <div key={index} className="flex flex-col items-center p-2 rounded hover:bg-blue-100 cursor-pointer">
              <div
                className={`w-12 h-12 flex items-center justify-center ${file.type === "folder" ? "text-blue-500" : "text-gray-500"}`}
              >
                {file.type === "folder" ? <FolderOpen className="w-10 h-10" /> : file.icon}
              </div>
              <span className="text-sm mt-1 text-center">{file.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

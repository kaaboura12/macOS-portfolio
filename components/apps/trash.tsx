import { Trash2, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Trash() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6">
      <Trash2 className="w-24 h-24 text-gray-300 mb-4" />
      <h2 className="text-2xl font-semibold mb-2">Trash is Empty</h2>
      <p className="text-gray-500 text-center mb-6">Items in the Trash will be automatically deleted after 30 days.</p>
      <Button variant="outline" className="flex items-center">
        <RefreshCw className="w-4 h-4 mr-2" />
        Empty Trash
      </Button>
    </div>
  )
}

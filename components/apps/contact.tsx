import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Contact Me</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
          <p className="text-gray-600 mb-6">
            Feel free to reach out if you have any questions, project inquiries, or just want to say hello!
          </p>

          <div className="space-y-4">
            <div className="flex items-start">
              <Mail className="w-5 h-5 text-gray-600 mt-0.5 mr-3" />
              <div>
                <h4 className="font-medium">Email</h4>
                <p className="text-gray-600">your.email@example.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <Phone className="w-5 h-5 text-gray-600 mt-0.5 mr-3" />
              <div>
                <h4 className="font-medium">Phone</h4>
                <p className="text-gray-600">+1 (123) 456-7890</p>
              </div>
            </div>

            <div className="flex items-start">
              <MapPin className="w-5 h-5 text-gray-600 mt-0.5 mr-3" />
              <div>
                <h4 className="font-medium">Location</h4>
                <p className="text-gray-600">City, Country</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Send a Message</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <Input id="name" placeholder="Your name" />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <Input id="email" type="email" placeholder="your.email@example.com" />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <Input id="subject" placeholder="What is this regarding?" />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <Textarea id="message" placeholder="Your message" rows={4} />
            </div>

            <Button type="submit" className="w-full">
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

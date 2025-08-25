import Link from "next/link"
import { ArrowLeft, Github, Instagram, Linkedin, Twitter } from "lucide-react"

export default function LinksPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <div className="max-w-md w-full mx-auto bg-white rounded-xl shadow-md p-6">
        <Link href="/" className="flex items-center text-gray-500 hover:text-gray-700 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to profile
        </Link>

        <h1 className="text-2xl font-bold mb-6 text-center">Alexander Eriksson</h1>

        <div className="space-y-4">
          <Link
            href="https://github.com"
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center">
              <Github className="w-5 h-5 mr-3 text-gray-700" />
              <span className="font-medium">GitHub</span>
            </div>
            <span className="text-gray-400 text-sm">@alexeriksson</span>
          </Link>

          <Link
            href="https://twitter.com"
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center">
              <Twitter className="w-5 h-5 mr-3 text-gray-700" />
              <span className="font-medium">Twitter</span>
            </div>
            <span className="text-gray-400 text-sm">@alexeriksson</span>
          </Link>

          <Link
            href="https://linkedin.com"
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center">
              <Linkedin className="w-5 h-5 mr-3 text-gray-700" />
              <span className="font-medium">LinkedIn</span>
            </div>
            <span className="text-gray-400 text-sm">Alexander Eriksson</span>
          </Link>

          <Link
            href="https://instagram.com"
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center">
              <Instagram className="w-5 h-5 mr-3 text-gray-700" />
              <span className="font-medium">Instagram</span>
            </div>
            <span className="text-gray-400 text-sm">@alexeriksson</span>
          </Link>
        </div>
      </div>
    </main>
  )
}

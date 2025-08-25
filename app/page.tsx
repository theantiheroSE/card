import Image from "next/image"
import Link from "next/link"
import { MapPin, Github, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <div className="max-w-md w-full mx-auto">
        {/* Main Profile Card */}
        <div className="max-w-[320px] mx-auto">
          <div className="bg-black text-white rounded-3xl overflow-hidden shadow-lg aspect-[9/16] flex flex-col relative p-6">
            {/* Content area with photo at the top */}
            <div className="flex flex-col justify-between h-full">
              <div className="text-center flex flex-col items-center">
                {/* Circular photo */}
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-black bg-black mb-4">
                  <Image
                    src="/placeholder.svg?height=128&width=128"
                    alt="Alexander Eriksson"
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>

                <h2 className="text-3xl font-bold mb-1">Alexander Eriksson</h2>
                <p className="text-gray-400 text-lg">Tech, Music and cool stuff</p>

                <div className="flex items-center justify-center mt-2 text-gray-400">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">Stockholm, Sweden</span>
                </div>

                {/* Social Media Icons */}
                <div className="flex items-center justify-center mt-4 space-x-4">
                  <Link
                    href="https://github.com"
                    className="text-gray-400 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://twitter.com"
                    className="text-gray-400 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://linkedin.com"
                    className="text-gray-400 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://instagram.com"
                    className="text-gray-400 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              <Link
                href="/links"
                className="bg-white text-black py-2 px-4 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors w-full text-center mt-4 flex items-center justify-center"
              >
                <span className="mr-1">my links</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

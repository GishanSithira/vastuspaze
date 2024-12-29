import {
  RiFacebookFill,
  RiInstagramFill,
  RiTwitterFill,
} from "@remixicon/react"

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center border-t-2 py-4">
        {/* Social Media Links */}
        <div className="flex space-x-6 mb-2">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Facebook page"
            className="text-xl hover:text-blue-600 transition-colors duration-300"
          >
            <RiFacebookFill />
          </a>
          <a
            href="https://www.x.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Facebook page"
            className="text-xl hover:text-blue-600 transition-colors duration-300"
          >
            <RiTwitterFill />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Facebook page"
            className="text-xl hover:text-blue-600 transition-colors duration-300"
          >
            <RiInstagramFill />
          </a>
        </div>
        {/* Footer Text */}
        <div className="text-center text-sm text-gray-500 mt-2 md:mt-0">
          © {new Date().getFullYear()} VastuSpaze Made with ❤️ by GSPIXEL. All
          rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer

import { Link } from "react-router-dom"
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-red-600/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity">
              <img src="/images/company-logo-transparent.png" alt="Technexra Logo" className="h-10 w-auto" />
            </Link>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Transforming businesses through innovative technology solutions and strategic consulting expertise.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-red-500 transition-colors hover:scale-110 duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-400 hover:text-red-500 transition-colors hover:scale-110 duration-200"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-400 hover:text-red-500 transition-colors hover:scale-110 duration-200"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <p className="font-semibold text-white mb-6 text-lg">Company</p>
            <ul className="space-y-4">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-red-500 transition-colors text-sm font-medium">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/case-studies"
                  className="text-gray-400 hover:text-red-500 transition-colors text-sm font-medium"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-red-500 transition-colors text-sm font-medium">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-red-500 transition-colors text-sm font-medium">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-white mb-6 text-lg">Services</p>
            <ul className="space-y-4">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-red-500 transition-colors text-sm font-medium">
                  Strategic Consulting
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-red-500 transition-colors text-sm font-medium">
                  Custom Solutions
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-red-500 transition-colors text-sm font-medium">
                  Managed Services
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-red-500 transition-colors text-sm font-medium">
                  Cybersecurity
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-white mb-6 text-lg">Contact Info</p>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-red-500 flex-shrink-0 mt-0.5" />
                <span>
                  13010 Brokers Tip Lane
                  <br />
                  Frisco, TX 75035
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-red-500" />
                <a href="tel:5869242234" className="hover:text-red-500 transition-colors">
                  (586) 924-2234
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-red-500" />
                <a href="mailto:hello@technexra.com" className="hover:text-red-500 transition-colors">
                  hello@technexra.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-red-600/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {currentYear} Technexra. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-red-500 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-red-500 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

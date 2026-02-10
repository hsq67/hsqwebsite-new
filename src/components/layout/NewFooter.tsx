import { Clock, Phone, Mail, Music2 } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-neutral-900 to-amber-950 text-gray-300 overflow-hidden">
      {/* Decorative background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-8">
          {/* Left Section - Logo and Description */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              {/* Logo placeholder - golden lion emblem */}
              <div className="w-20 h-20 mb-4 bg-gradient-to-br from-yellow-600 to-amber-700 rounded-full flex items-center justify-center">
                <div className="text-amber-100 text-3xl">👑</div>
              </div>
              <h3 className="text-white mb-3">Welcome to HSQ Towers</h3>
              <p className="text-sm leading-relaxed">
                A blend of style and elegance. Enjoy modern comforts,
                exceptional service, and a stay that feels like home—only
                grander.
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-3 mb-6">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-amber-600 hover:bg-amber-500 transition-colors flex items-center justify-center"
              >
                <FaFacebookF className="w-5 h-5 text-gray-900" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-amber-600 hover:bg-amber-500 transition-colors flex items-center justify-center"
              >
                <FaInstagram className="w-5 h-5 text-gray-900" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-amber-600 hover:bg-amber-500 transition-colors flex items-center justify-center"
              >
                <Music2 className="w-5 h-5 text-gray-900" />
              </a>
            </div>

            {/* Payment Methods */}
            <div>
              <p className="text-sm mb-3">Accepted payment methods</p>
              <div className="flex gap-2">
                <div className="w-12 h-8 bg-white rounded flex items-center justify-center text-xs text-blue-600">
                  VISA
                </div>
                <div className="w-12 h-8 bg-white rounded flex items-center justify-center text-xs text-red-600">
                  MC
                </div>
                <div className="w-12 h-8 bg-white rounded flex items-center justify-center text-xs text-blue-600">
                  VISA
                </div>
                <div className="w-12 h-8 bg-gray-700 rounded flex items-center justify-center text-xs text-amber-400">
                  AMEX
                </div>
              </div>
            </div>
          </div>

          {/* For Customers */}
          <div>
            <h4 className="text-amber-400 mb-4">For Customers</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-amber-400 transition-colors text-sm"
                >
                  About Hsq Towers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-amber-400 transition-colors text-sm"
                >
                  Customer Care/Help
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-amber-400 transition-colors text-sm"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-amber-400 transition-colors text-sm"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-amber-400 transition-colors text-sm"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Other Links */}
          <div>
            <h4 className="text-amber-400 mb-4">Other Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-amber-400 transition-colors text-sm"
                >
                  About Hotel
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-amber-400 transition-colors text-sm"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-amber-400 mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                </div>
                <span className="text-sm">
                  WCBR+QGP, Main Jilika Gali, Kashmir Point Road, Murree
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <a
                  href="mailto:hsqtowers@gmail.com"
                  className="hover:text-amber-400 transition-colors text-sm"
                >
                  hsqtowers@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <a
                  href="tel:+923300819478"
                  className="hover:text-amber-400 transition-colors text-sm"
                >
                  +92 3300819478
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span className="text-sm">24/7 Customer Service</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">Hsq Tower © 2025 All Rights Reserved</p>
          <p className="text-sm">Designed and developed by Vorniqo solutions</p>
        </div>
      </div>
    </footer>
  );
}

import React from "react";
import { MapPin, Mail, Phone, GitHub, LinkedIn, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-transparent text-white mx-auto px-4 py-8 md:py-16 z-50 relative">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-600 pt-4 justify-items-center">
        {/* Contact Info Section */}
        <div className="flex flex-col gap-4 items-center">
          <h3 className="text-xl font-semibold text-[#DD7CB2]">Contact Us</h3>
          <div className="flex items-start gap-3">
            <MapPin className="h-6 w-6 text-[#3FBFBD]" />
            <p className="text-center">
             Chitkara University , Rajpura
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="h-6 w-6 text-[#3FBFBD]" />
            <a
              href="mailto:ieee@chitkara.edu.in"
              className="hover:text-[#3FBFBD] transition-colors duration-300"
            >
              ieee@chitkara.edu.in
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="h-6 w-6 text-[#3FBFBD]" />
            <a
              href="tel:+918427584898"
              className="hover:text-[#3FBFBD] transition-colors duration-300"
            >
              9874654132
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold text-[#DD7CB2]">Quick Links</h3>
          <ul className="mt-4 flex flex-col gap-3 items-center">
            <li>
              <a
                href="#"
                className="hover:text-[#3FBFBD] transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#3FBFBD] transition-colors duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#3FBFBD] transition-colors duration-300"
              >
                Events
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#3FBFBD] transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold text-[#DD7CB2]">Follow Us</h3>
          <div className="flex flex-col mt-4 gap-4 items-center">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#3FBFBD] transition-colors duration-300"
            >
              Github
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#3FBFBD] transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#3FBFBD] transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import logo from "../assets/logo.png";
import { Linkedin, Instagram, X, Youtube } from "lucide-react";

const industries = [
  "Automotive",
  "Banking and Financial Services",
  "Life Sciences",
  "Manufacturing",
  "Media and iGaming",
  "Mobility",
  "Retail",
  "Telecommunications",
  "Transportation and Logistics",
];

const services = [
  "Custom Software Development",
  "Data and AI",
  "AdTech and MarTech",
  "Managed Services",
];

const insights = [
  "Articles",
  "Case Studies",
  "Newsroom",
];

const aboutUs = [
  "Leadership",
  "Our Story",
  "Partnerships",
  "Compliance & Ethical Behavior",
  "ESG",
];

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700 bg-neutral-950 text-neutral-200 w-full">
      <div className="px-8 w-full">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-10 w-full">
          {/* Logo, Name, and Address Column */}
          <div className="flex flex-col mb-6 lg:mb-0 lg:w-1/4">
            <div className="flex items-center mb-2">
              <img src={logo} alt="Logo" className="h-10 w-10 mr-3" />
              <span className="text-2xl font-bold text-orange-500 whitespace-nowrap">Praxos Technologies</span>
            </div>
            <div className="text-sm text-neutral-400 mt-1">
              <div className="font-semibold text-white">Main Office:</div>
              <div className="font-semibold text-white">Voctarova 20a, Prague, Czech Republic</div>
              <a href="#" className="text-orange-400 underline">View all locations</a>
            </div>
          </div>
          {/* Main Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full lg:w-auto">
            <div>
              <h3 className="text-md font-semibold mb-4 text-white">Industries</h3>
              <ul className="space-y-2">
                {industries.map((item, idx) => (
                  <li key={idx} className="text-neutral-300">{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-md font-semibold mb-4 text-white">Services</h3>
              <ul className="space-y-2">
                {services.map((item, idx) => (
                  <li key={idx} className="text-neutral-300">{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-md font-semibold mb-4 text-white">Insights</h3>
              <ul className="space-y-2">
                {insights.map((item, idx) => (
                  <li key={idx} className="text-neutral-300">{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-md font-semibold mb-4 text-white">About us</h3>
              <ul className="space-y-2">
                {aboutUs.map((item, idx) => (
                  <li key={idx} className="text-neutral-300">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between border-t border-neutral-800 pt-6 w-full">
          <div className="flex items-center mb-4 md:mb-0">
            <span className="text-orange-500 mr-2">{/* You can add a small logo icon here if you want */}</span>
            <span className="text-neutral-500 text-sm">2025 © Praxos Technologies • All rights reserved</span>
          </div>
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <a href="#" aria-label="LinkedIn">
              <img src="https://img.icons8.com/fluency/240/linkedin.png" alt="linkedin" className="w-5 h-5 hover:scale-110 transition-transform" />
            </a>
            <a href="#" aria-label="Instagram">
              <img src="https://img.icons8.com/fluency/240/instagram-new.png" alt="instagram-new" className="w-5 h-5 hover:scale-110 transition-transform" />
            </a>
            <a href="#" aria-label="X"><X className="w-5 h-5 text-neutral-300 hover:text-orange-500" /></a>
            <a href="#" aria-label="YouTube"><Youtube className="w-5 h-5 text-neutral-300 hover:text-orange-500" /></a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="border border-white text-white rounded-full px-6 py-2 font-semibold hover:bg-white hover:text-orange-600 transition">Careers</a>
            <a href="#" className="border border-white text-orange-500 rounded-full px-6 py-2 font-semibold hover:bg-orange-500 hover:text-white transition">Contact us</a>
          </div>
        </div>
        {/* Legal Links */}
        <div className="flex flex-col md:flex-row md:justify-between items-center mt-6 text-neutral-400 text-xs space-y-2 md:space-y-0">
          <div className="flex space-x-4">
            <a href="#" className="hover:text-orange-400">Legal-Documents</a>
            <span>|</span>
            <a href="#" className="hover:text-orange-400">Privacy and Cookies Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

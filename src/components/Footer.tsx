import { Crown, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-orange rounded-full flex items-center justify-center">
                <Crown className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">SIR</h3>
                <p className="text-orange text-sm">GRINDING WORKS</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Precision manufacturing solutions for industrial excellence. 
              Your trusted partner for cutting tools and CNC services.
            </p>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Industrial Boiler Cutting Tools</li>
              <li>Beveling Tools</li>
              <li>Pipe Jaw Manufacturing</li>
              <li>H.S.S Inserts & Holders</li>
              <li>CNC Wire Cutting</li>
              <li>Custom Manufacturing</li>
            </ul>
          </div>
          
          {/* Contact Info */}
                <div>
        <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
        <div className="space-y-3 text-sm">
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4 text-orange" />
            <a
              href="tel:+917744000669"
              className="text-gray-300 hover:text-orange transition"
            >
              +91 7744000669
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4 text-orange" />
            <a
              href="tel:+918788109158"
              className="text-gray-300 hover:text-orange transition"
            >
              +91 8788109158
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4 text-orange" />
            <a
              href="mailto:sir2040@gmail.com"
              className="text-gray-300 hover:text-orange transition"
            >
              sir2040@gmail.com
            </a>
          </div>
        </div>
      </div>

          
          {/* Address */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Visit Us</h4>
            <div className="flex items-start space-x-2 text-sm">
              <MapPin className="w-4 h-4 text-orange mt-1 flex-shrink-0" />
              <div className="text-gray-300 leading-relaxed">
                Rajgurunagar Industrial Society,<br />
                Plot No.106/2, T-Block,<br />
                Gala No.46, M.I.D.C,<br />
                Bhosari, Pune - 411026
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-navy-light mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-300">
              © 2024 SIR Grinding Works. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-300">
              <a href="#" className="hover:text-orange transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-orange transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-orange transition-colors">Quality Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
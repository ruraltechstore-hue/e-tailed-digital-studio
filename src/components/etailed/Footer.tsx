import { Link } from "@tanstack/react-router";
import { ArrowUp, Instagram, Facebook, Youtube, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/logo.jpg";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="overflow-hidden bg-[#111329] px-5 pb-7 pt-20 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-screen-2xl">
        
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-b border-white/10 pb-16">
          
          {/* Column 1: Brand & Description */}
          <div className="flex flex-col lg:pr-8">
            <div className="flex items-center gap-3 mb-2">
              <img src={logo} alt="E-Tailed Logo" className="w-8 h-8 md:w-10 md:h-10 rounded-md object-contain shadow-md shrink-0" />
              <h4 className="text-2xl font-serif italic text-white">
                Etailed Digital India
              </h4>
            </div>
            <p className="text-[10px] uppercase tracking-widest text-white/50 mb-6 font-semibold">
              by Etailed Digital Services Pvt. Ltd.
            </p>
            <p className="text-sm text-white/70 leading-relaxed mb-8 max-w-sm">
              Accelerating business growth with digital marketing, custom SaaS products, and automation solutions across India.
            </p>
            <div className="flex flex-wrap gap-5 text-white/80 mt-2">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter/X" className="hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-white/90 mb-8">Quick Links</h4>
            <ul className="flex flex-col gap-4 text-sm text-white/60">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-white/90 mb-8">Services</h4>
            <ul className="flex flex-col gap-4 text-sm text-white/60">
              <li><Link to="/services" className="hover:text-white transition-colors">Web & Branding</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Website & E-Commerce</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Social Media Services</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Automations & CRM</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Digital Marketing & SaaS</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Blog & Resources</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-white/90 mb-8">Contact</h4>
            <div className="flex flex-col gap-5 text-sm text-white/60 leading-relaxed">
              <p>
                Sai Silicon Heights, 3-118,<br />
                Megha Hills Rd, Ayyappa Society,<br />
                Madhapur, Hyderabad,<br />
                Telangana 500081, India
              </p>
              <div className="flex flex-col gap-1">
                <a href="tel:+919392898733" className="hover:text-white transition-colors">+91 93928 98733</a>
                <a href="tel:+919390168733" className="hover:text-white transition-colors">+91 9390168733</a>
              </div>
              <a href="mailto:support@e-tailedindia.com" className="text-white hover:underline font-medium transition-all">
                support@e-tailedindia.com
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="relative pt-6 pb-2">
          <div className="flex w-full flex-col lg:flex-row gap-4 lg:gap-8 justify-between items-center text-[10px] uppercase tracking-[0.15em] text-white/40">
            
            <p className="shrink-0 text-center lg:text-left">
              © {new Date().getFullYear()} ETAILED DIGITAL SERVICES PVT. LTD.
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-end items-center gap-2 text-[8px] sm:text-[9px] text-white/40 text-center lg:text-right">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <span className="text-white/20">·</span>
              <Link to="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
              <span className="text-white/20">·</span>
              <Link to="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link>
              <span className="text-white/20">·</span>
              <Link to="/shipping-policy" className="hover:text-white transition-colors">Shipping Policy</Link>
              <span className="text-white/20">·</span>
              <Link to="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
              <span className="text-white/20">·</span>
              <Link to="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}

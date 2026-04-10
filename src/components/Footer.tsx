import { Separator } from '@/components/ui/separator';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-secondary text-primary pt-20 pb-10 border-t border-primary/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-2xl">G</div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl leading-tight tracking-tight">Gajjala <span className="text-primary">Multispeciality Dental Hospital</span></span>
              </div>
            </Link>
            <p className="text-primary/60 leading-relaxed">
              Providing high-quality dental care with a personal touch. Our mission is to give you a healthy, beautiful smile that lasts a lifetime.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-primary">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-primary/60 hover:text-primary transition-colors font-medium">Home</Link></li>
              <li><Link to="/about" className="text-primary/60 hover:text-primary transition-colors font-medium">About Us</Link></li>
              <li><Link to="/treatments" className="text-primary/60 hover:text-primary transition-colors font-medium">Our Services</Link></li>
              <li><Link to="/faq" className="text-primary/60 hover:text-primary transition-colors font-medium">FAQ</Link></li>
              <li><Link to="/contact" className="text-primary/60 hover:text-primary transition-colors font-medium">Book Appointment</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-primary">Treatments</h4>
            <ul className="space-y-4">
              <li><Link to="/treatments" className="text-primary/60 hover:text-primary transition-colors font-medium">Dental Implants</Link></li>
              <li><Link to="/treatments" className="text-primary/60 hover:text-primary transition-colors font-medium">Root Canal Treatment</Link></li>
              <li><Link to="/treatments" className="text-primary/60 hover:text-primary transition-colors font-medium">Teeth Whitening</Link></li>
              <li><Link to="/treatments" className="text-primary/60 hover:text-primary transition-colors font-medium">Orthodontic Braces</Link></li>
              <li><Link to="/treatments" className="text-primary/60 hover:text-primary transition-colors font-medium">Smile Makeover</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-primary">Newsletter</h4>
            <p className="text-primary/60 mb-6 font-medium">Subscribe to get the latest dental health tips and offers.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white border border-primary/10 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-primary outline-none"
              />
              <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg transition-colors font-bold">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary/10 text-center text-primary/40 text-sm font-medium">
          <p>© {new Date().getFullYear()} Gajjala Multispeciality Dental Hospital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

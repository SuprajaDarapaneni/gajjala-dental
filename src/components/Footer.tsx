import { Separator } from '@/components/ui/separator';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">G</div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg leading-tight">Gajjala</span>
                <span className="text-[10px] uppercase tracking-widest font-semibold text-primary">Dental Hospital</span>
              </div>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Providing high-quality dental care with a personal touch. Our mission is to give you a healthy, beautiful smile that lasts a lifetime.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-slate-400 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/treatments" className="text-slate-400 hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link to="/faq" className="text-slate-400 hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-primary transition-colors">Book Appointment</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Treatments</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-primary transition-colors">Dental Implants</a></li>
              <li><a href="#" className="text-slate-400 hover:text-primary transition-colors">Root Canal Treatment</a></li>
              <li><a href="#" className="text-slate-400 hover:text-primary transition-colors">Teeth Whitening</a></li>
              <li><a href="#" className="text-slate-400 hover:text-primary transition-colors">Orthodontic Braces</a></li>
              <li><a href="#" className="text-slate-400 hover:text-primary transition-colors">Smile Makeover</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-slate-400 mb-6">Subscribe to get the latest dental health tips and offers.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-slate-800 border-none rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-primary outline-none"
              />
              <button className="bg-primary hover:bg-primary/90 px-4 py-2 rounded-lg transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Gajjala Multispeciality Dental Hospital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

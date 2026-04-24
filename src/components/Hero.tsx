import { useState, useEffect } from 'react';
import { Phone, Menu, Clock, MapPin, Stethoscope, ChevronDown, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Link, useLocation } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Equipment', href: '/equipment' },
    { name: 'Booking', href: '/booking' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  const treatments = [
    { title: 'Facial Surgery', href: '/treatments' },
    { title: 'Dental Implants', href: '/treatments' },
    { title: 'Root Canal', href: '/treatments' },
    { title: 'Orthodontics', href: '/treatments' },
    { title: 'Periocare', href: '/treatments' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Upper Info Bar - NOW STATIC (Removed isScrolled logic) */}
      <div className="hidden lg:block bg-primary text-white/80 py-2 border-b border-white/10">
        <div className="container mx-auto px-4 flex justify-between items-center text-[10px] uppercase tracking-[0.2em] font-bold">
          <div className="flex gap-8">
            <div className="flex items-center gap-2">
              <Clock className="w-3 h-3 text-accent" />
              <span>9 AM - 8 PM Daily</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3 h-3 text-accent" />
              <span>Narasaraopet & Sattenepalli</span>
            </div>
          </div>
          <div className="flex gap-6">
            <a href="mailto:info@gajjala.com" className="hover:text-accent transition-colors flex items-center gap-2">
              <Mail className="w-3 h-3 text-accent" />
              <span>info@gajjala.com</span>
            </a>
            <a href="tel:8897222959" className="hover:text-accent transition-colors flex items-center gap-2">
              <Phone className="w-3 h-3 text-accent" />
              <span>+91 88972 22959</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={`transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl py-3 border-b border-slate-200 shadow-sm' 
          : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          
          <Link to="/" className="flex items-center gap-4 group">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 shadow-lg ${
              isScrolled ? 'bg-primary text-accent scale-90' : 'bg-accent text-primary group-hover:rotate-[10deg]'
            }`}>
              <Stethoscope className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className={`font-heading font-extrabold text-lg md:text-xl leading-none tracking-tight transition-colors duration-500 ${
                isScrolled ? 'text-primary' : (isHomePage ? 'text-primary' : 'text-white')
              }`}>
                GAJJALA <span className="text-accent italic">DENTAL</span>
              </span>
              <span className={`text-[9px] uppercase tracking-[0.4em] font-black mt-1 ${
                isScrolled ? 'text-slate-400' : 'text-accent/80'
              }`}>
                Multispeciality Hospital
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.slice(0, 2).map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                className={`text-[11px] uppercase tracking-[0.2em] font-bold transition-all hover:text-accent relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-accent hover:after:w-full after:transition-all ${
                  isScrolled ? 'text-primary' : (isHomePage ? 'text-primary' : 'text-white')
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <DropdownMenu>
              <DropdownMenuTrigger className={`flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] font-bold outline-none transition-all hover:text-accent ${
                isScrolled ? 'text-primary' : (isHomePage ? 'text-primary' : 'text-white')
              }`}>
                Treatments <ChevronDown className="w-3 h-3 opacity-50" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="bg-white/95 backdrop-blur-md border-slate-200 p-2 min-w-[220px] shadow-2xl rounded-xl">
                {treatments.map((item) => (
                  <DropdownMenuItem key={item.title} asChild>
                    <Link to={item.href} className="w-full px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-primary/70 hover:bg-slate-50 hover:text-primary transition-all rounded-lg cursor-pointer">
                      {item.title}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {navLinks.slice(2).map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                className={`text-[11px] uppercase tracking-[0.2em] font-bold transition-all hover:text-accent relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-accent hover:after:w-full after:transition-all ${
                  isScrolled ? 'text-primary' : (isHomePage ? 'text-primary' : 'text-white')
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <Button asChild className="rounded-full px-8 font-bold uppercase tracking-widest text-[10px] bg-primary text-white hover:bg-primary/90 shadow-xl shadow-primary/20 hover:scale-105 transition-all duration-300">
              <Link to="/booking">Book Appointment</Link>
            </Button>
          </nav>

          <div className="lg:hidden flex items-center gap-3">
            <a href="tel:8897222959" className="w-10 h-10 bg-accent text-primary rounded-full flex items-center justify-center shadow-lg active:scale-90 transition-transform">
              <Phone className="w-4 h-4" />
            </a>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className={isScrolled || isHomePage ? 'text-primary' : 'text-white'}>
                  <Menu className="w-7 h-7" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-[400px] bg-primary text-white border-none p-0">
                <div className="flex flex-col h-full p-8">
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-accent font-black tracking-widest text-xl italic">MENU</span>
                  </div>
                  <nav className="flex flex-col gap-6 mt-16">
                    {navLinks.map((link) => (
                      <Link key={link.name} to={link.href} className="text-4xl font-extrabold italic hover:text-accent transition-all hover:translate-x-4 inline-block">
                        {link.name}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
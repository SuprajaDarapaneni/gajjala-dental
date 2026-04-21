import { useState, useEffect } from 'react';
import { Phone, Menu, Clock, MapPin, Stethoscope, ChevronDown } from 'lucide-react';
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
      setIsScrolled(window.scrollY > 20);
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

  const getHeaderStyle = () => {
    if (isScrolled) return 'bg-white/95 backdrop-blur-md py-2 border-b border-secondary';
    if (isHomePage) return 'bg-transparent py-4';
    return 'bg-primary py-3';
  };

  const getTextColor = () => {
    if (isScrolled) return 'text-primary';
    if (isHomePage) return 'text-primary';
    return 'text-white';
  };

  const getLogoColor = () => {
    if (isScrolled) return 'text-primary';
    if (isHomePage) return 'text-primary';
    return 'text-white';
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${getHeaderStyle()}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary font-bold text-2xl group-hover:rotate-12 transition-transform duration-500">
            <Stethoscope className="w-7 h-7" />
          </div>
          <div className="flex flex-col">
            <span className={`font-heading font-bold text-xl md:text-2xl leading-tight tracking-tight ${getLogoColor()}`}>
              Gajjala Multispeciality Dental Hospital
            </span>
            <span className={`text-[10px] uppercase tracking-[0.3em] font-bold ${isScrolled ? 'text-accent' : 'text-accent'}`}>
              Narasaraopet
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.slice(0, 2).map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className={`text-xs uppercase tracking-widest font-bold transition-all hover:text-accent ${getTextColor()}`}
            >
              {link.name}
            </Link>
          ))}
          
          <DropdownMenu>
            <DropdownMenuTrigger className={`flex items-center gap-1 text-xs uppercase tracking-widest font-bold outline-none transition-all hover:text-accent ${getTextColor()}`}>
              Treatments <ChevronDown className="w-3 h-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white border-secondary p-2 min-w-[200px]">
              {treatments.map((item) => (
                <DropdownMenuItem key={item.title} asChild>
                  <Link to="/treatments" className="w-full px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary/80 hover:bg-secondary hover:text-primary transition-colors">
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
              className={`text-xs uppercase tracking-widest font-bold transition-all hover:text-accent ${getTextColor()}`}
            >
              {link.name}
            </Link>
          ))}
          
          <Button render={<Link to="/booking" />} className="rounded-none px-8 font-bold uppercase tracking-widest text-xs bg-accent text-primary hover:bg-accent/90 transition-all duration-300">
            Book Appointment
          </Button>
        </nav>

        {/* Mobile Nav */}
        <div className="lg:hidden flex items-center gap-4">
          <a href="tel:8897222959" className="p-2 bg-accent text-primary rounded-full">
            <Phone className="w-4 h-4" />
          </a>
          <Sheet>
            <SheetTrigger render={<Button variant="ghost" size="icon" className={getLogoColor()} />}>
              <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-primary text-white border-none">
              <div className="flex flex-col gap-8 mt-12">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    to={link.href} 
                    className="text-2xl font-bold italic hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link to="/treatments" className="text-2xl font-bold italic hover:text-accent transition-colors">Treatments</Link>
                
                <div className="flex flex-col gap-6 pt-12 border-t border-white/10">
                  <div className="flex items-center gap-4 text-indigo-100">
                    <Clock className="w-5 h-5 text-accent" />
                    <span className="text-sm font-medium">9 AM - 8 PM Every Day</span>
                  </div>
                  <div className="flex items-center gap-4 text-indigo-100">
                    <MapPin className="w-5 h-5 text-accent" />
                    <span className="text-sm font-medium">Narasaraopet & Sattenepalli</span>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

import { useState, useEffect } from 'react';
import { Phone, Menu, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Link, useLocation } from 'react-router-dom';

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
    { name: 'Treatments', href: '/treatments' },
    { name: 'Booking', href: '/booking' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  const getHeaderStyle = () => {
    if (isScrolled) return 'bg-white/90 backdrop-blur-md shadow-sm py-3';
    if (isHomePage) return 'bg-transparent py-5';
    return 'bg-slate-900 py-4';
  };

  const getTextColor = () => {
    if (isScrolled) return 'text-slate-600';
    if (isHomePage) return 'text-white/90';
    return 'text-white/90';
  };

  const getLogoColor = () => {
    if (isScrolled) return 'text-slate-900';
    if (isHomePage) return 'text-white';
    return 'text-white';
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getHeaderStyle()}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">G</div>
          <div className="flex flex-col">
            <span className={`font-heading font-bold text-lg leading-tight ${getLogoColor()}`}>Gajjala</span>
            <span className={`text-[10px] uppercase tracking-widest font-semibold ${isScrolled ? 'text-primary' : 'text-primary'}`}>Dental Hospital</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className={`text-sm font-medium transition-colors hover:text-primary ${getTextColor()}`}
            >
              {link.name}
            </Link>
          ))}
          <Button className="rounded-full px-6">
            <Phone className="w-4 h-4 mr-2" />
            8897222959
          </Button>
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center gap-4">
          <a href="tel:8897222959" className="p-2 bg-primary text-white rounded-full">
            <Phone className="w-4 h-4" />
          </a>
          <Sheet>
            <SheetTrigger render={<Button variant="ghost" size="icon" className={getLogoColor()} />}>
              <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-8 mt-12">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    to={link.href} 
                    className="text-lg font-semibold text-slate-900 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex flex-col gap-4 pt-8 border-t">
                  <div className="flex items-center gap-3 text-slate-600">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-sm">9 AM - 8 PM Every Day</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-sm">Guntur, Andhra Pradesh</span>
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

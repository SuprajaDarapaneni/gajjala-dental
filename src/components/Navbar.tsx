import { useState, useEffect } from 'react';
import { Phone, Menu, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Link, useLocation } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

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
    { name: 'Booking', href: '/booking' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  const treatments = [
    { title: 'Dental Implants', href: '/treatments#implants' },
    { title: 'Root Canal', href: '/treatments#root-canal' },
    { title: 'Orthodontics', href: '/treatments#ortho' },
    { title: 'Teeth Whitening', href: '/treatments#whitening' },
    { title: 'Pediatric Dentistry', href: '/treatments#pediatric' },
  ];

  const getHeaderStyle = () => {
    if (isScrolled) return 'bg-white shadow-md py-2';
    if (isHomePage) return 'bg-transparent py-4';
    return 'bg-white shadow-sm py-3';
  };

  const getTextColor = () => {
    return 'text-slate-700';
  };

  const getLogoColor = () => {
    return 'text-slate-900';
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getHeaderStyle()}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">G</div>
          <div className="flex flex-col">
            <span className={`font-heading font-bold text-xl md:text-2xl leading-tight tracking-tight ${getLogoColor()}`}>
              Gajjala <span className="text-primary">Multispeciality</span>
            </span>
            <span className={`text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold ${isScrolled ? 'text-slate-500' : 'text-primary-foreground/80'}`}>
              Dental Hospital
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          <Link to="/" className={`text-sm font-bold transition-colors hover:text-primary ${getTextColor()}`}>Home</Link>
          <Link to="/about" className={`text-sm font-bold transition-colors hover:text-primary ${getTextColor()}`}>About</Link>
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className={`bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent font-bold text-sm ${getTextColor()}`}>
                  Treatments
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {treatments.map((treatment) => (
                      <li key={treatment.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/treatments"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-bold leading-none">{treatment.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Advanced care for your {treatment.title.toLowerCase()}.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {navLinks.slice(2).map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className={`text-sm font-bold transition-colors hover:text-primary ${getTextColor()}`}
            >
              {link.name}
            </Link>
          ))}
          <Button className="rounded-full px-6 font-bold shadow-lg hover:shadow-primary/20">
            <Phone className="w-4 h-4 mr-2" />
            8897222959
          </Button>
        </nav>

        {/* Mobile Nav */}
        <div className="lg:hidden flex items-center gap-4">
          <a href="tel:8897222959" className="p-2 bg-primary text-white rounded-full shadow-lg">
            <Phone className="w-4 h-4" />
          </a>
          <Sheet>
            <SheetTrigger render={<Button variant="ghost" size="icon" className={getLogoColor()} />}>
              <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-12">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    to={link.href} 
                    className="text-xl font-bold text-slate-900 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link to="/treatments" className="text-xl font-bold text-slate-900 hover:text-primary transition-colors">Treatments</Link>
                <div className="flex flex-col gap-4 pt-8 border-t">
                  <div className="flex items-center gap-3 text-slate-600">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">9 AM - 8 PM Every Day</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600">
                    <MapPin className="w-5 h-5 text-primary" />
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

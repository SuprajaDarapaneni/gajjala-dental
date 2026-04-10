import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-0 overflow-hidden bg-white">
      
      {/* Background Image - Vibrant & Colorful */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop"
          alt="Modern Dental Clinic"
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            
            {/* Tagline */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-primary/30"></div>
              <span className="text-primary text-sm font-bold uppercase tracking-[0.4em]">
                Excellence in Dentistry
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary leading-[0.9] mb-8 italic">
              Your Smile, <br />
              Our <span className="text-accent">Masterpiece</span>
            </h1>

            {/* Description */}
            <p className="text-xl text-primary/70 mb-12 max-w-xl font-light leading-relaxed">
              Experience world-class dental care with advanced technology and a team of specialized experts in{' '}
              <span className="text-primary font-medium">Narasaraopet</span>.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-6 mb-16">
              <Button
                asChild
                size="lg"
                className="rounded-none px-10 h-16 text-sm uppercase tracking-widest font-bold bg-primary text-white hover:bg-primary/90 transition-all duration-500 group shadow-lg shadow-primary/20"
              >
                <Link to="/booking">
                  Book Appointment
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-none px-10 h-16 text-sm uppercase tracking-widest font-bold border-primary/20 text-primary hover:bg-secondary transition-all duration-500"
              >
                <Link to="/treatments">Our Services</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              
              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center text-primary border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <Sparkles className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary italic">10+</p>
                  <p className="text-xs uppercase tracking-widest text-primary/50 font-bold">
                    Years of Experience
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center text-primary border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary italic">3k+</p>
                  <p className="text-xs uppercase tracking-widest text-primary/50 font-bold">
                    Happy Patients
                  </p>
                </div>
              </div>

            </div>

          </motion.div>
        </div>
      </div>

      {/* Soft Decorative Element */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-accent/10 blur-[120px] rounded-full -mb-20 -mr-20"></div>
    </section>
  );
}
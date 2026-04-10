import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop" 
          alt="Modern Dental Clinic" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent md:from-slate-900/90 md:via-slate-900/60 md:to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6 md:bg-primary/20 md:text-primary-foreground">
              Welcome to Gajjala Dental
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 md:text-white leading-[1.1] mb-6">
              Your Smile, Our <span className="text-primary">Priority</span>
            </h1>
            <p className="text-lg text-slate-600 md:text-slate-200 mb-8 max-w-lg">
              Experience world-class dental care with advanced technology and a team of specialized experts in Guntur.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg">
                Book Appointment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg md:bg-white/10 md:text-white md:border-white/20 md:hover:bg-white/20">
                Our Services
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary md:bg-white/10 md:text-white">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900 md:text-white">10+</p>
                  <p className="text-sm text-slate-500 md:text-slate-400">Years Experience</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary md:bg-white/10 md:text-white">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900 md:text-white">3k+</p>
                  <p className="text-sm text-slate-500 md:text-slate-400">Happy Smiles</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

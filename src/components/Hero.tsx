import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-0 overflow-hidden bg-slate-50">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop" 
          alt="Modern Dental Clinic" 
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white/50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-2 px-4 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-widest mb-6">
              Gajjala Multispeciality Dental Hospital
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
              Your Smile, Our <span className="text-primary">Priority</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg">
              Experience world-class dental care with advanced technology and a team of specialized experts in Guntur.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg font-bold shadow-xl shadow-primary/20">
                Book Appointment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">10+</p>
                  <p className="text-sm text-slate-500">Years Experience</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">3k+</p>
                  <p className="text-sm text-slate-500">Happy Smiles</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

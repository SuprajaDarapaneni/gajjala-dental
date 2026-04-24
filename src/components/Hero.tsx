import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-24 overflow-hidden bg-white">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-secondary/50 -skew-x-12 translate-x-32 z-0 hidden lg:block"></div>
      <div className="absolute top-1/4 left-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-[1px] bg-primary/30"></div>
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs">Since 2014 • Trusted Dental Care</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-slate-900 leading-[1.1] mb-10">
              Trusted Dental Hospital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">In Narasaraopet</span>
            </h1>
            
            <p className="text-slate-500 text-xl md:text-2xl mb-12 leading-relaxed max-w-xl font-medium">
              We provide painless dental treatments with advanced machines and experienced doctors for your healthy smile.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Button size="lg" className="h-20 px-10 text-lg rounded-2xl group bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20" render={<Link to="/contact" />}>
                Book Appointment <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="h-20 px-10 text-lg rounded-2xl border-2 border-slate-100 hover:border-primary text-primary hover:bg-white" render={<Link to="/treatments" />}>
                View All Services
              </Button>
            </div>

            <div className="mt-16 flex items-center gap-8 lg:gap-12">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-slate-100">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Patient" />
                  </div>
                ))}
              </div>
              <div>
                <p className="font-bold text-slate-900 text-lg">10,000+</p>
                <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">Successful Smiles</p>
              </div>
            </div>
          </motion.div>

          {/* Right Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] aspect-[4/5]">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000"
                alt="Modern Surgery Room"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>

            {/* Floating Achievement */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute -right-8 top-1/2 -translate-y-1/2 bg-white p-8 rounded-[2rem] shadow-2xl z-20 border border-slate-50 hidden md:block"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center text-primary">
                  <Sparkles className="w-7 h-7" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-xl tracking-tight leading-none mb-1">Advanced Care</p>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Since 2014</p>
                </div>
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-4/5"></div>
              </div>
            </motion.div>

            {/* Experience Tag */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-primary text-white py-6 px-10 rounded-3xl shadow-2xl z-20 flex items-center gap-6 whitespace-nowrap">
              <span className="text-4xl font-bold">10+</span>
              <div className="w-px h-8 bg-white/20"></div>
              <div>
                <p className="font-bold leading-none">Years Service</p>
                <p className="text-white/60 text-xs mt-1">In Narasaraopet</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
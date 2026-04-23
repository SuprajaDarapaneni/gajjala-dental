import Hero from '../components/Hero';
import Services from '../components/Services';
import Team from '../components/Team';
import Contact from '../components/Contact';
import FacilityGallery from '../components/FacilityGallery';
import { motion } from 'motion/react';
import { Star, Quote, Zap, Microscope, Activity, ShieldAlert, BadgeCheck, Trophy, HeartPulse, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const reviews = [
  {
    name: "Suresh Kumar",
    text: "The care here is very good. The doctors are very kind and they did my dental implant without any pain. Highly recommended.",
    rating: 5,
    tag: "IMPLANT PATIENT"
  },
  {
    name: "Lakshmi Devi",
    text: "Gajjala Dental has changed my life. The hospital is very clean and the treatment was very comfortable. Best dental clinic in town.",
    rating: 5,
    tag: "SMILE DESIGN"
  },
  {
    name: "Venkatesh Rao",
    text: "Very advanced hospital in Narasaraopet. The results are very natural. Clearly the best dental hospital in our area.",
    rating: 5,
    tag: "ORTHO CARE"
  }
];

const equipment = [
  { 
    name: "Digital CBCT Scan", 
    icon: Zap, 
    desc: "3D dental imaging for precise planning of implants and surgeries.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=400"
  },
  { 
    name: "Intraoral Scanning", 
    icon: Microscope, 
    desc: "No more messy molds. We take digital impressions of your teeth.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=400"
  },
  { 
    name: "Dental Lasers", 
    icon: Activity, 
    desc: "Safe and painless laser treatment for faster healing and no bleeding.",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=400"
  },
  { 
    name: "Autoclave Class B", 
    icon: ShieldAlert, 
    desc: "Advanced vacuum sterilization for 100% germ-free instruments.",
    image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=400"
  }
];

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white"
    >
      <Hero />

      {/* Trust & Stats Grid */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-4 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-primary text-xs font-bold uppercase tracking-widest">
                <Trophy className="w-4 h-4" />
                Regional Leader
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">Setting the Standard for Dental Excellence</h2>
              <p className="text-slate-500 text-lg leading-relaxed">We combine years of experience with the world's best dental technology to bring top-class care to your doorstep.</p>
              <div className="flex gap-4">
                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 flex-1 text-center group hover:bg-primary hover:text-white transition-all duration-500">
                  <p className="text-4xl font-bold mb-1">2</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Modern Branches</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 flex-1 text-center group hover:bg-primary hover:text-white transition-all duration-500">
                  <p className="text-4xl font-bold mb-1">15k+</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Happy Patients</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group overflow-hidden rounded-[3rem] shadow-2xl aspect-[4/3]">
                  <img src="https://images.unsplash.com/photo-1445527815219-ecbfec67492e?auto=format&fit=crop&q=80&w=600" alt="Clinic Interior" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-8">
                    <p className="text-white font-bold text-xl uppercase tracking-widest">Narasaraopet Main Branch</p>
                  </div>
                </div>
                <div className="relative group overflow-hidden rounded-[3rem] shadow-2xl aspect-[4/3] translate-y-12">
                  <img src="https://images.unsplash.com/photo-1542736667-069246bdbc6d?auto=format&fit=crop&q=80&w=600" alt="Dental Care" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/80 to-transparent flex items-end p-8">
                    <p className="text-white font-bold text-xl uppercase tracking-widest">Sattenapalli New Branch</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FacilityGallery />
      <Services />

      {/* Advanced Technology Spotlight */}
      <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full text-accent text-xs font-bold uppercase tracking-widest mb-6">
              <Microscope className="w-4 h-4" />
              High-End Technology
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Painless Treatments with Advanced Machines</h2>
            <p className="text-white/60 text-xl">We use German and USA technology to ensure your dental journey is comfortable and perfect.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {equipment.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                <div className="bg-white/5 rounded-[2.5rem] border border-white/10 p-2 overflow-hidden hover:bg-white/10 transition-all duration-500 h-full">
                  <div className="aspect-square rounded-[2rem] overflow-hidden mb-6 relative">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                    <div className="absolute top-4 left-4 w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-white">
                      <item.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="px-6 pb-8">
                    <h4 className="text-2xl font-bold mb-4">{item.name}</h4>
                    <p className="text-white/40 leading-relaxed text-sm font-medium">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 flex flex-wrap justify-center gap-12 opacity-30">
            {['ISO 9001:2015', 'FDA APPROVED', 'CE CERTIFIED', 'STERILIZATION EXPERTS'].map(tag => (
              <span key={tag} className="text-xs font-bold tracking-[0.3em] uppercase">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <Team />

      {/* Modern Why Choose Section */}
      <section className="py-32 bg-secondary/20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="space-y-6">
                <h2 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1]">Why We Are <br /><span className="text-primary italic">Number One</span></h2>
                <div className="h-2 w-24 bg-accent rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {[
                  { title: 'Safe & Clean', desc: '100% sterilization of all instruments for every patient.', icon: ShieldAlert },
                  { title: 'MDS Specialists', desc: 'A team of expert doctors in every department of dental care.', icon: BadgeCheck },
                  { title: 'Affordable Rates', desc: 'Quality treatment at a price that fits your budget.', icon: HeartPulse },
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 p-10 bg-white rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group">
                    <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <item.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-slate-500 font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-primary/5 rounded-[4rem] blur-2xl"></div>
              <div className="relative rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-white backdrop-blur-3xl">
                <img src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=1000" alt="Advanced Clinic" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                <div className="absolute bottom-12 left-12 right-12 bg-white/90 backdrop-blur-md p-10 rounded-[2.5rem] shadow-2xl">
                  <div className="flex items-center gap-6 mb-4">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <p className="text-2xl font-bold text-slate-900">Patient's First Choice</p>
                  </div>
                  <p className="text-slate-500 font-medium">Over 10,000+ successful dental procedures performed with 100% patient satisfaction.</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 italic">What Our Patients Say</h2>
            <div className="flex items-center justify-center gap-2">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 text-accent fill-accent" />)}
              <span className="ml-4 font-bold text-slate-400 uppercase tracking-widest text-sm">4.9/5 Rating</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-12 rounded-[3.5rem] bg-slate-50 border border-slate-100 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[4rem] group-hover:bg-primary/10 transition-all"></div>
                <Quote className="w-12 h-12 text-primary/10 mb-10 group-hover:text-primary transition-colors" />
                <p className="text-slate-600 italic mb-12 leading-relaxed text-xl relative z-10">"{review.text}"</p>
                <div className="pt-8 border-t border-slate-200">
                  <p className="text-2xl font-bold text-primary">{review.name}</p>
                  <p className="text-[10px] font-bold text-accent uppercase tracking-widest mt-2">{review.tag}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Contact />
    </motion.div>
  );
}

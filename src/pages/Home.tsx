import Hero from '../components/Hero';
import Services from '../components/Services';
import Team from '../components/Team';
import Contact from '../components/Contact';
import { motion } from 'framer-motion'; // Ensure this matches your package name
import { Star, Quote, Shield, Zap, Microscope, Activity, Award, HeartPulse } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Custom Tooth Icon Component for that dental touch
const ToothIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M7 6.5C7 4.57 8.34 3 10 3h4c1.66 0 3 1.57 3 3.5 0 1.34-.67 2.5-1.7 3.23-.3.2-.5.54-.5.88l.2 4.41c.06 1.31-1.01 2.48-2.32 2.48h-1.36c-1.31 0-2.38-1.17-2.32-2.48l.2-4.41c0-.34-.2-.68-.5-.88C7.67 9 7 7.84 7 6.5Z" />
    <path d="M10 17.5v2c0 1.1.9 2 2 2s2-.9 2-2v-2" />
  </svg>
);

const reviews = [
  { name: "Suresh Kumar", text: "Best dental hospital in Narasaraopet. The root canal treatment was completely painless. Highly recommended!", rating: 5, date: "2 weeks ago" },
  { name: "Lakshmi Devi", text: "Very professional doctors and clean environment. The staff is very friendly and caring.", rating: 5, date: "1 month ago" },
  { name: "Venkatesh Rao", text: "Got my dental implants done here. Excellent results and very affordable compared to others.", rating: 5, date: "3 months ago" }
];

const equipment = [
  { name: "Digital X-Ray (RVG)", icon: Zap, desc: "High-resolution imaging with minimal radiation." },
  { name: "Intraoral Camera", icon: Microscope, desc: "See what the dentist sees with real-time HD video." },
  { name: "Laser Dentistry", icon: Activity, desc: "Painless gum treatments and surgeries." },
  { name: "Autoclave Sterilization", icon: Shield, desc: "B-Class sterilization for 100% safety." }
];

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-slate-50"
    >
      <Hero />
      
      {/* Trust Banner */}
      <div className="bg-white py-20 border-y border-slate-100 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-center">
            <div className="flex items-center gap-6">
               <div className="p-4 bg-accent/10 rounded-full text-accent">
                  <ToothIcon className="w-12 h-12" />
               </div>
               <div>
                  <span className="text-5xl font-bold text-primary italic">10+</span>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mt-1">Years of Legacy</p>
               </div>
            </div>
            <div className="flex items-center gap-6 border-l border-slate-100 pl-8">
               <div className="p-4 bg-primary/5 rounded-full text-primary">
                  <HeartPulse className="w-10 h-10" />
               </div>
               <div>
                  <span className="text-5xl font-bold text-primary italic">3k+</span>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mt-1">Perfect Smiles</p>
               </div>
            </div>
            <motion.div className="lg:col-span-2 space-y-4 bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="h-px w-6 bg-accent"></div>
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary/60">Elite Presence</span>
              </div>
              <div className="flex flex-wrap gap-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <span className="font-bold text-primary text-xl italic tracking-tight">Narasaraopet</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <span className="font-bold text-primary text-xl italic tracking-tight">Sattenepalli</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Services Section - Note: Update your Services.jsx component logic to prioritize Maxillofacial and Periocare */}
      <Services />

      {/* Founder Spotlight - NEW SECTION */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 relative">
               <div className="absolute -top-10 -left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
               <div className="relative z-10 grid grid-cols-2 gap-4">
                  <img 
                    src="https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=800" 
                    alt="Founder" 
                    className="rounded-2xl shadow-2xl mt-12 grayscale hover:grayscale-0 transition-all duration-700"
                  />
                   <img 
                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800" 
                    alt="Co-Founder" 
                    className="rounded-2xl shadow-2xl mb-12 grayscale hover:grayscale-0 transition-all duration-700"
                  />
               </div>
            </div>
            <div className="lg:w-1/2 space-y-8">
               <div className="flex items-center gap-4">
                  <Award className="text-accent w-8 h-8" />
                  <span className="text-accent text-sm font-bold uppercase tracking-widest">The Visionaries</span>
               </div>
               <h2 className="text-5xl md:text-6xl font-bold text-primary italic leading-tight">Masterminds of <br/> <span className="text-accent">Dental Excellence</span></h2>
               <div className="space-y-6">
                  <div className="p-8 bg-secondary/30 border-l-4 border-accent">
                     <h4 className="text-2xl font-bold text-primary">Dr. Gajjala Srinivas Rao</h4>
                     <p className="text-accent font-bold text-xs uppercase mt-1 tracking-widest">Founder & Chief Surgeon</p>
                     <p className="mt-4 text-slate-600 leading-relaxed italic">"Our mission was never just about fixing teeth; it was about restoring confidence and health through surgical precision and empathy."</p>
                  </div>
                  <div className="p-8 bg-slate-50 border-l-4 border-primary">
                     <h4 className="text-2xl font-bold text-primary">Dr. [Name]</h4>
                     <p className="text-slate-400 font-bold text-xs uppercase mt-1 tracking-widest">Co-Founder & Periodontist</p>
                     <p className="mt-4 text-slate-600 leading-relaxed italic">"Pioneering periodontal care in the region with a focus on long-term wellness and advanced laser technology."</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-32 bg-primary text-white relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 skew-x-12 transform origin-top"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-6">
                <ToothIcon className="text-accent w-6 h-6" />
                <span className="text-accent text-sm font-bold uppercase tracking-widest">Advanced Care</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 italic">Precision Meets Technology</h2>
              <p className="text-indigo-100/60 text-xl font-light">We leverage surgical-grade digital equipment to ensure your treatment is fast, painless, and perfect.</p>
            </div>
            <Button asChild variant="outline" className="rounded-none px-10 h-16 border-accent text-accent hover:bg-accent hover:text-primary transition-all duration-500 uppercase tracking-widest text-xs font-bold">
              <Link to="/equipment">View All Equipment</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {equipment.map((item, i) => (
              <motion.div key={i} className="group cursor-default">
                <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-primary transition-all duration-500 border border-white/10 group-hover:rotate-6">
                  <item.icon className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold mb-4 italic text-white">{item.name}</h4>
                <p className="text-indigo-100/50 leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview Section - Enhanced to 4 members */}
      <section className="py-32 bg-slate-50">
         <div className="container mx-auto px-4 text-center mb-16">
            <span className="text-accent text-sm font-bold uppercase tracking-[0.4em]">Our Experts</span>
            <h2 className="text-5xl font-bold text-primary italic mt-4">Meet the Specialists</h2>
         </div>
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {/* Example Team Cards */}
               {[1, 2, 3, 4].map((member) => (
                  <div key={member} className="bg-white p-6 shadow-xl shadow-slate-200/50 group">
                     <div className="overflow-hidden aspect-[3/4] mb-6">
                        <img 
                           src={`https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600`} 
                           alt="Doctor" 
                           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                     </div>
                     <h5 className="text-xl font-bold text-primary italic">Dr. Specialist Name</h5>
                     <p className="text-accent text-[10px] uppercase tracking-widest font-bold mt-1">MDS - Maxillofacial Surgery</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Reviews and Contact */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-24 gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-accent"></div>
                <span className="text-accent text-sm font-bold uppercase tracking-widest">Testimonials</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 italic">Voices of Trust</h2>
            </div>
            <div className="flex items-center gap-4 bg-secondary px-8 py-4 border border-primary/10">
              <div className="flex text-accent">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <span className="font-bold text-primary uppercase tracking-widest text-xs">4.9/5 Rating</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {reviews.map((review, i) => (
              <motion.div key={i}>
                <Card className="border-none bg-secondary/30 rounded-none p-4 relative overflow-hidden group hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">
                  <CardContent className="p-8">
                    <Quote className="absolute top-6 right-8 w-16 h-16 text-primary/5 group-hover:text-accent/10 transition-colors duration-500" />
                    <div className="flex text-accent mb-6">
                      {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                    <p className="text-primary/80 italic mb-8 leading-relaxed font-light text-lg">"{review.text}"</p>
                    <div className="flex items-center justify-between border-t border-primary/10 pt-6">
                      <p className="font-bold text-primary italic text-xl">{review.name}</p>
                      <p className="text-[10px] uppercase tracking-widest font-bold text-primary/40">{review.date}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </motion.div>
  );
}
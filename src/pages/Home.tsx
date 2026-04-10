import Hero from '../components/Hero';
import Services from '../components/Services';
import Team from '../components/Team';
import Contact from '../components/Contact';
import { motion } from 'motion/react';
import { Star, Quote, Shield, Zap, Microscope, Activity } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const reviews = [
  {
    name: "Suresh Kumar",
    text: "Best dental hospital in Guntur. The root canal treatment was completely painless. Highly recommended!",
    rating: 5,
    date: "2 weeks ago"
  },
  {
    name: "Lakshmi Devi",
    text: "Very professional doctors and clean environment. The staff is very friendly and caring.",
    rating: 5,
    date: "1 month ago"
  },
  {
    name: "Venkatesh Rao",
    text: "Got my dental implants done here. Excellent results and very affordable compared to others.",
    rating: 5,
    date: "3 months ago"
  }
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
    >
      <Hero />
      
      {/* Trust Banner with Branches */}
      <div className="bg-accent py-16 border-y border-primary/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-slate-900">
            <div className="flex items-center gap-5 bg-white p-6 rounded-3xl shadow-sm border border-primary/5">
              <span className="text-5xl font-bold text-primary">10+</span>
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-slate-500 leading-relaxed">Years of<br />Excellence</span>
            </div>
            <div className="flex items-center gap-5 bg-white p-6 rounded-3xl shadow-sm border border-primary/5">
              <span className="text-5xl font-bold text-primary">3k+</span>
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-slate-500 leading-relaxed">Happy<br />Smiles</span>
            </div>
            <div className="lg:col-span-2 flex flex-col justify-center bg-white p-6 rounded-3xl shadow-sm border border-primary/5">
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-3">Our Branches</p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(14,165,233,0.5)]"></div>
                  <span className="font-bold text-slate-800">Narasaraopet (Palnadu Bus Stand)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(14,165,233,0.5)]"></div>
                  <span className="font-bold text-slate-800">Sattenepalli</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Services />

      {/* Equipment Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Advanced Medical Equipment</h2>
            <p className="text-slate-600 text-lg">We use world-class, state-of-the-art dental technology to ensure the highest precision and patient comfort.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {equipment.map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100 hover:border-primary/30 hover:shadow-xl transition-all duration-500 group">
                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                  <item.icon className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold mb-3 text-slate-900">{item.name}</h4>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Our Patients Say</h2>
              <p className="text-slate-600">Real stories from real patients who have experienced our care.</p>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 px-6 py-3 rounded-full">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <span className="font-bold text-slate-900">4.9/5 Rating</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <Card key={i} className="border-none shadow-lg bg-slate-50 relative overflow-hidden">
                <CardContent className="p-8">
                  <Quote className="absolute top-6 right-8 w-12 h-12 text-primary/10" />
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-slate-700 italic mb-6 leading-relaxed">"{review.text}"</p>
                  <div className="flex items-center justify-between">
                    <p className="font-bold text-slate-900">{review.name}</p>
                    <p className="text-xs text-slate-400">{review.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 text-slate-900 leading-tight">Why Choose Gajjala <span className="text-primary">Multispeciality</span> Dental Hospital?</h2>
              <div className="space-y-8">
                {[
                  { title: 'Advanced Technology', desc: 'We use the latest digital X-rays, laser dentistry, and 3D imaging for precise diagnosis.' },
                  { title: 'Expert Specialists', desc: 'Our team includes MDS surgeons, endodontists, and orthodontists with years of experience.' },
                  { title: 'Painless Treatments', desc: 'We prioritize patient comfort with modern anesthesia and gentle dental techniques.' },
                  { title: 'Affordable Care', desc: 'Quality dental care should be accessible. We offer transparent pricing and flexible plans.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-1 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <div className="w-2 h-2 bg-current rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold mb-2 text-slate-900">{item.title}</h4>
                      <p className="text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50">
                <img 
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop" 
                  alt="Dental Technology" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-10 rounded-3xl shadow-2xl border border-slate-100 hidden md:block">
                <p className="text-5xl font-bold mb-1 text-primary">99%</p>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Patient Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Team />
      <Contact />
    </motion.div>
  );
}

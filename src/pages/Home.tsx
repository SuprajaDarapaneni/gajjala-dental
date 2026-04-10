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
      <div className="bg-primary py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-white">
            <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl">
              <span className="text-4xl font-bold">10+</span>
              <span className="text-sm uppercase tracking-wider font-semibold opacity-90">Years of<br />Excellence</span>
            </div>
            <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl">
              <span className="text-4xl font-bold">3k+</span>
              <span className="text-sm uppercase tracking-wider font-semibold opacity-90">Happy<br />Smiles</span>
            </div>
            <div className="lg:col-span-2 flex flex-col justify-center bg-white/10 p-4 rounded-2xl">
              <p className="text-xs uppercase tracking-widest font-bold opacity-70 mb-2">Our Branches</p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span className="font-bold">Narasaraopet (Palnadu Bus Stand)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span className="font-bold">Sattenepalli</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">World-Class Equipment</h2>
            <p className="text-slate-600">We invest in the latest dental technology to ensure precise diagnosis and painless treatments.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {equipment.map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:border-primary/20 transition-all group">
                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  <item.icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold mb-2">{item.name}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
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
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Choose Gajjala Multispeciality Dental Hospital?</h2>
              <div className="space-y-6">
                {[
                  { title: 'Advanced Technology', desc: 'We use the latest digital X-rays, laser dentistry, and 3D imaging for precise diagnosis.' },
                  { title: 'Expert Specialists', desc: 'Our team includes MDS surgeons, endodontists, and orthodontists with years of experience.' },
                  { title: 'Painless Treatments', desc: 'We prioritize patient comfort with modern anesthesia and gentle dental techniques.' },
                  { title: 'Affordable Care', desc: 'Quality dental care should be accessible. We offer transparent pricing and flexible plans.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop" 
                  alt="Dental Technology" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary p-8 rounded-2xl shadow-xl hidden md:block">
                <p className="text-4xl font-bold mb-1">99%</p>
                <p className="text-sm font-semibold opacity-80">Patient Satisfaction</p>
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

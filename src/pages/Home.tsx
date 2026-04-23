import Hero from '../components/Hero';
import Services from '../components/Services';
import Team from '../components/Team';
import Contact from '../components/Contact';
import { motion } from 'motion/react';
import { Star, Quote, Shield, Zap, Microscope, Activity } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import parameswara from '@/assets/parameswara.jpeg';
import swetha from '@/assets/swetha.jpeg';
 

const reviews = [
  {
    name: "Suresh Kumar",
    text: "Best dental hospital in Narasaraopet. The root canal treatment was completely painless. Highly recommended!",
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
      <div className="bg-white py-24 border-y border-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <span className="text-7xl font-bold text-primary italic">10+</span>
              <p className="text-xs uppercase tracking-[0.4em] font-bold text-accent mt-2">Years of Legacy</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center md:text-left"
            >
              <span className="text-7xl font-bold text-primary italic">3k+</span>
              <p className="text-xs uppercase tracking-[0.4em] font-bold text-accent mt-2">Perfect Smiles</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="h-px w-8 bg-accent"></div>
                <span className="text-xs uppercase tracking-[0.4em] font-bold text-primary/40">Our Presence</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-8">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="font-bold text-primary text-lg italic">Narasaraopet</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="font-bold text-primary text-lg italic">Sattenepalli</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Services />
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-24">
            <div className="flex justify-center items-center gap-4 mb-6">
              <div className="w-12 h-px bg-accent"></div>
              <span className="text-accent text-sm font-bold uppercase tracking-[0.3em]">The Visionaries</span>
              <div className="w-12 h-px bg-accent"></div>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-primary italic mb-6">
              Meet Our Founders
            </h2>
            <p className="text-primary/60 max-w-2xl mx-auto font-light text-lg">
              Combining decades of expertise with a shared commitment to clinical excellence.
            </p>
          </div>

          {/* Founders Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">
            {/* Founder 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="relative mb-10 inline-block">
                <div className="absolute inset-0 bg-accent translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
                <img
                  src={parameswara}
                  alt="Dr. Parameshwara Reddy"
                  className="w-80 h-96 object-cover border-4 border-white shadow-2xl transition duration-500"
                />
              </div>

              <h3 className="text-3xl font-bold italic text-primary mb-2">
                Dr. Parameshwara Reddy BDS
              </h3>
              <p className="text-accent uppercase tracking-[0.2em] text-xs mb-6 font-bold">
                 Founder & Chairman
              </p>
              <p className="text-primary/60 leading-relaxed font-light max-w-md mx-auto">
                With a vision to bring world-class dental care to Narasaraopet, Dr. Parameshwara Reddy founded Gajjala Dental in 2014. His expertise and leadership have shaped the clinic into a trusted name in advanced treatments.
              </p>
            </motion.div>

            {/* Founder 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center group"
            >
              <div className="relative mb-10 inline-block">
                <div className="absolute inset-0 bg-accent translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
                <img
                  src={swetha}
                  alt="Dr. Swetha"
                  className="w-80 h-96 object-cover border-4 border-white shadow-2xl transition duration-500"
                />
              </div>

              <h3 className="text-3xl font-bold italic text-primary mb-2">
                Dr. Swetha MDS
              </h3>
              <p className="text-accent uppercase tracking-[0.2em] text-xs mb-6 font-bold">
                Co-Founder & Maxillofacial Surgeon
              </p>
              <p className="text-primary/60 leading-relaxed font-light max-w-md mx-auto">
                Dr. Swetha plays a key role in delivering patient-centric care with precision and empathy. Her focus on modern techniques ensures every treatment experience is seamless and effective.
              </p>
            </motion.div>
          </div>

          {/* Quote Highlight */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-32 max-w-5xl mx-auto bg-primary p-12 md:p-20 text-center relative overflow-hidden"
          >
            <Quote className="absolute -top-4 -left-4 w-32 h-32 text-white/5" />
            <p className="text-2xl md:text-4xl text-white italic leading-tight relative z-10">
              "A confident smile transforms lives. Our mission is to make that transformation accessible to everyone."
            </p>
          </motion.div>
        </div>
      </section>


      {/* Equipment Section */}
      <section className="py-32 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-accent"></div>
                <span className="text-accent text-sm font-bold uppercase tracking-widest">Advanced Care</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 italic">The Art of Precision</h2>
              <p className="text-indigo-100/60 text-xl font-light leading-relaxed">We use world-class, state-of-the-art dental technology to ensure the highest precision and patient comfort.</p>
            </div>
            <Button render={<Link to="/equipment" />} variant="outline" className="rounded-none px-10 h-16 border-accent text-accent hover:bg-accent hover:text-primary transition-all duration-500 uppercase tracking-widest text-xs font-bold">
              View All Equipment
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {equipment.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-primary transition-all duration-500 border border-white/10">
                  <item.icon className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold mb-4 italic text-white">{item.name}</h4>
                <p className="text-indigo-100/50 leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-24 gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-accent"></div>
                <span className="text-accent text-sm font-bold uppercase tracking-widest">Testimonials</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 italic">Voices of Trust</h2>
              <p className="text-primary/60 text-lg font-light">Real stories from real patients who have experienced our artistry.</p>
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
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
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
      
      {/* Why Choose Us Section */}
      <section className="py-32 bg-primary text-white overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-accent"></div>
                <span className="text-accent text-sm font-bold uppercase tracking-widest">Why Choose Us</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-12 italic leading-tight">The Gajjala <span className="text-accent">Distinction</span></h2>
              <div className="space-y-12">
                {[
                  { title: 'Advanced Technology', desc: 'We use the latest digital X-rays, laser dentistry, and 3D imaging for precise diagnosis.' },
                  { title: 'Expert Specialists', desc: 'Our team includes MDS surgeons, endodontists, and orthodontists with years of experience.' },
                  { title: 'Painless Treatments', desc: 'We prioritize patient comfort with modern anesthesia and gentle dental techniques.' },
                  { title: 'Affordable Care', desc: 'Quality dental care should be accessible. We offer transparent pricing and flexible plans.' }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-8 group"
                  >
                    <div className="w-14 h-14 rounded-full bg-white/5 text-accent flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-accent group-hover:text-primary transition-all duration-500">
                      <div className="w-2 h-2 bg-current rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold mb-3 italic text-white">{item.title}</h4>
                      <p className="text-indigo-100/50 leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="aspect-[4/5] overflow-hidden border-l-8 border-accent"
              >
                <img 
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop" 
                  alt="Dental Technology" 
                  className="w-full h-full object-cover contrast-125 opacity-80"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="absolute -bottom-10 -left-10 bg-accent p-12 hidden md:block">
                <p className="text-6xl font-bold mb-2 text-primary italic">99%</p>
                <p className="text-xs font-bold text-primary/60 uppercase tracking-[0.3em]">Patient Satisfaction</p>
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

import { motion } from 'framer-motion'; // Standard import for framer-motion
import { Award, Users, Heart, Target, Quote } from 'lucide-react';
import parameswara from '@/assets/parameswara.jpeg';
import swetha from '@/assets/swetha.jpeg';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white"
    >
      {/* Hero Section */}
      <section className="bg-primary text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop" 
            alt="Hospital Interior" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-bold mb-6 italic"
          >
            Our Legacy
          </motion.h1>
          <p className="text-sm md:text-base text-accent max-w-3xl mx-auto font-bold tracking-[0.3em] uppercase">
            Excellence in Dental Care since 2014
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop" 
                alt="Our Mission" 
                className="rounded-none border-l-8 border-accent shadow-2xl relative z-10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-secondary/50 -z-0"></div>
            </motion.div>
            
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-px bg-accent"></div>
                  <span className="text-accent text-sm font-bold uppercase tracking-widest">Our Mission</span>
                </div>
                <h2 className="text-4xl font-bold mb-6 italic text-primary">Precision & Compassion</h2>
                <p className="text-primary/60 text-lg leading-relaxed font-light">
                  To provide accessible, high-quality, and compassionate dental care using state-of-the-art technology. We strive to educate our patients about oral health and deliver results that exceed expectations.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-px bg-accent"></div>
                  <span className="text-accent text-sm font-bold uppercase tracking-widest">Our Vision</span>
                </div>
                <h2 className="text-4xl font-bold mb-6 italic text-primary">The Standard of Care</h2>
                <p className="text-primary/60 text-lg leading-relaxed font-light">
                  To be the most trusted dental healthcare provider in the region, recognized for our clinical excellence, patient-centric approach, and innovation in dental treatments.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Values */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: Award, title: 'Excellence', desc: 'Committed to the highest standards of dental care.' },
              { icon: Users, title: 'Patient First', desc: 'Your comfort and satisfaction are our top priorities.' },
              { icon: Heart, title: 'Compassion', desc: 'Treating every patient with kindness and empathy.' },
              { icon: Target, title: 'Innovation', desc: 'Constantly adopting new technologies and techniques.' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center text-accent mx-auto mb-8 border border-white/10 group-hover:bg-accent group-hover:text-primary transition-all duration-500">
                  <item.icon className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-4 italic">{item.title}</h3>
                <p className="text-white/70 font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
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
    </motion.div>
  );
}
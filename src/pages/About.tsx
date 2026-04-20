import { motion } from 'motion/react';
import { Award, Users, Heart, Target } from 'lucide-react';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-0"
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
          <p className="text-xl text-accent max-w-3xl mx-auto font-light tracking-widest uppercase">
            Excellence in Dental Care since 2014
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop" 
                alt="Our Mission" 
                className="rounded-none border-l-8 border-accent"
                referrerPolicy="no-referrer"
              />
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

      {/* Founder Message */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-primary p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[100px] rounded-full -mr-32 -mt-32"></div>
            <div className="relative z-10 text-center">
              <div className="flex justify-center mb-12">
                <div className="w-16 h-px bg-accent"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 italic leading-tight">
                "At Gajjala Dental, we believe that a healthy smile is the foundation of overall well-being. Our journey started with a simple goal: to bring world-class dental care to Narasaraopet."
              </h2>
              <div className="space-y-2">
                <p className="font-bold text-2xl text-accent italic">Dr. Parameshwara Reddy</p>
                <p className="text-white/50 uppercase tracking-[0.3em] text-xs font-bold">Founder & Chairman</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

import { motion } from 'motion/react';
import { Award, Users, Heart, Target } from 'lucide-react';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24"
    >
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop" 
            alt="Hospital Interior" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Our Hospital</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Gajjala Multispeciality Dental Hospital has been a pioneer in dental excellence in Guntur for over a decade.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop" 
                alt="Our Mission" 
                className="rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-8">
              <div>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                  <Target className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  To provide accessible, high-quality, and compassionate dental care using state-of-the-art technology. We strive to educate our patients about oral health and deliver results that exceed expectations.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                  <Heart className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  To be the most trusted dental healthcare provider in the region, recognized for our clinical excellence, patient-centric approach, and innovation in dental treatments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Values */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: 'Excellence', desc: 'Committed to the highest standards of dental care.' },
              { icon: Users, title: 'Patient First', desc: 'Your comfort and satisfaction are our top priorities.' },
              { icon: Heart, title: 'Compassion', desc: 'Treating every patient with kindness and empathy.' },
              { icon: Target, title: 'Innovation', desc: 'Constantly adopting new technologies and techniques.' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Message */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
            <div className="md:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop" 
                alt="Dr. Parameshwara Reddy" 
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="md:w-2/3 p-8 md:p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">Message from our Founder</h2>
              <p className="text-slate-300 text-lg italic mb-8 leading-relaxed">
                "At Gajjala Dental, we believe that a healthy smile is the foundation of overall well-being. Our journey started with a simple goal: to bring world-class dental care to Guntur. Today, we are proud to have transformed thousands of smiles and built lasting relationships with our patients."
              </p>
              <div>
                <p className="font-bold text-xl text-primary">Dr. Parameshwara Reddy</p>
                <p className="text-slate-400">BDS, Founder & Chief Dentist</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

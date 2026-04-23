import { motion } from 'framer-motion'; // Changed from 'motion/react'
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Import local assets correctly
import facialImg from '@/assets/facialsurgery.png';
import periocareImg from '@/assets/periocare.jpeg';
import orthodontImg from '@/assets/orthodont.jpeg';
import teethwhitenImg from '@/assets/teeth whiten.png';

import { 
  Stethoscope, 
  Activity, 
  Sparkles, 
  ShieldCheck, 
  Zap,
  HeartPulse
  
} from 'lucide-react';

const allTreatments = [
  {
    title: 'Facial Surgery (Maxillofacial)',
    description: 'Specialized surgery for complex dental issues, jaw corrections, and facial trauma restoration.',
    icon: Zap,
    image: facialImg, // Use the imported variable
    details: ['Wisdom Tooth Extraction', 'Jaw Realignment', 'Cleft Lip & Palate Correction']
  },
  {
    title: 'Periocare',
    description: 'Comprehensive gum health management focusing on disease prevention and advanced laser therapy.',
    icon: HeartPulse,
    image: periocareImg, // Use the imported variable
    details: ['Laser Gum Treatment', 'Deep Scaling & Root Planing', 'Gum Contouring']
  },
  {
    title: 'Dental Implants',
    description: 'Permanent and natural-looking replacement for missing teeth using high-quality titanium posts.',
    icon: Stethoscope,
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1974&auto=format&fit=crop',
    details: ['Single Tooth Implants', 'All-on-4 Implants', 'Implant Supported Dentures']
  },
  {
    title: 'Root Canal Treatment',
    description: 'Saving damaged or infected teeth with precise endodontic procedures and durable crowns.',
    icon: Activity,
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop',
    details: ['Single Visit Root Canal', 'Re-treatment', 'Microscopic Endodontics']
  },
  {
    title: 'Orthodontics',
    description: 'Correcting misaligned teeth and bite issues for children and adults using modern aligners.',
    icon: ShieldCheck,
    image: orthodontImg, // Use the imported variable
    details: ['Metal & Ceramic Braces', 'Invisalign Clear Aligners', 'Lingual Braces']
  },
  {
    title: 'Teeth Whitening',
    description: 'Advanced professional whitening systems to remove deep stains and brighten your smile.',
    icon: Sparkles,
    image: teethwhitenImg, // Use the imported variable
    details: ['In-office Laser Whitening', 'Home Whitening Kits', 'Internal Bleaching']
  }
];

export default function Treatments() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-0"
    >
      {/* Hero Section */}
      <section className="bg-primary text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop" 
            alt="Clinic Interior" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-bold mb-6 italic"
          >
            Clinical Artistry
          </motion.h1>
          <p className="text-xl text-accent max-w-3xl mx-auto font-light tracking-widest uppercase">
            Advanced Dental Solutions in Narasaraopet
          </p>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {allTreatments.map((treatment, index) => (
              <motion.div
                key={treatment.title} // Better than index for React keys
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-none transition-all duration-500 overflow-hidden group rounded-none bg-secondary/30 hover:shadow-2xl hover:shadow-primary/10">
                  <div className="relative h-72 overflow-hidden">
                    <img 
                      src={treatment.image} 
                      alt={treatment.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
                    <div className="absolute top-6 left-6">
                      <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center text-primary group-hover:rotate-12 transition-transform duration-500 shadow-lg">
                        <treatment.icon className="w-7 h-7" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-10">
                    <h3 className="text-3xl font-bold text-primary mb-6 italic">{treatment.title}</h3>
                    <p className="text-primary/60 mb-8 leading-relaxed font-light min-h-[80px]">
                      {treatment.description}
                    </p>
                    <div className="space-y-4 border-t border-primary/10 pt-8">
                      {treatment.details.map((detail, i) => (
                        <div key={i} className="flex items-center gap-4 text-primary/80 font-bold text-[10px] uppercase tracking-widest">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                          {detail}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 italic">Bespoke Treatment Plans</h2>
            <p className="text-white/70 mb-12 text-xl font-light leading-relaxed">
              Schedule a comprehensive consultation with our experts. We'll examine your oral health and recommend the best course of action.
            </p>
            {/* Corrected Button usage with asChild */}
            <Button asChild size="lg" className="rounded-none px-12 h-16 text-sm uppercase tracking-widest font-bold bg-accent text-primary hover:bg-white transition-all duration-500 border-none">
              <Link to="/booking">Book a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
import { motion } from 'motion/react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Stethoscope, 
  Activity, 
  Sparkles, 
  ShieldCheck, 
  Smile, 
  Zap,
  Scissors,
  Layers,
  HeartPulse
} from 'lucide-react';

const allTreatments = [
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
    details: ['Single Visit Root Canal', 'Re-treatment', 'Apicoectomy']
  },
  {
    title: 'Teeth Whitening',
    description: 'Advanced professional whitening systems to remove deep stains and brighten your smile.',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2070&auto=format&fit=crop',
    details: ['In-office Laser Whitening', 'Home Whitening Kits', 'Internal Bleaching']
  },
  {
    title: 'Orthodontics',
    description: 'Correcting misaligned teeth and bite issues for children and adults.',
    icon: ShieldCheck,
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974&auto=format&fit=crop',
    details: ['Metal & Ceramic Braces', 'Invisalign Clear Aligners', 'Lingual Braces']
  },
  {
    title: 'Pediatric Dentistry',
    description: 'Gentle and fun dental care specifically designed for children and infants.',
    icon: Smile,
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop',
    details: ['Fluoride Treatment', 'Pit & Fissure Sealants', 'Habit Breaking Appliances']
  },
  {
    title: 'Maxillofacial Surgery',
    description: 'Specialized surgery for complex dental issues, jaw corrections, and facial trauma.',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop',
    details: ['Wisdom Tooth Extraction', 'Jaw Realignment', 'Cleft Lip & Palate']
  }
];

export default function Treatments() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24"
    >
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop" alt="bg" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Advanced Dental Treatments</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            We combine clinical expertise with advanced technology to provide the best dental solutions in Guntur.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {allTreatments.map((treatment, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={treatment.image} 
                    alt={treatment.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-xl flex items-center justify-center text-primary shadow-lg">
                      <treatment.icon className="w-6 h-6" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{treatment.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {treatment.description}
                  </p>
                  <div className="space-y-3">
                    {treatment.details.map((detail, i) => (
                      <div key={i} className="flex items-center gap-3 text-slate-700 font-medium text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        {detail}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Not sure which treatment you need?</h2>
          <p className="text-slate-600 mb-10 max-w-2xl mx-auto">
            Schedule a comprehensive consultation with our experts. We'll examine your oral health and recommend the best course of action.
          </p>
          <button className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-colors shadow-lg">
            Book a Consultation
          </button>
        </div>
      </section>
    </motion.div>
  );
}

import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import facialImg from '@/assets/facial surgery.png';
import periocareImg from '@/assets/periocare.jpeg';
import orthodontImg from '@/assets/orthodont.jpeg';
import teethwhitenImg from '@/assets/teeth whiten.png';
import { 
  Stethoscope, 
  ShieldCheck, 
  Sparkles, 
  Smile, 
  Activity, 
  Zap,
  ChevronRight,
  BabyIcon,
  HeartPulse
} from 'lucide-react';

const services = [
  {
    title: 'Facial Surgery',
    description: 'Transform your look with our expert maxillofacial surgeons specializing in jaw and trauma care.',
    icon: Zap,
    image: facialImg,
    color: 'bg-primary/5 text-primary'
  },
  {
    title: 'Periocare',
    description: 'Comprehensive gum health management focusing on disease prevention and advanced laser therapy.',
    icon: HeartPulse,
    image: periocareImg,
    color: 'bg-primary/5 text-primary'
  },
  {
    title: 'Dental Implants',
    description: 'Permanent solution for missing teeth with natural-looking results and titanium strength.',
    icon: Stethoscope,
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1974&auto=format&fit=crop',
    color: 'bg-primary/5 text-primary'
  },
  {
    title: 'Root Canal',
    description: 'Advanced endodontic treatment to save your natural teeth with painless precision.',
    icon: Activity,
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop',
    color: 'bg-primary/5 text-primary'
  },
  {
    title: 'Orthodontics',
    description: 'Braces and clear aligners for perfect teeth alignment and a healthier bite.',
    icon: ShieldCheck,
    image: orthodontImg,
    color: 'bg-primary/5 text-primary'
  },
  {
    title: 'Teeth Whitening',
    description: 'Professional whitening systems for a brighter, more confident and radiant smile.',
    icon: Sparkles,
    image: teethwhitenImg,
    color: 'bg-primary/5 text-primary'
  },
  {
    title: 'Pediatric Dentistry',
    description: 'Specialized dental care for children in a friendly, comfortable, and warm environment.',
    icon: BabyIcon,
    image: 'https://images.unsplash.com/photo-1588776814222-480fc2323fdd?q=80&w=2070&auto=format&fit=crop',
    color: 'bg-primary/5 text-primary'
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 italic">Comprehensive Dental Care</h2>
          <p className="text-primary/60 font-light">We offer a wide range of specialized dental treatments to ensure your oral health is at its best.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group transition-all duration-500 border-primary/10 overflow-hidden hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 rounded-none">
              {/* Added Image Wrapper */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              <CardContent className="p-8">
                <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent group-hover:text-primary transition-all duration-300`}>
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3 italic">{service.title}</h3>
                <p className="text-primary/60 mb-6 leading-relaxed font-light">
                  {service.description}
                </p>
                <Link to="/treatments" className="inline-flex items-center text-xs uppercase tracking-widest font-bold text-primary hover:text-accent transition-colors">
                  Learn More <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
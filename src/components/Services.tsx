import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  Stethoscope, 
  ShieldCheck, 
  Sparkles, 
  Smile, 
  Activity, 
  Zap,
  ChevronRight
} from 'lucide-react';

const services = [
  {
    title: 'Cosmetic Surgery',
    description: 'Transform your look with our expert maxillofacial surgeons.',
    icon: Zap,
    color: 'bg-primary/5 text-primary'
  },
  {
    title: 'Dental Implants',
    description: 'Permanent solution for missing teeth with natural-looking results.',
    icon: Stethoscope,
    color: 'bg-primary/5 text-primary'
  },
  {
    title: 'Periocare',
    description: 'Comprehensive gum health management focusing on disease prevention and advanced laser therapy.',
    icon: Smile,
    color: 'bg-primary/5 text-primary'
  },
  {
    title: 'Root Canal',
    description: 'Advanced endodontic treatment to save your natural teeth.',
    icon: Activity,
    color: 'bg-primary/5 text-primary'
  },
  {
    title: 'Teeth Whitening',
    description: 'Professional whitening for a brighter, more confident smile.',
    icon: Sparkles,
    color: 'bg-primary/5 text-primary'
  },
  {
    title: 'Orthodontics',
    description: 'Braces and clear aligners for perfect teeth alignment.',
    icon: ShieldCheck,
    color: 'bg-primary/5 text-primary'
  },
  {
    title: 'Pediatric Dentistry',
    description: 'Specialized dental care for children in a friendly environment.',
    icon: Smile,
    color: 'bg-primary/5 text-primary'
  },
   
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Comprehensive Dental Care</h2>
          <p className="text-primary/60">We offer a wide range of specialized dental treatments to ensure your oral health is at its best.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group transition-all duration-300 border-primary/10 overflow-hidden hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5">
              <CardContent className="p-8">
                <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-primary/60 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link to="/treatments" className="inline-flex items-center text-sm font-bold text-primary hover:gap-2 transition-all">
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

import { Card, CardContent } from '@/components/ui/card';
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
    title: 'Dental Implants',
    description: 'Permanent solution for missing teeth with natural-looking results.',
    icon: Stethoscope,
    color: 'bg-blue-50 text-blue-600'
  },
  {
    title: 'Root Canal',
    description: 'Advanced endodontic treatment to save your natural teeth.',
    icon: Activity,
    color: 'bg-red-50 text-red-600'
  },
  {
    title: 'Teeth Whitening',
    description: 'Professional whitening for a brighter, more confident smile.',
    icon: Sparkles,
    color: 'bg-yellow-50 text-yellow-600'
  },
  {
    title: 'Orthodontics',
    description: 'Braces and clear aligners for perfect teeth alignment.',
    icon: ShieldCheck,
    color: 'bg-green-50 text-green-600'
  },
  {
    title: 'Pediatric Dentistry',
    description: 'Specialized dental care for children in a friendly environment.',
    icon: Smile,
    color: 'bg-purple-50 text-purple-600'
  },
  {
    title: 'Cosmetic Surgery',
    description: 'Transform your look with our expert maxillofacial surgeons.',
    icon: Zap,
    color: 'bg-orange-50 text-orange-600'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Comprehensive Dental Care</h2>
          <p className="text-slate-600">We offer a wide range of specialized dental treatments to ensure your oral health is at its best.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-slate-100 overflow-hidden">
              <CardContent className="p-8">
                <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <a href="#" className="inline-flex items-center text-sm font-bold text-primary hover:gap-2 transition-all">
                  Learn More <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

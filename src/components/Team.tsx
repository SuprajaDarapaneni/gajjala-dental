import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Linkedin, Mail } from 'lucide-react';

const doctors = [
  {
    name: 'Dr. Parameshwara Reddy',
    qualification: 'BDS',
    role: 'Founder',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop',
    specialty: 'General Dentistry'
  },
  {
    name: 'Dr. Shwetha',
    qualification: 'MDS Surgery',
    role: 'Co-founder',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974&auto=format&fit=crop',
    specialty: 'Maxillofacial Surgery'
  },
  {
    name: 'Dr. Adithya',
    qualification: 'MDS (Endo)',
    role: 'Specialist',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop',
    specialty: 'Endodontics'
  },
  {
    name: 'Dr. Rajashekar',
    qualification: 'MDS (Ortho)',
    role: 'Specialist',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop',
    specialty: 'Orthodontics'
  }
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Meet Our Expert Doctors</h2>
            <p className="text-slate-600">Our team of highly qualified specialists is dedicated to providing the best dental care for you and your family.</p>
          </div>
          <Badge variant="outline" className="text-primary border-primary px-4 py-1 text-sm font-bold rounded-full">
            Specialized Team
          </Badge>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-4">
                  <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-primary transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-primary transition-colors">
                    <Mail className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{doctor.name}</h3>
                <p className="text-primary font-semibold text-sm mb-3">{doctor.qualification}</p>
                <div className="flex items-center justify-center gap-2">
                  <Badge variant="secondary" className="bg-slate-100 text-slate-600 font-medium">
                    {doctor.role}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

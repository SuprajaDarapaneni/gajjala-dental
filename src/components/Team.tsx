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
            <Card key={index} className="border-none transition-all duration-500 overflow-hidden group bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center text-primary mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <span className="text-2xl font-bold">{doctor.name.split(' ').pop()?.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{doctor.name}</h3>
                <p className="text-primary font-bold text-sm mb-4">{doctor.qualification}</p>
                <Badge variant="secondary" className="bg-slate-50 text-slate-600 font-bold px-4 py-1">
                  {doctor.role}
                </Badge>
                <p className="text-xs text-slate-400 mt-4 font-medium uppercase tracking-wider">{doctor.specialty}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

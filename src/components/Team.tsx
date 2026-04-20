import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Linkedin, Mail } from 'lucide-react';

const doctors = [
  {
    name: 'Dr. Parameshwara Reddy',
    qualification: 'Founder & Chairman',
    role: 'General Dentist',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop',
    specialty: 'Clinical Excellence'
  },
  {
    name: 'Dr. Swetha',
    qualification: 'MDS',
    role: 'Maxillofacial Surgeon',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974&auto=format&fit=crop',
    specialty: 'Facial Surgery'
  },
  {
    name: 'Dr. Adithya',
    qualification: 'MDS (Endo)',
    role: 'Endodontist',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop',
    specialty: 'Root Canal Specialist'
  },
  {
    name: 'Dr. Rajashekar',
    qualification: 'MDS (Ortho)',
    role: 'Orthodontist',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop',
    specialty: 'Braces Specialist'
  }
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Distinguished Specialists</h2>
            <p className="text-primary/60">Led by experience and driven by precision, our team provides comprehensive dental solutions.</p>
          </div>
          <Badge variant="outline" className="text-primary border-primary/20 px-4 py-1 text-sm font-bold rounded-full">
            Elite Medical Team
          </Badge>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <Card key={index} className="border-none transition-all duration-500 overflow-hidden group bg-white hover:shadow-2xl hover:shadow-primary/10">
              <div className="aspect-[4/5] overflow-hidden relative">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-accent hover:text-primary transition-all">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-accent hover:text-primary transition-all">
                      <Mail className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="p-8 text-center">
                <Badge variant="secondary" className="bg-secondary text-primary/70 font-bold px-3 py-0.5 mb-4 rounded-none">
                  {doctor.role}
                </Badge>
                <h3 className="text-xl font-bold text-primary mb-1">{doctor.name}</h3>
                <p className="text-accent font-bold text-sm mb-4">{doctor.qualification}</p>
                <div className="h-0.5 w-10 bg-accent mx-auto mb-4 group-hover:w-20 transition-all duration-500"></div>
                <p className="text-xs text-primary/40 font-medium uppercase tracking-widest">{doctor.specialty}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

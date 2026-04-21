import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CircleUserRound } from 'lucide-react';

const doctors = [
  {
    name: 'Dr. Parameshwara Reddy',
    qualification: 'Founder & Chairman',
    role: 'General Dentist',
    image: '/doctors/parameswara.jpeg',
    specialty: 'Clinical Excellence'
  },
  {
    name: 'Dr. Swetha',
    qualification: 'MDS & Co-founder',
    role: 'Maxillofacial Surgeon',
    image: '/doctors/swetha.jpeg',
    specialty: 'Facial Surgery'
  },
  {
    name: 'Dr. Rajashekar',
    qualification: 'MDS (Ortho)',
    role: 'Orthodontist',
    image: '/doctors/rajasekhar.jpeg',
    specialty: 'Braces Specialist'
  },
  {
    name: 'Dr. Adithya',
    qualification: 'MDS (Endo)',
    role: 'Endodontist',
    image: null,
    specialty: 'Root Canal Specialist'
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
              <div className="aspect-[4/5] overflow-hidden relative bg-secondary/10 flex items-center justify-center">
                {doctor.image ? (
                  <img 
                    src={doctor.image} 
                    alt={doctor.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center gap-2 p-12 text-primary/10 transition-transform duration-700 group-hover:scale-105">
                    <CircleUserRound className="w-32 h-32 stroke-[1]" />
                  </div>
                )}
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

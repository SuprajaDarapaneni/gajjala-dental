import { useState, FormEvent, ChangeEvent } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Calendar as CalendarIcon, 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Globe, 
  User,
  MessageSquare
} from 'lucide-react';

export default function Booking() {
  const [bookingType, setBookingType] = useState<'online' | 'offline'>('online');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    branch: 'Narasaraopet (Palnadu Bus Stand)',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    const message = `*Gajjala Hospital Appointment Request*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Date:* ${formData.date}\n*Branch:* ${formData.branch}\n*Type:* ${bookingType === 'online' ? 'Online Consultation' : 'In-Person Visit'}\n*Concern:* ${formData.message}`;
    window.open(`https://wa.me/918897222959?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-0 min-h-screen bg-white"
    >
      <section className="bg-primary text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-bold mb-6 italic"
          >
            Reserve Your Visit
          </motion.h1>
          <p className="text-xl text-accent max-w-3xl mx-auto font-light tracking-widest uppercase">
            Experience the Gajjala Distinction
          </p>
        </div>
      </section>

      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-center mb-16">
              <div className="bg-white p-2 border border-primary/10 flex">
                <button
                  onClick={() => setBookingType('online')}
                  className={`px-10 py-4 text-xs font-bold uppercase tracking-widest transition-all duration-500 ${bookingType === 'online' ? 'bg-primary text-white' : 'text-primary/40 hover:text-primary'}`}
                >
                  <div className="flex items-center gap-3">
                    <Globe className="w-4 h-4" />
                    Online Booking
                  </div>
                </button>
                <button
                  onClick={() => setBookingType('offline')}
                  className={`px-10 py-4 text-xs font-bold uppercase tracking-widest transition-all duration-500 ${bookingType === 'offline' ? 'bg-primary text-white' : 'text-primary/40 hover:text-primary'}`}
                >
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4" />
                    In-Person Visit
                  </div>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
              <div className="lg:col-span-2">
                <Card className="border-none bg-white rounded-none p-4 relative overflow-hidden">
                  <CardContent className="p-8 md:p-16">
                    <h2 className="text-3xl font-bold text-primary mb-12 italic flex items-center gap-4">
                      {bookingType === 'online' ? <Globe className="text-accent w-8 h-8" /> : <MapPin className="text-accent w-8 h-8" />}
                      {bookingType === 'online' ? 'Schedule Online Consultation' : 'Book In-Person Visit'}
                    </h2>
                    
                    <form className="space-y-10" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-3">
                          <Label htmlFor="name" className="text-xs uppercase tracking-widest font-bold text-primary/40">Full Name</Label>
                          <div className="relative">
                            <User className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-accent" />
                            <Input 
                              id="name" 
                              required
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Enter your name" 
                              className="pl-8 h-14 border-0 border-b border-primary/10 rounded-none focus-visible:ring-0 focus-visible:border-primary transition-colors bg-transparent" 
                            />
                          </div>
                        </div>
                        <div className="space-y-3">
                          <Label htmlFor="phone" className="text-xs uppercase tracking-widest font-bold text-primary/40">Phone Number</Label>
                          <div className="relative">
                            <Phone className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-accent" />
                            <Input 
                              id="phone" 
                              required
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="+91 00000 00000" 
                              className="pl-8 h-14 border-0 border-b border-primary/10 rounded-none focus-visible:ring-0 focus-visible:border-primary transition-colors bg-transparent" 
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-3">
                          <Label htmlFor="date" className="text-xs uppercase tracking-widest font-bold text-primary/40">Preferred Date</Label>
                          <div className="relative">
                            <CalendarIcon className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-accent" />
                            <Input 
                              id="date" 
                              required
                              type="date" 
                              value={formData.date}
                              onChange={handleChange}
                              className="pl-8 h-14 border-0 border-b border-primary/10 rounded-none focus-visible:ring-0 focus-visible:border-primary transition-colors bg-transparent" 
                            />
                          </div>
                        </div>
                        <div className="space-y-3">
                          <Label htmlFor="branch" className="text-xs uppercase tracking-widest font-bold text-primary/40">Select Branch</Label>
                          <select 
                            id="branch" 
                            value={formData.branch}
                            onChange={handleChange}
                            className="w-full h-14 px-0 rounded-none border-0 border-b border-primary/10 bg-transparent text-sm focus:outline-none focus:border-primary transition-colors appearance-none font-bold text-primary"
                          >
                            <option value="Narasaraopet (Beside Puvvada Hospital)">Narasaraopet (Beside Puvvada Hospital)</option>
                            <option value="Sattenepalli (Auto Nagar)">Sattenepalli (Auto Nagar)</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <Label htmlFor="message" className="text-xs uppercase tracking-widest font-bold text-primary/40">Reason for Visit</Label>
                        <div className="relative">
                          <MessageSquare className="absolute left-0 top-4 w-4 h-4 text-accent" />
                          <textarea 
                            id="message" 
                            rows={4} 
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full pl-8 p-3 h-32 border-0 border-b border-primary/10 rounded-none focus:outline-none focus:border-primary transition-colors bg-transparent text-sm font-light leading-relaxed"
                            placeholder="Briefly describe your dental concern..."
                          ></textarea>
                        </div>
                      </div>

                      <Button type="submit" className="w-full h-16 text-sm uppercase tracking-widest font-bold rounded-none bg-primary text-white hover:bg-accent hover:text-primary transition-all duration-500">
                        Confirm {bookingType === 'online' ? 'Online' : 'Offline'} Booking via WhatsApp
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-12">
                <div className="bg-primary p-12 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-[50px] rounded-full -mr-16 -mt-16"></div>
                  <h3 className="text-2xl font-bold mb-10 italic">The Gajjala Promise</h3>
                  <ul className="space-y-8">
                    {[
                      'Instant Confirmation',
                      'Expert Specialists',
                      'Minimal Waiting Time',
                      'Modern Equipment',
                      'Transparent Pricing'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-4 group">
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-accent border border-white/10 group-hover:bg-accent group-hover:text-primary transition-all duration-500">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <span className="font-light text-indigo-100/70 group-hover:text-white transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-12 border border-primary/10 bg-secondary/10">
                  <h3 className="text-2xl font-bold text-primary mb-10 italic">Concierge Support</h3>
                  <div className="space-y-10">
                    <div className="flex items-center gap-6 group">
                      <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 border border-primary/10">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[10px] text-primary/40 font-bold uppercase tracking-widest mb-1">Call Us</p>
                        <p className="font-bold text-primary text-lg italic">8897222959</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 group">
                      <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 border border-primary/10">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[10px] text-primary/40 font-bold uppercase tracking-widest mb-1">Hours</p>
                        <p className="font-bold text-primary text-lg italic">9 AM - 8 PM Daily</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

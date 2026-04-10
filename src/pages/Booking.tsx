import { useState } from 'react';
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-0 min-h-screen bg-slate-50"
    >
      <section className="bg-primary text-white pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Book Your Appointment</h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            Choose your preferred way to connect with our experts. We offer both online consultations and in-person visits.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-center mb-12">
              <div className="bg-white p-1 rounded-full flex">
                <button
                  onClick={() => setBookingType('online')}
                  className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${bookingType === 'online' ? 'bg-primary text-white' : 'text-slate-600 hover:bg-slate-50'}`}
                >
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    Online Booking
                  </div>
                </button>
                <button
                  onClick={() => setBookingType('offline')}
                  className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${bookingType === 'offline' ? 'bg-primary text-white' : 'text-slate-600 hover:bg-slate-50'}`}
                >
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Offline / Visit
                  </div>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <Card className="border-none overflow-hidden">
                  <CardContent className="p-8 md:p-12">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                      {bookingType === 'online' ? <Globe className="text-primary" /> : <MapPin className="text-primary" />}
                      {bookingType === 'online' ? 'Schedule Online Consultation' : 'Book In-Person Visit'}
                    </h2>
                    
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <Input id="name" placeholder="Enter your name" className="pl-10 h-12" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <Input id="phone" placeholder="+91 00000 00000" className="pl-10 h-12" />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="date">Preferred Date</Label>
                          <div className="relative">
                            <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <Input id="date" type="date" className="pl-10 h-12" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="branch">Select Branch</Label>
                          <select id="branch" className="w-full h-12 px-3 rounded-md border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                            <option>Narasaraopet (Palnadu Bus Stand)</option>
                            <option>Sattenepalli</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Reason for Visit</Label>
                        <div className="relative">
                          <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                          <textarea 
                            id="message" 
                            rows={4} 
                            className="w-full pl-10 p-3 rounded-md border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Briefly describe your dental concern..."
                          ></textarea>
                        </div>
                      </div>

                      <Button className="w-full h-14 text-lg rounded-full transition-all">
                        Confirm {bookingType === 'online' ? 'Online' : 'Offline'} Booking
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-8">
                <Card className="border-none bg-primary text-white">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-6">Why Book with Us?</h3>
                    <ul className="space-y-4">
                      {[
                        'Instant Confirmation',
                        'Expert Specialists',
                        'Minimal Waiting Time',
                        'Modern Equipment',
                        'Transparent Pricing'
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-white/80" />
                          <span className="font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-none">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-6">Need Help?</h3>
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <Phone className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Call Us</p>
                          <p className="font-bold text-slate-900">8897222959</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <Clock className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Hours</p>
                          <p className="font-bold text-slate-900">9 AM - 8 PM Daily</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

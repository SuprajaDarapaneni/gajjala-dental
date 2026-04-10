import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Get in Touch</h2>
            <p className="text-slate-600 mb-10 text-lg">
              Have questions or want to book an appointment? Reach out to us and we'll get back to you as soon as possible.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Phone Number</h4>
                  <p className="text-slate-600">+91 8897222959</p>
                  <p className="text-slate-600">+91 8897222958</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Working Hours</h4>
                  <p className="text-slate-600">9:00 AM - 8:00 PM</p>
                  <p className="text-slate-600">Open Every Day</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Location</h4>
                  <p className="text-slate-600">Gajjala Multispeciality Dental Hospital</p>
                  <p className="text-slate-600">Main Road, Guntur, Andhra Pradesh</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="border-none bg-slate-50">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Quick Appointment</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" className="bg-white border-slate-200 h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="+91 00000 00000" className="bg-white border-slate-200 h-12" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">Preferred Service</Label>
                  <select id="service" className="w-full h-12 px-3 rounded-md border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Dental Consultation</option>
                    <option>Root Canal</option>
                    <option>Dental Implants</option>
                    <option>Teeth Whitening</option>
                    <option>Braces / Aligners</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message (Optional)</Label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full p-3 rounded-md border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Tell us about your concern..."
                  ></textarea>
                </div>
                <Button className="w-full h-14 text-lg rounded-full">
                  Send Request
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

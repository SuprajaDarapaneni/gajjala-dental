import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-accent"></div>
              <span className="text-accent text-sm font-bold uppercase tracking-widest">Contact Us</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-8 italic">Get in Touch</h2>
            <p className="text-primary/60 mb-12 text-xl font-light leading-relaxed">
              Have questions or want to book an appointment? Reach out to us and we'll get back to you as soon as possible.
            </p>

            <div className="space-y-12">
              <div className="flex gap-8 group">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0 border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <Phone className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-primary/40 mb-2">Phone Number</h4>
                  <p className="text-xl font-bold text-primary italic">+91 8897222959</p>
                </div>
              </div>

              <div className="flex gap-8 group">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0 border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <Clock className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-primary/40 mb-2">Working Hours</h4>
                  <p className="text-xl font-bold text-primary italic">9:00 AM - 8:00 PM</p>
                  <p className="text-primary/60 font-light">Open Every Day</p>
                </div>
              </div>

              <div className="flex gap-8 group">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0 border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-primary/40 mb-2">Location</h4>
                  <p className="text-xl font-bold text-primary italic">Narasaraopet & Sattenepalli</p>
                  <p className="text-primary/60 font-light max-w-xs">
                    1. Beside puvvada hospital, palandu road Narasaraopet<br />
                    2. Auto Nagar, guntur road sattenepalli
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Card className="border-none bg-primary text-white rounded-none p-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[100px] rounded-full -mr-32 -mt-32"></div>
            <CardContent className="p-8 md:p-16 relative z-10">
              <h3 className="text-3xl font-bold text-white mb-10 italic">Quick Inquiry</h3>
              <form 
                className="space-y-8"
                onSubmit={(e) => {
                  e.preventDefault();
                  const target = e.target as HTMLFormElement;
                  const name = (target.elements.namedItem('name') as HTMLInputElement).value;
                  const phone = (target.elements.namedItem('phone') as HTMLInputElement).value;
                  const service = (target.elements.namedItem('service') as HTMLSelectElement).value;
                  const message = (target.elements.namedItem('message') as HTMLTextAreaElement).value;
                  
                  const text = `Gajjala Hospital Inquiry:\nName: ${name}\nPhone: ${phone}\nService: ${service}\nMessage: ${message}`;
                  window.open(`https://wa.me/918897222959?text=${encodeURIComponent(text)}`, '_blank');
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label htmlFor="name" className="text-xs uppercase tracking-widest font-bold text-indigo-100/50">Full Name</Label>
                    <Input id="name" name="name" required placeholder="John Doe" className="bg-white/5 border-white/10 h-14 rounded-none text-white placeholder:text-white/20 focus:border-accent transition-colors" />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="phone" className="text-xs uppercase tracking-widest font-bold text-indigo-100/50">Phone Number</Label>
                    <Input id="phone" name="phone" required placeholder="+91 00000 00000" className="bg-white/5 border-white/10 h-14 rounded-none text-white placeholder:text-white/20 focus:border-accent transition-colors" />
                  </div>
                </div>
                <div className="space-y-3">
                  <Label htmlFor="service" className="text-xs uppercase tracking-widest font-bold text-indigo-100/50">Preferred Service</Label>
                  <select id="service" name="service" className="w-full h-14 px-4 rounded-none border border-white/10 bg-white/5 text-white text-sm focus:outline-none focus:border-accent transition-colors appearance-none">
                    <option className="bg-primary">Dental Consultation</option>
                    <option className="bg-primary">Root Canal</option>
                    <option className="bg-primary">Dental Implants</option>
                    <option className="bg-primary">Teeth Whitening</option>
                    <option className="bg-primary">Braces / Aligners</option>
                    <option className="bg-primary">Facial Surgery</option>
                    <option className="bg-primary">Periocare</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <Label htmlFor="message" className="text-xs uppercase tracking-widest font-bold text-indigo-100/50">Message (Optional)</Label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows={4} 
                    className="w-full p-4 rounded-none border border-white/10 bg-white/5 text-white text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-white/20"
                    placeholder="Tell us about your concern..."
                  ></textarea>
                </div>
                <Button type="submit" className="w-full h-16 text-sm uppercase tracking-widest font-bold rounded-none bg-accent text-primary hover:bg-white transition-all duration-500">
                  Send via WhatsApp
                  <Send className="ml-3 w-5 h-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

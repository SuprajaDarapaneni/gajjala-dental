import { motion } from 'motion/react';
import Contact from '../components/Contact';
import { MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-0"
    >
      <section className="bg-primary text-white pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Locations</h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            Visit us at our Narasaraopet or Sattenepalli branches for world-class dental care.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            <div className="bg-secondary/30 p-10 rounded-3xl border border-primary/10 shadow-sm hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Narasaraopet Branch</h3>
              <p className="text-primary/60 mb-6 text-lg">
                Gajjala Multispeciality Dental Hospital<br />
                Palnadu Bus Stand, Narasaraopet,<br />
                Palnadu District, Andhra Pradesh.
              </p>
              <div className="flex items-center gap-3 text-primary font-bold">
                <Phone className="w-5 h-5" />
                8897222959
              </div>
            </div>

            <div className="bg-secondary/30 p-10 rounded-3xl border border-primary/10 shadow-sm hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Sattenepalli Branch</h3>
              <p className="text-primary/60 mb-6 text-lg">
                Gajjala Multispeciality Dental Hospital<br />
                Main Road, Sattenepalli,<br />
                Palnadu District, Andhra Pradesh.
              </p>
              <div className="flex items-center gap-3 text-primary font-bold">
                <Phone className="w-5 h-5" />
                8897222959
              </div>
            </div>
          </div>

          <Contact />
        </div>
      </section>
    </motion.div>
  );
}

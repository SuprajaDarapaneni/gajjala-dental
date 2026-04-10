import { motion } from 'motion/react';
import { Microscope, Zap, Shield, Activity, Sparkles, HeartPulse } from 'lucide-react';

const equipment = [
  {
    name: "Digital X-Ray (RVG)",
    icon: Zap,
    desc: "High-resolution imaging with minimal radiation exposure for precise diagnosis.",
    details: "Our digital radiography system provides instant images, allowing for immediate analysis and treatment planning while reducing radiation by up to 90% compared to traditional X-rays."
  },
  {
    name: "Intraoral Camera",
    icon: Microscope,
    desc: "See what the dentist sees with real-time HD video and high-magnification imaging.",
    details: "This tiny camera allows us to show you exactly what's happening inside your mouth on a large screen, helping you understand your dental health and treatment needs better."
  },
  {
    name: "Laser Dentistry",
    icon: Activity,
    desc: "Painless gum treatments and surgeries with faster healing times.",
    details: "We use advanced diode lasers for soft tissue procedures, reducing bleeding, swelling, and the need for anesthesia in many cases."
  },
  {
    name: "Autoclave Sterilization",
    icon: Shield,
    desc: "B-Class sterilization for 100% safety and hygiene.",
    details: "Patient safety is our top priority. Our hospital follows international sterilization protocols using B-Class autoclaves to ensure every instrument is 100% sterile."
  },
  {
    name: "Apex Locator",
    icon: HeartPulse,
    desc: "Precision technology for accurate root canal treatments.",
    details: "This electronic device helps us determine the exact length of the root canal, ensuring that the cleaning and filling are performed with mathematical precision."
  },
  {
    name: "Ultrasonic Scaler",
    icon: Sparkles,
    desc: "Gentle and effective removal of plaque and tartar.",
    details: "Our ultrasonic scaling technology uses high-frequency vibrations to clean teeth more thoroughly and comfortably than traditional manual scaling."
  }
];

export default function Equipment() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-0 min-h-screen"
    >
      {/* Hero Section */}
      <section className="bg-primary text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 italic"
          >
            Advanced Technology
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-accent max-w-3xl mx-auto font-light tracking-widest uppercase"
          >
            Precision. Safety. Comfort.
          </motion.p>
        </div>
      </section>

      {/* Equipment Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {equipment.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-accent transition-all duration-500 border border-primary/10">
                    <item.icon className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-primary mb-4 italic">{item.name}</h3>
                    <p className="text-slate-600 font-medium mb-4 text-lg leading-relaxed">
                      {item.desc}
                    </p>
                    <div className="h-px w-20 bg-accent mb-6 group-hover:w-full transition-all duration-700"></div>
                    <p className="text-slate-500 leading-relaxed">
                      {item.details}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 italic">Our Commitment to Excellence</h2>
            <p className="text-xl text-indigo-100/80 leading-relaxed font-light">
              We believe that the best clinical outcomes are achieved when expert hands meet advanced technology. 
              By continuously investing in the latest dental equipment, we ensure that our patients in Narasaraopet 
              receive the same standard of care found in the world's leading dental centers.
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

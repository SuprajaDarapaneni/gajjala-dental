import { motion } from 'motion/react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How often should I visit the dentist?",
    answer: "We generally recommend a check-up and professional cleaning every six months. However, depending on your oral health, our doctors might suggest more frequent visits."
  },
  {
    question: "Are dental X-rays safe?",
    answer: "Yes, modern digital X-rays are very safe. They emit significantly less radiation than traditional film X-rays. We also use lead aprons for added protection."
  },
  {
    question: "What should I do in a dental emergency?",
    answer: "Contact us immediately at 8897222959. Whether it's a knocked-out tooth, severe pain, or a broken crown, we provide emergency support to address your issue as quickly as possible."
  },
  {
    question: "How can I improve my smile?",
    answer: "There are many options including teeth whitening, veneers, braces, or clear aligners. Schedule a consultation for a personalized 'Smile Design' plan."
  },
  {
    question: "Do you offer painless treatments?",
    answer: "Absolutely. We use advanced local anesthesia and, if needed, sedation dentistry to ensure your experience is as comfortable and pain-free as possible."
  },
  {
    question: "At what age should children have their first dental visit?",
    answer: "The first visit should ideally happen by their first birthday or when their first tooth appears. Early visits help children get comfortable with the dentist."
  }
];

export default function FAQ() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-0 min-h-screen bg-white"
    >
      {/* Hero Section */}
      <section className="bg-primary text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-bold mb-6 italic"
          >
            Curated Wisdom
          </motion.h1>
          <p className="text-xl text-accent max-w-3xl mx-auto font-light tracking-widest uppercase">
            Answers to Your Dental Queries
          </p>
        </div>
      </section>

      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <Accordion type="single" collapsible className="w-full space-y-6">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-0 bg-slate-50 px-8 py-4 group">
                    <AccordionTrigger className="text-left font-bold text-2xl text-primary hover:text-accent transition-all duration-500 italic no-underline hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 text-lg leading-relaxed pt-6 font-light border-t border-slate-200 mt-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-32 text-center bg-primary p-12 md:p-20 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[100px] rounded-full -mr-32 -mt-32"></div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 italic">Still Seeking Clarity?</h3>
                <p className="text-indigo-100/60 mb-12 text-xl font-light">Our concierge team is available to assist with any bespoke inquiries.</p>
                <a 
                  href="tel:8897222959" 
                  className="inline-flex items-center justify-center bg-accent text-primary px-12 py-5 text-sm uppercase tracking-widest font-bold hover:bg-white transition-all duration-500"
                >
                  Speak with an Expert
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

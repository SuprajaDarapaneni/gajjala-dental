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
      className="pt-24 min-h-screen bg-slate-50"
    >
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h1>
              <p className="text-slate-600 text-lg">
                Find answers to common questions about dental care and our hospital services.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-slate-100 py-2">
                    <AccordionTrigger className="text-left font-bold text-lg text-slate-900 hover:text-primary transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 text-base leading-relaxed pt-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="mt-16 text-center bg-primary/5 rounded-2xl p-8 border border-primary/10">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Still have questions?</h3>
              <p className="text-slate-600 mb-6">Our team is here to help you with any queries you might have.</p>
              <a 
                href="tel:8897222959" 
                className="inline-flex items-center justify-center bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary/90 transition-colors"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: 'Do you offer mobile services for regular passenger cars?',
      answer: 'Currently, our heavy-duty mobile unit is optimized exclusively for commercial fleet recovery and big truck tire emergencies. All retail automotive interventions are executed at our centralized Pineville HQ.',
    },
    {
      question: 'Is it possible to synchronize glass, tires, and mechanical repair?',
      answer: 'This is our operational excellence. National Tire & Auto and Fast Glass are integrated within the same master facility, allowing us to choreograph multiple service layers simultaneously.',
    },
    {
      question: 'What is the protocol if a vehicle fails DOT inspection?',
      answer: 'We are an authorized remediation center. If a fleet asset fails inspection, our technicians provide immediate on-site repair capabilities to ensure rapid recertification and minimal downtime.',
    },
    {
      question: 'Does the group provide corporate fleet financing?',
      answer: 'We offer specialized institutional financing for mission-critical repairs and high-volume tire acquisition. Our service advisors can initialize a credit line for your organization upon request.',
    },
    {
      question: 'How do I initialize a master fleet account?',
      answer: 'Institutional activation is streamlined. Secure your account via our digital terminal (contact form), or initiate a consultation via our emergency dispatch line at (318) 442-2003.',
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32 bg-slate-900 relative overflow-hidden border-b border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-slate-400 text-xs font-bold mb-8 uppercase tracking-widest border border-white/5"
          >
            <HelpCircle className="w-4 h-4 text-brand-blue" />
            Operational Intel
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-8 tracking-tight">
            Frequently Asked <br />
            <span className="text-brand-blue">Questions.</span>
          </h2>
          <p className="text-lg text-slate-400 font-medium leading-relaxed">
            Technical insight into our consolidated service ecosystem and institutional fleet protocols.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-3xl overflow-hidden border border-white/5 hover:border-brand-blue/20 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
              >
                <span className="text-xl font-display font-bold text-white pr-8">{faq.question}</span>
                <div className={`p-2 rounded-xl bg-white/5 border border-white/10 transition-transform duration-500 ${openIndex === index ? 'rotate-180 bg-brand-blue/10 border-brand-blue/20' : ''}`}>
                  <ChevronDown className={`w-5 h-5 text-slate-400 ${openIndex === index ? 'text-brand-blue' : ''}`} />
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="px-6 md:px-8 pb-8 pt-2 text-slate-400 leading-relaxed font-medium text-lg border-t border-white/5 italic">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

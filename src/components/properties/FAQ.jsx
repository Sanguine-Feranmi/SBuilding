import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is the property's financing options?",
    answer: "We offer various financing options including conventional loans, FHA loans, and VA loans. Our team can help you find the best financing solution based on your financial situation."
  },
  {
    question: "Are there any HOA fees or restrictions?",
    answer: "Yes, this property is part of a homeowners association with monthly fees of $300. The HOA maintains common areas, provides security, and enforces community guidelines."
  },
  {
    question: "What is included in the sale?",
    answer: "The sale includes all built-in appliances, fixtures, and any furniture specifically mentioned in the listing. Personal items and non-fixed appliances are typically not included."
  },
  {
    question: "Can I schedule a viewing?",
    answer: "Absolutely! You can schedule a viewing by contacting our team through the inquiry form or calling us directly. We offer both in-person and virtual tours."
  },
  {
    question: "What are the property taxes?",
    answer: "Current property taxes are approximately $1,250 per month. Tax amounts may vary based on local assessments and any applicable exemptions."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#141415] border border-white/10 rounded-2xl p-6 space-y-6">
      <h2 className="text-xl font-semibold text-white">Frequently Asked Questions</h2>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-white/10 rounded-xl overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 text-left hover:bg-white/5 transition"
            >
              <span className="font-medium">{faq.question}</span>
              <ChevronDown
                className={`transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                size={20}
              />
            </button>
            
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 pt-0 text-gray-400 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
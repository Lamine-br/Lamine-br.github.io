"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function About() {
  const { t } = useLanguage();

  const education = [
    { year: "2025", degree: "Master Génie Logiciel", school: "Université de Montpellier" },
    { year: "2024", degree: "Diplôme Ingénieur Informatique", school: "ESI Alger" },
    { year: "2019", degree: "Baccalauréat Mathématiques — Mention Très Bien", school: "Lycée" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            {t.about.title} <span className="text-primary">{t.about.highlight}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-lg text-foreground/80 leading-relaxed"
          >
            <p>{t.about.description1}</p>
            <p>{t.about.description2}</p>
            <p>{t.about.description3}</p>
            <p>{t.about.description4}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <h3 className="text-2xl font-heading font-semibold mb-8">{t.about.educationTitle}</h3>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
              {education.map((item, index) => (
                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full border-4 border-background bg-primary absolute left-0 md:left-1/2 -translate-x-1/2 shadow-lg shadow-primary/40"></div>
                  <div className="w-[calc(100%-2rem)] md:w-[calc(50%-2rem)] p-6 rounded-2xl glass ml-auto md:ml-0 group-hover:bg-primary/10 transition-colors">
                    <span className="text-primary font-bold text-sm mb-1 block">{item.year}</span>
                    <h4 className="text-xl font-semibold mb-1 text-foreground">{item.degree}</h4>
                    <span className="text-text-secondary text-sm">{item.school}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


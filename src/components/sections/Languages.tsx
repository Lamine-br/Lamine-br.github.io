"use client";

import { motion } from "framer-motion";
import { Globe2 } from "lucide-react";

export function Languages() {
  const languages = [
    { name: "Français", level: "C2 (Bilingue/Natif)", progress: 100 },
    { name: "Anglais", level: "B2 (Professionnel)", progress: 80 },
    { name: "Arabe", level: "Langue Maternelle", progress: 100 },
    { name: "Kabyle", level: "Langue Maternelle", progress: 100 },
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            <span className="text-primary">Languages</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-8">
          {languages.map((lang, index) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-6 rounded-2xl flex items-center gap-6 border border-border hover:border-primary/20 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-foreground transition-all">
                <Globe2 size={24} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between mb-2">
                  <h3 className="font-bold text-lg text-foreground">{lang.name}</h3>
                  <span className="text-sm font-medium text-text-secondary">{lang.level}</span>
                </div>
                <div className="w-full h-2 bg-primary/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

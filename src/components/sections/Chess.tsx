"use client";

import { motion } from "framer-motion";
import { Crown, Trophy, Target, Brain, Shield, Compass, Star, Gem } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const skillIcons = [
  <Crown key="crown" size={20} />,
  <Target key="target" size={20} />,
  <Compass key="compass" size={20} />,
  <Brain key="brain" size={20} />,
  <Shield key="shield" size={20} />,
  <Star key="star" size={20} />,
];

export function Chess() {
  const { t } = useLanguage();

  return (
    <section id="chess" className="py-24 relative overflow-hidden bg-surface">
      {/* Background Checkered Pattern Subtly animated */}
      <div className="absolute inset-0 z-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/30 text-primary mb-6">
              <Gem size={18} />
              <span className="text-sm font-semibold tracking-wider uppercase">{t.chess.beyondCoding}</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-heading font-extrabold mb-6">
              {t.chess.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600">{t.chess.highlight}</span> {t.chess.subtitle}
            </h2>

            <p className="text-xl text-foreground/80 mb-8 italic">
              {t.chess.quote}
            </p>

            <div className="space-y-4 mb-10">
              <h3 className="text-xl font-semibold mb-4 text-foreground">{t.chess.achievementsTitle}</h3>
              {t.chess.achievements.map((achievement, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <Trophy className="text-yellow-500 w-5 h-5 flex-shrink-0" />
                  <span className="text-lg text-foreground/90">{achievement}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {t.chess.skills.map((skill, index) => (
              <div
                key={index}
                className="glass p-6 rounded-2xl border border-border hover:border-yellow-500/30 hover:bg-primary/10 transition-all duration-300 flex flex-col items-center text-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-text-secondary group-hover:text-yellow-500 group-hover:bg-yellow-500/10 transition-colors">
                  {skillIcons[index] ?? <Star size={20} />}
                </div>
                <span className="font-medium text-foreground/90">{skill}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}


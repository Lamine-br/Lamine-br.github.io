"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { MapPin, Calendar } from "lucide-react";
import logoRakuten from "@/assets/logo_rakuten.png";
import logoLIRMM from "@/assets/logo_lirmm.jpg";
import logoENAFOR from "@/assets/logo_enafor.png";
import { useLanguage } from "@/context/LanguageContext";

const logos: Record<string, StaticImageData> = {
  "Rakuten France": logoRakuten,
  LIRMM: logoLIRMM,
  ENAFOR: logoENAFOR,
};

const colors: Record<string, string> = {
  "Rakuten France": "from-[#BF0000]/20 to-[#BF0000]/5",
  LIRMM: "from-blue-500/20 to-blue-500/5",
  ENAFOR: "from-emerald-500/20 to-emerald-500/5",
};

export function Experience() {
  const { t } = useLanguage();
  const experiences = t.experience.jobs;

  return (
    <section id="experience" className="py-24 relative bg-white/[0.02]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            {t.experience.title} <span className="text-primary">{t.experience.highlight}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="group rounded-2xl border border-border overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 bg-white/[0.03]">

                {/* Card Header — gradient banner with logo */}
                <div className={`relative bg-gradient-to-r ${colors[exp.company] ?? "from-primary/20 to-primary/5"} px-6 pt-6 pb-10`}>
                  <div className="flex items-start justify-between gap-4">
                    {/* Logo */}
                    <div className="w-16 h-16 rounded-xl bg-white shadow-lg flex items-center justify-center p-2 shrink-0 group-hover:scale-105 transition-transform duration-300">
                      <Image
                        src={logos[exp.company] ?? logoRakuten}
                        alt={exp.company}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Type badge */}
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 border border-white/20 text-foreground/80 backdrop-blur-sm mt-1">
                      {exp.type}
                    </span>
                  </div>

                  {/* Role & company */}
                  <div className="mt-4">
                    <h3 className="text-xl font-bold text-foreground leading-tight">{exp.role}</h3>
                    <p className="text-primary font-semibold text-base mt-0.5">{exp.company}</p>
                  </div>

                  {/* Meta: date + location */}
                  <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-foreground/60">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} />
                      {exp.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="px-6 pt-4 pb-6 -mt-4 relative">
                  <div className="rounded-xl bg-white/[0.04] border border-border/50 p-5 space-y-5">

                    {/* Missions */}
                    <div>
                      <h4 className="text-xs text-text-secondary uppercase tracking-widest font-semibold mb-3">{t.experience.missions}</h4>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {exp.missions.map((mission, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></div>
                            {mission}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-border/50"></div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-xs text-text-secondary uppercase tracking-widest font-semibold mb-3">{t.experience.technologies}</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


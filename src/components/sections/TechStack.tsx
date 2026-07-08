"use client";

import { motion } from "framer-motion";
import {
  Server,
  MonitorSmartphone,
  Wrench,
  Database,
  ShieldCheck,
  LayoutTemplate
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function TechStack() {
  const { t } = useLanguage();
  const categories = [
    {
      title: "Backend",
      icon: <Server className="w-6 h-6 text-primary" />,
      skills: ["Java", "JavaFX", "Spring Boot", "Node.js", "Express", "Hibernate", "JPA", "REST API"],
    },
    {
      title: "Frontend",
      icon: <MonitorSmartphone className="w-6 h-6 text-secondary" />,
      skills: ["React", "Next.js", "React Native", "TailwindCSS", "TypeScript"],
    },
    {
      title: "DevOps",
      icon: <Wrench className="w-6 h-6 text-whiteccent" />,
      skills: ["Docker", "Kubernetes", "GitHub Actions", "Jenkins", "Maven", "Git", "Prometheus", "Grafana", "Kibana"],
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6 text-primary" />,
      skills: ["MongoDB", "MariaDB", "MySQL", "ElasticSearch"],
    },
    {
      title: "Quality",
      icon: <ShieldCheck className="w-6 h-6 text-secondary" />,
      skills: ["JUnit", "Mockito", "REST Assured", "Playwright", "Cucumber", "Postman", "Bruno", "Allure Report"],
    },
    {
      title: "Architecture",
      icon: <LayoutTemplate className="w-6 h-6 text-whiteccent" />,
      skills: ["Microservices", "DDD", "TDD", "Hexagonal Architecture", "OOP"],
    },
  ];

  return (
    <section id="stack" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-full h-full -translate-y-1/2 flex justify-center -z-10 opacity-30 pointer-events-none">
        <div className="w-[800px] h-[800px] bg-gradient-radial from-primary/20 to-transparent blur-3xl rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            {t.techStack.title} <span className="text-primary">{t.techStack.highlight}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl relative group overflow-hidden border border-border hover:border-primary/30 transition-all duration-300"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-transparent transition-all duration-500 rounded-2xl"></div>

              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="p-3 bg-primary/5 rounded-xl">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold font-heading text-foreground">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2 relative z-10">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-primary/5 border border-border text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-primary/10 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



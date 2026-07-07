"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      company: "Rakuten France",
      role: "QA Automation Engineer",
      date: "Août 2025 - Présent",
      technologies: ["Playwright", "REST Assured", "JUnit", "Java", "JavaScript", "Cucumber", "Gherkin", "Allure", "CI/CD", "Jenkins", "GitHub Actions", "Microservices"],
      missions: [
        "Automatisation des tests backend",
        "Validation des APIs",
        "Contrats REST",
        "Analyse d'applications distribuées",
        "Amélioration de la qualité",
        "Participation Agile"
      ]
    },
    {
      company: "Rakuten France",
      role: "Backend Developer Intern",
      date: "Janvier 2025 - Juillet 2025",
      technologies: ["Spring Boot", "Hibernate", "MariaDB", "ElasticSearch", "Kibana", "Prometheus", "Grafana", "DDD", "TDD", "Architecture Hexagonale", "JUnit", "Mockito", "Microservices", "REST API"],
      missions: [
        "Développement de microservices",
        "Conception API REST",
        "Monitoring",
        "Logging",
        "Alerting",
        "Tests automatisés"
      ]
    },
    {
      company: "LIRMM",
      role: "Full Stack Developer Intern",
      date: "Septembre 2023 - Juillet 2024",
      technologies: ["React", "React Native", "Node.js", "Express", "MongoDB", "RabbitMQ", "Docker", "Kubernetes", "GitHub Actions", "TailwindCSS", "Microservices"],
      missions: [
        "Architecture microservices",
        "Application Web",
        "Application Mobile",
        "Backend Node",
        "Communication RabbitMQ",
        "Déploiement Docker",
        "CI/CD"
      ]
    }
  ];

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
            Professional <span className="text-primary">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:flex gap-8 items-start group">
                {/* Timeline Line & Dot (Desktop) */}
                <div className="hidden md:flex flex-col items-center mt-1">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-foreground transition-all duration-300 shadow-lg">
                    <Briefcase size={20} />
                  </div>
                  {index !== experiences.length - 1 && (
                    <div className="w-0.5 h-full bg-gradient-to-b from-primary/50 to-transparent my-4"></div>
                  )}
                </div>

                {/* Timeline Dot (Mobile) */}
                <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-primary md:hidden border-2 border-background shadow-lg shadow-primary/50"></div>
                {index !== experiences.length - 1 && (
                  <div className="absolute left-[7px] top-6 bottom-[-3rem] w-0.5 bg-gradient-to-b from-primary/50 to-transparent md:hidden"></div>
                )}

                {/* Content Card */}
                <div className="flex-1 glass p-8 rounded-2xl hover:bg-primary/10 transition-colors border-l-4 border-l-primary group-hover:shadow-2xl group-hover:shadow-primary/10">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{exp.role}</h3>
                      <span className="text-lg text-primary font-medium">{exp.company}</span>
                    </div>
                    <span className="px-4 py-1 rounded-full bg-primary/5 text-sm font-medium whitespace-nowrap text-foreground/80 border border-border">
                      {exp.date}
                    </span>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm text-text-secondary uppercase tracking-wider font-semibold mb-3">Missions</h4>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {exp.missions.map((mission, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-foreground/80">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                          {mission}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm text-text-secondary uppercase tracking-wider font-semibold mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                          {tech}
                        </span>
                      ))}
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

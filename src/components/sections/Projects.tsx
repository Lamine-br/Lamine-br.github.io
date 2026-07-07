"use client";

import { motion } from "framer-motion";
import { ExternalLink, Layers } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export function Projects() {
  const projects = [
    {
      title: "Plateforme de gestion d'offres d'emploi",
      description: "Application Web et Mobile basée sur une architecture microservices permettant la gestion complète du cycle de recrutement.",
      technologies: ["React", "React Native", "Node", "RabbitMQ", "MongoDB", "Docker", "Kubernetes", "GitHub Actions"],
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      title: "OS Scheduler Simulator",
      description: "Simulation graphique interactive des algorithmes d'ordonnancement des processus du système d'exploitation (FCFS, SJF, Round Robin).",
      technologies: ["HTML", "CSS", "JavaScript"],
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      title: "Recipe Management Website",
      description: "Application web MVC complète pour la gestion et le partage de recettes de cuisine avec système d'authentification et favoris.",
      technologies: ["PHP", "Bootstrap", "JavaScript", "MySQL"],
      links: {
        github: "#",
        live: "#"
      }
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto md:mx-0"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group glass rounded-2xl p-8 flex flex-col h-full border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Decorative Background */}
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500"></div>

              <div className="mb-6 relative z-10 flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                  <Layers size={24} />
                </div>
                <div className="flex gap-3">
                  <a href={project.links.github} className="text-text-secondary hover:text-foreground transition-colors" aria-label="GitHub">
                    <FaGithub size={20} />
                  </a>
                  <a href={project.links.live} className="text-text-secondary hover:text-primary transition-colors" aria-label="Live Demo">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold font-heading text-foreground mb-3 relative z-10 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-text-secondary mb-8 flex-grow relative z-10 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 relative z-10 mt-auto">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium text-secondary/90 bg-secondary/10 px-3 py-1 rounded-full border border-secondary/20"
                  >
                    {tech}
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

"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import photo from "@/assets/photo.png";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden" id="hero">
      {/* Animated Background Particles (Simplified for now) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mt-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-border overflow-hidden mb-8 shadow-2xl shadow-primary/20"
          >
            <Image src={photo} alt="Lamine Brahami" className="w-full h-full object-cover" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight mb-4 text-balance"
          >
            Lamine Brahami
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-foreground/80 font-medium mb-6 text-balance"
          >
            Software Engineer <br className="md:hidden" />
            <span className="hidden md:inline"> • </span>
            <span className="text-accent">Backend</span> • Microservices • QA Automation • DevOps
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-text-secondary max-w-2xl mb-10 text-balance leading-relaxed"
          >
            &quot;I build scalable distributed systems, design reliable backend architectures and deliver high quality software.&quot;
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="px-8 py-4 rounded-full bg-primary text-[#FAFAFA] font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/25"
            >
              View Projects
              <ArrowRight size={20} />
            </a>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full glass text-foreground font-semibold flex items-center justify-center gap-2 hover:bg-primary/10 transition-all hover:scale-105 active:scale-95"
            >
              Download CV
              <Download size={20} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

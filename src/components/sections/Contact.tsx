"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-white/[0.02]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-8"
          >
            <h3 className="text-2xl font-bold font-heading mb-6">
              Let&apos;s connect
            </h3>

            <p className="text-text-secondary mb-8 leading-relaxed">
              Whether you have a question, a project proposal, or just want to
              say hi, my inbox is always open. I&apos;ll try my best to get back
              to you!
            </p>

            <div className="space-y-6">
              <a
                href="mailto:lamine.brahami.pro@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="text-sm text-text-secondary font-medium">
                    Email
                  </p>
                  <p className="text-foreground font-semibold group-hover:text-accent transition-colors">
                    lamine.brahami.pro@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex gap-4 pt-4">
                <a
                  href="#"
                  className="w-12 h-12 rounded-xl glass flex items-center justify-center text-foreground/80 hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all"
                >
                  <FaLinkedin size={22} />
                </a>

                <a
                  href="#"
                  className="w-12 h-12 rounded-xl glass flex items-center justify-center text-foreground/80 hover:bg-white hover:text-black hover:border-white transition-all"
                >
                  <FaGithub size={22} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3 glass p-8 rounded-3xl border border-border relative overflow-hidden group"
          >
            {/* Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500 pointer-events-none"></div>

            <form
              className="space-y-6 relative z-10"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-foreground/80"
                  >
                    Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-black placeholder:text-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground/80"
                  >
                    Email
                  </label>

                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-black placeholder:text-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-foreground/80"
                >
                  Subject
                </label>

                <input
                  type="text"
                  id="subject"
                  placeholder="Project Proposal"
                  className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-black placeholder:text-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground/80"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows={5}
                  placeholder="Hello Lamine..."
                  className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-black placeholder:text-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all resize-none"
                ></textarea>
              </div>

              <button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
                Send Message
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
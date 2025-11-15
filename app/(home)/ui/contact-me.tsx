"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaXTwitter } from 'react-icons/fa6';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function ContactForm() {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/clive-kamaliki-801b09184/",
      icon: FaLinkedin,
      label: "LinkedIn",
      color: "hover:text-blue-600"
    },
    {
      href: "https://x.com/KamalikiClive",
      icon: FaXTwitter,
      label: "Twitter",
      color: "hover:text-gray-900 dark:hover:text-white"
    },
    {
      href: "https://github.com/kamaliki",
      icon: FaGithub,
      label: "GitHub",
      color: "hover:text-gray-900 dark:hover:text-white"
    },
    {
      href: "mailto:justuskamaliki@gmail.com",
      icon: FaEnvelope,
      label: "Email",
      color: "hover:text-red-600"
    }
  ];

  return (
    <section id="contact" className="py-24 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Let's connect and discuss how we can work together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="border-0 shadow-xl bg-white/80 dark:bg-black/80 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
                  <p className="text-muted-foreground mb-8">
                    Feel free to reach out through any of these platforms
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {socialLinks.map((link, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Button
                        variant="outline"
                        size="lg"
                        className="w-full h-20 flex-col gap-2 border-2 hover:border-blue-300 transition-all duration-300"
                        asChild
                      >
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`group ${link.color}`}
                        >
                          <link.icon size={24} className="transition-colors duration-300" />
                          <span className="text-xs font-medium">{link.label}</span>
                        </a>
                      </Button>
                    </motion.div>
                  ))}
                </div>

                <div className="pt-8">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0"
                    asChild
                  >
                    <a href="mailto:justuskamaliki@gmail.com">
                      Send me an email
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
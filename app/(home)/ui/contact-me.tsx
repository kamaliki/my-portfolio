"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaXTwitter  } from 'react-icons/fa6';

export function ContactForm() {
  return (
    <section id="contact" className="mb-10 max-w-[103rem] scroll-mt-28 text-center sm:mb-40">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Contact Me
      </motion.h2>
      <div className="flex justify-center space-x-6 mt-6">
        <a href="https://www.linkedin.com/in/clive-kamaliki-801b09184/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
        <a href="https://x.com/KamalikiClive" target="_blank" rel="noopener noreferrer">
          <FaXTwitter size={30} />
        </a>
        <a href="https://github.com/kamaliki" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
        <a href="mailto:justuskamaliki@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope size={30} />
        </a>
      </div>
    </section>
  );
}

"use client";

import { skillsConfig } from '@/config/skills';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to create amazing experiences
          </p>
        </motion.div>
        
        <div className="flex flex-wrap justify-center gap-4">
          {skillsConfig.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-white/80 dark:bg-black/80 backdrop-blur-sm">
                <CardContent className="p-4">
                  <span className="text-sm font-medium text-foreground group-hover:text-blue-600 transition-colors duration-300">
                    {skill.name}
                  </span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
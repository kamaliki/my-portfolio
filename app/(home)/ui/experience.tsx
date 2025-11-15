"use client";

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import { experienceConfig } from '@/config/experience';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey through education and professional experience
          </p>
        </motion.div>

        <VerticalTimeline lineColor="hsl(var(--border))">
          {experienceConfig.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              date={experience.date}
              iconStyle={{ 
                background: 'linear-gradient(135deg, #2563eb, #06b6d4)', 
                color: '#fff',
                boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)'
              }}
              icon={experience.icon}
              contentStyle={{ 
                background: 'transparent', 
                boxShadow: 'none',
                border: 'none',
                padding: 0
              }}
              contentArrowStyle={{ display: 'none' }}
            >
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-black/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-foreground">
                      {experience.title}
                    </CardTitle>
                    <h4 className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      {experience.location}
                    </h4>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {experience.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}
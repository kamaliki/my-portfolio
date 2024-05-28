"use client"
import { skillsConfig } from '@/config/skills';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };
  
export function Skills() {
  return(
    <section 
    id="skills"
    className="mb-10 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
  
    >
    <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Skills</motion.h2>
    
    <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
      {skillsConfig.map((skill, index) => (
        <motion.li 
          key={index} 
          variants={fadeInAnimationVariants}
          initial="initial" 
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={index}
        >
          <Card>
            <CardHeader>
              
              <CardTitle>{skill.name}</CardTitle>
            </CardHeader>
          </Card>
        </motion.li>
      ))}
    </ul>
  </section>
  )
};



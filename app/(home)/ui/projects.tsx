"use client";

import { useRef } from "react";
import { projectsConfig } from "@/config/project";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <section id="projects" className="scroll-mt-28 mb-28">
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} 
      className="text-center mb-8"
      >
        Projects
      </motion.h2>
      <div className="">
        {projectsConfig.projects.map((project, index) => (
          <motion.div
            ref = {ref}
            key={index}
            style={{ scale: scaleProgess, opacity: opacityProgess }}
          >
            <Card className=" max-w-[42rem] border rounded-lg overflow-hidden sm:pr-8 relative sm:h-[25rem] transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 shadow-lg hover:shadow-xl">
              
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
               
                {project.description && 
                <p className="text-sm p-2 m-2">
                  {project.description}
                </p>}
                <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                  {project.skills.map((skill, index) => (
                    <li
                    className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                    key={index}
                  >
                    {skill}
                  </li>
                    
                  ))}
                </ul>
              </CardContent>
              
               <CardDescription>
                {project.link && (
                  <Button
                  className="m-6 text-xs sm:mt-auto rounded-2xl"  
                  >
                    <a href={project.link
                    } target="_blank" rel="noreferrer">
                      View Project
                    </a>
                  </Button>
                )}
              </CardDescription>
              {/* <div className="relative h-[15rem] sm:h-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div> */}
              <CardFooter className="relative h-[15rem] sm:h-full">
                 <Image
                  src={project.image}
                  alt="Project I worked on"
                  quality={95}
                  className="absolute sm:block top-4 -right-40 w-[34.25rem] rounded-t-lg shadow-2xl
                    transition 
                    group-hover:scale-[1.04]
                    group-hover:-translate-x-3
                    group-hover:translate-y-3
                    group-hover:-rotate-2

                    group-even:group-hover:translate-x-3
                    group-even:group-hover:translate-y-3
                    group-even:group-hover:rotate-2

                    group-even:right-[initial] group-even:-left-40"
                /> 
              </CardFooter>
             
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-20 mb-40 mt-10">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mb-8"
      >
        About Me
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex justify-center"
      >
        <Card className="max-w-2xl w-full p-6 shadow-lg rounded-lg bg-white dark:bg-black">
          <CardHeader>
            <CardTitle className="text-3xl font-semibold text-gray-800 dark:text-white">
              Who am I?
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              I&apos;m a full-stack developer with a passion for building functional websites and applications. 
              After graduating with a degree in Computer Science, I have worked on a variety of projects ranging from
              IoT applications to simple transactional websites.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}

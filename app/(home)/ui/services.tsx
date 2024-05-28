"use client";

import { servicesConfig } from "@/config/services";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export function Services() {
  return (
    <section id="services" className="py-12 mb-10">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mb-8"
      >
        Services
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesConfig.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            <Card className="h-full w-full shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="p-4">
                <CardTitle className="text-2xl font-semibold">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardDescription className="flex justify-center p-4">
                <Image
                  className="rounded-xl"
                  src={service.icon}
                  width={100}
                  height={100}
                  alt={service.title}
                />
              </CardDescription>
              <CardContent className="p-4 flex-grow">
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

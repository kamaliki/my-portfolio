import { Project } from "@/types/project";
import idayliffImg from "@/public/idayliff.png";
import smartImg from "@/public/smart-meter.png";
import nexttut from "@/public/next-tut.png";

interface ProjectsConfig {
    projects: Project[];
}

export const projectsConfig: ProjectsConfig = {
    projects: [
        {
            title: "Smart Water Metering Project",
            description: "Implemented a Smart Water Metering System for efficient water management and billing.",
            skills: ["Microsoft AD", "Redis", "NextJS", "Transaction Processing", "REST APIs"],
            link: "https://swm.dayliff.com",  
            image: smartImg,  
        },
        {
            title: "Idayliff IoT Project",
            description: "Contributed to the development and optimization of the Idayliff IoT platform.",
            skills: ["Kafka", "Zookeeper", "Redis", "Backend Refactoring","React","NestJS","Microservices"],
            link: "https://iot.dayliff.com",  
            image: idayliffImg,  
        },
        {
            title: "Next.js Tutorial",
            description: "Developed a Next.js tutorial website to help developers learn Next.js.",
            skills: ["React", "Next.js", "Tailwind CSS", "SEO"],
            link: "https://nextjs-dashboard-ten-nu-59.vercel.app",  
            image: nexttut,  
        },
    ],
};

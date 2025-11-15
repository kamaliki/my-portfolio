import { Project } from "@/types/project";
import idayliffImg from "@/public/idayliff.png";
import idayliffImg2 from "@/public/idayliff-iot.png";
import smartImg from "@/public/smart-meter.png";
import nexttut from "@/public/next-tut.png";
import cbctut from "@/public/cbc-tutor.png";
import cbctut2 from "@/public/cbc-tutor-2.png";

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
            images: [smartImg],  
        },
        {
            title: "Idayliff IoT Project",
            description: "Contributed to the development and optimization of the Idayliff IoT platform.",
            skills: ["Kafka", "Zookeeper", "Redis", "Backend Refactoring","React","NestJS","Microservices"],
            link: "https://iotclient.dayliff.com",  
            images: [idayliffImg, idayliffImg2],  
        },
        {
            title: "CBC Tutor",
            description: "AI-powered Gemini Nano local AI that helps you read notes and uses the built-in Chrome AI to quiz you. Created for a Devpost hackathon.",
            skills: ["Gemini Nano", "Chrome AI", "JavaScript", "AI/ML", "Browser APIs"],
            link: "https://chrome-ai.kamaliki.com/app/summary",  
            images: [cbctut, cbctut2],  
        },
        {
            title: "Next.js Tutorial",
            description: "Developed a Next.js tutorial website to help developers learn Next.js.",
            skills: ["React", "Next.js", "Tailwind CSS", "SEO"],
            link: "https://nextjs-dashboard-ten-nu-59.vercel.app",  
            images: [nexttut],  
        },
    ],
};

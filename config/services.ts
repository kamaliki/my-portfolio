import { Services } from "@/types/services";
import iotIcon from "@/public/iot.png";
import webIcon from "@/public/web-dev.jpg";
import apiIcon from "@/public/api-icon.jpg";
import cloudIcon from "@/public/cloud.png";
import databaseIcon from "@/public/database.jpg";
import nest from "@/public/nest.png";

export const servicesConfig: Services[] = [
    
    {
        title: "IoT Solutions",
        description: "Designing and implementing IoT solutions for various industries.",
        icon: iotIcon,
    },
    {
        title: "API Development",
        description: "Creating robust and scalable APIs to connect various services and applications.",
        icon: apiIcon, 
    },
    {
        title: "Cloud Integration",
        description: "Integrating cloud services to enhance the scalability and reliability of your applications.",
        icon: cloudIcon, 
    },
    {
        title: "Database Management",
        description: "Designing and managing databases to store and retrieve data efficiently.",
        icon: databaseIcon, 
    },
    {
        title: "Backend Development",
        description: "Building server-side applications using the modern NestJS framework.",
        icon: nest,

    },
    {
        title: "Web Development",
        description: "Building responsive and performant web applications using modern technologies.",
        icon: webIcon, 
    }
];

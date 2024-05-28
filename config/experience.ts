import React from "react";
import { Experience } from "@/types/experience";
import { AcademicCapIcon, BriefcaseIcon } from "@heroicons/react/20/solid";

export const experienceConfig: Experience[] = [
    {
        title: "IoT Engineer",
        location: "Davis & Shirtliff Ltd, Nairobi, Kenya",
        description: "Implemented and optimized IoT solutions, including message queuing with Kafka, and in-memory caching with Redis.",
        date: "04/2022 - Present",
        icon: React.createElement(BriefcaseIcon, null)
    },
    {
        title: "Junior Network Administrator",
        location: "JKUAT Main Campus, Kiambu, Kenya",
        description: "Managed network infrastructure and provided technical support for network-related issues.",
        date: "01/2019 - 10/2019",
        icon: React.createElement(BriefcaseIcon, null)
    },
    {
        title: "Bachelor of Science in Computer Science",
        location: "JKUAT Main Campus, Kiambu, Kenya",
        description: "Focused on software development, network administration, and IoT technologies.",
        date: "2017 - 2021",
        icon: React.createElement(AcademicCapIcon, null)
    },
];

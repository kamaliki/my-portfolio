"use client"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import { experienceConfig } from '@/config/experience';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
export function Experience() {
    return (
        <section id="experience">
            <motion.h2 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            className="text-center mb-8"
            >Experience & Education</motion.h2>
            <VerticalTimeline lineColor='#000000'>
                {experienceConfig.map((experience, index) => (
                    <VerticalTimelineElement
                        visible={true}
                        key={index}
                        date={experience.date}
                        iconStyle={{ background: '#000000', color: '#fff', textAlign: 'center' }} // Adjusted iconStyle
                        icon={experience.icon }
                    >
                        <Card
                        className='shadow-lg hover:shadow-xl'
                        >
                            <CardHeader>
                                <CardTitle>{experience.title}</CardTitle>
                                <h4>{experience.location}</h4>
                            </CardHeader>
                            <CardContent>
                                <p>{experience.description}</p>
                            </CardContent>
                        </Card>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </section>
    );
}


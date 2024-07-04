import Image from "next/image";
//import { LandingVideo } from "@/components/video";
import { Services } from "./ui/services";
import { Skills } from "./ui/skills";
import { About } from "./ui/about";
import { ContactForm } from "./ui/contact-me";
import { Experience } from "./ui/experience";
import { Projects } from "./ui/projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <section id="hero" className="flex flex-col items-center justify-center space-y-8 mb-40">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-6xl font-bold text-center">
            Hi, I&apos;m <span className="text-primary">Clive Kamaliki</span>
          </h1>
          <p className="text-lg text-center">
            I&apos;m a full-stack developer with a passion for building functional websites and applications.
          </p>
        </div>
        <div className="flex space-x-4">
          <a href="#contact" className="btn btn-primary">
            Get in touch
          </a>
          <a href="#services" className="btn btn-secondary">
            Learn more
          </a>
        </div>
      </section>
      <About />
      <Services />
      <Skills />
      <Projects />
      <Experience />
      
      <ContactForm />
      
    </main>
  );
}

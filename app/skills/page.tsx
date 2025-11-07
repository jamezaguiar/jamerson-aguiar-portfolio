import Image from "next/image";
import { skills } from "@/constants/skills";

export const metadata = {
  title: "Skills | Jamerson Aguiar",
  description:
    "Explore the technical skills and technologies that Jamerson Aguiar works with — React, TypeScript, JavaScript, and more.",
};

export default function SkillsPage() {
  return (
    <section className="max-w-5xl mx-auto">
      <h1 className="text-4xl font-heading font-bold text-accent mb-6">
        Technical Skills
      </h1>

      <p className="text-foreground/80 mb-10 leading-relaxed">
        Here are the main technologies and tools I work with on a daily basis —
        each one representing years of hands-on experience in real-world
        projects. I’m always learning and refining my approach to building
        clean, efficient, and scalable interfaces.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group relative flex flex-col items-center justify-center border border-border bg-background/60 rounded-lg p-4 hover:border-accent hover:shadow-[0_0_12px_-2px_var(--color-accent)] transition-all duration-300"
          >
            <div className="relative w-12 h-12 mb-3">
              <skill.logo color="#fff" size={48} />
            </div>

            <h3 className="font-medium text-foreground group-hover:text-accent transition-colors">
              {skill.name}
            </h3>

            <p className="text-sm text-foreground/60 mt-1">
              {skill.experience}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

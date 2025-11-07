import Link from "next/link";
import Image from "next/image";
import { projects } from "@/constants/projects";

export const metadata = {
  title: "Projects | Jamerson Aguiar",
  description:
    "Professional projects by Jamerson Aguiar, front-end developer experienced with React, TypeScript, and enterprise web systems.",
};

export default function ProjectsPage() {
  return (
    <main className="max-w-5xl mx-auto">
      <h1 className="text-4xl font-heading font-bold text-accent mb-6">
        Professional Projects
      </h1>

      <p className="text-foreground/80 leading-relaxed mb-12">
        Below are some of the key professional projects I’ve worked on during my
        career. Each experience contributed to my growth as a developer and
        strengthened my skills in creating scalable, maintainable, and elegant
        web interfaces.
      </p>

      <section className="flex flex-col gap-10">
        {projects.map((project) => (
          <Link
            key={project.company}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block border border-border bg-background/60 rounded-xl p-6 hover:border-accent hover:shadow-[0_0_12px_-2px_var(--color-accent)] transition-all duration-300"
          >
            <article className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex items-center justify-center md:w-36 md:h-24 w-full h-20 bg-background/80 rounded-md border border-border/40 p-3 flex-shrink-0">
                <Image
                  src={project.logo}
                  alt={`${project.company} logo`}
                  width={140}
                  height={80}
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="flex-1">
                <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h2 className="text-xl font-heading font-semibold text-accent group-hover:text-accent/80 transition-colors">
                    {project.company}
                  </h2>
                  <span className="text-sm text-foreground/60">
                    {project.period}
                  </span>
                </header>

                <p className="text-foreground/80 leading-relaxed mb-4">
                  {project.description}
                </p>

                <ul className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="px-2 py-1 text-xs border border-border rounded-md bg-background/80 text-foreground/80 group-hover:text-accent transition"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Link>
        ))}
      </section>
    </main>
  );
}

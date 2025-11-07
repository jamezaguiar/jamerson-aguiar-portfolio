import { skills } from "@/constants/skills";

export const metadata = {
  title: "About | Jamerson Aguiar",
  description:
    "Learn more about Jamerson Aguiar, a front-end developer passionate about React, TypeScript, and creating exceptional user experiences.",
};

export default function AboutPage() {
  return (
    <section className="max-w-5xl mx-auto">
      <h1 className="text-4xl font-heading font-bold text-accent mb-4">
        About Me
      </h1>

      <p className="text-lg text-foreground/90 leading-relaxed">
        Hi, I'm{" "}
        <span className="text-accent font-semibold">Jamerson Aguiar</span> 👋 —
        a <span className="font-medium">Front-end Developer</span> with 4 years
        of experience building responsive and accessible web applications using{" "}
        <span className="text-accent">React.js</span>,{" "}
        <span className="text-accent">TypeScript</span>, and modern UI patterns.
        Passionate about performance and user experience, I love transforming
        ideas into seamless digital interfaces.
      </p>

      <div className="h-px w-24 bg-accent/60 my-10"></div>

      <div className="space-y-4">
        <h2 className="text-2xl font-heading font-semibold text-accent">
          Professional Journey
        </h2>
        <p className="text-foreground/80 leading-relaxed">
          I started my professional journey in early 2021, working as a
          front-end developer for{" "}
          <span className="text-accent font-medium">Porto Seguro</span>, one of
          Brazil’s largest insurance companies. There, I helped develop internal
          tools using proprietary technologies and{" "}
          <span className="font-medium">jQuery</span>.
        </p>
        <p className="text-foreground/80 leading-relaxed">
          Later that year, I joined{" "}
          <span className="text-accent font-medium">
            Hyatt Hotels Corporation
          </span>{" "}
          through <span className="font-medium">OSF Digital</span>, a global
          technology consulting company. Since October 2021, I’ve been
          collaborating remotely with international teams to build and maintain
          enterprise systems using{" "}
          <span className="text-accent">AngularJS</span>,{" "}
          <span className="text-accent">React.js</span>, and{" "}
          <span className="text-accent">Spring Boot</span>.
        </p>
        <p className="text-foreground/80 leading-relaxed">
          Working closely with the Hyatt team has also helped me strengthen my{" "}
          <span className="text-accent font-medium">
            English communication skills
          </span>
          , as I participate daily in meetings and development discussions with
          teams from different parts of the world.
        </p>
      </div>

      <div className="h-px w-24 bg-accent/60 my-10"></div>

      <div>
        <h2 className="text-2xl font-heading font-semibold text-accent mb-4">
          Core Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map(({ name: skill }) => (
            <div
              key={skill}
              className="border border-border bg-background/60 rounded-md p-3 text-center text-sm text-foreground/90 hover:text-accent hover:border-accent transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      <div className="h-px w-24 bg-accent/60 my-10"></div>

      <div className="space-y-4">
        <h2 className="text-2xl font-heading font-semibold text-accent">
          What Drives Me
        </h2>
        <p className="text-foreground/80 leading-relaxed">
          I believe that great products come from collaboration, empathy, and
          continuous learning. I enjoy working in teams that value{" "}
          <span className="text-accent">code quality</span>,{" "}
          <span className="text-accent">clear communication</span>, and{" "}
          <span className="text-accent">attention to detail</span>.
        </p>
        <p className="text-foreground/80 leading-relaxed">
          My goal is to keep growing as a developer, contributing to projects
          that make people’s lives easier — and learning something new every
          single day along the way.
        </p>
      </div>

      <div className="h-px w-24 bg-accent/60 my-10"></div>

      <div className="space-y-4">
        <h2 className="text-2xl font-heading font-semibold text-accent">
          Beyond the Code
        </h2>
        <p className="text-foreground/80 leading-relaxed">
          When I’m not coding, I’m probably playing games on my{" "}
          <span className="text-accent font-medium">PC</span> — I’m a big fan of{" "}
          <span className="italic">Resident Evil 4 Remake</span> and{" "}
          <span className="italic">Elden Ring</span>. I also enjoy spending time
          with my wife and our baby daughter — my greatest motivation to keep
          improving every day.
        </p>
      </div>
    </section>
  );
}

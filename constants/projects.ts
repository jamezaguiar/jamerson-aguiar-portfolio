// src/constants/projects.ts
export interface Project {
  company: string;
  period: string;
  description: string;
  technologies: string[];
  logo: string;
  link: string;
}

export const projects: Project[] = [
  {
    company: "Hyatt Hotels Corporation",
    period: "Oct 2021 - Present",
    description:
      "Development and maintenance of internal systems for the global hospitality chain Hyatt, working as a Front-end Developer through OSF Digital. Focused on UI modernization using React.js and AngularJS, improving performance and maintainability across modules.",
    technologies: [
      "AngularJS",
      "React.js",
      "Styled Components",
      "SCSS",
      "JavaScript",
      "TypeScript",
    ],
    logo: "/logos/hyatt.png",
    link: "https://www.hyatt.com/",
  },
  {
    company: "Porto Seguro",
    period: "Feb 2021 - Sep 2021",
    description:
      "Worked on internal platforms for Brazil’s largest insurance company, building front-end features and integrating legacy systems using jQuery and proprietary frameworks.",
    technologies: ["jQuery", "JavaScript", "HTML", "CSS"],
    logo: "/logos/porto.png",
    link: "https://www.portoseguro.com.br/",
  },
];

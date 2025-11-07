import AngularIcon from "@/icons/angular";
import JavascriptIcon from "@/icons/javascript";
import JqueryIcon from "@/icons/jquery";
import NodejsIcon from "@/icons/nodejs";
import ReactIcon from "@/icons/react";
import ReactHookFormIcon from "@/icons/reacthookform";
import SassIcon from "@/icons/sass";
import SpringBootIcon from "@/icons/springboot";
import StyledComponentsIcon from "@/icons/styledcomponents";
import TypescriptIcon from "@/icons/typescript";
import { IconProps } from "@/types/icon.types";

export interface Skill {
  name: string;
  logo: React.FC<IconProps>;
  experience: string;
}

export const skills: Skill[] = [
  {
    name: "React.js",
    logo: ReactIcon,
    experience: "4 years",
  },
  {
    name: "TypeScript",
    logo: TypescriptIcon,
    experience: "3 years",
  },
  {
    name: "JavaScript",
    logo: JavascriptIcon,
    experience: "4 years",
  },
  {
    name: "Styled Components",
    logo: StyledComponentsIcon,
    experience: "3 years",
  },
  {
    name: "SCSS",
    logo: SassIcon,
    experience: "3 years",
  },
  {
    name: "React Hook Form",
    logo: ReactHookFormIcon,
    experience: "2 years",
  },
  {
    name: "Node.js",
    logo: NodejsIcon,
    experience: "2 years",
  },
  {
    name: "Java (Spring Boot)",
    logo: SpringBootIcon,
    experience: "1 year",
  },
  {
    name: "AngularJS",
    logo: AngularIcon,
    experience: "1 year",
  },
  {
    name: "jQuery",
    logo: JqueryIcon,
    experience: "1 year",
  },
];

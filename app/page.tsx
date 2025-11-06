import Image from "next/image";
import Link from "next/link";
import { DownloadCV } from "../components/download-cv";
import Linkedin from "@/icons/linkedin";
import GitHub from "@/icons/github";

export default function Home() {
  return (
    <div className="flex justify-between">
      <main className="flex flex-col gap-4 w-2/6">
        <Image
          src="https://github.com/jamezaguiar.png"
          alt="Jamerson Aguiar"
          width={200}
          height={200}
          className="rounded-full border-accent border-4"
        />
        <div>
          <h1 className="font-bold text-4xl">Jamerson Aguiar</h1>
          <h6 className="text-accent text-2xl">Full Stack Developer</h6>
        </div>
        <p>
          Building responsive and user-centric web applications with passion and
          precision. I transform ideas into seamless digital experiences.
        </p>
        <ul className="flex gap-2">
          <li>
            <Link href="https://www.linkedin.com/in/jamezaguiar/">
              <Linkedin size={24} />
            </Link>
          </li>
          <li>
            <Link href="https://github.com/jamezaguiar">
              <GitHub size={24} />
            </Link>
          </li>
        </ul>
        <DownloadCV />
      </main>
      <aside className="w-4/6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eius
        sapiente nihil delectus, quia suscipit distinctio. Officiis ducimus,
        quam qui magni atque reprehenderit? Consequuntur, corrupti quis! In
        corrupti aliquid dolore!
      </aside>
    </div>
  );
}

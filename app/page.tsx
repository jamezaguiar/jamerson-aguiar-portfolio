import Image from "next/image";
import Link from "next/link";
import { DownloadCV } from "../components/download-cv";
import LinkedinIcon from "@/icons/linkedin";
import GitHubIcon from "@/icons/github";
import MeshBackground from "@/components/mesh-background";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto flex justify-between gap-8">
      <section className="flex flex-col gap-4 w-2/6">
        <Image
          src="https://github.com/jamezaguiar.png"
          alt="Jamerson Aguiar"
          width={200}
          height={200}
          className="rounded-full border-accent border-4"
        />

        <header>
          <h1 className="font-bold text-4xl">Jamerson Aguiar</h1>
          <h2 className="text-accent text-2xl">Full Stack Developer</h2>
        </header>

        <p className="leading-relaxed text-foreground/90">
          Building responsive and user-centric web applications with passion and
          precision. I transform ideas into seamless digital experiences.
        </p>

        <nav aria-label="Social links">
          <ul className="flex gap-3">
            <li>
              <Link
                href="https://www.linkedin.com/in/jamezaguiar/"
                aria-label="LinkedIn profile"
                target="_blank"
                className="hover:text-accent transition"
              >
                <LinkedinIcon size={24} />
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/jamezaguiar"
                aria-label="GitHub profile"
                target="_blank"
                className="hover:text-accent transition"
              >
                <GitHubIcon size={24} />
              </Link>
            </li>
          </ul>
        </nav>

        <DownloadCV />
      </section>

      <aside className="w-4/6 text-foreground/70 leading-relaxed">
        <MeshBackground />
      </aside>
    </main>
  );
}

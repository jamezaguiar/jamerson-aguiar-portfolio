"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { Mail } from "lucide-react";
import GitHubIcon from "@/icons/github";
import LinkedinIcon from "@/icons/linkedin";

type ContactInputs = {
  name: string;
  email: string;
  message: string;
};

export function ContactClient() {
  const { register, handleSubmit, reset, formState } = useForm<ContactInputs>();
  const { isSubmitting, isSubmitSuccessful } = formState;

  const onSubmit: SubmitHandler<ContactInputs> = (data) => {
    const mailto = `mailto:jamersonalsilva14@gmail.com?subject=Portfolio Contact from ${
      data.name
    }&body=${encodeURIComponent(data.message + "\n\nReply to: " + data.email)}`;
    window.location.href = mailto;
    reset();
  };

  return (
    <main className="max-w-5xl mx-auto">
      <h1 className="text-4xl font-heading font-bold text-accent mb-6">
        Get in Touch
      </h1>

      <p className="text-foreground/80 leading-relaxed mb-12">
        Have a question, collaboration idea, or job opportunity? Feel free to
        reach out — I’ll get back to you as soon as possible.
      </p>

      <section className="grid md:grid-cols-2 gap-12">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 bg-background/60 border border-border rounded-xl p-6"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-foreground/80 mb-1"
            >
              Name
            </label>
            <input
              id="name"
              {...register("name", { required: true })}
              placeholder="Your name"
              className="w-full rounded-md border border-border bg-background/80 px-3 py-2 text-foreground focus:border-accent focus:outline-none transition"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-foreground/80 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email", { required: true })}
              placeholder="you@example.com"
              className="w-full rounded-md border border-border bg-background/80 px-3 py-2 text-foreground focus:border-accent focus:outline-none transition"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-foreground/80 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              {...register("message", { required: true })}
              placeholder="Write your message..."
              className="w-full rounded-md border border-border bg-background/80 px-3 py-2 text-foreground focus:border-accent focus:outline-none transition resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 w-fit px-6 py-2 bg-accent text-white font-medium rounded-md hover:opacity-90 transition disabled:opacity-70"
          >
            {isSubmitSuccessful
              ? "Message Sent!"
              : isSubmitting
              ? "Sending..."
              : "Send Message"}
          </button>
        </form>

        <aside className="flex flex-col gap-6 justify-center">
          <h2 className="text-2xl font-heading font-semibold text-accent">
            Connect with me
          </h2>
          <p className="text-foreground/80">
            You can also reach me directly through these platforms:
          </p>

          <ul className="space-y-3">
            <li>
              <Link
                href="mailto:jamersonalsilva14@gmail.com"
                className="flex items-center gap-3 text-foreground/80 hover:text-accent transition"
              >
                <Mail size={20} />
                jamersonalsilva14@gmail.com
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/jamezaguiar/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground/80 hover:text-accent transition"
              >
                <LinkedinIcon size={20} />
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/jamezaguiar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground/80 hover:text-accent transition"
              >
                <GitHubIcon size={20} />
                GitHub
              </Link>
            </li>
          </ul>
        </aside>
      </section>
    </main>
  );
}

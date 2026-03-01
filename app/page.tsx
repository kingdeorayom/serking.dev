import Link from "next/link";

const LINKS = [
  {
    name: "Experiences",
    href: "/work",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Things I Believe In",
    href: "/beliefs",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col space-y-4">
      <p>
        I specialize in designing and developing responsive, scalable, and
        user-focused web and mobile applications that are intuitive and highly
        functional.
      </p>
      <p>
        Outside of work, I usually play video games, read books, or listen to a
        lot of{" "}
        <Link
          href="/music"
          className="underline hover:opacity-75 transition-opacity"
        >
          music
        </Link>
        . I last listened to{" "}
        <Link
          href="/music"
          className="underline hover:opacity-75 transition-opacity"
          target="_blank"
        >
          Always On My Mind
        </Link>{" "}
        by Elvis Presley.
      </p>
      <p>Some more things about me:</p>
      <ul className="list-disc list-inside px-2">
        {LINKS.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="underline hover:opacity-75 transition-opacity"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <p>
        If you&apos;re looking to collaborate on a project, hire a developer, or
        just say hello, feel free to reach out via{" "}
        <Link
          href="mailto:kingdeorayom@gmail.com"
          className="underline hover:opacity-75 transition-opacity"
          target="_blank"
        >
          email
        </Link>{" "}
        or{" "}
        <Link
          href="https://www.linkedin.com/in/kingdeorayom/"
          className="underline hover:opacity-75 transition-opacity"
          target="_blank"
        >
          LinkedIn
        </Link>
        .
      </p>
    </div>
  );
}

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col space-y-4">
      <p>
        I&apos;m a software engineer from the Philippines specializing in
        building websites and mobile applications. I always aim to build
        responsive, functional, and user-focused systems.
      </p>
      <p>
        Outside of work, I&apos;m a gamer, avid reader, and a massive music fan.
        I last listened to Old Man by Neil Young.
      </p>
      <p>Some more things about me:</p>
      <ul className="list-disc list-inside px-2">
        <li>
          <Link
            href="/projects"
            className="underline hover:opacity-75 transition-opacity"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="/experiences"
            className="underline hover:opacity-75 transition-opacity"
          >
            Experiences
          </Link>
        </li>
        <li>
          <Link
            href="/beliefs"
            className="underline hover:opacity-75 transition-opacity"
          >
            Things I Believe In
          </Link>
        </li>
      </ul>
      <p>
        You can check out my work on{" "}
        <Link
          href="https://github.com/kingdeorayom"
          className="underline hover:opacity-75 transition-opacity"
          target="_blank"
        >
          GitHub
        </Link>{" "}
        or connect with me on{" "}
        <Link
          href="https://www.linkedin.com/in/kingdeorayom"
          className="underline hover:opacity-75 transition-opacity"
        >
          LinkedIn
        </Link>
        .
      </p>
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
        or on{" "}
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

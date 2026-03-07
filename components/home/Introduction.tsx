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

const Introduction = () => {
  return (
    <>
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
    </>
  );
};

export default Introduction;

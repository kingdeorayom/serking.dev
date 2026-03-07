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

const Navigation = () => {
  return (
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
  );
};
export default Navigation;

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
  // {
  //   name: "About",
  //   href: "/about",
  // },
  // {
  //   name: "Blog",
  //   href: "/blog",
  // },
  {
    name: "How I Think",
    href: "/beliefs",
  },
];

const Navigation = () => {
  return (
    <ul className="list-disc list-inside px-2 flex flex-col space-y-0.5">
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

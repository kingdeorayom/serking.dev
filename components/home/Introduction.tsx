import Link from "next/link";
import Navigation from "./Navigation";

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
        .
      </p>
      <p>Some more things about me:</p>
      <Navigation />
    </>
  );
};

export default Introduction;

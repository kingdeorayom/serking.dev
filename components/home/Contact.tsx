import Link from "next/link";

const Contact = () => {
  return (
    <p>
      If you&apos;re looking to collaborate on a project, hire a{" "}
      <Link
        href="https://github.com/kingdeorayom"
        className="underline hover:opacity-75 transition-opacity"
        target="_blank"
      >
        developer
      </Link>
      , or just say hello, feel free to reach out via{" "}
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
  );
};

export default Contact;

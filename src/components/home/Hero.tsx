import { useTranslations } from "next-intl";
import Link from "next/link";

const Hero = () => {
  const t = useTranslations();
  return (
    <div className="flex flex-col space-y-6">
      <p>
        I'm a software developer from the Philippines specializing in building
        responsive and user-focused applications for web and mobile.
      </p>
      <p>
        Check out my projects and work history to see what I’ve been working on.
        You can learn more about them{" "}
        <Link href="/work" title="View my works" className="hovered-link">
          here
        </Link>
        .
      </p>
    </div>
  );
};

export default Hero;

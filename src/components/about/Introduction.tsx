import { useTranslations } from "next-intl";
import Link from "next/link";

const Introduction = () => {
  const t = useTranslations();
  return (
    <div className="flex flex-col space-y-6">
      <p>
        I&apos;m a software developer who enjoys building web and mobile
        applications.
      </p>

      <p>
        I specialize in React and Next.js for frontend development, along with
        React Native and Expo SDK for mobile applications. On the backend, I
        work with Laravel and MySQL. I focus on building clean and functional
        code along with user-friendly interfaces that enhance the overall user
        experience.
      </p>

      <p>
        Outside of coding, I mostly listen to music, watch movies and TV series,
        read books, or play video games.
      </p>
      {/* <p>
        I have a bachelor&apos;s degree in Information Technology from the{" "}
        <Link
          href="https://www.uphsl.edu.ph/"
          title="Visit site"
          target="_blank"
          className="hovered-link"
        >
          University of Perpetual Help System Laguna
        </Link>
        , graduating with the academic distinction of Magna Cum Laude.
      </p> */}
    </div>
  );
};

export default Introduction;

import SectionLabel from "@/components/SectionLabel";
import SectionWrapper from "@/components/SectionWrapper";
import Separator from "@/components/Separator";
import Link from "next/link";

export const metadata = {
  title: "Work - Serking de Orayom",
};

export default function WorkPage() {
  return (
    <SectionWrapper>
      <SectionLabel label="My work experiences" />
      <p>
        I work as a frontend developer and occasionally take on freelance
        projects. While freelancing allows me to explore different challenges,
        I'm looking for a full-time role where I can collaborate with a team,
        contribute to impactful projects, and continue growing as a developer.
      </p>
      <p>Here are some of the freelance projects I've worked on:</p>
      <div className="px-8">
        <ul className="list-disc space-y-1">
          <li>
            <Link
              href="https://timcoph.com/"
              target="_blank"
              className="hovered-link"
            >
              TIMCO Official Website
            </Link>
          </li>
          <li>
            <Link
              href="https://clafootwear.com/"
              target="_blank"
              className="hovered-link"
            >
              CLA Footwear
            </Link>
          </li>
          <li>
            <Link
              href="https://autopromo.ph/"
              target="_blank"
              className="hovered-link"
            >
              Auto Promo PH
            </Link>
          </li>
        </ul>
      </div>
      <Separator />

      <div className="space-y-6">
        <div>
          <p className="mb-1 text-lg font-medium tracking-tighter">
            Padtech Industries Corporation
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Frontend Developer
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Sep 2022 - Apr 2025
          </p>
        </div>
        <p>
          Over the course of <em>almost</em> three years, I&apos;ve had the
          privilege of making significant contributions to the company, notably
          as one of the primary frontend developers and designers.
        </p>
        <p>
          I&apos;ve played a key role in building responsive user interfaces,
          integrating backend functionality, optimizing performance, and
          ensuring scalability for most of the company&apos;s apps and websites.
        </p>
        <p>
          I&apos;ve also gained experience in database management, API
          development, and gradually migrating legacy components and codebase to
          modern frameworks and infrastructure.
        </p>
        <p>Here are some of the projects I worked on in my previous role:</p>
        <div className="px-8">
          <ul className="list-disc space-y-1">
            <li>
              <Link
                href="https://timcoph.com/"
                target="_blank"
                className="hovered-link"
              >
                Adselle Mobile
              </Link>
            </li>
            <li>
              <Link
                href="https://clafootwear.com/"
                target="_blank"
                className="hovered-link"
              >
                Propertygo Mobile
              </Link>
            </li>
            <li>
              <Link
                href="https://autopromo.ph/"
                target="_blank"
                className="hovered-link"
              >
                Transpopad Mobile
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Separator />
      <div className="space-y-6">
        <div>
          <p className="mb-1 text-lg font-medium tracking-tighter">
            Sociov Technologies, Inc.
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Frontend Developer, 2021
          </p>
        </div>
        <p>
          During my internship, I worked on the company&apos;s official website
          using React.js and Tailwind CSS, which was my first hands-on
          experience with React.
        </p>
      </div>
    </SectionWrapper>
  );
}

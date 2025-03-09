import SectionLabel from "@/components/SectionLabel";
import Separator from "@/components/Separator";

export const metadata = {
  title: "Work - Serking de Orayom",
  description: "Web and mobile app developer",
};

export default function WorkPage() {
  return (
    <section className="flex min-w-0 flex-auto flex-col">
      <div className="flex flex-col gap-y-6">
        <SectionLabel label="My work experiences" />
        <p>
          Embracing each opportunity to learn, experiment, and gain experience
          needed to build industry-grade software.
        </p>
        <Separator />
        <div className="flex flex-col gap-y-10">
          <div className="flex flex-col gap-y-6">
            <div className="space-y-6">
              {/* <div className="space-y-6 rounded-2xl bg-gray-50 p-8 dark:bg-neutral-800"> */}
              <div>
                <p className="mb-1 text-xl font-medium tracking-tighter">
                  Padtech Industries Corporation
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Research and Development Programmer, 2022 - 2025
                </p>
              </div>
              <p>
                Over the course of <em>almost</em> three years, I&apos;ve
                tackled a variety of challenging projects, primarily focusing on
                frontend development with React Native for mobile and Next.js
                for web and some backend work with Laravel, REST APIs and MySQL.
                This being my first work, I learned a lot of things that greatly
                improved my skills.
              </p>
              <p>
                I&apos;ve had the privilege of making significant contributions
                to the company notably by contributing to various projects&apos;
                key components. This includes developing landing pages and web
                assets for the mobile applications we&apos;ve built.
                Additionally, I&apos;ve played a central role in developing our
                main product&apos;s official website, ensuring it effectively
                communicates our brand identity and offerings to a diverse
                audience and if it actually works! Moreover, my involvement in
                designing primary user interfaces and user experiences for both
                the mobile and web applications has been great.
              </p>
              <p>
                My accomplishments include building responsive user interfaces,
                integrating backend functionality to frontend, optimizing
                performance, and ensuring scalability. Additionally, I&apos;ve
                gained experience in database management, API development, and
                gradually migrating legacy components and codebase to modern
                frameworks and infrastructure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

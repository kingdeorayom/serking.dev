import SectionLabel from "@/components/SectionLabel";
import Separator from "@/components/Separator";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About - Serking de Orayom",
  description: "Web and mobile app developer",
};

export default function AboutPage() {
  return (
    <section className="flex min-w-0 flex-auto flex-col">
      <div className="flex flex-col gap-y-6">
        <p>Learn some things about my background, education and tech stack.</p>
        <Separator />
        <div className="flex flex-col gap-y-10">
          <div className="flex flex-col gap-y-6">
            <SectionLabel label="Education" />
            <p>
              I earned my bachelor's degree in Information Technology at the{" "}
              <Link
                href="https://www.uphsl.edu.ph/"
                title="Visit site"
                target="_blank"
                className="font-medium hover:underline"
              >
                University of Perpetual Help System Laguna
              </Link>{" "}
              with an academic honor of distinction: Magna Cum Laude.
            </p>
          </div>
          <div className="flex flex-col gap-y-6">
            <SectionLabel label="Stack" />
            <p>
              Programming languages, frameworks, libraries, apps, platform and
              services I use to build and run a website, application, or any
              project.
            </p>
            <p className="font-medium">1. Framework</p>
            <p>Next.js, React Native, Expo, Node.js, Express.js, Laravel</p>
            <p className="font-medium">2. Database</p>
            <p>MySQL, MongoDB, PostgreSQL, Firebase</p>
            <p className="font-medium">3. Design and Styling</p>
            <p>Tailwind CSS, shadcn/ui, MUI, Figma, Adobe Photoshop</p>
            <p className="font-medium">4. Coding Patterns</p>
            <div className="px-8">
              <ul className="list-disc space-y-4">
                <li>
                  <code className="bg-slate-200 px-1 py-0.5 dark:bg-gray-50/10">
                    const
                  </code>{" "}
                  &gt;{" "}
                  <code className="bg-slate-200 px-1 py-0.5 dark:bg-gray-50/10">
                    let
                  </code>{" "}
                  <Link
                    href="https://overreacted.io/on-let-vs-const/"
                    target="_blank"
                    title="On let vs const"
                    className="hovered-link"
                  >
                    most of the time
                  </Link>
                </li>
                <li>Many small components &gt; larger files</li>
                <li>Copy/paste is better than the wrong abstraction</li>
                <li>Keep components pure when possible</li>
                <li>
                  Straightforward code is better than relying on hidden
                  behaviors
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

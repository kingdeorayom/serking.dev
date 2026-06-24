import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work - Serking de Orayom",
  description:
    "I currently work on digital banking products, where I care a lot about architecture, root-cause debugging, managing multiple project releases, enhancing developer experience, and writing things down so the next person, sometimes future me, isn't lost.",
};

interface Experience {
  company: string;
  position: string;
  period: string;
  description: string[];
}

const EXPERIENCES: Experience[] = [
  {
    company: "Vertere Global Solutions, Inc.",
    position: "Programmer Analyst S3",
    period: "Oct 2025 - Present",
    description: [
      "Frontend engineer for the client's FinEd Digital Banking platform using Next.js and React Native.",
      "Build and ship cross-platform mobile features end-to-end, owning the full development lifecycle from specification to release.",
      "Develop full-stack solutions across frontend and backend, ensuring seamless integration between client applications and server-side services.",
      "Lead an engineering team as a development sub-lead, delegating tasks, reviewing work, and collaborating with engineers to keep delivery on track.",
      "Manage CI/CD pipelines and deployment workflows, configuring automated builds to streamline the release process.",
      "Author technical documentation and Architecture Decision Records (ADRs) to align the team on design choices and preserve engineering context.",
      "Diagnose and resolve critical production issues and high-priority bug tickets to minimize downtime and protect the user experience.",
      "Collaborate with architects, product owners, and cross-functional teams to translate requirements into reliable, maintainable code.",
    ],
  },
  {
    company: "Freelancing",
    position: "Full-Stack Developer",
    period: "July 2023 - October 2025",
    description: ["I occasionally take on freelance projects."],
  },
  {
    company: "Padtech Industries Corporation",
    position: "Frontend Developer",
    period: "Sep 2022 - Apr 2025",
    description: [
      "Led the development of responsive and scalable user interfaces using Next.js, React Native, and Tailwind CSS for both web and mobile platforms.",
      "Handled UI/UX design tasks, helping create simple but effective, user-friendly, and modern-looking apps and websites.",
      "Improved overall mobile apps and website's performance by enhancing load times, UI responsiveness, and user experience.",
      "Made the frontend codebase easier to scale and maintain by writing clean, modular, and reusable components.",
      "Helped upgrade old code by moving legacy components and systems to newer frameworks and tools.",
      "Built and used Laravel APIs to handle data and business logic for frontend features.",
      "Filling whatever role is needed at the time.",
    ],
  },
  {
    company: "Sociov Technologies, Inc.",
    position: "Frontend Developer",
    period: "2021 (Internship)",
    description: [
      "During my internship, I worked on the company's official website using React.js and Tailwind CSS, which was my first hands-on experience with React.",
    ],
  },
];

export default function WorkPage() {
  return (
    <div className="flex flex-col space-y-8">
      {EXPERIENCES.map((experience) => (
        <div key={experience.company} className="flex flex-col space-y-2">
          <div>
            <h3 className="font-bold">{experience.company}</h3>
            <p className="text-sm">{experience.position}</p>
            <p className="mb-3 text-sm">{experience.period}</p>
          </div>
          <ul className="list-disc list-inside px-2 space-y-1">
            {experience.description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

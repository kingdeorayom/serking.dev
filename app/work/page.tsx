import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work - Serking de Orayom",
  description: "Software Engineer",
};

interface Experience {
  company: string;
  position: string;
  period: string;
  description: string[];
}

const EXPERIENCES: Experience[] = [
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
    company: "Freelancing",
    position: "Full-Stack Developer",
    period: "2023 - present",
    description: [
      "I occasionally take on freelance projects.",
      "Below are some of my freelance works.",
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
      {EXPERIENCES.map((exp) => (
        <div key={exp.company} className="flex flex-col space-y-2">
          <div>
            <h3 className="font-bold">{exp.company}</h3>
            <p className="text-sm">{exp.position}</p>
            <p className="mb-3 text-sm">{exp.period}</p>
          </div>
          <ul className="list-disc list-inside px-3 space-y-1">
            {exp.description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

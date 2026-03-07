import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beliefs - Serking de Orayom",
  description: "Software Engineer",
};

const BELIEF_SECTIONS = [
  {
    title: "Be ruthlessly truth seeking",
    items: [
      "The truth can be painful",
      "You can just change your mind if wrong",
      "Have strong opinions",
      "Maximize your exposure hours",
      "Seek the collective truth, not just one opinion",
    ],
  },
  {
    title: "Communication is the most important skill",
    items: [
      "Clear writing is clear thinking",
      "Everyone (yes, you) needs to become a better writer",
      "Have strong opinions",
      "Be the person taking notes, even if it's just for yourself",
      "Ideas only matter if people understand them",
    ],
  },
  {
    title: "Work can also be your hobby",
    items: [
      "This doesn't mean you can't have other hobbies",
      "Your best work comes from following your curiosity",
      "Follow what genuinely interests you",
    ],
  },
  {
    title: "Start before you feel ready",
    items: [
      "Small progress daily compounds into massive results",
      "Doing a little every day beats bursts of motivation",
      "Don't let the perfect be the enemy of the good",
    ],
  },
];

export default function BeliefsPage() {
  return (
    <div className="flex flex-col space-y-8">
      {BELIEF_SECTIONS.map((section, index) => (
        <section key={index}>
          <h3 className="text-lg font-semibold mb-3">{section.title}</h3>
          <ul className="list-disc list-inside px-2 space-y-1">
            {section.items.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

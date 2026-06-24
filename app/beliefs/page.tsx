import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How I Think - Serking de Orayom",
  description:
    "I currently work on digital banking products, where I care a lot about architecture, root-cause debugging, managing multiple project releases, enhancing developer experience, and writing things down so the next person, sometimes future me, isn't lost.",
};

const BELIEFS = [
  {
    title: "Own outcomes, not tasks",
    items: [
      "Take responsibility beyond your assigned tickets",
      "Users don't care how difficult the implementation was",
      "Measure success by impact",
    ],
  },
  {
    title: "Optimize for leverage",
    items: [
      "Automate repetitive work",
      "Write code once, benefit many times",
      "Documentation is leverage",
      "Tools multiply output more than effort alone",
      "Teams using A.I. will move 10x faster than those not willing to change",
    ],
  },
  {
    title: "Think in systems",
    items: [
      "Every decision creates second-order effects",
      "Understand incentives and constraints",
      "Fix root causes, not symptoms",
    ],
  },
  {
    title: "Communication is a force multiplier",
    items: [
      "Clear writing is clear thinking",
      "Everyone (including yourself) needs to become a better writer",
      "Good documentation saves other people's time",
      "Be the person taking notes, even if it's just for yourself",
      "Ideas only matter if people understand them",
    ],
  },
  {
    title: "Be hard on ideas, easy on people",
    items: [
      "Challenge assumptions aggressively",
      "Accept criticism without ego",
      "Disagreement is a path to better solutions",
      "The best idea wins",
    ],
  },
  {
    title: "Knowledge should be shared",
    items: [
      "Teaching exposes gaps in understanding",
      "The best way to learn is to teach",
    ],
  },
  {
    title: "Be ruthlessly truth seeking",
    items: [
      "Seek the collective truth, not just one opinion",
      "Have strong opinions",
      "You can just change your mind if wrong",
    ],
  },
  {
    title: "Default to curiosity",
    items: [
      "Ask why repeatedly",
      "Dig deeper than surface explanations",
      "Follow interesting questions",
      "Follow what genuinely interests you",
      "Curiosity is a competitive advantage",
    ],
  },
  {
    title: "Start before you feel ready",
    items: [
      "Don't let the perfect be the enemy of the good",
      "Small progress daily compounds into massive results",
      "Doing a little every day beats bursts of motivation",
    ],
  },
  {
    title: "Compounding is everywhere",
    items: [
      "Skills, relationships, and reputation compound",
      "Small improvements repeated consistently outperform big efforts done rarely",
    ],
  },
  {
    title: "Work can also be your hobby",
    items: [
      "This doesn't mean you can't have other hobbies",
      "Your best work comes from following your curiosity",
      "Maximize your exposure hours",
    ],
  },
];

export default function BeliefsPage() {
  return (
    <div className="flex flex-col space-y-8">
      {BELIEFS.map((belief, index) => (
        <section key={index}>
          <h3 className="text-lg font-semibold mb-3">{belief.title}</h3>
          <ul className="list-disc list-inside px-2 space-y-1">
            {belief.items.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

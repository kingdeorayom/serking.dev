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
      "Have strong opinions, loosely held",
      "Maximize your exposure hours",
      '"Anecdata" > data',
      "Seek the collective truth, not just one opinion",
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

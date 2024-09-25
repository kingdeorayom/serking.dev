import React from "react";
import RECOMMENDATIONS from "@/data/recommendations";
import setup from "/public/images/about/setup.jpg";
import Image from "next/image";

const Recommendations = () => {
    return (
        <>
            <h2 className="font-medium text-xl tracking-tighter">
                Software I use, gadgets I love, and other things I recommend.
            </h2>

            <div className="py-6">
                <Image
                    alt="Work and Gaming Setup"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={setup}
                />
            </div>

            <p>
                I get asked a lot about the things I use to build software, stay
                productive, or buy to fool myself into thinking I&apos;m being
                productive when I&apos;m really just procrastinating.
            </p>

            <p>Here&apos;s a big list of all of my favorite stuff:</p>

            {RECOMMENDATIONS.map((recommendation, index) => {
                return (
                    <React.Fragment key={index}>
                        <SectionTitle sectionTitle={recommendation.section} />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {recommendation.content.map((item, index) => (
                                <RecommendationCard
                                    key={index}
                                    title={item.title}
                                    description={item.description}
                                />
                            ))}
                        </div>
                    </React.Fragment>
                );
            })}
        </>
    );
};

export default Recommendations;

const SectionTitle = ({ sectionTitle }) => (
    <h3 className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-100">
        {sectionTitle}
    </h3>
);

const RecommendationCard = ({ title, description }) => (
    <div className="space-y-1 text-sm bg-slate-50 dark:bg-neutral-900 p-5 rounded-lg">
        <p className="font-semibold">{title}</p>
        <p className="text-gray-500 dark:text-gray-400">{description}</p>
    </div>
);

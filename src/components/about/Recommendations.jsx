import React from "react";
import RECOMMENDATIONS from "@/data/recommendations";
// import setup from "../../../public/images/about/setup2.jpg";
// import Image from "next/image";

const Recommendations = () => {
    return (
        <section className="flex flex-col space-y-6">
            <h2 className="text-xl font-semibold tracking-tighter">
                Software I use, gadgets I love, and other things I recommend.
            </h2>
            <p>
                Things I use to build software, stay productive, or buy to fool
                myself into thinking I&apos;m being productive when I&apos;m
                really just procrastinating.
            </p>
            {/* <div className="flex justify-center py-6">
                <Image
                    alt="Work and Gaming Setup"
                    className="block h-full w-3/4 rounded-2xl object-cover object-center"
                    src={setup}
                />
            </div> */}
            <p>Here&apos;s a big list of all of my favorite stuff:</p>

            {RECOMMENDATIONS.map((recommendation, index) => (
                <React.Fragment key={index}>
                    <div
                        className="mt-12 mb-6 md:border-l md:border-gray-200 md:pl-6 md:dark:border-zinc-700/40"
                        key={index}
                    >
                        <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
                            <SectionTitle title={recommendation.section} />
                            <div className="md:col-span-3">
                                <ul role="list" className="space-y-16">
                                    {recommendation.content.map(
                                        (item, index) => (
                                            <RecommendationCard
                                                key={index}
                                                title={item.title}
                                                description={item.description}
                                            />
                                        )
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            ))}
        </section>
    );
};

export default Recommendations;

const SectionTitle = ({ title }) => (
    <h3 className="text-xs font-bold text-zinc-600 uppercase dark:text-zinc-100">
        {title}
    </h3>
);

const RecommendationCard = ({ title, description }) => (
    <li className="group relative flex flex-col items-start">
        <h4 className="text-base font-semibold tracking-tight">{title}</h4>
        <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-neutral-300">
            {description}
        </p>
    </li>
);

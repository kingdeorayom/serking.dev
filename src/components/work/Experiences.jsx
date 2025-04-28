import WORK_EXPERIENCES from "@/data/experiences";
import Separator from "../ui/Separator";
import Projects from "./Projects";

const Experiences = () => {
    const parseMarkdownToHtml = (text) => {
        return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    };

    return (
        <section className="flex flex-col space-y-6">
            {WORK_EXPERIENCES.map((exp, index) => (
                <div key={index} className="flex flex-col space-y-6">
                    <div>
                        <h2 className="mb-1 text-xl font-semibold tracking-tighter">
                            {exp.company}
                        </h2>
                        <p className="text-sm text-neutral-600 dark:text-neutral-300">
                            {exp.title}
                        </p>
                        <p className="text-sm text-neutral-600 dark:text-neutral-300">
                            {exp.duration}
                        </p>
                    </div>

                    {exp.bulletPoints.length > 0 && (
                        <ul className="flex list-disc flex-col space-y-4 px-8 py-4">
                            {exp.bulletPoints.map((point, i) => (
                                <li
                                    key={i}
                                    dangerouslySetInnerHTML={{
                                        __html: parseMarkdownToHtml(point),
                                    }}
                                />
                            ))}
                        </ul>
                    )}
                    {exp.description?.map((paragraph, i) => (
                        <p
                            key={i}
                            dangerouslySetInnerHTML={{
                                __html: parseMarkdownToHtml(paragraph),
                            }}
                        />
                    ))}
                    {exp.companyKey && <Projects company={exp.companyKey} />}
                    <Separator />
                </div>
            ))}
        </section>
    );
};

export default Experiences;

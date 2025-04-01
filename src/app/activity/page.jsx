import Tabs from "@/components/activity/Tabs";

export const metadata = {
    title: "Activity - Serking de Orayom",
    description: "Web and mobile app developer",
};

export default async function ActivityPage() {
    return (
        <section className="flex-auto min-w-0 flex flex-col">
            <div className="flex flex-col gap-y-6">
                <h1 className="font-medium text-2xl tracking-tighter">
                    I listen to music and play video games.
                </h1>
                <p>
                    If you find anything here that piques your interest,
                    let&apos;s talk about it!
                </p>
                <Tabs />
            </div>
        </section>
    );
}

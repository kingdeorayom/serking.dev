// import Activities from "@/components/activity/Activities";
import Tabs from "@/components/activity/Tabs";

export const metadata = {
    title: "Activity | Serking de Orayom",
    description: "Web and mobile app developer",
};

export default async function ActivityPage() {
    return (
        <section className="flex-auto min-w-0 flex flex-col">
            <div className="flex flex-col gap-y-6">
                {/* <div className="h-40 rounded-lg bg-[#f0fdf4] dark:bg-[#22C55E] border border-[#C5F8D7] dark:border-[#178D43]"></div> */}
                <h2 className="font-medium text-2xl tracking-tighter">
                    What I do most of the time
                </h2>

                <p>
                    I listen to music and play video games. If you find anything
                    here that piques your interest, let&apos;s talk about it!
                </p>

                {/* <Activities /> */}
                <Tabs />
            </div>
        </section>
    );
}

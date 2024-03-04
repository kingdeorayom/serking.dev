import { FaGithub } from "react-icons/fa";

async function getData() {
    const res = await fetch(
        "https://ph.api.buysellee.com/api/v1/home?cityId=464&includeUser=true&includeImages=true",
        { next: { revalidate: 60 } }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

export const metadata = {
    title: "Guestbook | Serking de Orayom",
    description: "Web and mobile app developer",
};

export default async function GuestBook() {
    const data = await getData();

    return (
        <main className="flex-auto min-w-0 flex flex-col gap-y-1">
            <section>
                <h1 className="font-medium text-2xl mb-8 tracking-tighter">
                    Sign my guestbook &#x1F4D6;
                </h1>

                <p className="text-xs text-gray-500">
                    If you&apos;re leaving a message here, remember it&apos;s
                    public. Be nice and avoid any harsh words that may be
                    offensive for someone. Keep it positive and considerate.
                    Thanks!
                </p>

                <button className="mt-8 px-3 py-2 border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded text-sm flex items-center leading-4 text-neutral-900 dark:text-neutral-100 mb-8">
                    <FaGithub size={20} />
                    <div className="ml-3">Sign in with GitHub</div>
                </button>

                {/* <form className="mt-8 mb-8">
                    <label
                        for="search"
                        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                    >
                        Your message...
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            className="block w-full p-4  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Your message..."
                            required
                        />
                        <button
                            type="submit"
                            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Send
                        </button>
                    </div>
                </form> */}

                <div className="mb-4 flex flex-col gap-y-1">
                    <div className="w-full text-sm break-words">
                        <span className="text-neutral-600 dark:text-neutral-400 mr-1">
                            serking:
                        </span>
                        qwertyuiopasdfghjklzxcvbnm
                    </div>
                </div>
                <div className="mb-4 flex flex-col gap-y-1">
                    <div className="w-full text-sm break-words">
                        <span className="text-neutral-600 dark:text-neutral-400 mr-1">
                            serking:
                        </span>
                        hello lolololol
                    </div>
                </div>
                <div className="mb-4 flex flex-col gap-y-1">
                    <div className="w-full text-sm break-words">
                        <span className="text-neutral-600 dark:text-neutral-400 mr-1">
                            serking:
                        </span>
                        wazzup
                    </div>
                </div>
            </section>

            <p className="bg-gray-100 p-2 text-xs rounded-lg">
                {JSON.stringify(data)}
            </p>
        </main>
    );
}

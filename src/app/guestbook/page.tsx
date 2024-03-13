import type { Metadata } from "next";
import { FaGithub } from "react-icons/fa";

// async function getData() {
//     const res = await fetch(
//         "https://ph.api.buysellee.com/api/v1/home?includeUser=true&includeImages=true",
//         { next: { revalidate: 60 } }
//     );

//     if (!res.ok) {
//         throw new Error("Failed to fetch data");
//     }

//     return res.json();
// }

export const metadata: Metadata = {
    title: "Guestbook | Serking de Orayom",
    description: "Web and mobile app developer",
};

export default async function GuestBook() {
    // const data = await getData();

    return (
        // <section className="flex-auto min-w-0 flex flex-col gap-y-1">
        //     <div>
        //         <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        //             Sign my guestbook &#x1F4D6;
        //         </h1>

        //         <p className="text-xs text-gray-500">
        //             If you&apos;re leaving a message here, remember it&apos;s
        //             public. Be nice and avoid any harsh words that may be
        //             offensive for someone. Keep it positive and considerate.
        //             Thanks!
        //         </p>

        //         <button className="px-3 py-2 border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded text-sm flex items-center leading-4 text-neutral-900 dark:text-neutral-100 mt-8 mb-4">
        //             <FaGithub size={20} />
        //             <div className="ml-3">Sign in with GitHub</div>
        //         </button>

        //         <div className="mt-8 mb-4 flex flex-col gap-y-1">
        //             <div className="w-full text-sm break-words">
        //                 <span className="text-neutral-600 dark:text-neutral-400 mr-1">
        //                     serking:
        //                 </span>
        //                 ill take this site as an inspiration for my next
        //                 portfolio design haha! especially this guestbook
        //             </div>
        //         </div>
        //         <div className="mb-4 flex flex-col gap-y-1">
        //             <div className="w-full text-sm break-words">
        //                 <span className="text-neutral-600 dark:text-neutral-400 mr-1">
        //                     serking:
        //                 </span>
        //                 ill take this site
        //             </div>
        //         </div>
        //         <div className="mb-4 flex flex-col gap-y-1">
        //             <div className="w-full text-sm break-words">
        //                 <span className="text-neutral-600 dark:text-neutral-400 mr-1">
        //                     serking:
        //                 </span>
        //                 ill take this site as an inspiration for my next
        //                 portfolio design
        //             </div>
        //         </div>
        //     </div>
        // </section>
        <section className="flex-auto min-w-0 flex flex-col">
            <h1 className="font-medium text-2xl mb-8 tracking-tighter">
                Coming soon! &#x1F51C;
            </h1>
        </section>
    );
}

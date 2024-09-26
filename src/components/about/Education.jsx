import Link from "next/link";

const Education = () => {
    return (
        <div className="flex flex-col gap-y-6">
            <h2 className="font-medium text-xl tracking-tighter">Education</h2>

            <p>
                I earned my bachelor&apos;s degree in Information Technology at
                the{" "}
                <Link
                    href="https://www.uphsl.edu.ph/"
                    title="Visit site"
                    target="_blank"
                    className="font-medium hover:underline"
                >
                    University of Perpetual Help System Laguna
                </Link>{" "}
                with an academic honor of distinction: <em>Magna Cum Laude</em>.
            </p>
        </div>
    );
};

export default Education;

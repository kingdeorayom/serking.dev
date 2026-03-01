import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col space-y-4">
      <h2>Sorry, the page you are looking for does not exist.</h2>
      <p>
        You can go back to the{" "}
        <Link
          href="/"
          className="underline hover:opacity-75 transition-opacity"
        >
          homepage
        </Link>
        .
      </p>
    </div>
  );
}

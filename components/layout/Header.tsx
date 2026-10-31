import Link from "next/link";
import Subheader from "./Subheader";

export default function Header() {
  return (
    <header className="flex flex-col space-y-1">
      <Link href="/" className="text-2xl font-semibold w-fit">
        <h1>Serking de Orayom</h1>
      </Link>
      <Subheader />
    </header>
  );
}

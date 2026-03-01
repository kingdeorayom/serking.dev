import Link from "next/link";
import Description from "./Description";

export default function Header() {
  return (
    <header className="flex flex-col space-y-1">
      <Link href="/" className="text-xl md:text-2xl font-semibold">
        <h1>Serking de Orayom</h1>
      </Link>
      <Description />
    </header>
  );
}

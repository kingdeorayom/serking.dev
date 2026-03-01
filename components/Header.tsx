import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Link href="/" className="text-xl md:text-2xl font-medium">
        <h1>Serking de Orayom</h1>
      </Link>
    </header>
  );
}

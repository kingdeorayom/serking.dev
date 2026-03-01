"use client";

import { usePathname } from "next/navigation";

export default function Description() {
  const pathname = usePathname();
  const descriptions: Record<string, string> = {
    "/beliefs": "Core principles that guide my thinking and decisions.",
    "/work": "My professional experience and career journey.",
    "/projects": "Projects I've built and contributed to.",
    "/music": "My top artists and tracks from Spotify.",
  };

  const description = descriptions[pathname] || "Software Engineer";

  return <h2>{description}</h2>;
}

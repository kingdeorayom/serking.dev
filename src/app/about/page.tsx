import Introduction from "@/components/about/Introduction";
import Contact from "@/components/Contact";
import SectionWrapper from "@/components/SectionWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Serking de Orayom",
};

export default function AboutPage() {
  return (
    <SectionWrapper>
      <Introduction />
      <Contact />
    </SectionWrapper>
  );
}

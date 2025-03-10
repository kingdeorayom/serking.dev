import Contact from "@/components/Contact";
import Hero from "@/components/home/Hero";
import SectionWrapper from "@/components/SectionWrapper";

export default function HomePage() {
  return (
    <SectionWrapper>
      <Hero />
      <Contact />
    </SectionWrapper>
  );
}

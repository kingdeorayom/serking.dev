import SectionWrapper from "@/components/SectionWrapper";
import Separator from "@/components/Separator";
import Freelancing from "@/components/work/Freelancing";
import Padtech from "@/components/work/Padtech";
import Sociov from "@/components/work/Sociov";

export const metadata = {
  title: "Work - Serking de Orayom",
};

export default function WorkPage() {
  return (
    <SectionWrapper>
      <Freelancing />
      <Separator />
      <Padtech />
      <Separator />
      <Sociov />
    </SectionWrapper>
  );
}

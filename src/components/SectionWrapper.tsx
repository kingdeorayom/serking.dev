import { ReactNode } from "react";

const SectionWrapper = ({ children }: { children: ReactNode }) => (
  <section className="flex flex-col space-y-6">{children}</section>
);

export default SectionWrapper;

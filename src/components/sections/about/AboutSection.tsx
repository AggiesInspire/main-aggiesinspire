import Mission from "./Mission";
import Governance from "@/components/sections/about/Governance";
import OurWork from "./OurWork";
import Heading from "./Heading";

export default function AboutSection() {
  return (
    <section id="about">
      <Heading />
      <div className="bg-white md:h-full md:pb-0 mt-24">
        <Mission />
        <OurWork />
        <Governance />
      </div>
    </section>
  );
}

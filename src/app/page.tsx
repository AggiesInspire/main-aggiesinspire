import { ContactUs } from "@/components/ui/sections/ContactUs";
import Home from "./(home)/Home";
import { PageWrapper } from "@/components/PageWrapper";

export default function HomePage() {
  return (
    <section id="home" className=" bg-gray-20 md:h-full md:pb-0">
      <PageWrapper>
        <div>
          {/* Taken from (sub-sections) under the home root */}
          <Home />
          <ContactUs />
        </div>
      </PageWrapper>
    </section>
  );
}

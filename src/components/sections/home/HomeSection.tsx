import BackgroundVideo from "@/components/sections/home/BackgroundVideo";
import BackgroundDescription from "./BackgroundDescription";
import Partners from "./Partners";
import MediaContent from "./MediaContent";
import QuickNavigation from "./QuickNavigation";
import Footer from "../footer/Footer";

import { ContactUs } from "../contact/ContactUs";

const HomeSection = () => {
  return (
    <>
      <section id="home-section">
        <section id="home-screen">
          <BackgroundVideo />
          <BackgroundDescription />
        </section>
        <div className="bg-primary-1000">
          <QuickNavigation />
          <Partners />
          <MediaContent />

          <div className="sm:mx-auto sm:w-39/40 sm:border sm:border-white"></div>
          <ContactUs />
        </div>
      </section>

      <Footer bgColor="bg-primary-200" />
    </>
  );
};

export default HomeSection;

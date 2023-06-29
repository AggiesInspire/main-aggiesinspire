import Logo from "@/images/Logo.png";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import FootLink from "@/components/links/FooterLink";
import { SelectedPage } from "@/components/types";

const Footer = () => {
  return (
    <footer className="bg-primary-300 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <Image alt="logo" src={Logo} />
          <p className="my-5"></p>
          <p>© 2023 Aggies Inspire Inc. All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <div>
            {/* About */}
            <h4 className="font-bold">About</h4>
            <FootLink path={SelectedPage.Governance}>
              <p className="my-1">Meet the Team</p>
            </FootLink>
            <FootLink path={SelectedPage.Mission}>
              <p className="my-1">Mission and Vision</p>
            </FootLink>
            <FootLink path={SelectedPage.Operations}>
              <p className="my-1">How We Operate</p>
            </FootLink>
          </div>
          {/* Media */}
          <div className="my-5">
            <h4 className="font-bold">Media</h4>
            <FootLink path={SelectedPage.InspiringSeries}>
              {" "}
              <p className="my-1">Inspiring</p>
            </FootLink>

            {/* <p className="my-1">Professional Insights</p>
            <p>College Advice </p> */}
          </div>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <div>
            {/* Donor Relations */}
            <h4 className="font-bold">Donor Relations</h4>
            {/* <p className="my-1">Financials</p>
            <p className="my-1">Program Statistics</p> */}
            <FootLink path={SelectedPage.Donate}>Donate</FootLink>
          </div>
          <div className="my-5">
            {/* Programs */}
            <h4 className="font-bold">Programs</h4>
            {/* <FootLink path={SelectedPage.Scholarships}>
              <p className="my-1">Aggies Inspire Scholarship</p>
            </FootLink> */}
            <FootLink path={SelectedPage.AggiesInspireMedia}>
              <p className="my-1">Aggies Inspire Media</p>
            </FootLink>
            {/* <FootLink path={SelectedPage.AggiesAssist}>
              <p className="my-1">Aggies Assist</p>
            </FootLink> */}
          </div>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <h4 className="mt-5 items-center justify-between gap-8 md:flex">
            <SocialIcon
              url="https://www.linkedin.com/company/aggies-inspire"
              target="_blank"
            />
            <SocialIcon
              url="https://youtube.com/@aggiesinspire"
              target="_blank"
            />
            <SocialIcon
              url="https://instagram.com/aggiesinspire"
              target="_blank"
            />
            <SocialIcon
              url="https://twitter.com/aggiesinspire"
              target="_blank"
            />
            <SocialIcon
              url="https://github.com/AggiesInspire"
              target="_blank"
            />
          </h4>

          <p className="my-5">aggiesinspire@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

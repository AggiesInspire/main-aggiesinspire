import Image from "next/image";

import { SocialIcon } from "react-social-icons";

import FootLink from "@/components/links/FooterLink";

import Logo from "@/images/Logo.png";

type Props = {
  bgColor?: string;
};

const Footer = ({ bgColor = "bg-primary-300" }: Props) => {
  const medias = [
    { title: "Youtube", link: "https://www.youtube.com/@aggiesinspire" },
  ];

  const donates = [
    {
      title: "Donate",

      link: "https://givebutter.com/aggies-inspire",
    },
  ];

  const socials = [
    {
      title: "linkedin",
      url: "https://www.linkedin.com/company/aggies-inspire",
    },
    {
      title: "youtube",
      url: "https://youtube.com/@aggiesinspire",
    },
    {
      title: "instagram",
      url: "https://instagram.com/aggiesinspire",
    },
    {
      title: "twitter",
      url: "https://twitter.com/aggiesinspire",
    },
    {
      title: "github",
      url: "https://github.com/AggiesInspire",
    },
  ];

  return (
    <footer className={`${bgColor} pb-96 pt-24`}>
      <div className="justify-content mx-auto w-39/40 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <Image alt="logo" src={Logo} height={250} width={220} />
          <p className="my-5"></p>
          <p>© 2023 Aggies Inspire Inc. All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          {/* Media */}
          <div>
            <h4 className="font-bold">Media</h4>
            {medias.map((media) => (
              <FootLink path={media.link} key={media.title}>
                <p className="my-1">{media.title}</p>
              </FootLink>
            ))}
          </div>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <div>
            {/* Donor Relations */}
            <h4 className="font-bold">Donor Relations</h4>
            {donates.map((donate) => (
              <FootLink path={donate.link} key={donate.title}>
                {donate.title}
              </FootLink>
            ))}
          </div>
          <div className="my-5"></div>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <h4 className="mt-5 items-center justify-between gap-8 md:flex">
            {socials.map((social) => (
              <SocialIcon url={social.url} key={social.title} target="_blank" />
            ))}
          </h4>

          <p className="my-5">aggiesinspire@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

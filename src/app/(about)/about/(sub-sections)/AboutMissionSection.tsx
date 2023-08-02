"use client";

import { FcLandscape } from "react-icons/fc";
import { FcBinoculars } from "react-icons/fc";
import { motion } from "framer-motion";
import LargeHeading from "@/components/ui/text-formatting/LargeHeading";

import IconContainer from "@/components/ui/container/IconContainer";
import { AboutSelectedPage } from "@/components/types";
import classNames from "classnames";

type Props = {
  setSelectedPage: (value: AboutSelectedPage) => void;
};

const AboutMissionSection = ({ setSelectedPage }: Props) => {
  const contents = [
    {
      title: "Vision",
      Icon: FcBinoculars,
      content: ` Our goal is to inspire the next generation by providing
                 free programs that will be informative and encouraging to
                 young audiences. We have particular focus on inspiring those
                 who are in the underrepresented categlory in S.T.E.M. based
                 fields, by increasing our outreach to those communities.`,
      link: "",
    },
    {
      title: "Goals",
      Icon: FcLandscape,
      content: ` We hope to accomplish our mission by furthering our media
                  division and partnering with other non-profits to
                  help increase exposure of these fields to students who do not
                  have this information readily available.`,

      link: "",
    },
  ];
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };
  return (
    <div className="pb-20">
      <div className="w-11/12 mx-auto grid md:grid-cols-6 grid-cols-1 grid-rows-6 ">
        <div
          className="flex justify-start pt-2"
          style={{ alignItems: "center" }}
        >
          <div
            style={{
              flex: "0.3",
              backgroundColor: "#FF9595",
              height: "3px",
            }}
          />
          <LargeHeading size={"xs"} className="pl-2">
            MISSION
          </LargeHeading>
        </div>
        <section
          id="Mission"
          className={classNames(
            "border border-t-0 border-b-0",
            "md:row-span-6 row-span-5 col-span-5",
          )}
        >
          <motion.div
            className="md:px-8 px-2"
            onViewportEnter={() => setSelectedPage(AboutSelectedPage.Mission)}
          >
            <motion.div
              className="grid grid-cols-1 grid-rows-2 md:pt-8 pt-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={container}
            >
              {contents.map((content) => (
                <figure key={content.title}>
                  <IconContainer
                    content={content.content}
                    title={content.title}
                    Icon={content.Icon}
                    link={""}
                  />
                </figure>
              ))}
            </motion.div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default AboutMissionSection;

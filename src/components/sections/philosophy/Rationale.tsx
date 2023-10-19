"use client";

import { FcDam } from "react-icons/fc";
import { FcTwoSmartphones } from "react-icons/fc";
import { motion } from "framer-motion";
import classNames from "classnames";
import LargeHeading from "@/components/text-formatting/LargeHeading";

import IconContainer from "@/components/containers/IconContainer";

type Props = {};

const AboutRationaleSection = () => {
  const contents = [
    {
      title: "Dissemination of Information",
      Icon: FcTwoSmartphones,
      content: `Knowledge is imperative for decision making, especially when it comes to one's future.
      There are many stories of one's who have soul search for so long to finally found a profession that 
      matches. For those fortunate to find the profession that suits them, 
      there was precious time lost throughout the journey. One of the goals of Aggies Inspire is to help 
      decrease the amount of "time lost" by providing easily accessible valuable information from those who are in the 
      profession of one's interest.`,
      link: "",
    },
    {
      title: "Imbalances",
      Icon: FcDam,
      content: `Ideally, within each profession, the ethnic demographics should be matching or be close to matching 
      the ethnic demographics of the population. When an imbalance occurs, organic measures should be taken to ameliorate the issue.
      At Aggies Inspire, we actively seek out underrepresented minority professionals to help serve as role models and 
      encouragement to those of similar backgrounds.`,
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
    <div className="w-11/12 mx-auto grid md:grid-cols-6 grid-cols-1 grid-rows-6">
      <div className="flex justify-start pt-2" style={{ alignItems: "center" }}>
        <div
          style={{
            flex: 0.3,
            backgroundColor: "#FF9595",
            height: "3px",
          }}
        />
        <LargeHeading size={"xs"} className="py-1 pl-2">
          RATIONALE
        </LargeHeading>
      </div>

      <section
        id="rationale"
        className={classNames(
          "border border-t-0 border-b-0",
          "md:row-span-6 row-span-5 col-span-5",
        )}
      >
        <div className="md:px-8 px-2">
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
        </div>
      </section>
    </div>
  );
};

export default AboutRationaleSection;

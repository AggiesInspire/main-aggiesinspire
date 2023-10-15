"use client";

import React from "react";
import { motion } from "framer-motion";
import LargeHeading from "@/components/text-formatting/LargeHeading";
import Paragraph from "@/components/text-formatting/Paragraph";

type Props = {};

const Content = (props: Props) => {
  const contents = [
    {
      title: "MISSION",
      content:
        "Our mission is to inspire the next generation by providing free programs that will be informative and encouraging to young audiences. We have particular focus on inspiring those who are in the underrepresented categlory in S.T.E.M. based fields, by increasing our outreach to those communities. ",
    },
    {
      title: "GOALS",
      content:
        "Our goal is to provide valuable career information to young individuals through media. We plan on enacting this goal through our partnerships with non-profits with a similar vision as us.",
    },
  ];
  return (
    <section>
      <figure className="flex flex-col shadow-xl p-10">
        {contents.map((content) => (
          <>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex justify-between "
              style={{ alignItems: "center" }}
            >
              <LargeHeading size={"xs"} className="pr-2">
                {content.title}
              </LargeHeading>
              <div
                style={{
                  flex: 1,
                  backgroundColor: "#FF9595",
                  height: "3px",
                }}
              />
            </motion.div>
            <motion.div
              className="pb-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <Paragraph>{content.content}</Paragraph>
            </motion.div>
          </>
        ))}
      </figure>
    </section>
  );
};

export default Content;

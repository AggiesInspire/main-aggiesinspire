"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import LargeHeading from "@/components/ui/text-formatting/LargeHeading";
import Paragraph from "@/components/ui/text-formatting/Paragraph";
import { paragraphVariants } from "@/components/ui/text-formatting/Paragraph";

import { boardMembers } from "@/data/images/boardMembers";

const GovernanceSection = () => {
  // board members
  const president = boardMembers.president;
  const vicePresident = boardMembers.vicePresident;
  const secretary = boardMembers.secretary;
  const treasurer = boardMembers.treasurer;
  const firstBoard = boardMembers.firstDirector;

  const board = [
    {
      position: president,
      imageIndex: 2,
      imageIndexMedium: 1,
      descriptionIndex: 1,
      descriptionIndexMedium: 2,
    },
    {
      position: vicePresident,
      imageIndex: 4,
      imageIndexMedium: 4,
      descriptionIndex: 3,
      descriptionIndexMedium: 3,
    },

    {
      position: secretary,
      imageIndex: 6,
      imageIndexMedium: 5,
      descriptionIndex: 5,
      descriptionIndexMedium: 6,
    },

    {
      position: treasurer,
      imageIndex: 8,
      imageIndexMedium: 8,
      descriptionIndex: 7,
      descriptionIndexMedium: 7,
    },

    {
      position: firstBoard,
      imageIndex: 10,
      imageIndexMedium: 9,
      descriptionIndex: 9,
      descriptionIndexMedium: 10,
    },
  ];

  // dimensions
  const height = 1400;
  const width = 1300;

  return (
    <section className="ml-auto bg-gray-20">
      <div className="pb-20">
        {/* Title of the Section */}
        <LargeHeading
          size={"xl"}
          className="mx-auto w-11/12 justify-between py-5 "
        >
          Board of Directors
        </LargeHeading>

        {/* Standard for the body */}
        <div className="flex md:flex mx-auto w-11/12 justify-between p-2">
          {/* Change body based on size */}
          <div className="grid md:grid-cols-2 md:gap-3 grid-cols-1 gap-4">
            {/* map out the list of boardmembers with respective position */}
            {board.map((member) => (
              <>
                <motion.div
                  className={`flex flex-col justify-between md:order-${member.imageIndexMedium} order-${member.imageIndex}`}
                  transition={{ duration: 0.5 }}
                  initial="hidden"
                  whileInView="visible"
                  key={member.imageIndex}
                  variants={{
                    hidden: { opacity: 0, y: 0 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Image
                    alt={member.position.title}
                    src={member.position.url}
                    height={height}
                    width={width}
                    className="mx-auto rounded-md object-cover"
                  />
                </motion.div>
                <div
                  className={`md:flex md:flex-col md:order-${member.descriptionIndexMedium} order-${member.descriptionIndex}`}
                  key={member.descriptionIndex}
                >
                  <figure className=" md:flex-auto bg-slate-100 rounded-md p-2">
                    <div className="flex h-full flex-wrap flex-col flex-grow-0 justify-between">
                      <div>
                        <motion.div
                          className="py-10 px-10 left-0 top-0"
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{ duration: 0.5 }}
                          variants={{
                            hidden: { opacity: 0, y: -50 },
                            visible: { opacity: 1, y: 0 },
                          }}
                        >
                          <p className="text-3xl">{member.position.name}</p>
                        </motion.div>
                      </div>

                      <div className="">
                        <Paragraph
                          className={paragraphVariants({ size: "sm" })}
                        >
                          {member.position.description}
                        </Paragraph>
                      </div>
                    </div>
                  </figure>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GovernanceSection;

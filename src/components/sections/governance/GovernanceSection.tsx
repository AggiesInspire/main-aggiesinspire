"use client";
// this section is optimized as of 10/10/23
import Image from "next/image";
import { LazyMotion, m, domAnimation } from "framer-motion";

import { DisableAnimationOnMobile } from "@/components/modify-children/DisableAnimationOnMobile";

import LargeHeading from "@/components/text-formatting/LargeHeading";
import Paragraph from "@/components/text-formatting/Paragraph";
import { paragraphVariants } from "@/components/text-formatting/Paragraph";

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
      descriptionIndex: 1,
      imageIndexMedium: 2,
      descriptionIndexMedium: 1,
      key: "president",
    },
    {
      position: vicePresident,
      imageIndex: 2,
      descriptionIndex: 1,
      imageIndexMedium: 1,
      descriptionIndexMedium: 2,
      key: "vicePresident",
    },

    {
      position: secretary,
      imageIndex: 2,
      descriptionIndex: 1,
      imageIndexMedium: 2,
      descriptionIndexMedium: 1,
      key: "secretary",
    },

    {
      position: treasurer,
      imageIndex: 2,
      descriptionIndex: 1,
      imageIndexMedium: 1,
      descriptionIndexMedium: 2,
      key: "treasurer",
    },

    {
      position: firstBoard,
      imageIndex: 2,
      descriptionIndex: 1,
      imageIndexMedium: 2,
      descriptionIndexMedium: 1,
      key: "firstBoard",
    },
  ];

  // dimensions
  const height = 1400;
  const width = 1300;

  return (
    <section className="ml-auto bg-gray-20">
      <LazyMotion features={domAnimation}>
        <div className="pb-20">
          {/* Title of the Section */}
          <LargeHeading
            size={"xl"}
            className="mx-auto w-11/12 justify-between py-5 "
          >
            Board of Directors
          </LargeHeading>

          {/* Standard for the body */}
          <div className="flex flex-col md:flex mx-auto w-11/12 justify-between p-2">
            {/* Change body based on size */}
            {/* map out the list of boardmembers with respective position */}
            {board.map((member) => (
              <div
                className="grid md:grid-cols-2 md:gap-3 grid-cols-1 gap-4 py-1"
                key={member.key}
              >
                <DisableAnimationOnMobile>
                  <div
                    className={`flex flex-col justify-between md:order-${member.imageIndexMedium} order-${member.imageIndex}`}
                    key={member.imageIndex}
                  >
                    <Image
                      alt={member.position.title}
                      src={member.position.url}
                      height={height}
                      width={width}
                      loading="eager"
                      className="mx-auto rounded-md object-cover"
                    />
                  </div>
                  <div
                    className={`md:flex md:flex-col md:order-${member.descriptionIndexMedium} order-${member.descriptionIndex}`}
                    key={member.descriptionIndex}
                  >
                    <figure className=" md:flex-auto bg-slate-100 rounded-md p-2">
                      <div className="flex h-full flex-wrap flex-col flex-grow-0 justify-between">
                        <div>
                          {/* need a second one because it is too nested */}
                          <DisableAnimationOnMobile>
                            <m.div
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
                            </m.div>
                          </DisableAnimationOnMobile>
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
                </DisableAnimationOnMobile>
              </div>
            ))}
          </div>
        </div>
      </LazyMotion>
    </section>
  );
};

export default GovernanceSection;

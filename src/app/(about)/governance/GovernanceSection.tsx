"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import useMediaQuery from "@/hooks/useMediaQuery";

import LargeHeading from "@/components/ui/text-formatting/LargeHeading";
import Paragraph from "@/components/ui/text-formatting/Paragraph";
import { paragraphVariants } from "@/components/ui/text-formatting/Paragraph";
import TypeWriter from "@/components/ui/text-formatting/TypeWriter";
import InViewEffect from "@/components/ui/text-formatting/InViewEffect";

import JohnW from "@/images/Governance/JohnW.jpg";
import Joseph from "@/images/Governance/Joseph.jpg";
import Peter from "@/images/Governance/Peter.jpg";
import Grace from "@/images/Governance/Grace.jpg";
import Jonathan from "@/images/Governance/Jonathan.jpg";

const GovernanceSection = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section className="ml-auto bg-gray-20">
      <div className="pb-20">
        {/* Title of the Section */}
        <InViewEffect>
          <LargeHeading className="mx-auto w-5/6 justify-between py-5 border:border-x-0:border-t-0 border-b-2 border-primary-300">
            <TypeWriter
              Markup={"span"}
              interval={50}
              text="Board of Directors"
            />
          </LargeHeading>
        </InViewEffect>

        {/* Standard for the body */}
        <div className="flex md:flex mx-auto w-5/6 justify-between p-2">
          {/* Change body based on size */}
          {isAboveMediumScreens ? (
            <div className="grid grid-cols-2 gap-3">
              {/* Section 1 */}

              <div className="flex flex-col justify-between order-1">
                <Image
                  alt="Board Member - John W."
                  src={JohnW}
                  height={1300}
                  width={600}
                  className="mx-auto rounded-md object-cover"
                />
              </div>
              <div className="flex flex-col order-2">
                <figure className=" flex-auto bg-slate-100 rounded-md p-2">
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
                        <p className="text-3xl">John Wu</p>
                      </motion.div>
                    </div>

                    <div className="">
                      <Paragraph className={paragraphVariants({ size: "sm" })}>
                        Mr. Wu currently serves as the President of Aggies
                        Inspire Inc. and is one of the organization&apos;s
                        founders. He is a College Station native and graduated
                        from Texas A&M University with a B.S. in Biomedical
                        Sciences.
                      </Paragraph>
                    </div>
                  </div>
                </figure>
              </div>

              {/* Section 2 */}

              <div className="flex flex-col justify-between order-4">
                <Image
                  alt="Board Member - Joseph E."
                  src={Joseph}
                  height={1300}
                  width={600}
                  className="mx-auto rounded-md object-cover"
                />
              </div>
              <div className="flex flex-col order-3">
                <figure className="flex-auto bg-slate-100 rounded-md  p-2">
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
                        <p className="text-3xl">Joseph Esquivel</p>
                      </motion.div>
                    </div>

                    <div className="">
                      <Paragraph className={paragraphVariants({ size: "sm" })}>
                        Mr. Esquivel actively serves as the Vice President of
                        Aggies inspire Inc. and is one of our founders. He was
                        raised in a Costa Rican home and lived most of his life
                        on Texas soil. As a young adult, he was obsessed with
                        robotics and later worked in the engineering department
                        at Lockheed Martin. Today, the Costa Rican is a senior
                        at Texas A&M studying Logistics who will be working in
                        operations research at Applied Materials Inc.
                      </Paragraph>
                    </div>
                  </div>
                </figure>
              </div>

              {/* Section 3 */}

              <div className="flex flex-col justify-between order-5">
                <Image
                  alt="Board Member - Peter W."
                  src={Peter}
                  height={1300}
                  width={600}
                  className="mx-auto rounded-md object-cover"
                />
              </div>
              <div className="flex flex-col order-6">
                <figure className="flex-auto bg-slate-100 rounded-md p-2">
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
                        <p className="text-3xl">Peter Wu</p>
                      </motion.div>
                    </div>

                    <div className="">
                      <Paragraph className={paragraphVariants({ size: "sm" })}>
                        Mr. Wu currently serves as the Secretary for Aggies
                        Inspire Inc. and is one of our founders. Mr. Wu is a
                        native to College Station. He has experience in private
                        equity conducting due diligence to place financial firms
                        in a strong strategic positions. He is a senior Texas
                        A&M student majoring in Finance.
                      </Paragraph>
                    </div>
                  </div>
                </figure>
              </div>

              {/* Section 4 */}
              <div className="flex flex-col justify-between order-8">
                <Image
                  alt="Board Member - Grace W."
                  src={Grace}
                  height={1300}
                  width={600}
                  className="mx-auto rounded-md object-cover"
                />
              </div>
              <div className="flex flex-col order-7">
                <figure className="flex-auto bg-slate-100 rounded-md p-2">
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
                        <p className="text-3xl">Grace Wu</p>
                      </motion.div>
                    </div>

                    <div className="">
                      <Paragraph className={paragraphVariants({ size: "sm" })}>
                        Ms. Wu currently serves as the Treasurer of Aggies
                        Inspire. Ms. Wu joined the board on October 2021. She is
                        a native to College Station and brings in work
                        experience in tax-accounting at one of the big four
                        accounting firms. She is a junior Texas A&M student in
                        the PPA program majoring in Accounting.
                      </Paragraph>
                    </div>
                  </div>
                </figure>
              </div>

              {/* Section 5 */}
              <div className="flex flex-col justify-between order-9">
                <Image
                  alt="Board Member - Jonathan C."
                  src={Jonathan}
                  height={1300}
                  width={600}
                  className="mx-auto rounded-md object-cover"
                />
              </div>
              <div className="flex flex-col order-10">
                <figure className="flex-auto bg-slate-100 rounded-md p-2">
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
                        <p className="text-3xl">Jonathan Childs</p>
                      </motion.div>
                    </div>

                    <div className="">
                      <Paragraph className={paragraphVariants({ size: "sm" })}>
                        Mr. Childs currently serves as a board member and the
                        Chief Student Leader of Aggies Inspire Club at Texas A&M
                        University. Mr. Childs joined the board on March 2023.
                        He is a College Station native, who is current senior at
                        Texas A&M University pursuing a BBA in Finance.
                      </Paragraph>
                    </div>
                  </div>
                </figure>
              </div>
            </div>
          ) : (
            /////////////////////////////////////////////////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////////////////////////////////////////
            /* For smaller screens */

            <div className="grid grid-cols-1 gap-4">
              {/* Section 1 */}

              <div className="flex justify-between order-2">
                <Image
                  alt="Board Member - John W."
                  src={JohnW}
                  height={1300}
                  width={600}
                  className="mx-auto rounded-md"
                />
              </div>
              <div className="order-1">
                <figure className=" bg-slate-100 rounded-md p-2">
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
                        <p className="text-3xl">John Wu</p>
                      </motion.div>
                    </div>

                    <div className="">
                      <Paragraph className={paragraphVariants({ size: "sm" })}>
                        Mr. Wu currently serves as the President of Aggies
                        Inspire Inc. and is one of the organization&apos;s
                        founders. He is a College Station native and graduated
                        from Texas A&M University with a B.S. in Biomedical
                        Sciences. He was the one who developed this website.
                      </Paragraph>
                    </div>
                  </div>
                </figure>
              </div>

              {/* Section 2 */}

              <div className="flex justify-between order-4">
                <Image
                  alt="Board Member - Joseph E."
                  src={Joseph}
                  height={1300}
                  width={600}
                  className="mx-auto rounded-md"
                />
              </div>
              <div className="order-3">
                <figure className=" bg-slate-100 rounded-md p-2">
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
                        <p className="text-3xl">Joseph Esquivel</p>
                      </motion.div>
                    </div>

                    <div className="">
                      <Paragraph className={paragraphVariants({ size: "sm" })}>
                        Mr. Esquivel actively serves as the Vice President of
                        Aggies inspire Inc. and is one of our founders. He was
                        raised in a Costa Rican home and lived most of his life
                        on Texas soil. As a young adult, he was obsessed with
                        robotics and later worked in the engineering department
                        at Lockheed Martin. Today, the Costa Rican is a senior
                        at Texas A&M studying Logistics who will be working in
                        operations research at Applied Materials Inc.
                      </Paragraph>
                    </div>
                  </div>
                </figure>
              </div>

              {/* Section 3 */}

              <div className="flex justify-between order-6">
                <Image
                  alt="Board Member - Peter W."
                  src={Peter}
                  height={1300}
                  width={600}
                  className="mx-auto rounded-md"
                />
              </div>
              <div className="order-5">
                <figure className=" bg-slate-100 rounded-md p-2">
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
                        <p className="text-3xl">Peter Wu</p>
                      </motion.div>
                    </div>

                    <div className="">
                      <Paragraph className={paragraphVariants({ size: "sm" })}>
                        Mr. Wu currently serves as the Secretary for Aggies
                        Inspire Inc. and is one of our founders. Mr. Wu is a
                        native to College Station. He has experience in private
                        equity conducting due diligence to place financial firms
                        in a strong strategic positions. He is a senior Texas
                        A&M student majoring in Finance.
                      </Paragraph>
                    </div>
                  </div>
                </figure>
              </div>

              {/* Section 4 */}
              <div className="flex justify-between order-8">
                <Image
                  alt="Board Member - Grace W."
                  src={Grace}
                  height={1300}
                  width={600}
                  className="mx-auto rounded-md"
                />
              </div>
              <div className="order-7">
                <figure className=" bg-slate-100 rounded-md p-2">
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
                        <p className="text-3xl">Grace Wu</p>
                      </motion.div>
                    </div>

                    <div className="">
                      <Paragraph className={paragraphVariants({ size: "sm" })}>
                        Ms. Wu currently serves as the Treasurer of Aggies
                        Inspire. Ms. Wu joined the board on October 2021. She is
                        a native to College Station and brings in work
                        experience in tax-accounting at one of the big four
                        accounting firms. She is a junior Texas A&M student in
                        the PPA program majoring in Accounting.
                      </Paragraph>
                    </div>
                  </div>
                </figure>
              </div>

              {/* Section 5 */}
              <div className="flex justify-between order-10">
                <Image
                  alt="Board Member - Jonathan C."
                  src={Jonathan}
                  height={1300}
                  width={600}
                  className="mx-auto rounded-md"
                />
              </div>
              <div className="order-9">
                <figure className=" bg-slate-100 rounded-md p-2">
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
                        <p className="text-3xl">Jonathan Childs</p>
                      </motion.div>
                    </div>

                    <div className="">
                      <Paragraph className={paragraphVariants({ size: "sm" })}>
                        Mr. Childs currently serves as a board member and the
                        Chief Student Leader of Aggies Inspire Club at Texas A&M
                        University. Mr. Childs joined the board on March 2023.
                        He is a College Station native, who is current senior at
                        Texas A&M University pursuing a BBA in Finance. While at
                        Texas A&M, he has utilized the foundational knowledge
                        imparted to gain a deeper understanding of fiscal social
                        behavior.
                      </Paragraph>
                    </div>
                  </div>
                </figure>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GovernanceSection;

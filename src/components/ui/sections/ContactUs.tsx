"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

import TypeWriter from "../text-formatting/TypeWriter";
import InViewEffect from "../text-formatting/InViewEffect";
import LargeHeading from "@/components/ui/text-formatting/LargeHeading";
import useMediaQuery from "@/hooks/useMediaQuery";

export const ContactUs = () => {
  const isAboveSmallScreens = useMediaQuery("(min-width:786px)");
  /* Contact Us Functionalities */
  const inputStyles = `mt-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();
  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <section
      id="contactus"
      className={` bg-gradient-to-r from-primary-100 to-primary-50 ${
        isAboveSmallScreens ? "pb-32 pt-24" : "pb-16 pt-12"
      } `}
    >
      <motion.div className="mx-auto w-11/12">
        {/* Header */}
        <div className="md: w-3/5">
          <LargeHeading size={"xl"}>
            <InViewEffect>
              <TypeWriter
                text="Get Involved"
                Markup={"span"}
                interval={50}
              ></TypeWriter>
            </InViewEffect>
          </LargeHeading>
        </div>
        {/* Form */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.75 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/236bdbcd25bed349a136d194cc6119a3"
              method="POST"
            >
              <input
                className={inputStyles}
                type="text"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 characters."}
                </p>
              )}
              <input
                className={inputStyles}
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}
              <textarea
                className={inputStyles}
                rows={4}
                cols={50}
                placeholder="MESSAGE"
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 characters."}
                </p>
              )}
              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

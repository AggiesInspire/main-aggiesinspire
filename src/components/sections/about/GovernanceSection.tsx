"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import classNames from "classnames";

import { SelectedPage } from "@/types/pageTypes";
import { board } from "@/data/images/sections/aboutGovernanceSection/board";

import useMediaQuery from "@/hooks/useMediaQuery";
import LargeHeading from "@/components/text-formatting/LargeHeading";

// for future use
type Props = {};

const GovernanceSection = () => {
  const [activeItem, setActiveItem] = useState(3);
  const wrapperRef = useRef<HTMLUListElement | null>(null);
  const timeoutRef = useRef<number | null>(null);
  useEffect(() => {
    if (!wrapperRef) {
      return;
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    wrapperRef.current!.style.setProperty(
      "--transition",
      "600ms cubic-bezier(0.22,0.61,0.36, 1)",
    );
    timeoutRef.current = window.setTimeout(() => {
      wrapperRef.current?.style.removeProperty("--transition");
    }, 900);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [activeItem]);

  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="governance" className="mx-auto bg-gray-50 pt-20 pb-40">
      <div className="md:px-10 w-11/12 pb-14">
        <LargeHeading size={"lg"}></LargeHeading>
      </div>
      <div className="flex flex-col h-full w-full items-center justify-center">
        <div className="w-[1200px] max-w-full">
          <ul
            ref={wrapperRef}
            className="group flex flex-col gap-3 md:gap-[1.5%] md:h-[640px] md:flex-row "
          >
            {board.map((member, index) => (
              <li
                onClick={() => setActiveItem(index)}
                aria-current={activeItem === index}
                key={member.name}
                className={classNames(
                  "relative md:flex-none flex justify-between md:cursor-pointer md:w-[14%] md:first:w-[10%] md:last:w-[10%] overflow-hidden md:[&[aria-current='true']]:w-[48%] bg-primary-200 rounded-2xl",
                  "md:[transition:width_var(--transition,200ms_ease-in)]",
                  "md:[&:not(:hover),&not(:first),&not(:last)]:group-hover:w-[16%] md:hover:w-[18%] ",
                  "before:absolute before:bottom-0 before:left-[-10px] before:right-[-10px] before:top-0 before:hidden before:bg-white",
                )}
              >
                <div className="order-2 relative overflow-hidden rounded-2xl md:h-full md:w-full w-24 h-24">
                  <Image
                    src={member.url}
                    alt={member.name}
                    width={500}
                    height={1200}
                    className="absolute right-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-auto w-24 md:h-[640px] md:w-[590px] max-w-none object-cover"
                  ></Image>
                  <div
                    className={classNames(
                      "inset-0 opacity-25 duration-300 before:absolute before:bottom-0 before:left-[-546px] before:right-0 before:top-[-148px] before:z-10 before:bg-texture  after:bottom-[28px] after:left-0 after:right-[-434px] after:top-0 after:z-10 after:bg-texture md:absolute md:transition-opacity",
                      activeItem === index ? "md:opacity-25" : "md:opacity-0",
                    )}
                  />
                </div>

                <div
                  className={classNames(
                    "left-8 top-8 w-[590px] p-4 transition-[transform,opacity] md:absolute md:p-0",
                    activeItem === index
                      ? "md:translate-x-0 md:opacity-100"
                      : "md:translate-x-4 md:opacity-0",
                  )}
                >
                  <p className="text-sm uppercase text-primary md:text-lg">
                    {member.title}
                  </p>
                  <p className="text-lg font-bold md:text-white md:text-4xl">
                    {member.name}
                  </p>
                  {isAboveMediumScreens ? (
                    <></>
                  ) : (
                    <p>
                      <Link
                        className="hover:text-white text-sm"
                        href={SelectedPage.Governance}
                      >
                        More Details
                      </Link>
                    </p>
                  )}
                </div>
                <div>
                  {isAboveMediumScreens ? (
                    <p
                      className={classNames(
                        "absolute bottom-0 p-4 text-primary-500 hover:text-primary-300",
                        activeItem === index
                          ? "md:translate-x-0 md:opacity-100"
                          : "md:translate-x-4 md:opacity-0",
                      )}
                    >
                      <Link href={SelectedPage.Governance}>More Details</Link>
                    </p>
                  ) : (
                    <></>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default GovernanceSection;

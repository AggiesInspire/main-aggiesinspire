"use client";

import React from "react";

import AnchorLink from "react-anchor-link-smooth-scroll";

import { ArrowLongDownIcon } from "@heroicons/react/24/solid";

import useMediaQuery from "@/hooks/useMediaQuery";

/* Button that is in testing phase. May use as standard in the future */
import { buttonVariants } from "../widgets/Button";

type Props = {
  name: string;
  selectedPage: any;
  setSelectedPage: (value: any) => void;
};

const SideNavbar = ({ name, selectedPage, setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const lowerCasePage = name.toLowerCase().replace(/ /g, "");

  return (
    <div className="ml-auto py-5">
      {isAboveMediumScreens ? (
        <div className="flex justify-between">
          {/* for some reason I could not get the AnchorLink and the image to align together under one anchorlink tag */}
          <div>
            <AnchorLink
              href={`#${lowerCasePage}`}
              onClick={() => setSelectedPage(lowerCasePage)}
              className={`${buttonVariants({
                variant: "outline",
                size: "outlineLg",
              })}
              ${
                selectedPage === lowerCasePage
                  ? "border-primary-500"
                  : "text-primary-500 border-primary-400"
              }`}
            >
              {name}
            </AnchorLink>
          </div>
          <div>
            <AnchorLink
              href={`#${lowerCasePage}`}
              onClick={() => setSelectedPage(lowerCasePage)}
            >
              {/*              <ArrowLongDownIcon
                className={` ${
                  selectedPage === lowerCasePage
                    ? "border:border-x-0:border-b-0 border-t-2 border-primary-500  h-6 w-4"
                    : "border:border-x-0:border-b-0 border-t-2 border-primary-400 text-primary-300 h-6 w-4"
                } `}
              /> */}
            </AnchorLink>
          </div>
        </div>
      ) : (
        <div className="flex justify-between">
          {/* for some reason I could not get the AnchorLink and the image to align together under one anchorlink tag */}
          <div>
            <AnchorLink
              href={`#${lowerCasePage}`}
              onClick={() => setSelectedPage(lowerCasePage)}
              className={`${buttonVariants({
                variant: "outline",
                size: "outlineSm",
              })}
              `}
            >
              {name}
            </AnchorLink>
          </div>
          <div>
            <AnchorLink
              href={`#${lowerCasePage}`}
              onClick={() => setSelectedPage(lowerCasePage)}
            >
              {/* weird error  
              <ArrowLongDownIcon
                className={` ${
                  selectedPage === lowerCasePage
                    ? "border:border-x-0:border-b-0 border-t-2 border-primary-500 text-primary-300 h-6 w-4"
                    : "border:border-x-0:border-b-0 border-t-2 border-primary-500 h-6 w-4"
                } `}
              /> */}
            </AnchorLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideNavbar;

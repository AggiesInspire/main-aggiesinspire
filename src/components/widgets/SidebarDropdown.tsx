"use client";
import React from "react";
import { useState } from "react";

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { NavbarTypes } from "@/types/navbarTypes";

type Props = {
  navbarLink: NavbarTypes;
  bgColor?: string;
  textColor?: string;
};

const SidebarDropdown = ({
  navbarLink,
  bgColor = "bg-primary-200",
  textColor,
}: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className={`mx-auto w-11/12 ${bgColor}`}>
      <aside className="" aria-label="Sidebar">
        <div className="py-4 overflow-y-auto ">
          <ul className="space-y-2">
            <li className="border-y-2 border-black ">
              <button
                type="button"
                className="flex items-center w-full p-2 text-base font-normal transition duration-75 group "
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span
                  className="flex-1 ml-3 text-left whitespace-nowrap"
                  sidebar-toggle-item
                >
                  {navbarLink.title}
                </span>
                <ChevronDownIcon
                  className={`w-5 h-5  ${textColor} ${
                    isOpen ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <ul
                  id={`drop-down-${navbarLink.title}`}
                  className="py-2 space-y-2"
                >
                  {navbarLink.isDropDown ? (
                    navbarLink.dropDown!.map((item, index) => {
                      return (
                        <li key={item.title + index}>
                          <a
                            href={item.link}
                            className="flex items-center w-full p-2 text-base font-normal transition duration-75 group hover:underline hover:underline-offset-4 pl-11"
                          >
                            {item.title}
                          </a>
                        </li>
                      );
                    })
                  ) : (
                    <div></div>
                  )}
                </ul>
              )}
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default SidebarDropdown;

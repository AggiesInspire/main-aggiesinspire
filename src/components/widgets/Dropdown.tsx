import React from "react";

import { ChevronDownIcon } from "@heroicons/react/24/solid";

import { useState } from "react";

import { Button } from "./Button";

type Props = {
  title: string;
  dropDown: Array<any>;
  textColor?: string;
  bgColor?: string;
};

const Dropdown = ({
  title,
  dropDown,
  textColor = "text-primary-500",
  bgColor = "bg-white",
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <Button
          onClick={toggleDropdown}
          variant={"ghost"}
          id="options-menu"
          aria-haspopup="listbox"
          aria-expanded="true"
        >
          <span
            className={`${textColor} ${
              isOpen ? "underline underline-offset-8" : ""
            }`}
          >
            {title}
          </span>
          <ChevronDownIcon
            className={`w-5 h-5 pt-2 ${textColor} ${
              isOpen ? "transform rotate-180" : ""
            }`}
          />
        </Button>
      </div>

      {isOpen && (
        <div
          className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg ${bgColor} ring-1 ring-black ring-opacity-5 focus:outline-none`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {dropDown.map((item, index) => {
              return (
                <a
                  key={item.title + index}
                  href={`${item.link}`}
                  className={`block px-4 py-2 text-sm ${textColor} hover:underline hover:underline-offset-8`}
                  role="menuitem"
                >
                  {item.title}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

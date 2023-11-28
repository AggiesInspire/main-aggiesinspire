"use client";
import { useRouter } from "next/navigation";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Logo from "@/images/Logo.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
import HeaderLink from "@/components/links/HeaderLink";
import Image from "next/image";
import { SelectedPage } from "@/types/pageTypes";
import { NavbarTypes } from "@/types/navbarTypes";

import NavbarLink from "../links/NavbarLink";

import Dropdown from "../widgets/Dropdown";
import SidebarDropdown from "../widgets/SidebarDropdown";

type Props = {
  navbarLinks?: Array<NavbarTypes>;
  transparent?: boolean;
};
const TopNavbar = ({ navbarLinks, transparent = true }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const desktopFlexBetween = "md:flex hidden items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const router = useRouter();

  const handleNavigation = () => {
    router.push(SelectedPage.Home);
  };

  const toggleMenu = () => {
    setIsMenuToggled(!isMenuToggled);

    if (!isMenuToggled) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  };

  return (
    <>
      <nav
        className={`${
          transparent ? "bg-transparent" : "bg-gray-20"
        } backdrop-filter  absolute z-50 w-full py-6 h-20 ${flexBetween}`}
      >
        <motion.div className="h-1 bg-gray-500 top-0 left-0 right-0 origin-left z-50" />
        <div className={`${flexBetween} mx-auto w-39/40`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* Left Side */}
            <Image
              alt="logo"
              src={Logo}
              priority={true}
              width={220}
              height={250}
              onClick={handleNavigation}
              className={"cursor-pointer"}
            />
            {/* Right Side */}

            {isAboveMediumScreens ? (
              <div className={`${desktopFlexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}></div>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  {/* map out navbarlinks on md above screens */}
                  {navbarLinks
                    ? navbarLinks.map((item, index) =>
                        item.isDropDown ? (
                          <Dropdown
                            key={item.title + index}
                            title={item.title}
                            dropDown={item.dropDown!}
                            bgColor={
                              transparent ? "bg-transparent" : "bg-gray-20"
                            }
                          />
                        ) : (
                          <div key={"empty"}></div>
                        ),
                      )
                    : ""}

                  <NavbarLink path={SelectedPage.Contact}>
                    <p className="text-lg">Contact Us</p>
                  </NavbarLink>
                </div>
              </div>
            ) : isMenuToggled ? (
              <div className="text-primary-500 p-2">
                <button onClick={toggleMenu}>
                  <XMarkIcon className="h-6 w-6 text-primary-500" />
                </button>
              </div>
            ) : (
              <button
                className="md:hidden bg-primary-500 p-2"
                onClick={toggleMenu}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Mode */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed bottom-0 pt-20 right-0 z-30 h-full w-full bg-primary-200 drop-shadow-xl ">
          {/* Close Icon */}

          {/* Menu Items */}
          <div className="flex flex-col gap-10 text-2xl">
            {navbarLinks!.map((link: NavbarTypes, index) => (
              <SidebarDropdown key={link.title + index} navbarLink={link} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default TopNavbar;

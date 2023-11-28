"use client";
import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion, useSpring, useScroll } from "framer-motion";
import { useRouter } from "next/navigation";
import Logo from "@/images/Logo.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/types/pageTypes";
import { NavbarTypes } from "@/types/navbarTypes";

import NavbarLink from "../links/NavbarLink";

import Dropdown from "../widgets/Dropdown";
import SidebarDropdown from "../widgets/SidebarDropdown";

type Props = {
  navbarLinks?: Array<NavbarTypes>;
  appearScroll: number;
  bgColor?: string;
  bgProgressColor?: string;
  textColor?: string;
};
const Navbar = ({
  navbarLinks,
  appearScroll,
  bgProgressColor = "bg-gray-500",
  bgColor = "bg-primary-100",
  textColor = "text-gray-500",
}: Props) => {
  // /* makes sure that if the page is refreshed the navbar style is correct based on scrollY position */
  const flexBetween = "flex items-center justify-between";

  const router = useRouter();

  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMenuToggled(!isMenuToggled);

    if (!isMenuToggled) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  };

  const handleNavigation = () => {
    router.push(SelectedPage.Home);
  };

  const onScroll = useCallback(() => {
    if (window.scrollY <= appearScroll) {
      setScrolled(false);
    } else {
      setScrolled(true);
    }
    setLastScrollY(window.scrollY);
  }, [appearScroll]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY, onScroll]);

  return (
    <>
      <motion.div
        className={`fixed h-1 ${bgProgressColor} top-0 left-0 right-0 origin-left z-50`}
        style={{ scaleX }}
      />

      {scrolled ? (
        <motion.nav
          className={`${
            isMenuToggled ? "bg-primary-200" : bgColor
          } backdrop-filter backdrop-blur-lg fixed z-40 w-full py-6 h-20 ${flexBetween}`}
        >
          <div className={`${flexBetween}  mx-auto w-39/40`}>
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
                <div className={`${flexBetween} w-full`}>
                  <div className={`${flexBetween} gap-8 text-sm`}></div>
                  <div className={`${flexBetween} gap-8 text-sm `}>
                    {/* map out navbarlinks on md above screens */}
                    {navbarLinks
                      ? navbarLinks.map((item, index) =>
                          item.isDropDown ? (
                            <Dropdown
                              key={item.title + index}
                              title={item.title}
                              dropDown={item.dropDown!}
                              bgColor={bgColor}
                              textColor={textColor}
                            />
                          ) : (
                            <div key={"empty-dropdown"}></div>
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
                <button className="bg-primary-500 p-2" onClick={toggleMenu}>
                  <Bars3Icon className="h-6 w-6 text-white" />
                </button>
              )}
            </div>
          </div>
        </motion.nav>
      ) : (
        <div></div>
      )}

      {/* Mobile Menu Mode */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div
          className={`fixed bottom-0 pt-20 right-0 z-30 h-full w-full bg-primary-200 drop-shadow-xl `}
        >
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

export default Navbar;

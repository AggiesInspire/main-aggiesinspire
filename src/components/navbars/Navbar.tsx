"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import { motion, useSpring, useScroll } from "framer-motion";

import Logo2 from "@/images/Logo2.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/types/pageTypes";
import { NavbarTypes } from "@/types/navbarTypes";

import HeaderLink from "@/components/links/HeaderLink";
import NavbarLink from "../links/NavbarLink";

import Dropdown from "../widgets/Dropdown";

type Props = {
  navbarLinks?: Array<NavbarTypes>;
  miniNavbarLinks?: any;
  appearScroll: number;
  bgColor?: string;
  bgProgressColor?: string;
  textColor?: string;
};
const Navbar = ({
  navbarLinks,
  miniNavbarLinks,
  appearScroll,
  bgProgressColor = "bg-gray-500",
  bgColor = "bg-primary-100",
  textColor = "text-gray-500",
}: Props) => {
  // /* makes sure that if the page is refreshed the navbar style is correct based on scrollY position */
  const flexBetween = "flex items-center justify-between";

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
  /* see if home-video id exists for navbar formatting */

  const onScroll = () => {
    if (window.scrollY <= appearScroll) {
      setScrolled(false);
    } else if (window.scrollY > lastScrollY) {
      setScrolled(false);
    } else {
      setScrolled(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  return (
    <>
      <motion.div
        className={`fixed h-1 ${bgProgressColor} top-0 left-0 right-0 origin-left z-50`}
        style={{ scaleX }}
      />

      {scrolled ? (
        <motion.nav
          className={`${bgColor} backdrop-filter backdrop-blur-lg opacity-90 fixed z-40 w-full py-6 h-20 ${flexBetween}`}
        >
          <div className={`${flexBetween}  mx-auto w-39/40`}>
            <div className={`${flexBetween} w-full gap-16`}>
              {/* Left Side */}
              <Link href={`${SelectedPage.Home}`}>
                <Image alt="logo" src={Logo2} width={80} height={80} />
              </Link>

              {/* Right Side */}
              {isAboveMediumScreens ? (
                <div className={`${flexBetween} w-full`}>
                  <div className={`${flexBetween} gap-8 text-sm`}></div>
                  <div className={`${flexBetween} gap-8 text-sm `}>
                    {/* map out navbarlinks on md above screens */}
                    {navbarLinks
                      ? navbarLinks.map((item, index) => (
                          <Dropdown
                            key={item.title + index}
                            title={item.title}
                            dropDown={item.dropDown}
                            bgColor={bgColor}
                            textColor={textColor}
                          />
                        ))
                      : ""}

                    <NavbarLink path={SelectedPage.Contact}>
                      <p className="text-lg">Contact Us</p>
                    </NavbarLink>
                  </div>
                </div>
              ) : (
                <button
                  className="  bg-primary-500 p-2"
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
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
        <div className="fixed bottom-0 right-0 z-50 h-full w-[220px] bg-primary-100 drop-shadow-xl ">
          {/* Close Icon */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            {miniNavbarLinks.map((link: any) => (
              <HeaderLink path={link.link} key={link.title}>
                {link.title}
              </HeaderLink>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

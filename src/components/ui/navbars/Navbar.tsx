"use client";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion, useSpring, useScroll } from "framer-motion";
import Logo from "@/images/Logo.png";
import Logo2 from "@/images/Logo2.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useEffect, useState, useRef } from "react";
import HeaderLink from "@/components/links/HeaderLink";
import Link from "next/link";
import Image from "next/image";
import { SelectedPage } from "@/components/types";
import ButtonLink from "@/components/links/ButtonLink";
import { buttonVariants } from "../Button";

/* programs will be developed at a later time */
const Navbar = () => {
  const onLoad = () => {
    console.log(window.scrollY);
    if (window.scrollY <= 20) {
      setScrolled(false);
    } else {
      setScrolled(true);
    }
  };
  /* makes sure that if the page is refreshed the navbar style is correct based on scrollY position */
  window.onload = () => {
    /* call onLoad function on refresh and remove the refresh session so that it can be repeated */
    var reloading = sessionStorage.getItem("reloading");
    if (reloading) {
      sessionStorage.removeItem("reloading");
      onLoad();
    }
  };
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
  /* see if home-video id exists for navbar formatting */

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY <= 20) {
        setScrolled(false);
      } else {
        setScrolled(true);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={
          scrolled
            ? `bg-primary-100 backdrop-filter backdrop-blur-lg bg-opacity-80 fixed z-50 w-full py-6 h-20 ${flexBetween}`
            : `bg-transparent fixed z-50 w-full py-6 h-20 ${flexBetween}`
        }
      >
        <motion.div
          className="fixed h-1 bg-gray-500 top-0 left-0 right-0 origin-left z-50"
          style={{ scaleX }}
        />
        <div className={`${flexBetween} mx-auto w-11/12`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* Left Side */}
            <Link href={SelectedPage.Home}>
              {scrolled ? (
                <Image
                  className="py-10"
                  alt="logo"
                  src={Logo2}
                  priority={true}
                  width={85}
                  height={85}
                />
              ) : (
                <Image
                  alt="logo"
                  src={Logo}
                  priority={true}
                  width={350}
                  height={200}
                />
              )}
            </Link>

            {/* Right Side */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}></div>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  {" "}
                  <Link
                    href={SelectedPage.About}
                    className={
                      scrolled
                        ? buttonVariants({ variant: "ghost" })
                        : buttonVariants({ variant: "destructive" })
                    }
                  >
                    About
                  </Link>
                  <Link
                    href={SelectedPage.Media}
                    className={
                      scrolled
                        ? buttonVariants({ variant: "ghost" })
                        : buttonVariants({ variant: "destructive" })
                    }
                  >
                    Media
                  </Link>
                  <ButtonLink path={SelectedPage.Contact}>
                    <p className="text-lg">Contact Us</p>
                  </ButtonLink>
                </div>
              </div>
            ) : (
              <button
                className=" rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </nav>
      {/* Mobile Menu Modal */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed bottom-0 right-0 z-50 h-full w-[300px] bg-primary-100 drop-shadow-xl ">
          {/* Close Icon */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <HeaderLink path={SelectedPage.Home}>Home</HeaderLink>
            <HeaderLink path={SelectedPage.About}>About</HeaderLink>
            <HeaderLink path={SelectedPage.Media}>Media</HeaderLink>
            {/* <HeaderLink path={SelectedPage.Programs}>Programs</HeaderLink> */}
            <HeaderLink path={SelectedPage.Contact}>Contact Us</HeaderLink>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

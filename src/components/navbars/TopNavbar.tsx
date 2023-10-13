"use client";
import { useRouter } from "next/navigation";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Logo from "@/images/Logo.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
import HeaderLink from "@/components/links/HeaderLink";
import Link from "next/link";
import Image from "next/image";
import { SelectedPage } from "@/types/pageTypes";

import ButtonLink from "@/components/links/ButtonLink";
import { buttonVariants } from "../widgets/Button";

type Props = {
  navbarLinks?: any;
  miniNavbarLinks?: any;
  transparent?: boolean;
};
const TopNavbar = ({
  navbarLinks,
  miniNavbarLinks,
  transparent = true,
}: Props) => {
  const flexBetween = "flex items-center justify-between";
  const desktopFlexBetween = "md:flex hidden items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const router = useRouter();

  const handleNavigation = () => {
    router.push(SelectedPage.Home);
  };

  return (
    <>
      <nav
        className={`${
          transparent ? "bg-transparent" : "bg-gray-20"
        } backdrop-filter  absolute z-50 w-full py-6 h-20 ${flexBetween}`}
      >
        <motion.div className="h-1 bg-gray-500 top-0 left-0 right-0 origin-left z-50" />
        <div className={`${flexBetween} mx-auto w-11/12`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* Left Side */}
            <Image
              alt="logo"
              src={Logo}
              priority={true}
              width={220}
              height={250}
              layout="fixed"
              onClick={handleNavigation}
              className={"cursor-pointer"}
            />
            {/* Right Side */}
            <div className={`${desktopFlexBetween} w-full`}>
              <div className={`${flexBetween} gap-8 text-sm`}></div>
              <div className={`${flexBetween} gap-8 text-sm`}>
                {/* map out navbarlinks on md above screens */}
                {navbarLinks
                  ? navbarLinks.map((link: any) => (
                      <Link
                        href={link.link}
                        className={buttonVariants({ variant: "destructive" })}
                        key={link.title}
                      >
                        {link.title}
                      </Link>
                    ))
                  : ""}

                <ButtonLink path={SelectedPage.Contact}>
                  <p className="text-lg">Contact Us</p>
                </ButtonLink>
              </div>
            </div>
            <button
              className="md:hidden bg-primary-500 p-2"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <Bars3Icon className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Mode */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed bottom-0 right-0 z-50 h-full w-[250px] bg-gray-200 backdrop-blur-md bg-opacity-75 rounded-l drop-shadow-xl ">
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

export default TopNavbar;

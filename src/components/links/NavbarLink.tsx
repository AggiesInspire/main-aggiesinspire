import React from "react";
import Link from "next/link";
import classNames from "classnames";

type Props = {
  children: React.ReactNode;
  path: string;
};

const NavbarLink = ({ children, path }: Props) => {
  return (
    <Link
      href={path}
      className={classNames(
        "px-10 py-2",
        "bg-primary-500",
        "rounded-none",
        "text-white",
        "hover:bg-primary-400",
        "hover:text-primary-500",
      )}
    >
      <button>{children}</button>
    </Link>
  );
};

export default NavbarLink;

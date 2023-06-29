import React from "react";
import RawLink from "next/link";

type Props = {
  children: React.ReactNode;
  path: string;
};

const Link = ({ children, path }: Props) => {
  return (
    <RawLink
      href={path}
      className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500"
    >
      <button>{children}</button>
    </RawLink>
  );
};

export default Link;

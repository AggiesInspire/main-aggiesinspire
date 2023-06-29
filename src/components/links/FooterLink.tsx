import React from "react";
import RawLink from "next/link";

type Props = {
  children: React.ReactNode;
  path: string;
};

const Link = ({ children, path }: Props) => {
  return (
    <RawLink href={`${path}`} className="text-gray-500 hover:text-primary-500">
      {children}
    </RawLink>
  );
};

export default Link;

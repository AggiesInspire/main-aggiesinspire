import React from "react";
import RawLink from "next/link";

type Props = {
  children: React.ReactNode;
  path: string;
};

const Link = ({ children, path }: Props) => {
  return (
    <RawLink href={`${path}`} className="text-gray-500 hover:text-primary-500">
      <button className=" border border-transparent py-2 px-4 hover:border-primary-500 rounded">
        {children}
      </button>
    </RawLink>
  );
};

export default Link;

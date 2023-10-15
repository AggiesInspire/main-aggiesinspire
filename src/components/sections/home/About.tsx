import React from "react";
import Heading from "./Heading";
import Content from "./AboutContent";

type Props = {};

const HomeAbout = (props: Props) => {
  return (
    <section className="sm-py-10 py-20 bg-gradient-to-r from-primary-300 to-primary-100">
      <div className="w-11/12 mx-auto grid md:grid-cols-3 sm:grid-cols-1">
        <div className="order-1 pr-5">
          <Heading />
        </div>
        <div className="order-2 md:col-span-2 pl-5">
          <Content />
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;

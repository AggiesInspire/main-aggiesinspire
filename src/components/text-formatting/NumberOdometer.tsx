"use client";
import React from "react";
import { useEffect, useRef, useState } from "react";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";

/* For some reason dynamic importing is not working it leaves
 * a blank or if I create a component to dynamically import
 * and then import into a new component, the animation does not work
 *
 * solution that worked for me was to create an InViewEffect component
 * that renders once in view, thus not having to worry about the timeout
 * variations because by then the package has already been loaded
 * */

type Props = {
  numberValue: number;
};
const NumberOdometer = ({ numberValue }: Props) => {
  const [odometervalue, setodometervalue] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setodometervalue(numberValue);
    }, 200);
  }, [numberValue]);
  return <Odometer value={odometervalue} theme="default" />;
};

export default NumberOdometer;

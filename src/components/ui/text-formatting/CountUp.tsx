"use client";
import { useEffect, useRef } from "react";

// code origin: https://gist.github.com/inorganik/2cf776865a4c65c12857027870e9898e
// playground: https://stackblitz.com/edit/react-ts-nv5fxe?file=App.tsx

type Props = {
  end?: number;
};

export default function CountUp({ end }: Props) {
  // create a ref and declare an instance for each countUp animation
  const countupRef = useRef(null);
  let countUpAnim;

  // useEffect with empty dependency array runs once when component is mounted
  useEffect(() => {
    initCountUp();
  }, []);

  // dynamically import and initialize countUp, sets value of `countUpAnim`
  async function initCountUp() {
    const countUpModule = await import("countup.js");
    countUpAnim = new countUpModule.CountUp(countupRef.current!, end!);
    if (!countUpAnim.error) {
      countUpAnim.start();
    } else {
      console.error(countUpAnim.error);
    }
  }

  return (
    <>
      <h1 ref={countupRef}>0</h1>
    </>
  );
}

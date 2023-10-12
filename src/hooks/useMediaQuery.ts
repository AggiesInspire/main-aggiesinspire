"use client";
import { useState, useEffect, useLayoutEffect } from "react";
/* check to see if the user resized the window */
const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState<boolean>();

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;

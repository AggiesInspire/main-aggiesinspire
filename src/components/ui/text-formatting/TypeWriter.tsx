"use client";

import { useState, useEffect } from "react";

import React from "react";

type Props = {
  text: string;
  interval: number;
  Markup: any;
};

const TypeWriter = ({ text, interval = 100, Markup = "span" }: Props) => {
  const [typedText, setTypedText] = useState("");
  const typingRender = (text: string, updater: any, interval: number) => {
    let localTypingIndex: number = 0;
    let localTyping: string = "";
    if (text) {
      let printer = setInterval(() => {
        if (localTypingIndex < text.length) {
          updater((localTyping += text[localTypingIndex]));
          localTypingIndex += 1;
        } else {
          localTypingIndex = 0;
          localTyping = "";
          clearInterval(printer);
        }
      }, interval);
    }
  };
  useEffect(() => {
    typingRender(text, setTypedText, interval);
  }, [text, interval]);

  return <Markup>{typedText}</Markup>;
};

export default TypeWriter;

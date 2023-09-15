"use client";
import React, { useState } from "react";
import { HeroThree } from "../heroThree/HeroThree";
import { HeroTow } from "../heroTow/HeroTow";

export const ThumbnailDownloader = () => {
  const [textvalue, setTextvalue] = useState("");

  return (
    <div>
      <HeroThree setTextvalue={setTextvalue} textvalue={textvalue} />
      <HeroTow textvalue={textvalue} />
    </div>
  );
};

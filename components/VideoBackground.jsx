import React from "react";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const videos = [
  { path: "/videos/C0139.MP4", type: "video/mp4" },
  { path: "/videos/C00962.MP4", type: "video/mp4" },
  { path: "/videos/IMG_2911.MOV", type: "video/mov" },
];

const VideoBackground = () => {
  return (
    <div className="min-h-screen grid grid-rows-[1fr_1fr_10em] items-center justify-center overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-2"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/grass-short.mp4" />
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-stone-800/60 backdrop-saturate-50 -z-1"></div>

      <div className="group row-start-3 flex">
        <Link href={"/products"}>
          <div className="flex items-center justify-center">
            <Button>start exploring</Button>
            <span className="transform transition-all duration-300 opacity-0 font-medium translate-x-[-10px] group-hover:translate-x-[-8px] group-hover:opacity-100">
              →
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default VideoBackground;

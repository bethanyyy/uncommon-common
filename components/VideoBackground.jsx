import React from "react";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const videos = [
  { path: "/videos/C0139.MP4", type: "video/mp4" },
  { path: "/videos/C00962.MP4", type: "video/mp4" },
  { path: "/videos/IMG_2911.MOV", type: "video/mov" },
];

const products = [
  {
    name: "Rose Sandalwood",
    thumbnail: "/rose-sandalwood.svg",
    link: "/rose-sandalwood",
    gridPos: 1,
  },
  {
    name: "Pear and Tea",
    thumbnail: "/pear-tea.svg",
    link: "/pear-tea",
    gridPos: 4,
  },
  {
    name: "Coffee Osmanthus",
    thumbnail: "/coffee-osmanthus.svg",
    link: "/coffee-osmanthus",
    gridPos: 10,
  },
];

const contactPos = 0;

const VideoBackground = () => {
  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center overflow-hidden p-8 gap-8 px-40">
      <video
        className="fixed top-0 left-0 w-full h-full object-cover -z-2"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/grass-short.mp4" />
      </video>

      <div className="fixed top-0 left-0 w-full h-full bg-accent-hover/30 backdrop-saturate-100 -z-1"></div>

      {/* logo */}
      <div className="w-full flex items-center justify-center">
        <Image
          src={"/logo-full.svg"}
          alt="logo"
          width={700}
          height={600}
          className="object-contain "
        />
      </div>

      {/* grid */}
      <div className="w-full h-full grid grid-cols-4 gap-10">
        {Array.from({ length: 20 }).map((_, i) => {
          const matchingProduct = products.find((p) => p.gridPos === i);
          const matchingContactBox = contactPos === i;
          return (
            <div
              key={i}
              className="h-full aspect-[1/0.8] border-2 border-accent flex items-center justify-center"
            >
              {matchingProduct && (
                <Link
                  href={matchingProduct.link ? matchingProduct.link : "/"}
                  className="relative w-full h-full"
                >
                  <div className="relative w-full h-full flex flex-col items-center p-1 gap-2 hover:cursor-pointer">
                    <div className="relative w-full h-full">
                      <Image
                        src={matchingProduct.thumbnail}
                        alt="product thumbnail"
                        fill={true}
                        className="object-contain"
                      />
                    </div>
                    <div className="text-accent font-accent">
                      {matchingProduct.name}
                    </div>
                  </div>
                </Link>
              )}
            </div>
          );
        })}
      </div>

      {/* old start exporing */}
      {/* <div className="group row-start-3 flex">
        <Link href={"/products"}>
          <div className="flex items-center justify-center">
            <Button>start exploring</Button>
            <span className="transform transition-all duration-300 opacity-0 font-medium translate-x-[-10px] group-hover:translate-x-[-8px] group-hover:opacity-100">
              →
            </span>
          </div>
        </Link>
      </div> */}
    </div>
  );
};

export default VideoBackground;

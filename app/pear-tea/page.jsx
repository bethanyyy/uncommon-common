"use client";

import React, { useState } from "react";
import Image from "next/image";
import ProductGallery from "@/components/ProductGallery";
import { AnimatePresence, motion } from "framer-motion";

const videos = [
  { path: "/videos/guihua-short.mp4", type: "video/mp4" },
  { path: "/videos/C00962.MP4", type: "video/mp4" },
  { path: "/videos/IMG_2911.MOV", type: "video/mov" },
];

const imageCount = 15;
const images = Array.from(
  { length: imageCount },
  (_, i) => `/products/pear-tea/${i + 1}.png`
);

const products_gallery = [
  { path: "/products/p1.jpg" },
  { path: "/products/p2.jpg" },
  { path: "/products/p3.jpg" },
  { path: "/products/p4.jpg" },
  { path: "/products/p5.jpg" },
  { path: "/products/p6.jpg" },
];

const products = [
  {
    name: "SCENT 1 青麟隋",
    video: "/videos/guihua-short.mp4",
    thumbnail: "/videos/t1.png",
    gallery: [
      { path: "/products/p1.jpg" },
      { path: "/products/p2.jpg" },
      { path: "/products/p3.jpg" },
      { path: "/products/p4.jpg" },
    ],
  },
  {
    name: "SCENT 2 鹅梨帐中香",
    video: "/videos/grass-short.mp4",
    thumbnail: "/videos/t2.png",
    gallery: [
      { path: "/products/p5.jpg" },
      { path: "/products/p6.jpg" },
      { path: "/products/p7.jpg" },
      { path: "/products/p8.jpg" },
    ],
  },
  {
    name: "SCENT 3 咖啡桂花",
    video: "/videos/IMG_2911.MOV",
    thumbnail: "/videos/t3.png",
    gallery: [
      { path: "/products/p8.jpg" },
      { path: "/products/p2.jpg" },
      { path: "/products/p3.jpg" },
      { path: "/products/p4.jpg" },
    ],
  },
];

const PearTea = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-screen p-10">
      <AnimatePresence mode="wait">
        <motion.div
          key={products[index].video}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="sm:grid sm:grid-cols-2 h-full gap-0"
        >
          {/* left section */}
          <div className="relative w-full h-full">
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
              <video
                className="w-full h-full object-contain "
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="https://res.cloudinary.com/uncommon-common/video/upload/q_auto/f_auto/v1750090262/pear-tea_a4ewxk.mp4" />
              </video>
            </div>
          </div>

          {/* right section */}
          <ProductGallery productImages={images} />
        </motion.div>
      </AnimatePresence>

      {/* background image */}
      <div className="fixed inset-0 -z-2">
        <Image
          src={
            "https://res.cloudinary.com/uncommon-common/image/upload/q_auto/f_auto/v1750096225/product-bgs/pear-bg1_foncan.jpg"
          }
          alt="logo"
          fill
          className="object-cover "
        />
      </div>

      {/* background mask */}
      <div className="fixed top-0 left-0 w-full h-full bg-accent-hover/20 backdrop-saturate-100 -z-1"></div>

      {/* vertical progress bar */}
      {/* <div className="absolute h-full top-0 right-8 flex flex-col justify-center gap-4">
        {products.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`${
              i === index
                ? "border-1 border-primary"
                : "border-1 border-primary/0 hover:border-1 hover:border-primary/100 hover:cursor-pointer"
            } w-12 h-12 rounded-full transition-all duration-300 relative overflow-hidden`}
          >
            <Image
              src={products[i].thumbnail}
              alt="product thumbnail"
              fill
              className="object-cover p-1 rounded-full"
            />
          </div>
        ))}
      </div> */}

      {/* <div className="grid grid-cols-2 h-full gap-10">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <video
              className="max-w-full max-h-full object-contain rounded-[2rem]"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={videos[0].path} type={videos[0].type} />
            </video>
          </div>
        </div>

        <div className="relative flex w-full h-full">
          <ProductGallery products={products_gallery} />
        </div>
      </div> */}
    </div>
  );
};

export default PearTea;

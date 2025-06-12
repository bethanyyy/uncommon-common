"use client";

import React, { useState } from "react";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const ProductGallery = ({ productImages }) => {
  const [index, setIndex] = useState(0);

  return (
    <div className="relative w-full h-full overflow-y-auto flex flex-col gap-4">
      {productImages.map((_, i) => (
        <Image
          key={i}
          src={productImages[i]}
          alt="product image"
          width={700}
          height={700}
          className="object-contain"
          priority
        />
      ))}
      {/* <div className="relative flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={products[index].path}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={products[index].path}
              alt="product image"
              fill={true}
              className="object-contain rounded-[2rem]"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-2">
        {products.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`${
              i === index
                ? "bg-white"
                : "border-2 border-white hover:bg-white hover:cursor-pointer"
            } w-2 h-2 rounded-full transition-all duration-300`}
          />
        ))}
      </div> */}
    </div>
  );
};

export default ProductGallery;

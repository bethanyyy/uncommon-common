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
          className="object-contain h-auto"
          width={800}
          height={0}
          priority
        />
      ))}
    </div>
  );
};

export default ProductGallery;

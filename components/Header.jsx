"use client";
import React from "react";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <div>
      <Link
        href={"/"}
        className={`${
          pathname === "/" && "hidden"
        } absolute top-6 left-6 text-white z-10`}
      >
        <Image
          src={"/logo-whitebg.jpg"}
          alt="logo"
          width={100}
          height={100}
          className="object-contain"
        />
      </Link>
    </div>
  );
};

export default Header;

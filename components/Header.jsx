"use client";
import React from "react";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Nav from "./Nav";

const Header = () => {
  const pathname = usePathname();

  return (
    <div className="px-4 mx-auto flex justify-between items-center fixed left-4 top-4 z-10">
      <Link href={"/"} className={`${pathname === "/" && "hidden"}`}>
        <Image
          src={"/logo-sm-red.svg"}
          alt="logo"
          width={80}
          height={80}
          className="object-contain"
        />
      </Link>
      <Nav />
    </div>
  );
};

export default Header;

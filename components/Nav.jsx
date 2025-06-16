import Link from "next/link";
import React from "react";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "about",
    path: "/about",
  },
  {
    name: "campaign",
    path: "/",
  },
  {
    name: "stockists",
    path: "/",
  },
  {
    name: "contact",
    path: "/",
  },
];

const Nav = () => {
  return (
    <nav className="fixed bottom-4 left-4 flex gap-4 z-10">
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className="bg-white/80 border border-primary text-primary text-sm uppercase px-4 py-2 transition-all"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;

import React from "react";
import Logo from "./Logo";
import { XLogo } from "@/data/svg";

const Header = () => {
  return (
    <nav className="text-lightGreen flex w-full items-center justify-between border-b py-4">
      <Logo />
      <a
        href="https://x.com/SeeOn__"
        target="_blank"
        rel="noreferrer"
        className="h-8 w-8 cursor-pointer p-1.5"
      >
        <XLogo />
      </a>
    </nav>
  );
};

export default Header;

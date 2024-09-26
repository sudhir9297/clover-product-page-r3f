import React from "react";
import Logo from "./Logo";
import { Github, XLogo } from "@/data/svg";

const Header = () => {
  return (
    <nav className="text-lightGreen flex w-full items-center justify-between border-b py-4">
      <Logo />
      <div className="flex items-center gap-2">
        <a
          href="https://x.com/SeeOn__"
          target="_blank"
          rel="noreferrer"
          className="h-8 w-8 cursor-pointer p-1.5"
        >
          <XLogo />
        </a>

        <a
          href="https://github.com/sudhir9297/clover-product-page-r3f"
          target="_blank"
          rel="noreferrer"
          className="h-6 w-6 cursor-pointer text-black"
        >
          <Github />
        </a>
      </div>
    </nav>
  );
};

export default Header;

import React from "react";
import Logo from "./Logo";

const Header = () => {
  return (
    <nav className="flex w-full items-center justify-between border-b py-4">
      <Logo />
      <a
        href="https://x.com/SeeOn__"
        target="_blank"
        rel="noreferrer"
        className="h-8 w-8 cursor-pointer p-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          imageRendering="optimizeQuality"
          shapeRendering="geometricPrecision"
          textRendering="geometricPrecision"
          viewBox="0 0 512 462.799"
          width={"100%"}
          height={"100%"}
        >
          <path
            fillRule="nonzero"
            d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"
          ></path>
        </svg>
      </a>
    </nav>
  );
};

export default Header;

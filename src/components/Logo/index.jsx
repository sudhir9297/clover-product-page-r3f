import React from "react";
import Logo from "./Logo";

function LogoWrapper() {
  return (
    <div className="flex h-full w-fit items-center justify-center">
      <Logo className="h-6 w-6" />
      <div className="ml-1 text-2xl font-semibold text-[#3D403C]">
        Clover<span>.</span>
      </div>
    </div>
  );
}

export default LogoWrapper;

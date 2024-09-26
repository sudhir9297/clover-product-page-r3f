import React from "react";
import { Clover } from "@/data/svg";

function LogoWrapper() {
  return (
    <div className="flex h-full w-fit items-center justify-center">
      <Clover />
      <div className="ml-1 text-2xl font-semibold text-[#3D403C]">
        Clover<span>.</span>
      </div>
    </div>
  );
}

export default LogoWrapper;

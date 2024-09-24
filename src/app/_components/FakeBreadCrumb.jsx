import { StoreContext } from "@/context/store";
import React, { useContext } from "react";

const FakeBreadCrumb = () => {
  const { currentVariation } = useContext(StoreContext);

  return (
    <div className="py-4 text-sm text-[#535665]">
      Home / Women Footwear / Heels /{" "}
      <span className="font-semibold text-black">{currentVariation.name}</span>
    </div>
  );
};

export default FakeBreadCrumb;

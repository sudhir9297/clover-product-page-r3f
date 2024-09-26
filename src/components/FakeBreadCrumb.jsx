import React, { useContext } from "react";
import { StoreContext } from "@/context/store";

const FakeBreadCrumb = () => {
  const { currentVariation } = useContext(StoreContext);

  return (
    <div className="text-fadeGray py-4 text-sm">
      Home / Women Footwear / Heels /{" "}
      <span className="font-semibold text-black">{currentVariation.name}</span>
    </div>
  );
};

export default FakeBreadCrumb;

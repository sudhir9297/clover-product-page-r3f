import Details from "@/components/Details";
import { StoreContext } from "@/context/store";
import React, { useContext } from "react";

const ProductDetails = () => {
  const { currentVariation, setCurrentVariation } = useContext(StoreContext);

  const handleVariationClick = (el) => {
    setCurrentVariation(el);
  };

  return (
    <div className="h-full w-full pb-20 lg:h-full lg:w-[40%]">
      <Details
        variation={currentVariation}
        handleVariationClick={handleVariationClick}
      />
    </div>
  );
};

export default ProductDetails;

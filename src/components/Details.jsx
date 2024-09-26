import React from "react";
import Image from "next/image";

import { Cart, Star, Truck } from "@/data/svg";
import { productVariation } from "@/data";

const Details = ({ variation, handleVariationClick }) => {
  const { sku, name, subDesc, rating, price, type, totalReview } = variation;

  return (
    <div className="flex h-full flex-col justify-start pt-6 lg:px-12 lg:pt-0">
      <span className="text-md text-fadeGray pb-2 font-mono">{sku}</span>
      <h1 className="text-4xl font-semibold lg:text-6xl">{name}</h1>
      <span className="text-md text-fadeGray pb-4 pt-2 lg:pb-6 lg:pt-4 lg:text-xl">
        {subDesc}
      </span>

      <div className="flex items-center gap-4 py-2 lg:py-4">
        <span className="flex">
          {Array.from({ length: 5 }, (_, index) => (
            <Star key={index} fill={rating >= index + 1} />
          ))}
        </span>
        <span className="text-fadeGray font-mono text-sm">
          ({totalReview} Reviews)
        </span>
      </div>
      <span className="pt-4 text-4xl font-semibold lg:pt-6">₹{price}.00</span>
      <p className="text-lightGreen py-1 text-sm font-bold">
        inclusive of all taxes
      </p>

      <div className="mt-4 font-mono text-sm font-semibold lg:mt-6">
        Color: <span className="text-fadeGray/70 capitalize">{type}</span>
      </div>
      <div className="mt-3 flex gap-2">
        {productVariation.map((el) => (
          <div
            onClick={() => handleVariationClick(el)}
            key={el.id}
            className={`bg-primaryColor relative h-16 w-16 cursor-pointer overflow-hidden rounded-md border ${el.id === variation.id ? "border-lightGreen" : ""}`}
          >
            <Image
              src={el.thumbnail}
              fill
              sizes="100%"
              style={{ objectFit: "cover" }}
              alt="product-variation"
            />
          </div>
        ))}
      </div>

      <button
        onClick={() => alert("Item Added to Imaginary Cart")}
        className="mt-8 flex w-2/3 items-center justify-center gap-2 text-nowrap rounded-lg bg-black p-3 px-8 font-mono text-sm font-semibold text-white transition-all duration-300 hover:bg-black/70 lg:mt-12 lg:w-3/4"
      >
        <Cart />
        Add to Cart
      </button>
      <p className="text-fadeGray mt-2 flex items-center gap-2 text-xs font-semibold">
        <Truck /> Free Delivery orn order over ₹5000
      </p>
    </div>
  );
};

export default Details;

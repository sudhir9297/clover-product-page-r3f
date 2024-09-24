import React from "react";
import Logo from "@/components/Logo";
import { Cart, Star, Truck } from "@/data/svg";
import { productVariation } from "@/data";
import Image from "next/image";

const Details = ({ variation, handleVariationClick }) => {
  const { sku, name, rating, price, type, totalReview } = variation;

  return (
    <div className="flex h-full flex-col justify-start pt-6 lg:px-24 lg:pt-0">
      <div className="flex justify-between">
        <span>
          <Logo />
        </span>
        <span className="text-sm text-gray-400">{sku}</span>
      </div>
      <h1 className="mt-2 text-4xl font-semibold lg:mt-4">{name}</h1>

      <div className="mt-4 flex items-center gap-4 lg:mt-6">
        <span className="flex">
          {Array.from({ length: 5 }, (_, index) => (
            <Star key={index} fill={rating >= index + 1} />
          ))}
        </span>
        <span className="text-sm text-gray-400">{totalReview} Reviews</span>
      </div>
      <h1 className="mt-6 text-4xl font-semibold lg:mt-10">Rs.{price}.00</h1>

      <div className="mt-6 text-sm font-medium lg:mt-10">
        Color - <span className="capitalize text-gray-400">{type}</span>
      </div>
      <div className="mt-3 flex gap-2">
        {productVariation.map((el) => (
          <div
            onClick={() => handleVariationClick(el)}
            key={el.id}
            className="relative h-16 w-14 cursor-pointer overflow-hidden rounded-md"
            style={{
              border:
                el.id === variation.id ? "1px solid gray" : "0px solid gray",
            }}
          >
            <Image src={el.thumbnail} fill />
          </div>
        ))}
      </div>

      <button className="mt-8 flex w-fit items-center gap-2 rounded-lg bg-black p-3 px-24 text-sm text-white lg:mt-12">
        <Cart />
        Add to Cart
      </button>
      <p className="mt-2 flex items-center gap-2 text-xs font-semibold">
        <Truck /> Free Delivery orn order over Rs.5000
      </p>
    </div>
  );
};

export default Details;

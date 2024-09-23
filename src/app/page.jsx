"use client";
import { useState } from "react";
import Experience from "../components/Experience";

export default function Home() {
  const [cubeRotation, setCubeRotation] = useState(null);

  const handleCubeRotation = ({ x, y, z }) => {
    setCubeRotation({ x, y, z });
  };

  const thumbnails = [
    { id: 0, thumb: "thumbnail1", rotation: { x: 0, y: 0, z: 0 } },
    { id: 1, thumb: "thumbnail1", rotation: { x: 0, y: Math.PI / 3, z: 0 } },
    { id: 2, thumb: "thumbnail2", rotation: { x: 0, y: -Math.PI / 3, z: 0 } },
    { id: 3, thumb: "thumbnail3", rotation: { x: 0, y: -Math.PI / 4, z: 0 } },
  ];

  return (
    <section className=" flex h-[90vh] grow mt-4">
      <div className="w-1/2 h-full flex flex-col ">
        <div className=" flex-1">
          <Experience cubeRotation={cubeRotation} />
        </div>
        <div className="h-[100px] flex gap-4 py-4">
          {thumbnails.map((el) => (
            <div
              key={el.id}
              onClick={() => handleCubeRotation(el.rotation)}
              className=" cursor-pointer aspect-[1.2] w-[100px] rounded-lg flex justify-center items-center  bg-[#F2F0EA]"
            >
              {el.id}
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/2 flex-1  p-4  border">
        <div>
          <span>BrandName</span> <span>SKU</span>
        </div>
        <div>Shoe Name</div>
        <div>Rating and review</div>
        <div>Pricing Rs.9900</div>
        <div>
          {[1, 2, 3].map((el) => (
            <div key={el}>{el}</div>
          ))}
        </div>
        <button>Add to Cart</button>
        <p>Free Delivery orn order over Rs.5000</p>
      </div>
    </section>
  );
}

"use client";
import { useState } from "react";
import Experience from "./components/Experience";

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
    <div className="h-screen w-screen px-32 py-6 flex relative">
      <div className="w-1/2 h-full flex flex-col  ">
        <div className=" p-4 flex-1">
          <Experience cubeRotation={cubeRotation} />
        </div>
        <div className="h-[100px] flex gap-4  px-4 ">
          {thumbnails.map((el) => (
            <div
              onClick={() => handleCubeRotation(el.rotation)}
              className=" cursor-pointer aspect-[1.2] rounded-lg flex justify-center items-center  bg-[#F2F0EA]"
            >
              {el.id}
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/2 h-full border border-green-500 p-4">
        Description
      </div>
    </div>
  );
}

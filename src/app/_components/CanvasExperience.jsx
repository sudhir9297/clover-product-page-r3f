import Experience from "@/components/Experience";
import { StoreContext } from "@/context/store";
import { cameraPositionData } from "@/data";
import Image from "next/image";
import React, { useContext } from "react";

const CanvasExperience = () => {
  const { setCameraPosition } = useContext(StoreContext);

  const handleCameraPosition = ({ x, y, z }) => {
    setCameraPosition({ x, y, z });
  };

  return (
    <div className="flex h-[60vh] w-full flex-col gap-4 lg:h-full lg:w-[60%]">
      <Experience />
      <div className="flex h-[100px] gap-4">
        {cameraPositionData.map((el) => (
          <div
            key={el.id}
            onClick={() => handleCameraPosition(el.position)}
            className="relative flex aspect-square cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-[#F2F0EA]"
          >
            <Image
              src={`/thumb/red/${1}-${el.id}.png`}
              fill
              objectFit="cover"
              alt="thumbnail"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CanvasExperience;

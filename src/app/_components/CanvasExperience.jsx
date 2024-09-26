import React, { useContext, useEffect, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

import Experience from "@/components/Experience";
import { StoreContext } from "@/context/store";
import { backgroundColor, cameraPositionData } from "@/data";

const CanvasExperience = () => {
  const { setCameraPosition, currentVariation } = useContext(StoreContext);
  const [bgColor, setBgColor] = useState(backgroundColor[0]);

  useEffect(() => {
    gsap.to(".background", {
      backgroundColor: bgColor,
      duration: 1,
      ease: "power2.inOut",
    });
    return () => {};
  }, [bgColor]);

  const handleCameraPosition = ({ x, y, z }) => {
    setCameraPosition({ x, y, z });
  };

  return (
    <div className="flex h-[60vh] w-full flex-col gap-4 lg:h-full lg:w-[60%]">
      <div
        className="background relative h-full w-full overflow-hidden"
        style={{
          borderRadius: "10px",
        }}
      >
        <div className="absolute bottom-2 left-2 z-30 flex gap-1">
          {backgroundColor.map((el) => (
            <div
              key={el}
              onClick={() => setBgColor(el)}
              style={{ backgroundColor: el }}
              className={`h-8 w-8 cursor-pointer rounded-full border-2 border-white`}
            />
          ))}
        </div>
        <Experience />
      </div>
      <div className="flex h-[100px] gap-4">
        {cameraPositionData.map((el) => (
          <div
            key={el.id}
            onClick={() => handleCameraPosition(el.position)}
            className="background relative flex aspect-square cursor-pointer items-center justify-center overflow-hidden rounded-lg"
          >
            <Image
              src={`/thumb/${currentVariation.type}/${currentVariation.id}-${el.id}.webp`}
              fill
              sizes="100%"
              alt="thumbnail"
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CanvasExperience;

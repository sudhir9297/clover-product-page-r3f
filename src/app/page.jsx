"use client";
import { useState } from "react";
import Experience from "../components/Experience";
import { cameraPositionData, productVariation } from "@/data";
import Image from "next/image";
import Details from "@/components/Details";

export default function Home() {
  const [variation, setVariation] = useState(productVariation[0]);

  const [cameraPosition, setCameraPosition] = useState(
    cameraPositionData[0].position,
  );

  const handleCameraPosition = ({ x, y, z }) => {
    setCameraPosition({ x, y, z });
  };
  const handleVariationClick = (el) => {
    setVariation(el);
  };

  const handleTakeScreenshot = () => {
    const link = document.createElement("a");
    const canvas = document.querySelector("canvas");
    link.setAttribute("download", `ss-${Date.now()}.png`);
    link.setAttribute(
      "href",
      canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"),
    );
    link.click();
    link.remove();
  };

  return (
    <section className="mt-4 flex h-[80vh] flex-col lg:flex-row">
      <div className="flex h-1/2 w-full flex-col gap-4 lg:h-full lg:w-[60%]">
        <Experience cameraPosition={cameraPosition} />
        <div className="flex h-[100px] gap-4">
          {cameraPositionData.map((el) => (
            <div
              key={el.id}
              onClick={() => handleCameraPosition(el.position)}
              className="relative flex h-[100px] w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-[#F2F0EA]"
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
      <div className="h-1/2 w-full lg:h-full lg:w-[40%]">
        <Details
          variation={variation}
          handleVariationClick={handleVariationClick}
        />
      </div>
    </section>
  );
}

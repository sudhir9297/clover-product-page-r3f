"use client";
import { StoreProvider } from "@/context/store";
import CanvasExperience from "./_components/CanvasExperience";
import ProductDetails from "./_components/ProductDetails";
import FakeBreadCrumb from "./_components/FakeBreadCrumb";

export default function Home() {
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
    <StoreProvider>
      <section>
        <FakeBreadCrumb />
        <div className="flex flex-col lg:h-[80vh] lg:flex-row">
          <CanvasExperience />
          <ProductDetails />
        </div>
      </section>
    </StoreProvider>
  );
}

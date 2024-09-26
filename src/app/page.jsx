"use client";
import { StoreProvider } from "@/context/store";
import CanvasExperience from "./_components/CanvasExperience";
import ProductDetails from "./_components/ProductDetails";
import FakeBreadCrumb from "../components/FakeBreadCrumb";

export default function Home() {
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

import { cameraPositionData, productVariation } from "@/data";
import React, { createContext, useContext, useState } from "react";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [cameraPosition, setCameraPosition] = useState(
    cameraPositionData[0].position,
  );
  const [currentVariation, setCurrentVariation] = useState(productVariation[0]); // Default to null or any initial value

  return (
    <StoreContext.Provider
      value={{
        cameraPosition,
        setCameraPosition,
        currentVariation,
        setCurrentVariation,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

import React, { createContext, useContext, useState } from "react";
import { cameraPositionData, productVariation } from "@/data";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [cameraPosition, setCameraPosition] = useState(
    cameraPositionData[0].position,
  );
  const [currentVariation, setCurrentVariation] = useState(productVariation[0]);

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

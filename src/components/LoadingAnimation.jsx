import React from "react";

export const LoadingAnimation = () => {
  return (
    <div className="relative grid h-full w-full place-items-center">
      <div className="absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 transform">
        <div className="border-lightGreen h-12 w-12 animate-spin rounded-full border-4 border-solid border-t-transparent"></div>
      </div>
    </div>
  );
};

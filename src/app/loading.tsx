"use client";
import React from "react";
import { ThreeCircles } from "react-loader-spinner";

const LoadingPage = () => {
  return (
    <div className="flex justify-center items-center">
      {" "}
      render(
      <ThreeCircles
        visible={true}
        height="100"
        width="100"
        color="#2A254B"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
      )
    </div>
  );
};

export default LoadingPage;

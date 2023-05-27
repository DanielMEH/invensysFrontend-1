import React from "react";
import { ChartBodegaC1 } from "../supabase/ChartBodegaC1";

export const ChartBodega = () => {
  return (
    <>
      <>
        <div className="flex flex-col justify-start w-full">
          <div className="flex justify-start">
            <ChartBodegaC1 />
          </div>
          <div className="flex justify-center gap-4">y</div>y
        </div>
      </>
    </>
  );
};

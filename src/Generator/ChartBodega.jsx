import React from "react";
import { ChartBodegaC1 } from "../supabase/ChartBodegaC1";
import { ChartBodegaC2 } from "../supabase/ChartBodegaC2";

export const ChartBodega = () => {
  return (
    <>
      <>
        <div className="flex flex-col justify-start w-full">
          <div className="flex justify-start">
            <ChartBodegaC1 />
          </div>
          <div className="flex justify-start gap-4">
          
            <ChartBodegaC2 />
          </div>
        </div>
      </>
    </>
  );
};

import React from "react";

import { ChartProductoC2 } from "../supabase/ChartProductoC2";
import { ChartProductC1 } from "../supabase/ChartProductsC1";

export const ChartProductos = () => {
  return (
    <>
      <>
        <div className="flex flex-col justify-start w-full">
          <div className="flex justify-start">
            <ChartProductC1 />
          </div>
          <div className="flex justify-start gap-4">
            <ChartProductoC2 />
          </div>
        </div>
      </>
    </>
  );
};

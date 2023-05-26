import React from "react";
import { ChartHomeC1 } from "../supabase/ChartHomeC1";
import { ChartHomeC2 } from "../supabase/ChartHomeC2";
import { ChartHomeC3 } from "../supabase/ChartHomeC3";

export const ChartHome = () => {
  return (
    <>
      <div className="flex flex-col justify-start w-full">
        <div className="flex justify-start">
          <ChartHomeC3 />
        </div>

        <div className="flex justify-center gap-4">
          <ChartHomeC1 />
          <ChartHomeC2 />
        </div>
      </div>
    </>
  );
};

import React from "react";
import { ChartHomeC1 } from "../supabase/ChartHomeC1";
import { ChartHomeC2 } from "../supabase/ChartHomeC2";
import { ChartHomeC3 } from "../supabase/ChartHomeC3";
import { ChartHomeC4 } from "../supabase/ChartHomeC4";
import { ChartHomeC5 } from "../supabase/ChartHomeC5";

export const ChartHome = () => {
  return (
    <>
      <div className="flex flex-col justify-start w-full">
        <div className="flex justify-start">
          <ChartHomeC3 />
        </div>

        <div className="flex justify-center gap-4 flex-col md:flex-row">
          <ChartHomeC1 />
          <ChartHomeC2 />
        </div>
        <ChartHomeC4 />
        {/* <ChartHomeC5 /> */}
      </div>
    </>
  );
};

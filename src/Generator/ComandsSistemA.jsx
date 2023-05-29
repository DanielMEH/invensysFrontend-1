import React from "react";
import { ChartComandsA } from "../supabase/ChartComandsA";

export const ComandsSistemA = () => {
  return (
    <>
      <>
        <div className="flex flex-col justify-start w-full">
          <div className="flex justify-start">
            <ChartComandsA />
          </div>
          <div className="flex justify-start gap-4"></div>
        </div>
      </>
    </>
  );
};

import React from "react";

function Results({
  values,
  length,
  roughness,
  substance,
  flowRate,
  reynolds,
  friction,
  pressureDrop,
}) {
  return (
    <div className="w-full flex items-center justify-center flex-col gap-3">
      <h1 className="font-Poppins font-semibold bg-slate-200 px-10 py-2 rounded-full">
        Results
      </h1>
      <div className="h-[400px] w-[500px] bg-white rounded-2xl flex flex-col gap-5 p-10 shadow-md shadow-black">
        <h1 className="flex gap-10 font-Poppins font-semibold border-b-[1px] border-slate-300 items-center py-1">
          Flow Rate:{" "}
          <span className="bg-slate-300 px-5 py-2 rounded-full">
            {flowRate} m³/s
          </span>
        </h1>

        <h1 className="flex gap-10 font-Poppins font-semibold border-b-[1px] border-slate-300 items-center py-1">
          Fluid Velocity:{" "}
          <span className="bg-slate-300 px-5 py-2 rounded-full">
            {substance.velocity} m/s
          </span>
        </h1>

        <h1 className="flex gap-10 font-Poppins font-semibold border-b-[1px] border-slate-300 items-center py-1">
          Reynolds Number:{" "}
          <span className="bg-slate-300 px-5 py-2 rounded-full">
            {reynolds}
          </span>
        </h1>

        <h1 className="flex gap-10 font-Poppins font-semibold border-b-[1px] border-slate-300 items-center py-1">
          Friction Factor:{" "}
          <span className="bg-slate-300 px-5 py-2 rounded-full">
            {friction}
          </span>
        </h1>

        <h1 className="flex gap-10 font-Poppins font-semibold border-b-[1px] border-slate-300 items-center py-1">
          Pressure Drop:{" "}
          <span className="bg-slate-300 px-5 py-2 rounded-full">
            {pressureDrop} Pa
          </span>
        </h1>

      </div>
    </div>
  );
}

export default Results;

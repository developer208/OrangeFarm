"use client";
import { useState } from "react";
import Charts from "./Charts";

export default function Graph() {
  const [val, setVal] = useState("");
  return (
    <main>
      <div className=" w-[85vw] sm:w-[492px]  h-[40px] pb-4 flex justify-between items-center self-stretch ">
        <h1 className="text-[#131313]  font-inter text-[20px] font-semibold tracking-[-0.2px] leading-normal">
          Growth
        </h1>
        <div className="w-[58px] h-[17px] flex items-center gap-1 ">
          <select
            onChange={(e) => setVal(e.target.value)}
            className="text-[#454545] font-inter text-[14px] font-normal leading-normal tracking-[-0.3px]"
          >
            <option value="">Yearly</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
          </select>
        </div>
      </div>
      <div className=" w-[80vw] sm:w-[492px] h-[160px] ">
        <Charts year={val} />
      </div>
    </main>
  );
}

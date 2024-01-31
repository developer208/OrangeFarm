"use client";
import { SectionTwoData, items2 } from "@/app/util/data";
import { Cust2 } from "../../icons/Cust";
import SubSection, { SubSectionWithButtons } from "./SubSection";
import { useState } from "react";
import { RevReport } from "../../icons/Main/SectionOne";

export default function Widgets() {
  const [] = useState(true);
  return (
    <main className="w-[556px] h-[400px] py-[24px]  bg-[#FFF] rounded-[16px] flex flex-col gap-[16px] items-start ">
      <div className="h-[24px] px-[24px] flex justify-between items-center self-stretch ">
        <h1 className="text-[#131313] font-inter text-[20px] font-semibold leading-normal tracking-tight">
          Customers
        </h1>
        <div className="flex gap-1 items-center">
          <h5>Sort by Newest</h5>
          <div className="w-[14px] h-[14px] ">
            <Cust2 />
          </div>
        </div>
      </div>
      <div className="w-[556px] h-[279px] px-[8px] ">
        {SectionTwoData.map((item: items2) => {
          return (
            <main key={item.id}>
              {item.id === 2 ? (
                <SubSection
                  id={item.id}
                  key={item.id}
                  img={item.img}
                  name={item.name}
                  title={item.title}
                />
              ) : (
                <SubSectionWithButtons
                  id={item.id}
                  key={item.id}
                  img={item.img}
                  name={item.name}
                  title={item.title}
                />
              )}
            </main>
          );
        })}
      </div>
      <div className="w-[556px] h-[17px] px-[24px] flex items-end gap-[4px] ">
        <button className="w-[86px] h-[17px] text-[#734A00] font-inter text-[14px] font-normal tracking-[-0.3px] leading-normal flex items-center ">
          All customers
        </button>
        <div className="w-[14px] h-[14px] flex items-center ">
          <RevReport />
        </div>
      </div>
    </main>
  );
}

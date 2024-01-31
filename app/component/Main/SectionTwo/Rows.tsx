import Image from "next/image";
import Graph from "./Graph";

export default function Rows() {
  return (
    <main className="2xl:w-[540px] w-full h-[400px] flex flex-col items-start self-stretch gap-4 ">
      <div className=" w-[90vw] sm:w-full h-[256px] flex flex-col items-start self-stretch p-[24px] gap-2 bg-[#FFF] rounded-[16px] ">
        <Graph />
      </div>
      <div className="2xl:w-[540px] w-[540px]  sm:w-full  h-[128px] flex items-start self-stretch gap-4 ">
        <div className="2xl:w-[169.33px] w-[33.33%]  h-[128px] p-4 flex flex-col items-start self-stretch rounded-[16px] gap-4 bg-[#FFF] ">
          <h1 className=" w-full text-[ #7D7D7D] font-Inter text-base font-semibold leading-normal tracking-[-0.5px] ">
            Top month
          </h1>
          <div className="w-full h-[61px] flex flex-col items-start justify-end self-stretch flex-1 flex-shrink-0 flex-basis-0 ">
            <h5 className="text-[#734A00] h-[29px]  font-inter text-[24px] font-semibold leading-normal tracking-[-0.2px]">
              November
            </h5>
            <h6 className="text-[#FFA500] h-[19px] font-inter text-base font-medium leading-normal tracking-[-0.2px]">
              2019
            </h6>
          </div>
        </div>
        <div className="2xl:w-[169.33px] w-[33.33%]  h-[128px] p-4 flex flex-col items-start self-stretch rounded-[16px] bg-[#FFF] gap-4 ">
          <h1 className="w-full text-[ #7D7D7D] font-Inter text-base font-semibold leading-normal tracking-[-0.5px] ">
            Top year
          </h1>
          <div className="w-full h-[61px] flex flex-col items-start justify-end self-stretch flex-1 flex-shrink-0 flex-basis-0 ">
            <h5 className="text-[#734A00] h-[29px]  font-inter text-[24px] font-semibold leading-normal tracking-[-0.2px]">
              2023
            </h5>
            <h6 className="text-[#454545] h-[19px] font-inter text-[14px] font-medium leading-normal tracking-[-0.3px]">
              96K sold so far
            </h6>
          </div>
        </div>
        <div className="2xl:w-[169.33px] w-[33.33%]  h-[128px] p-4 flex flex-col items-start self-stretch rounded-[16px] bg-[#FFF] gap-4 ">
          <h1 className="w-full text-[ #7D7D7D] font-Inter text-base font-semibold leading-normal tracking-[-0.5px] ">
            Top buyer
          </h1>
          <div className="h-[61px] flex flex-col items-start justify-end gap-2 self-stretch ">
            <div className="w-[24px] h-[24px] ">
              <Image
                src="/Image/Rectangle 3.png"
                width={24}
                height={24}
                alt=""
              />
            </div>
            <div className="w-full h-[31px] ">
              <h5 className="text-[#131313] font-inter text-xs font-bold leading-normal tracking-[-0.3px]">
                Maggie Johnson
              </h5>
              <h6 className="text-[#454545] font-inter text-[10px] font-normal leading-normal tracking-[-0.3px]">
                Oasis Organic Inc.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

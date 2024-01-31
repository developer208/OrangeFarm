import { Arrow, RevReport } from "../../icons/Main/SectionOne";

export default function ItemTwo() {
  return (
    <main className="min-w-[410px] min-h-[262px] p-[24px]  flex flex-col items-start gap-[8px] self-stretch bg-[#FFF]  rounded-[16px]">
      <div className="h-[40px] w-full flex items-start gap-[8px] pb-[16px] ">
        <h4 className="font-inter text-[20px] text-[#131313] leading-normal tracking-[-0.2px] font-[600] ">
          Lost deals
        </h4>
      </div>
      <div className="w-[70px] h-[58px] flex  items-center gap-[8px] ">
        <h1 className="text-[#131313] font-inter text-[48px] font-medium leading-normal tracking-wider ">
          4%
        </h1>
      </div>
      <h5 className="text-[#454545] font-inter text-base font-normal leading-normal tracking-tighter">
        You closed 96 out of 100 deals
      </h5>
      <div className="h-[74.6px] w-[72px] flex items-end pt-[16px] gap-2 ">
        <div className="w-[72px] gap-1  h-[17px] flex items-end  ">
          <div className="h-[17px] flex items-center ">
            <h5 className="text-[#734A00] font-inter  flex items-center text-[14px] font-normal leading-normal tracking-tighter w-[54px] ">
              All deals
            </h5>
          </div>
          <div className="w-[14px] h-[14px] flex items-center ">
            <RevReport />
          </div>
        </div>
      </div>
    </main>
  );
}

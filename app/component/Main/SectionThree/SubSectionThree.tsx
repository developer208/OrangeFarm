import { Deals, DealsData } from "@/app/util/data";
import Box from "./Box";

export const SubSectionThree = () => {
  return (
    <main className="w-full h-auto 2xl:w-[440px]  bg-[#FFF] flex flex-col items-start self-stretch p-[24px] rounded-[16px] ">
      <div className="2xl:w-[392px] w-full h-[40px] flex items-start pb-[16px] gap-2 ">
        <h2 className="w-auto h-auto text-[#131313] font-inter text-[20px] font-semibold tracking-[-0.2px] leading-normal ">
          New deals
        </h2>
      </div>
      <div className="2xl:w-[392px] w-full h-auto flex items-start justify-start gap-2 self-stretch flex-wrap ">
        {DealsData.map((item: Deals) => {
          return <Box key={item.id} {...item} />;
        })}
      </div>
    </main>
  );
};

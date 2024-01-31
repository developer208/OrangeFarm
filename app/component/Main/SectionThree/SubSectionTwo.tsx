import { StateData, States } from "@/app/util/data";

export const SubSectionTwo = () => {
  let w = 20;
  return (
    <main className=" h-full w-[320px]  bg-[#FFF] flex flex-col items-start self-stretch p-[24px] rounded-[16px] gap-2 ">
      <div className="w-[272px] h-[40px] pb-4 flex flex-col self-stretch gap-2 ">
        <h2 className="text-[#131313] font-inter text-[20px] font-semibold tracking-[-0.2px] leading-normal">
          Top states
        </h2>
      </div>
      {StateData.map((item: States) => {
        let s: string = item.width.toString();
        let width = s.concat("px");
        return (
          <>
            <div
              key={item.id}
              style={{
                width: width,
                background:
                  "linear-gradient(90deg, #FFCD71 -2.57%, rgba(255, 205, 113, 0.00) 112.5%)",
              }}
              className=" h-[29px] flex flex-col justify-center items-start self-stretch py-[6px] px-2 rounded-[4px] relative "
            >
              <h5 className="text-Black font-inter text-[14px] font-semibold leading-normal uppercase">
                {item.left}
              </h5>
              <h6 className="absolute right-[8px] top-[8.388px] text-Black text-right font-inter text-[10px] font-bold leading-normal uppercase ">
                {item.right}
              </h6>
            </div>
          </>
        );
      })}
    </main>
  );
};

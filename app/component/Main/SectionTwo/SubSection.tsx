import Image from "next/image";
import { Comment, Pencil, Star, ThreeDots } from "../../icons/Main/SectionTwo";
import { items2 } from "@/app/util/data";

export default function SubSection(props: items2) {
  return (
    <main className="w-full h-auto   lg:h-[66px] p-[16px] flex   items-center self-stretch gap-[12px] rounded-[16px] bg-[#FFF7E8] ">
      <div className="w-[32px] h-[32px]">
        <Image src={props.img} width={32} height={32} alt="" />
      </div>
      <div className="sm:w-full  w-[280px]  flex justify-between  ">
        <div className="sm:w-[276px] w-[180px] h-[34px] flex flex-col justify-center items-start gap-[2px] ">
          <h4 className="text-[#131313] font-inter text-[14px] font-medium leading-normal tracking-tighter">
            {props.name}
          </h4>
          <h5 className="text-[#454545] font-inter text-xs font-normal leading-normal tracking-tighter">
            {props.title}
          </h5>
        </div>
        <div className="w-[176px] h-[36px] flex items-center gap-[12px] ">
          <div className="w-[116px] flex  items-center gap-[4px]  ">
            <div className="w-[36px] h-[36px] flex items-center justify-center gap-2 ">
              <div className="w-[16px] h-[16px] ">
                <Comment />
              </div>
            </div>
            <div className="w-[36px] h-[36px] flex items-center justify-center gap-2 ">
              <div className="w-[16px] h-[16px]">
                <Star />
              </div>
            </div>
            <div className="w-[36px] h-[36px] flex items-center justify-center gap-2 ">
              <div className="w-[16px] h-[16px]">
                <Pencil />
              </div>
            </div>
          </div>
          <div className="w-[1px] h-[24px] bg-[#734A00] opacity-[0.2] "></div>
          <div className="w-[36px] h-[36px] flex items-center justify-center gap-2 ">
            <div className="w-[16px] h-[16px]">
              <ThreeDots />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export function SubSectionWithButtons(props: items2) {
  return (
    <main className="w-full h-[66px] p-[16px] flex items-center self-stretch gap-[12px] rounded-[16px]  ">
      <div className="w-[32px] h-[32px]">
        <Image src={props.img} width={32} height={32} alt="" />
      </div>
      <div className="w-[276px] h-[34px] flex flex-col justify-center items-start gap-[2px] ">
        <h4 className="text-[#131313] font-inter text-[14px] font-medium leading-normal tracking-tighter">
          {props.name}
        </h4>
        <h5 className="text-[#454545] font-inter text-xs font-normal leading-normal tracking-tighter">
          {props.title}
        </h5>
      </div>
    </main>
  );
}

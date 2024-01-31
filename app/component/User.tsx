import Image from "next/image";
import image from "../../public/Image/Rectangle 1.png";
import SideBarDiv from "./SidebarDiv";
import { items, sidebarData } from "../util/data";
import { Logout } from "./icons/User";
export default function User() {
  return (
    <main className="flex flex-col justify-end self-stretch items-center w-full h-[180px] pt-[16px] px-[8px] pb-[24px] gap-[12px]">
      <div className="flex h-[40px] w-full px-[20px] gap-[12px] items-center shrink-0 ">
        <div className="w-[32px] h-[32px] flex justify-center items-center ">
          <Image src={image} alt="Rec-1" />
        </div>
        <div className="w-[98px] h-[37px] flex flex-col justify-center items-start gap-[4px] ">
          <h6 className="font-inter text-[14px] font-medium leading-normal tracking-tighter text-[#131313]">
            Gustavo Xavier
          </h6>
          <div className="px-[6px] w-[40px] h-[16px] flex justify-center items-center gap-[8px] rounded-[24px] bg-[#FFCD71] ">
            <h6 className="text-[#131313] text-[10px] font-normal leading-4 tracking-tighter font-inter ">
              Admin
            </h6>
          </div>
        </div>
      </div>
      <div className="w-[264px] h-[82px] flex flex-col justify-center items-start self-stretch gap-[2px] ">
        {sidebarData.slice(6, 7).map((item: items) => {
          return <SideBarDiv key={item.name} svg={item.svg} name={item.name} />;
        })}
      </div>
      <main className="h-[40px] w-[264px] py-[12px] px-[20px] flex items-center gap-[12px] hover:cursor-pointer">
        <div className="h-[16px] w-[16px] flex justify-center items-center ">
          <Logout />
        </div>
        <h5 className="text-[#B01212] font-inter text-base font-normal leading-[14px] tracking-tighter ">
          Log out
        </h5>
      </main>
    </main>
  );
}

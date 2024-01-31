import { Chats, ChatsArray } from "@/app/util/data";
import Image from "next/image";
export default function SubSectionOne() {
  return (
    <main className=" h-[256px] w-full sm:w-[50%] 2xl:w-[320px] flex flex-col items-start gap-2  self-stretch  p-[24px] bg-[#FFF] rounded-[16px] ">
      <div className="w-[272px] h-[65px] pb-[16px] gap-2 flex flex-col items-start self-stretch ">
        <h2 className="text-Black font-Inter text-[20px] font-semibold tracking-wide leading-normal">
          Chats
        </h2>
        <h5 className="w-[125px] h-[17px] text-Dark-Gray font-inter text-[14px] font-normal tracking-[-0.3px] leading-normal ">
          2 unread messages
        </h5>
      </div>
      <div className="w-[272px] h-[56px] flex items-center content-center gap-2 flex-wrap  ">
        {ChatsArray.slice(0, 2).map((item: Chats) => {
          return (
            <div
              key={item.id}
              className="w-[56px] h-[56px] p-[12px] flex items-center gap-2 bg-[#FFF7E8] rounded-[16px] relative "
            >
              <div className="flex w-[32px] h-[32px] items-center justify-center ">
                <Image
                  className="rounded-[24px]"
                  src={item.img}
                  alt=""
                  height={32}
                  width={32}
                />
              </div>
              <div className="absolute right-[14px] top-[15.38px] ">
                <svg
                  className=""
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                >
                  <circle
                    cx="4"
                    cy="4"
                    r="3"
                    fill="#EB5050"
                    stroke="#FFF7E8"
                    stroke-width="2"
                  />
                </svg>
              </div>
            </div>
          );
        })}
        {ChatsArray.slice(2, 4).map((item: Chats) => {
          return (
            <div
              key={item.id}
              className="w-[56px] h-[56px] p-[12px] flex items-center gap-2  rounded-[16px] relative "
            >
              <div className="flex w-[32px] h-[32px] items-center justify-center ">
                <Image
                  className="rounded-[24px]"
                  src={item.img}
                  alt=""
                  height={32}
                  width={32}
                />
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

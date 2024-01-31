import SideBarDiv from "./SidebarDiv";
import {
  DivwithdropdownData,
  items,
  items_type_two,
  sidebarData,
} from "../util/data";
import Divwithdropdown from "./Divwithdropdown";
import User from "./User";
import Search from "./icons/Search";
import Logo from "./Logo";

export default function Sidebar() {
  return (
    <main className="  min-w-[280px] max-w-[320px] bg-[#FFF] h-[890px] rounded-[16px] hidden  lg:flex lg:flex-col">
      <div className="w-full h-[68px] flex flex-col justify-center items-start gap-[8px] self-stretch pt-[16px] px-[24px] pb-[12px]  ">
        <Logo />
      </div>
      <div className="max-h-[642px] w-full flex flex-col items-start flex-1 flex-shrink-0 flex-basis-0  p-[8px] gap-[8px]  ">
        <div className="flex justify-center  self-stretch h-[52px] w-[264px]  gap-[8px]  pb-[12px] px-[12px] ">
          <div className=" w-[240px] h-[40px]   flex py-[12px] px-[16px] items-center rounded-[20px] border-[1px] border-solid border-[var(--Light-Gray, #F1F1F1)] gap-[8px] self-stretch">
            <div className="w-[16px] h-[16px] ">
              <Search />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="w-full h-[14px] text-Mid-Gray font-Inter text-[14px] font-normal leading-5 tracking-tighter "
            />
          </div>
        </div>
        <SideBarDiv
          key={sidebarData[0].name}
          svg={sidebarData[0].svg}
          name={sidebarData[0].name}
        />
        {DivwithdropdownData.map((items: items_type_two) => {
          return (
            <Divwithdropdown
              key={items.name}
              svg={items.svg}
              svg2={items.svg2}
              name={items.name}
            />
          );
        })}

        {sidebarData.slice(1, 6).map((items: items) => (
          <SideBarDiv key={items.name} svg={items.svg} name={items.name} />
        ))}
      </div>
      <User />
    </main>
  );
}

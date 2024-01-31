import Image from "next/image";
import Sidebar from "./component/Sidebar";
import ItemOne from "./component/Main/SectionOne/ItemOne";
import ItemTwo from "./component/Main/SectionOne/ItemTwo";
import Widgets from "./component/Main/SectionTwo/Widgets";
import SubSectionOne from "./component/Main/SectionThree/SubSectionOne";
import { SubSectionTwo } from "./component/Main/SectionThree/SubSectionTwo";
import { SubSectionThree } from "./component/Main/SectionThree/SubSectionThree";
import Rows from "./component/Main/SectionTwo/Rows";
import ItemThree from "./component/Main/SectionOne/ItemThree";

export default function Home() {
  return (
    <main className="w-full h-full bg-[#DDDCDC] flex justify-center  m-0 p-0">
      <div className="max-w-[1440px] max-h-[922px]  flex flex-col  sm:flex-row  items-start p-[16px]  gap-[16px]  bg-[#F6F6F3] rounded-[32px] overflow-hidden ">
        <Sidebar />
        <div className="w-full h-[50px] sm:hidden rounded-[16px]  ">NAVBAR</div>
        <div className="w-full  sm:max-w-[1112px]  min-h-[922px] rounded-[16px]  flex flex-col gap-[16px] overflow-hidden  ">
          <section className="flex overflow-y-scroll sm:overflow-hidden  min-h-[262px] justify-start gap-[16px] self-stretch ">
            <ItemOne />
            <ItemTwo />
            <ItemThree />
          </section>
          <section className="min-h-[400px] flex flex-col sm:flex-row justify-start gap-[16px] self-stretch ">
            <Widgets />
            <Rows />
          </section>
          <section className="min-h-[256px] flex flex-col sm:flex-row  gap-[16px] items-start self-stretch ">
            <SubSectionOne />
            <SubSectionTwo />
            <SubSectionThree />
          </section>
        </div>
      </div>
    </main>
  );
}

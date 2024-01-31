"use client";
import Image from "next/image";
import { useState } from "react";
import Sidebar from "./component/Sidebar";
import ItemOne from "./component/Main/SectionOne/ItemOne";
import ItemTwo from "./component/Main/SectionOne/ItemTwo";
import Widgets from "./component/Main/SectionTwo/Widgets";
import SubSectionOne from "./component/Main/SectionThree/SubSectionOne";
import { SubSectionTwo } from "./component/Main/SectionThree/SubSectionTwo";
import { SubSectionThree } from "./component/Main/SectionThree/SubSectionThree";
import Rows from "./component/Main/SectionTwo/Rows";
import ItemThree from "./component/Main/SectionOne/ItemThree";
import Logo from "./component/Logo";
import SideBarDiv from "./component/SidebarDiv";
import { sidebarData } from "./util/data";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import Divwithdropdown from "./component/Divwithdropdown";
import { DivwithdropdownData } from "./util/data";
import { items_type_two } from "./util/data";
import { items } from "./util/data";
import User from "./component/User";

export default function Home() {
  const [show, setShow] = useState(false);
  return (
    <main className="w-full h-full bg-[#DDDCDC] flex flex-col lg:flex-row  justify-center  m-0 p-0  ">
      <div className="w-full h-[70px] lg:hidden z-50 bg-[#F6F6F3] fixed top-0 left-0 px-[24px]  flex items-center justify-between ">
        <div>
          <Logo />
        </div>
        <div onClick={() => setShow(!show)}>
          {show ? <RxCross1 size={28} /> : <RxHamburgerMenu size={28} />}
        </div>
      </div>
      <div
        className={
          show
            ? "fixed left-0 top-[70px] w-[264px] h-[93vh] z-50 bg-[#F6F6F3] ease-in-out duration-500 flex flex-col justify-between  lg:hidden  "
            : "fixed left-[-264px] top-[70px] w-[200px] h-[93vh] z-50 bg-[#F6F6F3] ease-in-out duration-500 flex flex-col justify-between lg:hidden "
        }
      >
        <div className="">
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
      </div>
      <div className="max-w-[1440px] mt-[80px] lg:mt-0  lg:h-[922px]  flex flex-col  sm:flex-row  items-start p-[16px]  gap-[16px]  bg-[#F6F6F3] rounded-[32px] overflow-hidden ">
        <Sidebar />
        <div className="w-full  sm:max-w-[1112px]  2xl:h-[922px] h-full rounded-[16px]  flex flex-col gap-[16px] lg:overflow-y-scroll 2xl:overflow-hidden ">
          <section className="flex overflow-y-scroll 2xl:overflow-hidden  min-h-[262px] justify-start gap-[16px] self-stretch ">
            <ItemOne />
            <ItemTwo />
            <ItemThree />
          </section>
          <section className="lg:h-auto flex flex-col 2xl:flex-row justify-start gap-[16px] self-stretch ">
            <Widgets />
            <Rows />
          </section>
          <section className="min-h-[256px] w-full flex flex-col sm:flex-row flex-wrap  gap-[16px] items-start self-stretch ">
            <div className=" sm:w-full w-full sm:flex-row flex-col 2xl:w-auto flex gap-4 ">
              <SubSectionOne />
              <SubSectionTwo />
            </div>
            <SubSectionThree />
          </section>
        </div>
      </div>
    </main>
  );
}

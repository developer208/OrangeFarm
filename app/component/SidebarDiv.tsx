import { items } from "../util/data";

export default function SideBarDiv(props: items) {
  return (
    <main className="h-[40px] w-[264px] py-[12px] px-[20px] flex items-center gap-[12px] hover:cursor-pointer">
      <div className="h-[16px] w-[16px] flex justify-center items-center ">
        <props.svg />
      </div>
      <h5 className="text-[#131313] font-inter text-base font-normal leading-[14px] tracking-tighter ">
        {props.name}
      </h5>
    </main>
  );
}

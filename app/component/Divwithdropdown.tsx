import { items_type_two } from "../util/data";

export default function Divwithdropdown(props: items_type_two) {
  return (
    <main className="h-[41px] w-[264px] py-[12px] px-[20px] flex items-center justify-between hover:cursor-pointer ">
      <div className="flex gap-[12px]">
        <div className="h-[16px] w-[16px] flex justify-center items-center ">
          <props.svg />
        </div>
        <h5 className="text-[#131313] font-inter text-base font-normal leading-[14px] tracking-tighter ">
          {props.name}
        </h5>
      </div>
      <div className="h-[16px] w-[16px] flex justify-center items-center ">
        <props.svg2 />
      </div>
    </main>
  );
}

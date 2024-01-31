import { Deals } from "@/app/util/data";

export default function Box(props: Deals) {
  return (
    <main className="w-auto h-[48px]  bg-[#FFF7E8] flex items-center justify-center gap-2 py-3 pr-4 pl-3 rounded-[16px] ">
      <div className="w-[24px] h-[24px] ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M15 12.6116H9M12 9.61163V15.6116M12 3.61163C19.2 3.61163 21 5.41163 21 12.6116C21 19.8116 19.2 21.6116 12 21.6116C4.8 21.6116 3 19.8116 3 12.6116C3 5.41163 4.8 3.61163 12 3.61163Z"
            stroke="#FFA500"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <h5 className="text-[#734A00] font-inter text-[14px] font-normal leading-normal tracking-[-0.3px]">
        {props.title}
      </h5>
    </main>
  );
}

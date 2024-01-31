import { RevReport } from "../../icons/Main/SectionOne";

export default function ItemThree() {
  return (
    <main className="w-[260px] h-[262px]  bg-[#FFF] rounded-[16px] flex flex-col items-center self-stretch p-6 gap-2 ">
      <div className="w-full h-auto pb-4 flex justify-center items-start self-stretch ">
        <h4 className="text-black font-inter text-[20px] font-semibold leading-normal tracking-[-0.2px]">
          Quarter goal
        </h4>
      </div>
      <div className="w-[210.12px] h-[102px] relative ">
        <div className="shrink-0 w-[209.39px] h-[102px] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="209"
            height="102"
            viewBox="0 0 209 102"
            fill="none"
          >
            <path
              d="M8.31555 102C3.68987 102 -0.0966179 98.2435 0.292719 93.6343C1.18207 83.1055 3.74648 72.7578 7.90939 62.9663C13.1708 50.5911 20.8825 39.3467 30.6043 29.8751C40.326 20.4035 51.8675 12.8903 64.5696 7.76428C77.2717 2.6383 90.8857 -1.75652e-06 104.634 0C118.383 1.75652e-06 131.997 2.63831 144.699 7.76429C157.401 12.8903 168.943 20.4035 178.664 29.8751C188.386 39.3467 196.098 50.5911 201.359 62.9663C205.522 72.7578 208.087 83.1055 208.976 93.6343C209.365 98.2436 205.579 102 200.953 102C196.327 102 192.621 98.2409 192.158 93.6385C191.314 85.2548 189.204 77.0226 185.883 69.2117C181.464 58.8165 174.986 49.3712 166.82 41.4151C158.653 33.459 148.959 27.1478 138.289 22.842C127.619 18.5362 116.183 16.32 104.634 16.32C93.0855 16.32 81.6497 18.5362 70.9799 22.842C60.3102 27.1478 50.6154 33.459 42.4491 41.4151C34.2828 49.3712 27.805 58.8165 23.3854 69.2117C20.0646 77.0225 17.9547 85.2547 17.1109 93.6384C16.6477 98.2409 12.9412 102 8.31555 102Z"
              fill="#FFF7E8"
            />
          </svg>
        </div>
        {/* <div className="shrink-0 w-[40.586px] h-[69.82px] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="41"
            height="70"
            viewBox="0 0 41 70"
            fill="none"
          >
            <path
              d="M8.31555 70C3.68987 70 -0.0966594 66.2429 0.292563 61.6336C2.22634 38.7333 12.0558 17.0453 28.3155 0.176178L40.5265 11.348C27.1846 25.1901 18.9968 42.8947 17.1107 61.6381C16.6476 66.2406 12.9412 70 8.31555 70Z"
              fill="#D9D9D9"
            />
          </svg>
        </div> */}
        <div className="shrink-0 w-[189.394px] h-[102px] absolute top-[0px] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="186"
            height="102"
            viewBox="0 0 186 102"
            fill="none"
          >
            <path
              d="M8.31555 102C3.68987 102 -0.0966435 98.2433 0.292654 93.6341C1.86113 75.0633 8.62873 57.2069 19.9349 42.0459C32.9304 24.6194 51.2549 11.6485 72.282 4.99223C93.3092 -1.66408 115.96 -1.66408 136.987 4.99225C155.265 10.7785 171.502 21.3364 183.971 35.4448C187.059 38.9396 186.197 44.2665 182.39 46.9612C178.714 49.563 173.663 48.727 170.644 45.3856C160.256 33.8891 146.857 25.2766 131.81 20.5135C114.148 14.9222 95.1212 14.9222 77.4584 20.5135C59.7956 26.1048 44.403 37.0003 33.4868 51.6386C24.2607 64.0103 18.6325 78.5187 17.1108 93.6383C16.6476 98.2407 12.9412 102 8.31555 102Z"
              fill="#FFCD71"
            />
          </svg>
        </div>
        <h2 className="text-[#131313] text-center font-inter text-[32px] font-bold leading-normal tracking-[-1.592px] absolute left-[72.5px] top-[63px] w-[65px] h-[39px] ">
          84%
        </h2>
      </div>
      <div className="w-[72px] h-[55.6px] flex pt-2 flex-col justify-end items-center gap-2  ">
        <div className="h-[17px] flex items-center">
          <div className=" ">
            <h5 className="text-[#734A00] font-inter  flex items-center text-[14px] font-normal leading-normal tracking-tighter w-[54px] ">
              All goals
            </h5>
          </div>
          <div className="w-[14px] h-[14px] flex items-center ">
            <RevReport />
          </div>
        </div>
      </div>
    </main>
  );
}

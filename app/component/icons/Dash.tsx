import React, { FC, SVGProps } from "react";

const Dash: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    {...props}
  >
    <path
      d="M6.66666 2.66666L9.33332 13.3333M7.99999 7.99999L2.66666 9.33332M2.66666 3.99999C2.66666 3.64637 2.80713 3.30723 3.05718 3.05718C3.30723 2.80713 3.64637 2.66666 3.99999 2.66666H12C12.3536 2.66666 12.6928 2.80713 12.9428 3.05718C13.1928 3.30723 13.3333 3.64637 13.3333 3.99999V12C13.3333 12.3536 13.1928 12.6928 12.9428 12.9428C12.6928 13.1928 12.3536 13.3333 12 13.3333H3.99999C3.64637 13.3333 3.30723 13.1928 3.05718 12.9428C2.80713 12.6928 2.66666 12.3536 2.66666 12V3.99999Z"
      stroke="#FFA500"
      stroke-width="1.25"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default Dash;

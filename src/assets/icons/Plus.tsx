import { memo } from "react";

const Plus = ({ width = "16", height = "16" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.99998 3.33333V12.6667M3.33331 8H12.6666"
        stroke="#151515"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default memo(Plus);

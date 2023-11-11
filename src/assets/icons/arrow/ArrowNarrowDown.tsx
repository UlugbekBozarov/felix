import { memo } from "react";

const ArrowNarrowDown = ({ width = "16", height = "16" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 2.66666V13.3333M8 13.3333L12 9.33333M8 13.3333L4 9.33333"
        stroke="#151515"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default memo(ArrowNarrowDown);

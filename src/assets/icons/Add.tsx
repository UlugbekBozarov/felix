import { memo } from "react";

const Add = ({ width = "16", height = "17" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.00001 3.83331V13.1666M3.33334 8.49998H12.6667"
        stroke="#FEFEFE"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default memo(Add);

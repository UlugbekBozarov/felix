import { memo } from "react";

const CheckCircle = ({ width = "20", height = "21" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.24999 10.5L8.74999 13L13.75 8.00002M18.3333 10.5C18.3333 15.1024 14.6024 18.8334 9.99999 18.8334C5.39762 18.8334 1.66666 15.1024 1.66666 10.5C1.66666 5.89765 5.39762 2.16669 9.99999 2.16669C14.6024 2.16669 18.3333 5.89765 18.3333 10.5Z"
        stroke="#52C41A"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default memo(CheckCircle);

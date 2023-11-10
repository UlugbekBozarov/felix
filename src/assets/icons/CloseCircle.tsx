import { memo } from "react";

const CloseCircle = ({ width = "20", height = "20" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 7.49996L7.50002 12.5M7.50002 7.49996L12.5 12.5M18.3334 9.99996C18.3334 14.6023 14.6024 18.3333 10 18.3333C5.39765 18.3333 1.66669 14.6023 1.66669 9.99996C1.66669 5.39759 5.39765 1.66663 10 1.66663C14.6024 1.66663 18.3334 5.39759 18.3334 9.99996Z"
        stroke="#FEFEFE"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <clipPath id="clip0_13_4728">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default memo(CloseCircle);

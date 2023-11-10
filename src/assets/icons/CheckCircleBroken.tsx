import { memo } from "react";

const CheckCircleBroken = ({ width = "20", height = "20" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.3334 9.23818V10.0049C18.3323 11.8019 17.7504 13.5504 16.6745 14.9897C15.5985 16.429 14.0861 17.4819 12.3628 17.9914C10.6395 18.501 8.79774 18.4398 7.11208 17.817C5.42642 17.1942 3.98723 16.0433 3.00915 14.5357C2.03108 13.0282 1.56651 11.2449 1.68475 9.45178C1.80299 7.65866 2.49769 5.95179 3.66525 4.58575C4.83281 3.2197 6.41068 2.26767 8.16351 1.87164C9.91635 1.47561 11.7502 1.6568 13.3917 2.38818M18.3334 3.33341L10 11.6751L7.50002 9.17508"
        stroke="#FEFEFE"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <clipPath id="clip0_13_4689">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default memo(CheckCircleBroken);

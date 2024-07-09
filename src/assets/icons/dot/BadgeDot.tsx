import { memo } from "react";

const BadgeDot = () => {
  return (
    <svg viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="5" height="5" rx="2.5" fill="#FF4D4F" />
      <rect x="0.5" y="0.5" width="5" height="5" rx="2.5" stroke="#FEFEFE" />
    </svg>
  );
};

export default memo(BadgeDot);

import { memo } from "react";

const Link = ({ width = "16", height = "16" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.47173 12.2426L7.52892 13.1854C6.22717 14.4872 4.11662 14.4872 2.81487 13.1854C1.51312 11.8837 1.51313 9.77312 2.81487 8.47138L3.75768 7.52857M12.243 8.47138L13.1858 7.52857C14.4875 6.22682 14.4875 4.11627 13.1858 2.81452C11.884 1.51277 9.77347 1.51277 8.47173 2.81452L7.52892 3.75733M5.66699 10.3333L10.3337 5.66662"
        stroke="#151515"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default memo(Link);

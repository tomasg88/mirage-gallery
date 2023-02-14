import React, { HTMLAttributes } from 'react';

type RightArrowProps = HTMLAttributes<HTMLOrSVGElement> & {
  stroke?: string;
};

export const RightArrow = ({
  className,
  stroke = 'white',
}: RightArrowProps) => {
  return (
    <svg
      width="14"
      height="10"
      viewBox="0 0 14 10"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.8333 4.99992H1.16663"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.66663 9.16667L12.8333 5"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.66663 0.833252L12.8333 4.99992"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

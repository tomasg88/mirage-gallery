import Link from 'next/link';
import React, { HTMLAttributes } from 'react';
import { RightArrow } from '../../Svgs/RightArrow';

type ButtonLinkProps = HTMLAttributes<HTMLButtonElement> & {
  href: string;
  text: string;
  showRightArrow: boolean;
};

export const ButtonLink = ({
  className,
  href,
  text,
  showRightArrow,
}: ButtonLinkProps) => {
  return (
    <Link href={href} className={className}>
      {text}
      {showRightArrow && <RightArrow className="ml-2" />}
    </Link>
  );
};

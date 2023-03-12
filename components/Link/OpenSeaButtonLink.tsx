import clsx from 'clsx';
import { OpenSeaLogo } from 'components/Svgs/OpenSeaLogo';
import Link, { LinkProps } from 'next/link';
import React from 'react';

type OpenSeaButtonLinkProps = LinkProps & {
  rounded?: boolean;
};

const defaultClassName =
  'flex items-center justify-center py-3 text-black duration-300 bg-gray-200 px-9 hover:bg-gray-100';
export const OpenSeaButtonLink = ({
  rounded,
  href,
}: OpenSeaButtonLinkProps): JSX.Element => {
  return (
    <Link
      className={clsx(defaultClassName, { 'rounded-full': rounded })}
      href={href}
      target={'_blank'}
    >
      <OpenSeaLogo className="mr-2" />
      View on Opensea
    </Link>
  );
};

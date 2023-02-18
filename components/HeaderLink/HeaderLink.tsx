import { FunctionComponent, ReactElement, ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

interface HeaderLinkProps {
  url: string;
  children: ReactNode;
}

export const HeaderLink: FunctionComponent<HeaderLinkProps> = ({
  url,
  children,
}): ReactElement => {
  const router = useRouter();
  const isActive = router.route === url;

  return (
    <Link
      className={isActive ? 'text-[#920d3d]' : 'hover:text-[#920d3d]'}
      href={url}
    >
      {children}
    </Link>
  );
};

HeaderLink.propTypes = {
  url: PropTypes.string.isRequired,
};

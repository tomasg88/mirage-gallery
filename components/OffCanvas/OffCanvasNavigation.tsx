import Link from 'next/link';
import styles from './OffCanvasNavigation.module.css';
import { ROUTES } from 'utils/routes';

type OffCanvasNavigationProps = {
  closeMenu: () => void;
};

export const OffCanvasNavigation = ({
  closeMenu,
}: OffCanvasNavigationProps) => (
  <nav className={styles.root}>
    {ROUTES.map((route) => {
      return (
        <Link
          aria-label={route.ariaLabel}
          className={styles.link}
          href={route.path}
          key={route.path}
          onClick={closeMenu}
          title={route.ariaLabel}
        >
          {route.title}
        </Link>
      );
    })}
  </nav>
);

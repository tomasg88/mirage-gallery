import Link from 'next/link';
import styles from './OffCanvasNavigation.module.css';
import { ROUTES } from '@/utils/routes';

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
          href={route.path}
          key={route.path}
          className={styles.link}
          onClick={closeMenu}
          title={route.ariaLabel}
          aria-label={route.ariaLabel}
        >
          {route.title}
        </Link>
      );
    })}
  </nav>
);

import Link from "next/link";
import styles from "./OffcanvasNavigation.module.css";
import { ROUTES } from "@/utils/routes";

const Navigation = ({ closeMenu }: any) => (
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

export default Navigation;

import React, { HTMLAttributes } from 'react';
import styles from './FilterButton.module.css';

type FilterButtonProps = HTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export const FilterButton = ({
  children,
  className = '', // init with white space if nothing is passed
  onClick,
}: FilterButtonProps) => {
  return (
    <button
      className={`${styles.root} ${className}`}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};

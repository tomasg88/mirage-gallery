import { Tab } from '@headlessui/react';
import React from 'react';

type ButtonTabProps = {
  activeClasses: string;
  title: string;
};

export const ButtonTab = ({ activeClasses, title }: ButtonTabProps) => {
  return (
    <Tab as={React.Fragment}>
      {({ selected }) => (
        <button
          className={`${selected ? activeClasses : ''} outline-none `}
          type="button"
        >
          {title}
        </button>
      )}
    </Tab>
  );
};

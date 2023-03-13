import { Tab } from '@headlessui/react';
import React from 'react';

type ButtonTabProps = {
  title: string;
};

export const ButtonTab = ({ title }: ButtonTabProps) => {
  return (
    <Tab as={React.Fragment}>
      {({ selected }) => (
        <button
          className={`${selected ? 'text-curated' : ''} outline-none `}
          type="button"
        >
          {title}
        </button>
      )}
    </Tab>
  );
};

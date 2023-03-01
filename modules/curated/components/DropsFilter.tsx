import { OpenSeaLogo } from 'components/Svgs/OpenSeaLogo';
import { FilterButton } from 'components/Button/FilterButton/FilterButton';
import { Dispatch, SetStateAction } from 'react';
import { MintStatus } from 'types/drops';

type DropsFilterProps = {
  selectedFilter: MintStatus;
  setFilter: Dispatch<SetStateAction<MintStatus>>;
};

export const MintStatusText = {
  [MintStatus.ALL]: 'All',
  [MintStatus.UPCOMING]: 'Upcoming',
  [MintStatus.MINTING]: 'Minting',
  [MintStatus.SOLD_OUT]: 'Sold Out',
};

export default function DropsFilter({
  selectedFilter,
  setFilter,
}: DropsFilterProps) {
  return (
    <div className="grid w-full mx-auto my-3 md:grid-cols-2 max-w-screen-2xl">
      <h2 className="text-2xl text-left">Our Drops</h2>
      <div className="flex items-center justify-end gap-3">
        {Object.values(MintStatus).map((value) => (
          <FilterButton
            isActive={value === selectedFilter}
            key={value}
            onClick={() => setFilter(value)}
          >
            {MintStatusText[value]}
          </FilterButton>
        ))}
        <div className="h-full border-r border-gray-300" />
        <FilterButton>
          <div>
            <OpenSeaLogo className="mr-2" />
          </div>
          View on Opensea
        </FilterButton>
      </div>
    </div>
  );
}

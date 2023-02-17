import { FilterButton } from 'components/Button/FilterButton/FilterButton';
import { OpenSeaLogo } from 'components/Svgs/OpenSeaLogo';

export default function OurDropsFilter() {
  return (
    <div className="grid w-full mx-auto my-3 md:grid-cols-2 max-w-screen-2xl">
      <h2 className="text-2xl text-left">Our Drops</h2>
      <div className="flex items-center justify-end gap-3">
        <FilterButton>All</FilterButton>
        <FilterButton>Minting</FilterButton>
        <FilterButton>Sold Out</FilterButton>
        <div className="h-full border-r border-gray-300" />
        <FilterButton>
          <div>
            <OpenSeaLogo className={'w-4 mr-2'} />
          </div>
          View on Opensea
        </FilterButton>
      </div>
    </div>
  );
}

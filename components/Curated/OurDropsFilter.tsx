import { OpenSeaLogo } from '../Svgs/OpenSeaLogo';

export default function OurDropsFilter() {
  return (
    <div className="grid w-full mx-auto my-3 md:grid-cols-2 max-w-screen-2xl">
      <h2 className="text-2xl text-left">Our Drops</h2>
      <div className="flex items-center justify-end gap-3">
        <button type="button" className="btn">
          All
        </button>
        <button type="button" className="btn">
          Minting
        </button>
        <button type="button" className="btn">
          Sold Out
        </button>
        <div className="h-full border-r border-gray-300" />
        <button type="button" className="btn">
          <div>
            <OpenSeaLogo className={'w-4 mr-2'} />
          </div>
          View on Opensea
        </button>
      </div>
    </div>
  );
}

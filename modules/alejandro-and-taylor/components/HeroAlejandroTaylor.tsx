import { OpenSeaButtonLink } from 'components/Link/OpenSeaButtonLink';
import { RightArrow } from 'components/Svgs/RightArrow';
import { MARKETPLACE_URLS } from 'utils/constants';

export default function HeroAlejandroTaylor() {
  return (
    <div
      className="w-full pb-64 bg-no-repeat "
      style={{
        backgroundImage:
          "url('/assets/alejandrotaylor/back-alejandrotaylor.jpg')",
        backgroundSize: '50vw',
        backgroundPosition: 'top right',
      }}
    >
      <div className="grid w-full grid-cols-2 gap-6 px-6 mx-auto max-w-screen-2xl">
        <div className="grid w-full mt-16">
          <span className="text-sm uppercase text-original">
            Alejandro & Taylor
          </span>
          <h1 className="mt-6 text-3xl lg:text-7xl">
            Meet the Mirage Gallery OGs - Alejandro & Taylor
          </h1>
          <p className="py-4">
            Mirage Gallery was founded on the premise that art can be more than
            human.
          </p>
          <div className="grid max-w-xl gap-3 sm:grid-cols-2">
            <OpenSeaButtonLink href={MARKETPLACE_URLS.alejandroAndTaylor} />
            <button
              className="flex items-center justify-center py-3 text-white bg-original"
              type="button"
            >
              Dashboard
              <RightArrow className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

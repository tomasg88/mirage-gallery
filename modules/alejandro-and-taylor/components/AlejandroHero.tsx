import { OpenSeaButtonLink } from 'components/Link/OpenSeaButtonLink';
import { RightArrow } from 'components/Svgs/RightArrow';
import Image from 'next/image';
import { MARKETPLACE_URLS } from 'utils/constants';

export default function AlejandroHero() {
  return (
    <>
      <div className="w-full h-[500px]">
        <Image
          alt="imagen"
          className="object-cover w-full h-[500px]"
          height={600}
          src="/assets/alejandrotaylor/back-alejandro.jpg"
          width={1600}
        />
      </div>
      <div className="px-2 mx-auto md:px-2 max-w-screen-2xl">
        <div className="flex items-center justify-between my-6">
          <span className="flex items-center justify-center bg-[#f1fbfe] text-xs px-3 py-2 rounded-full text-original">
            Alejandro & Taylor
          </span>
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
        <h2 className="text-3xl">Meet Alejandro</h2>
        <p className="my-6">
          Alejandro is a realist visual artist born in Panama in 1974. He
          painted landscapes during his adolescence and received his formal arts
          education in Panama, Barcelona and New York City. Since 2001, he has
          held over 25 exhibitions of his paintings throughout the US and
          Europe. His work has appeared in numerous publications as well.
        </p>
        <p>
          [This bio was created entirely with A.I. and is not factually
          accurate]
        </p>{' '}
      </div>
    </>
  );
}

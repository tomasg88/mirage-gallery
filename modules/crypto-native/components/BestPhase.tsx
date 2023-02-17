import { OpenSeaLogo } from 'components/Svgs/OpenSeaLogo';
import { RightArrow } from 'components/Svgs/RightArrow';
import Image from 'next/image';

export default function CryptoNativeBestPhase() {
  return (
    <div className="relative py-24">
      <div className="relative z-10">
        <h2 className="my-6 text-5xl ">Which phase is the best?</h2>
        <h2 className="my-6 text-3xl leading-relaxed text-[#808080]">
          That is entirely subjective and part of the fun. Some people like less
          trained artwork while others may like a more refined version. Nobody
          will know what the next phase looks like until the sale has been
          confirmed on OpenSea.
        </h2>
        <div className="grid max-w-xl gap-3 sm:grid-cols-2">
          <button
            className="flex items-center justify-center py-3 text-black duration-300 bg-gray-200 px-9 hover:bg-gray-100"
            type="button"
          >
            <OpenSeaLogo className="mr-2" />
            View on Opensea
          </button>
          <button
            className="bg-[#431281] flex justify-center items-center text-white py-3"
            type="button"
          >
            Dashboard
            <RightArrow className="ml-2" />
          </button>
        </div>
      </div>
      <Image
        alt="imagen"
        className="absolute top-0 right-0 z-0 hidden -translate-x-64 md:flex aspect-square"
        height={150}
        src="/assets/crypto-native/misc-best-phase.jpg"
        width={150}
      />
      <Image
        alt="imagen"
        className="relative bottom-0 right-0 z-0 mt-24 translate-y-0 md:absolute md:translate-y-24 md:flex"
        height={270}
        src="/assets/crypto-native/misc-best-phase-2.jpg"
        width={400}
      />
    </div>
  );
}

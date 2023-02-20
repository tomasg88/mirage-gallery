import { MintingClosedSvg } from 'components/Svgs/MintingClosedSvg';
import { OpenSeaLogo } from 'components/Svgs/OpenSeaLogo';
import Image from 'next/image';

export default function DreamersCollectionHero() {
  return (
    <>
      <div className="w-full h-[500px]">
        <Image
          alt="imagen"
          className="object-cover w-full h-[500px]"
          height={600}
          src="/assets/back-8000-dreamers.jpg"
          width={1600}
        />
      </div>
      <div className="px-2 mx-auto md:px-2 max-w-screen-2xl">
        <div className="flex items-center justify-between my-6">
          <span className="flex items-center justify-center bg-[#fdf7f7] text-xs px-3 py-2 rounded-full text-[#C02828]">
            <MintingClosedSvg className="mr-2" />
            Minting Closed
          </span>
          {/* TODO - review hover and adjust icon */}
          <button className="btn" type="button">
            <div>
              <OpenSeaLogo className="mr-2" />
            </div>
            View on Opensea
          </button>
        </div>
        <h2 className="text-3xl">8,000 Dreamers</h2>
        <p>
          Each Dreamer is the combination of traditional fine-art, machine
          learning, and collectibles.
        </p>
      </div>
    </>
  );
}

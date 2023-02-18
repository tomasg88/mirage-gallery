import { OpenSeaLogo } from 'components/Svgs/OpenSeaLogo';
import { SoldOutSvg } from 'components/Svgs/SoldOutSvg';
import Image from 'next/image';

export default function HeroSoldOut() {
  return (
    <>
      <div className="w-full h-[500px]">
        <div className="relative">
          <div className="absolute top-0 bottom-0 left-0 w-32 md:w-[500px] bg-gradient-to-r from-white via-white/30 to-transparent" />
          <div className="absolute top-0 bottom-0 right-0 w-32 md:w-[500px] bg-gradient-to-l from-white via-white/30 to-transparent" />
          <Image
            alt="imagen"
            className="object-cover w-full h-[500px]"
            height={600}
            src="/assets/11.jpg"
            width={1600}
          />
        </div>
      </div>
      <div className="px-2 mx-auto md:px-2 max-w-screen-2xl">
        <div className="flex items-center justify-between my-6">
          <span className="flex items-center justify-center px-3 py-2 text-xs text-black bg-gray-200 rounded-full">
            <SoldOutSvg className="mr-2" />
            Sold out
          </span>
          <div className="flex justify-end">
            <button
              className="flex items-center justify-center py-3 text-black duration-300 bg-gray-200 px-9 hover:bg-gray-100"
              type="button"
            >
              <OpenSeaLogo className="mr-2" />
              View on Opensea
            </button>
          </div>
        </div>
        <h2 className="text-3xl">Oneiroscapes</h2>
        <p className="my-6 md:w-1/2">
          Dreams are the realm of possibility, a space in which we can explore
          our innermost imaginations. Through dreams, we can access boundless
          creativity, magical realms and fantastical journeys, allowing us to
          escape the boundaries of our waking lives. Venture beyond the
          boundaries of reality and explore the world of oneironautics.
        </p>
      </div>
    </>
  );
}

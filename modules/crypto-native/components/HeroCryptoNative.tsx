import Image from 'next/image';
import { OpenSeaLogo } from 'components/Svgs/OpenSeaLogo';
import { RightArrow } from 'components/Svgs/RightArrow';

export default function HeroCryptoNative() {
  return (
    <div className="w-full pb-64">
      <Image
        alt="imagen"
        className="absolute top-0 right-0 z-0 animate__animated animate__slower animate__fadeIn w-1/2"
        height={600}
        src="/assets/back-crypto-native.jpg"
        width={1600}
      />
      <div className="relative z-10 grid w-full grid-cols-2 gap-6 px-6 mx-auto max-w-screen-2xl">
        <div className="grid w-full mt-16">
          <span className="text-sm uppercase text-[#431281]">
            CRYPTO-NATIVE
          </span>
          <h1 className="mt-6 text-3xl lg:text-7xl">
            A digital artist, evolving with each sale
          </h1>
          <p className="py-4">
            Mirage Gallery was founded on the premise that art can be more than
            human.
          </p>
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
      </div>
    </div>
  );
}

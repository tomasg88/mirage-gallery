import Image from 'next/image';
import { RightArrow } from 'components/Svgs/RightArrow';
import { OpenSeaButtonLink } from 'components/Link/OpenSeaButtonLink';
import { MARKETPLACE_URLS } from 'utils/constants';

export default function HeroCryptoNative() {
  return (
    <div className="w-full pb-64">
      <Image
        alt="imagen"
        className="absolute top-0 right-0 z-0 w-1/2 animate__animated animate__slower animate__fadeIn"
        height={600}
        src="/assets/back-crypto-native.jpg"
        width={1600}
      />
      <div className="relative z-10 grid w-full grid-cols-2 gap-6 px-6 mx-auto max-w-screen-2xl">
        <div className="grid w-full mt-16">
          <span className="text-sm uppercase text-native">CRYPTO-NATIVE</span>
          <h1 className="mt-6 text-3xl lg:text-7xl">
            A digital artist, evolving with each sale
          </h1>
          <p className="py-4">
            Mirage Gallery was founded on the premise that art can be more than
            human.
          </p>
          <div className="grid max-w-xl gap-3 sm:grid-cols-2">
            <OpenSeaButtonLink href={MARKETPLACE_URLS.cryptoNative} />
            <button
              className="flex items-center justify-center py-3 text-white bg-native"
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

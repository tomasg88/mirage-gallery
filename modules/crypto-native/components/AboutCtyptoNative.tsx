import Image from 'next/image';
import { HeroTitle } from 'components/HeroTitle/HeroTitle';
import { PlayIconSvg } from 'components/Svgs/PlayIconSvg';
import { OpenSeaButtonLink } from 'components/Link/OpenSeaButtonLink';
import { MARKETPLACE_URLS } from 'utils/constants';

export default function AboutCtyptoNative() {
  return (
    <div className="py-24">
      <HeroTitle accentColor={'text-native'} subtitle="About">
        With Crypto-Native, the artwork evolves when a secondary sale happens.
      </HeroTitle>
      <p className="mx-auto text-lg text-gray-600 md:text-3xl ">
        Meaning instead of just trading the same JPEG back and forth, you only
        get to own a unique step in the 10 phases of evolution for a piece.
      </p>
      <div className="flex items-center justify-start mt-6">
        <OpenSeaButtonLink href={MARKETPLACE_URLS.cryptoNative} />
      </div>
      <div className="h-[500px] overflow-hidden my-6 relative">
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900/60">
          <div className="w-20 h-20 duration-300 cursor-pointer hover:scale-110">
            <PlayIconSvg />
          </div>
        </div>
        <Image
          alt="imagen"
          className="object-cover w-full"
          height={500}
          src="/assets/1.jpg"
          width={1200}
        />
      </div>
    </div>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';
import { RightArrow } from 'components/Svgs/RightArrow';
import { useCallback } from 'react';
import { HOME_INFO_BY_MODULE } from 'utils/constants';
import { Modules } from 'types/main';

function getRandomValues() {
  return Math.floor(Math.random() * 10);
}

export const HomePosters = () => {
  const getPosterUrl = useCallback(
    (moduleName: Modules): string =>
      HOME_INFO_BY_MODULE[moduleName].samples[getRandomValues()],
    []
  );

  const getModulePath = useCallback(
    (moduleName: Modules): string => HOME_INFO_BY_MODULE[moduleName].href,
    []
  );

  return (
    <div className="relative z-10 w-full min-h-screen pt-24 border-b border-gray-200">
      <div className="px-2 mx-auto max-w-screen-2xl">
        <h2 className="my-6 text-2xl">Our drops</h2>
        <div className="grid gap-3 md:grid-cols-4">
          {Object.values(Modules).map((moduleName) => (
            <div className="relative group" key={moduleName}>
              <div className="overflow-hidden h-[512px] relative z-0">
                <Image
                  alt="alt"
                  className="object-cover h-[512px]"
                  height={900}
                  quality={100}
                  src={getPosterUrl(moduleName as Modules)}
                  width={1200}
                />
              </div>
              <Link
                className="absolute bottom-0 left-0 z-20 flex items-center justify-start p-6 text-2xl text-white hover:opacity-80"
                href={getModulePath(moduleName as Modules)}
              >
                {HOME_INFO_BY_MODULE[moduleName as Modules].name}
                <RightArrow className="ml-3" />
              </Link>
              <div className="absolute inset-0 duration-300 bg-gradient-to-b from-transparent group-hover:opacity-100 opacity-90 to-black via-black/50" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

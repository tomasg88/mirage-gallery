import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Modules } from 'types/main';
import { HOME_IMAGES_BY_MODULE } from 'utils/constants';

type HomeSectionImagesRow = {
  module: Modules;
};

export const HomeCuratedImages = ({ module }: HomeSectionImagesRow) => {
  return (
    <div className="grid h-64 grid-cols-10 my-6 overflow-hidden">
      {HOME_IMAGES_BY_MODULE[module].map((image, i) => (
        <div className="w-full h-64 overflow-hidden" key={`${image}-${i}`}>
          <Image
            alt="alt"
            className="object-cover w-full h-64"
            height={900}
            quality={100}
            src={`/assets/${image}`}
            width={1200}
          />
        </div>
      ))}
    </div>
  );
};

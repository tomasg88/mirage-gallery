import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Mousewheel, Navigation } from 'swiper';
import { RightArrow } from 'components/Svgs/RightArrow';
import Link from 'next/link';
import { CURATED_DROP_DETAILS } from 'utils/routes';
import { HomeProps } from 'pages';

export default function HomeHero({ drops }: { drops: HomeProps[] }) {
  return (
    <div className="relative z-10 w-full min-h-[70vh] md:min-h-screen border-b border-gray-200">
      <div className="w-full">
        <h1 className="text-3xl leading-normal lg:text-[96px] max-w-screen-2xl mx-auto lg:leading-[112px] my-6">
          A new generation of <span className="text-[#808080]">art.</span>
        </h1>
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          centeredSlides={true}
          direction={'horizontal'}
          loop={true}
          modules={[Mousewheel, Navigation]}
          mousewheel={{
            forceToAxis: true,
            sensitivity: 0.01,
            thresholdDelta: 10,
            releaseOnEdges: true,
          }}
          navigation={true}
          slidesPerView={1}
          spaceBetween={50}
        >
          {drops.map((drop) => (
            <SwiperSlide key={drop?._id}>
              <div className="overflow-hidden">
                <div className="h-64 md:h-[500px] overflow-hidden w-full">
                  {drop.cover && (
                    <Image
                      alt="alt"
                      className="object-cover h-64 md:h-[500px] w-full"
                      height={900}
                      quality={100}
                      src={drop?.cover.url}
                      width={1200}
                    />
                  )}
                </div>
                <div className="flex justify-between w-full mt-6 slide-item-inview">
                  <span className="px-3 py-2 text-sm bg-gray-100">
                    Featured drop
                  </span>
                  <Link
                    className="flex items-center justify-center px-3 py-2 text-white bg-black"
                    href={`${CURATED_DROP_DETAILS}/${drop.slug}`}
                  >
                    View drop
                    <RightArrow className="ml-2" />
                  </Link>
                </div>
                <h2 className="my-6 text-3xl slide-item-inview">{drop.name}</h2>
                {drop.artists.map((artist) => (
                  <p className="slide-item-inview" key={artist}>
                    {artist}
                  </p>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

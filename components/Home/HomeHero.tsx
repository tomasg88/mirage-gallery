import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import { GALLERY } from '@/utils/gallery';
import 'swiper/css/navigation';

import { Pagination } from 'swiper';
import { Navigation } from 'swiper';
import { RightArrow } from '../Svgs/RightArrow';

export default function HomeHero() {
  return (
    <div className="relative z-10 w-full min-h-[70vh] md:min-h-screen border-b border-gray-200">
      <div className="w-full px-2 ">
        <h1 className="text-3xl leading-normal lg:text-[96px] max-w-screen-2xl mx-auto lg:leading-[112px] my-6">
          A new generation of <span className="text-[#808080]">art.</span>
        </h1>
        <Swiper
          spaceBetween={50}
          centeredSlides={true}
          slidesPerView={1}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
        >
          {GALLERY.map((i) => (
            <SwiperSlide key={i.id}>
              <div className="">
                <div className="h-64 md:h-[500px] overflow-hidden w-full">
                  <Image
                    alt="alt"
                    width={1200}
                    height={900}
                    quality={100}
                    placeholder="blur"
                    className="object-cover w-full"
                    blurDataURL={`/assets/blur-${i.img}`}
                    src={`/assets/${i.img}`}
                  />
                </div>
                <div className="flex justify-between w-full mt-12 slide-item-inview">
                  <span className="px-3 py-2 text-sm bg-gray-100">
                    Featured drop
                  </span>
                  <span className="flex items-center justify-center px-3 py-2 text-white bg-black">
                    View drop
                    <RightArrow className="ml-2" />
                  </span>
                </div>
                <h2 className="my-6 text-3xl slide-item-inview">{i.title}</h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

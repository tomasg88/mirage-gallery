import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import { GALLERY } from "@/utils/gallery";

export default function HomeHero() {
  return (
    <div className="relative z-10 w-full min-h-screen pt-24 border-b border-gray-200">
      <div className="px-2 mx-auto max-w-screen-2xl">
        <h2 className="my-6 text-2xl">Our drops</h2>
        <div className="grid gap-3 md:grid-cols-2 md:grid-cols-4">
          {DROPS.map((i) => (
            <div key={i.id} className="relative group">
              <div className="overflow-hidden h-[512px] relative z-0">
                <Image
                  alt="alt"
                  width={1200}
                  height={900}
                  quality={100}
                  placeholder="blur"
                  className="object-cover h-[512px]"
                  blurDataURL={`/assets/blur-${i.img}`}
                  src={`/assets/${i.img}`}
                />
              </div>
              <Link href={i.path} className="absolute bottom-0 left-0 z-20 flex items-center justify-start p-6 text-2xl text-white hover:opacity-80">
                {i.title}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="12"
                  fill="none"
                  className="ml-3"
                >
                  <path
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 6H1M10 11l5-5M10 1l5 5"
                  />
                </svg>
              </Link>
              <div className="absolute inset-0 duration-300 bg-gradient-to-b from-transparent group-hover:opacity-100 opacity-90 to-black via-black/50"/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const DROPS = [
  {
    id: 1,
    title: "Curated",
    path: "/curated",
    img: "1.jpg",
  },
  {
    id: 2,
    title: "Dreamers",
    path: "/dreamers",
    img: "2.jpg",
  },
  {
    id: 3,
    title: "Crypto Native",
    path: "/crypto-native",
    img: "3.jpg",
  },
  {
    id: 4,
    title: "Alejandro &  Taylor",
    path: "/alejandro-and-taylor",
    img: "4.jpg",
  },
];






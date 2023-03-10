import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';
import { RightArrow } from 'components/Svgs/RightArrow';

export const HomePosters = () => {
  return (
    <div className="relative z-10 w-full min-h-screen pt-24 border-b border-gray-200">
      <div className="px-2 mx-auto max-w-screen-2xl">
        <h2 className="my-6 text-2xl">Our drops</h2>
        <div className="grid gap-3 md:grid-cols-4">
          {DROPS.map((i) => (
            <div className="relative group" key={i.id}>
              <div className="overflow-hidden h-[512px] relative z-0">
                <Image
                  alt="alt"
                  blurDataURL={`/assets/blur-${i.img}`}
                  className="object-cover h-[512px]"
                  height={900}
                  placeholder="blur"
                  quality={100}
                  src={`/assets/${i.img}`}
                  width={1200}
                />
              </div>
              <Link
                className="absolute bottom-0 left-0 z-20 flex items-center justify-start p-6 text-2xl text-white hover:opacity-80"
                href={i.path}
              >
                {i.title}
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

const DROPS = [
  {
    id: 1,
    title: 'Curated',
    path: '/curated',
    img: '1.jpg',
  },
  {
    id: 2,
    title: 'Dreamers',
    path: '/dreamers',
    img: '2.jpg',
  },
  {
    id: 3,
    title: 'Crypto Native',
    path: '/crypto-native',
    img: '3.jpg',
  },
  {
    id: 4,
    title: 'Alejandro &  Taylor',
    path: '/alejandro-and-taylor',
    img: '4.jpg',
  },
];

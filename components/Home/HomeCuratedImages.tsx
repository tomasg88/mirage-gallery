import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function HomeHero() {
  return (
    <div className="grid h-64 grid-cols-10 my-6 overflow-hidden">
      {GALLERY.map((img) => (
        <div className="w-full h-64 overflow-hidden" key={img.id}>
          <Image
            alt="alt"
            blurDataURL={`/assets/blur-${img.img}`}
            className="object-cover w-full h-64"
            height={900}
            placeholder="blur"
            quality={100}
            src={`/assets/${img.img}`}
            width={1200}
          />
        </div>
      ))}
    </div>
  );
}

const GALLERY = [
  {
    id: 7,
    title: 'Oneiroscapes',
    img: '7.jpg',
  },
  {
    id: 8,
    title: 'Oneiroscapes',
    img: '8.jpg',
  },
  {
    id: 9,
    title: 'Oneiroscapes',
    img: '9.jpg',
  },
  {
    id: 10,
    title: 'Oneiroscapes',
    img: '10.jpg',
  },
  {
    id: 5,
    title: 'Oneiroscapes',
    img: '5.jpg',
  },
  {
    id: 6,
    title: 'Oneiroscapes',
    img: '6.jpg',
  },
  {
    id: 11,
    title: 'Oneiroscapes',
    img: '11.jpg',
  },
  {
    id: 12,
    title: 'Oneiroscapes',
    img: '12.jpg',
  },
  {
    id: 13,
    title: 'Oneiroscapes',
    img: '13.jpg',
  },
  {
    id: 14,
    title: 'Oneiroscapes',
    img: '14.jpg',
  },
];

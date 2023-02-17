import Image from 'next/image';
import Link from 'next/link';
import { OpenSeaLogo } from 'components/Svgs/OpenSeaLogo';
import AlejandroHero from 'modules/alejandro-and-taylor/components/AlejandroHero';

export default function AlejandroPage() {
  return (
    <div className="w-full pb-24">
      <AlejandroHero />
      <div className="my-20 border-b border-gray-300">
        <div className="flex items-center justify-start gap-12 px-2 py-3 mx-auto max-w-screen-2xl">
          <Link className="text-[#074f65]" href="">
            Collection 3
          </Link>
          <Link className="text-[#808080]" href="">
            Collection 2
          </Link>
          <Link className="text-[#808080]" href="">
            Collection 1
          </Link>
        </div>
      </div>
      <div className="px-2 mx-auto max-w-screen-2xl">
        <div className="grid w-full mx-auto my-3 md:grid-cols-2 max-w-screen-2xl">
          <h2 className="text-2xl text-left">Collection 3</h2>
          <div className="flex items-center justify-end ">
            <button className="btn" type="button">
              <div>
                <OpenSeaLogo className="w-4 mr-2" />
              </div>
              Full collection
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 gap-y-20">
          {[...TOKENS, ...TOKENS, ...TOKENS, ...TOKENS].map((token) => (
            <div className="" key={token.id}>
              <Image
                alt="alt"
                height={900}
                quality={100}
                src={`/assets/alejandrotaylor/${token.img}`}
                width={1200}
              />
              <h4 className="my-3 text-sm ">{token.title}</h4>
              <p className="text-xs uppercase">{token.status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const TOKENS = [
  {
    id: 1,
    title: 'Garden Among the Trees',
    img: 'alejandro1.png',
    status: 'sold',
  },
  {
    id: 2,
    title: 'The Last Mistake of Spring​',
    img: 'alejandro2.png',
    status: 'sold',
  },
  {
    id: 3,
    title: 'Sunset at the Dunes',
    img: 'alejandro3.png',
    status: 'sold',
  },
  {
    id: 4,
    title: 'Liquid Sunset over Lonely Pond',
    img: 'alejandro4.png',
    status: 'sold',
  },
];

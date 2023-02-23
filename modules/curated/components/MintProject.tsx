import Image from 'next/image';
import { HeroTitle } from 'components/HeroTitle/HeroTitle';
import RefreshSvg from 'components/Svgs/RefreshSvg';

export default function MintProject() {
  return (
    <div
      className="flex flex-col py-20 mx-auto max-w-screen-2xl"
      id="become-curated-artist"
    >
      <HeroTitle accentColor={'text-[#920d3d]'} subtitle="Mint">
        Enters details below
      </HeroTitle>
      <h3 className="my-6 font-sans font-bold">Select project</h3>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4 gap-y-20">
        {TOKENS.map((i) => (
          <div className="relative" key={i.id}>
            <Image
              alt="alt"
              className="relative z-0"
              height={900}
              quality={100}
              src={`/assets/alejandrotaylor/${i.img}`}
              width={1200}
            />
            <div className="absolute bottom-0 left-0 right-0 z-10 flex items-end justify-start h-32 p-6 bg-gradient-to-b from-transparent to-black/90">
              <h4 className="text-xl text-white ">{i.title}</h4>
            </div>
          </div>
        ))}
      </div>
      <div>
        <label className="flex flex-col mt-6">
          <span className="mb-2 font-sans text-sm font-bold">Quantity</span>
          <input
            className="w-full p-3 font-sans text-gray-800 bg-gray-100 md:w-1/2"
            placeholder="1-10"
            type="text"
          />
        </label>
        <span className="flex items-center justify-start my-6">
          124/250 remaining
          <RefreshSvg className="inline-flex ml-2 cursor-pointer" />
        </span>
        <div>
          <button
            className="flex w-56 items-center justify-center py-3 text-white duration-300 bg-[#920d3d] px-9"
            type="button"
          >
            Mint
          </button>
        </div>
      </div>
    </div>
  );
}

const TOKENS = [
  {
    id: 1,
    title: 'Garden',
    img: 'alejandro1.png',
    status: 'sold',
  },
  {
    id: 2,
    title: 'The Last​',
    img: 'alejandro2.png',
    status: 'sold',
  },
  {
    id: 3,
    title: 'Sunse',
    img: 'alejandro3.png',
    status: 'sold',
  },
  {
    id: 4,
    title: 'Liquid Pond',
    img: 'alejandro4.png',
    status: 'sold',
  },
];

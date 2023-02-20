import Image from 'next/image';

type Creator = {
  name: string;
  img: string;
  available: string;
  total: string;
};

const CREATORS = [
  {
    name: 'Model 1',
    img: '/assets/1.jpg',
    available: '1500',
    total: '8000',
  },
  {
    name: 'Model 2',
    img: '/assets/2.jpg',
    available: '5875',
    total: '8000',
  },
  {
    name: 'Dallee',
    img: '/assets/3.jpg',
    available: '500',
    total: '8000',
  },
  {
    name: '@wheattreat',
    img: '/assets/4.jpg',
    available: '100',
    total: '8000',
  },
];

export default function DreamersFourDifferentCreators() {
  return (
    <div className="py-24">
      <div className="mx-auto">
        <h2 className="my-6 text-xl">4 Different Creators</h2>
      </div>
      <div className="grid grid-cols-2 gap-3 mx-auto md:grid-cols-4">
        {CREATORS.map((creator: Creator) => (
          <div className="relative" key={creator.name}>
            <div className="relative z-0 overflow-hidden aspect-square">
              <Image
                alt="imagen"
                className="object-cover w-full h-[500px]"
                height={500}
                src={`${creator.img}`}
                width={600}
              />
            </div>
            <h2 className="w-full py-3 text-xl">{creator.name}</h2>
            <span className="text-xs">
              {creator.available}{' '}
              <span className="text-gray-600">/ {creator.total}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

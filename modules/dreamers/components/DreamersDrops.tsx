import Image from 'next/image';
import Link from 'next/link';
import { DREAMERS_COVERS } from 'utils/constants';
import {
  DREAMERS_8000_DREAMERS,
  DREAMERS_DREAMING_OF_A_BETTER_WORLD,
} from 'utils/routes';
export default function DreamersDrops() {
  return (
    <div>
      <div className="mx-auto max-w-screen-2xl">
        <h2 className="my-6 text-2xl">Our Drops</h2>
      </div>
      <div className="grid grid-cols-2 gap-3 mx-auto max-w-screen-2xl">
        <Link className="relative" href={DREAMERS_8000_DREAMERS}>
          <div className="relative z-0 overflow-hidden h-[500px]">
            <Image
              alt="imagen"
              className="object-cover w-full h-[500px]"
              height={500}
              src={DREAMERS_COVERS.dreamers}
              width={600}
            />
          </div>
          <h2 className="absolute bottom-0 left-0 z-10 w-full p-6 text-3xl text-white bg-gradient-to-b from-transparent to-black">
            8000 Dreamers
          </h2>
        </Link>
        <Link className="relative" href={DREAMERS_DREAMING_OF_A_BETTER_WORLD}>
          <div className="relative z-0 overflow-hidden h-[500px]">
            <Image
              alt="imagen"
              className="object-cover w-full h-[500px]"
              height={500}
              src={DREAMERS_COVERS.dreamingOfABetterWorld}
              width={600}
            />
          </div>
          <h2 className="absolute bottom-0 left-0 z-10 w-full p-6 text-3xl text-white bg-gradient-to-b from-transparent to-black">
            Dreaming of a better world
          </h2>
        </Link>
      </div>
    </div>
  );
}

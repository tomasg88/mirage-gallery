import Image from 'next/image';
import Link from 'next/link';
export default function TheArtists() {
  return (
    <div>
      <div className="mx-auto max-w-screen-2xl">
        <h2 className="my-6 text-2xl">The Artists</h2>
      </div>
      <div className="grid grid-cols-2 gap-3 mx-auto max-w-screen-2xl">
        <Link className="relative" href="/alejandro-and-taylor/alejandro">
          <div className="relative z-0 overflow-hidden h-[600px]">
            <Image
              alt="imagen"
              className="object-cover w-full h-[600px]"
              height={500}
              src="/assets/alejandrotaylor/alejandro.jpg"
              width={600}
            />
          </div>
          <h2 className="absolute bottom-0 left-0 z-10 w-full p-6 text-3xl text-white bg-gradient-to-b from-transparent to-black">
            Alejandro
          </h2>
        </Link>
        <Link className="relative" href="/alejandro-and-taylor/alejandro">
          <div className="relative z-0 overflow-hidden h-[600px]">
            <Image
              alt="imagen"
              className="object-cover w-full h-[600px]"
              height={500}
              src="/assets/alejandrotaylor/taylor.jpg"
              width={600}
            />
          </div>
          <h2 className="absolute bottom-0 left-0 z-10 w-full p-6 text-3xl text-white bg-gradient-to-b from-transparent to-black">
            Taylor
          </h2>
        </Link>
      </div>
    </div>
  );
}

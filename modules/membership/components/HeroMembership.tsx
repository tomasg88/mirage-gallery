import { OpenSeaLogo } from 'components/Svgs/OpenSeaLogo';
import Image from 'next/image';

export default function HeroMembership() {
  return (
    <>
      <div className="w-full h-[500px]">
        <Image
          alt="imagen"
          className="object-cover w-full h-[500px]"
          height={600}
          src="/assets/membership/hero-membership.jpg"
          width={1600}
        />
      </div>
      <div className="px-2 mx-auto md:px-2 max-w-screen-2xl">
        <div className="flex items-center justify-between my-6">
          <span className="flex items-center justify-center bg-[#fefaec] text-xs px-3 py-2 rounded-full text-[#e2b310]">
            Mirage gallery
          </span>
          <button
            className="flex items-center justify-center px-6 py-3 text-black duration-300 bg-gray-200 hover:bg-gray-100"
            type="button"
          >
            <OpenSeaLogo className={'mr-2'} />
            View on Opensea
          </button>
        </div>
        <h2 className="text-3xl">Memberships</h2>
        <p>
          Mirage Gallery Memberships allow for bonus perks related to Mirage
          Gallery Curated and other Mirage Gallery projects!
        </p>
      </div>
    </>
  );
}

import { RightArrow } from 'components/Svgs/RightArrow';

export default function CuratedHero() {
  return (
    <div
      className="w-full pb-32 mb-24 bg-no-repeat "
      style={{
        backgroundImage: "url('/assets/curated-back.jpg')",
        backgroundSize: '50vw',
        backgroundPosition: 'top right',
      }}
    >
      <div className="grid w-full gap-6 px-2 mx-auto md:grid-cols-2 max-w-screen-2xl">
        <div className="grid w-full mt-16">
          <span className="text-sm uppercase text-[#920d3d]">CURATED</span>
          <h1 className="mt-6 text-3xl lg:text-7xl">
            Innovative AI artwork,{' '}
            <span className="text-[#920d3d]">from a variety of artists.</span>
          </h1>
          <p className="py-4">
            Mirage Gallery was founded on the premise that art can be more than
            human.
          </p>
          <div className="grid max-w-xl gap-3 sm:grid-cols-2">
            <input
              className="p-3 text-gray-800 bg-gray-100"
              placeholder="Become a curated artist"
              type="text"
            />
            <button
              className="bg-[#920d3d] flex justify-center items-center text-white py-3"
              type="button"
            >
              Mint
              <RightArrow className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

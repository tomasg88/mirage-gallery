import { RightArrow } from 'components/Svgs/RightArrow';

export default function CuratedHero() {
  return (
    <div
      className="w-full pt-32 pb-32 mb-24 bg-no-repeat md:pt-0 "
      style={{
        backgroundImage: "url('/assets/back-curated.jpg')",
        backgroundSize: '50vw',
        backgroundPosition: 'top right',
      }}
    >
      <div className="grid w-full gap-6 px-2 mx-auto md:grid-cols-2 max-w-screen-2xl">
        <div className="grid w-full mt-16">
          <span className="text-sm uppercase text-curated">CURATED</span>
          <h1 className="mt-6 text-3xl lg:text-7xl">
            Innovative AI artwork,{' '}
            <span className="text-curated">from a variety of artists.</span>
          </h1>
          <p className="py-4">
            Mirage Gallery was founded on the premise that art can be more than
            human.
          </p>
          <div className="grid max-w-xl gap-3 sm:grid-cols-2">
            <a
              className="p-3 text-center text-gray-800 bg-gray-100"
              href="#become-curated-artist"
            >
              Become a curated artist
            </a>
            <button
              className="flex items-center justify-center py-3 text-white bg-curated"
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

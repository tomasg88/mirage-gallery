import { OpenSeaLogo } from 'components/Svgs/OpenSeaLogo';

export default function DreamersHero() {
  return (
    <div
      className="w-full min-h-screen bg-no-repeat "
      style={{
        backgroundImage: "url('/assets/dreamers-back.jpg')",
        backgroundSize: '50vw',
        backgroundPosition: 'top right',
      }}
    >
      <div className="grid w-full grid-cols-2 gap-6 px-6 mx-auto max-w-screen-2xl">
        <div className="grid w-full mt-16">
          <span className="text-sm uppercase text-[#1129aa]">DREAMERS</span>
          <h1 className="mt-6 text-3xl lg:text-7xl">
            The artistic intersection of humans and artificial intelligence.
          </h1>
          <p className="py-4">
            Mirage Gallery was founded on the premise that art can be more than
            human.
          </p>
          <div className="grid max-w-xl grid-cols-2 gap-3">
            <button
              className="flex items-center justify-center py-3 text-black duration-300 bg-gray-200 hover:bg-gray-100"
              type="button"
            >
              <OpenSeaLogo className={'mr-2'} />
              View on Opensea
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

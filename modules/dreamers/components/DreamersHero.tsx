import { OpenSeaButtonLink } from 'components/Link/OpenSeaButtonLink';
import { MARKETPLACE_URLS } from 'utils/constants';

export default function DreamersHero() {
  return (
    <div
      className="w-full pb-64 bg-no-repeat "
      style={{
        backgroundImage: "url('/assets/back-dreamers.jpg')",
        backgroundSize: '50vw',
        backgroundPosition: 'top right',
      }}
    >
      <div className="grid w-full grid-cols-2 gap-6 px-6 mx-auto max-w-screen-2xl">
        <div className="grid w-full mt-16">
          <span className="text-sm uppercase text-dreamers">DREAMERS</span>
          <h1 className="mt-6 text-3xl lg:text-7xl">
            The artistic intersection of humans and artificial intelligence.
          </h1>
          <p className="py-4">
            Mirage Gallery was founded on the premise that art can be more than
            human.
          </p>
          <div className="flex justify-start">
            <OpenSeaButtonLink href={MARKETPLACE_URLS.dreamers} />
          </div>
        </div>
      </div>
    </div>
  );
}

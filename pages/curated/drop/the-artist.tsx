import Image from 'next/image';
import HeroSoldOut from 'modules/curated/components/HeroSoldOut';
import SingleCuratedFilters from 'modules/curated/components/SingleCurated/CuratedFilters';
import { OpenSeaLogo } from 'components/Svgs/OpenSeaLogo';

export default function CuratedArtistPage() {
  return (
    <div className="w-full pb-24">
      <HeroSoldOut />
      <SingleCuratedFilters />
      <div className="px-2 mx-auto max-w-screen-2xl">
        <div className="grid w-full mx-auto my-3 md:grid-cols-2 max-w-screen-2xl">
          <h2 className="text-2xl text-left">The Artist</h2>
        </div>
        <div className="grid md:grid-cols-2">
          <div>
            <div>
              <Image
                alt="imagen"
                className="object-cover w-[600px]"
                height={600}
                src="/assets/curated/curated-artist-image.png"
                width={600}
              />
            </div>
            <h3 className="my-6 text-2xl">Maneki Neko</h3>
            <p className="my-6 font-sans">
              Maneki Neko is an AI-facilitated artist who lives in Seattle.{' '}
            </p>
            <p className="my-6 font-sans">
              She creates intricate, colorful, detail-rich art in a style she
              calls “Anti-minimalism”. Sometimes leaning towards the abstract or
              surrealism, her work often features flowers or inspirational women
              from folklore.
            </p>
            <p className="my-6 font-sans">
              Maneki&apos;s art is inspired from her need to find moments of
              peace from the many troubles of modern life through the pleasant
              distraction of exploring an image full of intriguing details. For
              the viewers of her pieces, she has one major goal: to entice them
              to simply stop and stare for a while.
            </p>
            <p className="my-6 font-sans">
              Maneki&apos;s work has been exhibited in Rome, Liverpool, London,
              Hong Kong, Tokyo, Seattle and New York City, featured on
              OpenSea&apos;s front page and has been collected by more than 400
              people since she minted her first NFT in February, 2022.
            </p>
            <div className="flex justify-start gap-6 mt-12">
              <button
                className="flex items-center justify-center py-3 text-black duration-300 bg-gray-200 px-9 hover:bg-gray-100"
                type="button"
              >
                <OpenSeaLogo className="mr-2" />
                View on Opensea
              </button>
              <button
                className="flex items-center justify-center py-3 text-white duration-300 bg-[#1da1f2] px-9"
                type="button"
              >
                {/* TODO - twitter svg needs to be scalable */}
                <svg
                  className="mr-2"
                  fill="none"
                  height="20"
                  width="25"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.76 5.028c.014.213.014.426.014.64 0 6.543-4.98 14.088-14.087 14.088v-.004a14.017 14.017 0 0 1-7.59-2.22 9.942 9.942 0 0 0 7.327-2.052 4.957 4.957 0 0 1-4.624-3.438 4.936 4.936 0 0 0 2.235-.085 4.952 4.952 0 0 1-3.972-4.853v-.063a4.92 4.92 0 0 0 2.247.62 4.957 4.957 0 0 1-1.532-6.61 14.052 14.052 0 0 0 10.204 5.172 4.956 4.956 0 0 1 8.437-4.516A9.935 9.935 0 0 0 23.563.505a4.97 4.97 0 0 1-2.176 2.738 9.847 9.847 0 0 0 2.843-.78 10.059 10.059 0 0 1-2.47 2.565Z"
                    fill="#fff"
                  />
                </svg>
                Follow on Twitter
              </button>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center w-full ">
              <Image
                alt="imagen"
                className="object-cover w-[600px]"
                height={600}
                src="/assets/curated/curated-artist-01.jpg"
                width={600}
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                alt="imagen"
                className="object-cover w-[600px]"
                height={600}
                src="/assets/curated/curated-artist-02.jpg"
                width={600}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

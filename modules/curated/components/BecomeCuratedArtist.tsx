import Image from 'next/image';
import { HeroTitle } from 'components/HeroTitle/HeroTitle';
import { TwitterEmptySvg } from 'components/Svgs/TwitterEmptySvg';
import { EmailEmptyIcon } from 'components/Svgs/EmailEmptyIcon';

export default function BecomeCuratedArtist() {
  return (
    <div
      className="flex flex-col py-20 mx-auto max-w-screen-2xl"
      id="become-curated-artist"
    >
      <HeroTitle accentColor={'text-[#920d3d]'} subtitle="Apply">
        Become a curated artist
      </HeroTitle>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <label className="flex flex-col mt-6">
            <span className="mb-2 font-sans text-sm font-bold">Name*</span>
            <input
              className="w-full p-3 font-sans text-gray-800 bg-gray-100 placeholder:text-[#808080]"
              placeholder="Ela Fitzgerlad"
              type="text"
            />
          </label>
          <label className="flex flex-col mt-6">
            <span className="mb-2 font-sans text-sm font-bold">
              Twitter handle
            </span>
            <input
              className="w-full p-3 font-sans text-gray-800 bg-gray-100 placeholder:text-[#808080]"
              placeholder="@ElaFitzgerlad"
              type="text"
            />
          </label>
          <label className="flex flex-col mt-6 md:col-span-2">
            <span className="mb-2 font-sans text-sm font-bold">Email*</span>
            <input
              className="w-full p-3 font-sans text-gray-800 bg-gray-100 placeholder:text-[#808080]"
              placeholder="elafitzgerlad@gmail.com"
              type="email"
            />
          </label>
          <label className="flex flex-col mt-6 md:col-span-2">
            <span className="mb-2 font-sans text-sm font-bold">
              Link to example works*
            </span>
            <input
              className="w-full p-3 font-sans text-gray-800 bg-gray-100 placeholder:text-[#808080]"
              placeholder="www.link.com "
              type="email"
            />
          </label>
          <label className="flex flex-col mt-6 md:col-span-2">
            <span className="mb-2 font-sans text-sm font-bold">
              What is unique about your work that other artists (who use AI)
              haven’t done before? *
            </span>
            <textarea
              className="w-full p-3 font-sans text-gray-800 bg-gray-100 resize-y min-h-[100px]"
              placeholder="My work is epic because"
            ></textarea>
          </label>
          <label className="flex flex-col mt-6 md:col-span-2">
            <span className="mb-2 font-sans text-sm font-bold">
              In what ways do use AI in your artworks?*
            </span>
            <textarea
              className="w-full p-3 font-sans text-gray-800 bg-gray-100 resize-y min-h-[100px]"
              placeholder="To generat epic stuff"
            ></textarea>
          </label>
          <div className="md:col-span-2">
            <label className="block mb-2 font-sans text-sm font-bold">
              Would you prefer contact via Twitter or Email?
            </label>
            <div className="grid w-1/2 grid-cols-2 gap-3 ">
              <div className="flex items-center justify-center gap-2 py-2 text-sm bg-gray-100 border border-gray-300 cursor-pointer hover:bg-gray-200">
                <TwitterEmptySvg />
                Twitter
              </div>
              <div className="flex items-center justify-center gap-2 py-2 text-sm bg-gray-100 border border-gray-300 cursor-pointer hover:bg-gray-200">
                <EmailEmptyIcon />
                Email
              </div>
            </div>
          </div>
          <label className="flex flex-col mt-6 md:col-span-2">
            <span className="mb-2 font-sans text-sm font-bold">
              Anything else you’d like to add?
            </span>

            <textarea
              className="w-full p-3 font-sans text-gray-800 bg-gray-100 resize-y min-h-[100px]"
              placeholder="Nope"
            ></textarea>
          </label>
          <div>
            <button
              className="flex w-56 items-center justify-center py-3 text-white duration-300 bg-[#920d3d] px-9"
              type="button"
            >
              Apply
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center mt-12">
          <Image
            alt="imagen"
            className="object-cover h-full mb-12 shadow-2xl md:w-[565px]"
            height={1000}
            src="/assets/curated/become-a-curated-artist.jpg"
            width={1000}
          />
        </div>
      </div>
    </div>
  );
}

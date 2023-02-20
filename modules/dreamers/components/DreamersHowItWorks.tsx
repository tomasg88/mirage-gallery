import Image from 'next/image';

export default function DreamersHowItWorks() {
  return (
    <>
      <div className="grid w-full grid-cols-2 py-20 ">
        <ul className="flex flex-col space-y-4 text-xl">
          <li className="flex items-center justify-start">
            <span className="inline-flex items-center justify-center w-20 h-20 mr-6 border border-gray-300 rounded-full min-w-[5rem]">
              1
            </span>
            <p className="w-full">
              Each month a cause is decided on with input from the MG community
              and a theme is chosen.
            </p>
          </li>
          <li className="flex items-center justify-start">
            <span className="inline-flex items-center justify-center w-20 h-20 mr-6 border border-gray-300 rounded-full min-w-[5rem]">
              2
            </span>
            <p className="w-full">
              Dreamers holders are able to submit one artwork per Dreamer before
              a set deadline
            </p>
          </li>
          <li className="flex items-center justify-start">
            <span className="inline-flex items-center justify-center w-20 h-20 mr-6 border border-gray-300 rounded-full min-w-[5rem]">
              3
            </span>
            <p className="w-full">
              MG holders vote and decide on 10 favorite artworks
            </p>
          </li>
          <li className="flex items-center justify-start">
            <span className="inline-flex items-center justify-center w-20 h-20 mr-6 border border-gray-300 rounded-full min-w-[5rem]">
              4
            </span>
            <p className="w-full">
              MG Curated artists & MG team pick the winner
            </p>
          </li>
          <li className="flex items-center justify-start">
            <span className="inline-flex items-center justify-center w-20 h-20 mr-6 border border-gray-300 rounded-full min-w-[5rem]">
              5
            </span>
            <p className="w-full">
              Winning artwork is minted and put for auction. 10% goes to the
              artist, and the rest is donated to the cause
            </p>
          </li>
        </ul>
        <div className="flex items-center justify-center">
          <Image
            alt="imagen"
            className="object-cover w-[600px]"
            height={600}
            src="/assets/dreamers/dreamers-how-it-works.jpg"
            width={600}
          />
        </div>
      </div>
    </>
  );
}

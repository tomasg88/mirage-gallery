import { OpenSeaLogo } from 'components/Svgs/OpenSeaLogo';
import Image from 'next/image';

export default function DreamersCollectionBetterWorldHero() {
  return (
    <>
      <div className="w-full h-[500px]">
        <Image
          alt="imagen"
          className="object-cover w-full h-[500px]"
          height={600}
          src="/assets/back-dreaming-a-better-world.jpg"
          width={1600}
        />
      </div>
      <div className="px-2 mx-auto md:px-2 max-w-screen-2xl">
        <div className="flex items-center justify-between my-6">
          <span className="flex items-center justify-center bg-[#f5f5f5] text-xs px-3 py-2 rounded-full text-[#213bc7]">
            <svg
              className="mr-2"
              fill="none"
              height="18"
              width="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                d="M5.249 6.499H2.748c-.691 0-1.25-.56-1.25-1.25V2.746c0-.69.559-1.25 1.25-1.25h2.5c.691 0 1.251.56 1.251 1.25v2.501c0 .691-.56 1.25-1.25 1.25ZM15.253 6.499H10.25C9.56 6.499 9 5.939 9 5.249V2.746c0-.69.56-1.25 1.25-1.25h5.003c.69 0 1.25.56 1.25 1.25v2.501c0 .691-.56 1.25-1.25 1.25Z"
                stroke="#213BC7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m8.643 10.25-3.604 3.528-1.183-1.185"
                stroke="#213BC7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.963 9.358h-2.39c-1.147 0-2.076.93-2.076 2.075v2.994c0 1.147.93 2.076 2.076 2.076h2.994c1.146 0 2.076-.93 2.076-2.076v-.603"
                stroke="#213BC7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                clip-rule="evenodd"
                d="M15.252 14.002h-2.5c-.691 0-1.251-.56-1.251-1.25V10.25c0-.69.56-1.25 1.25-1.25h2.502c.69 0 1.25.56 1.25 1.25v2.502c0 .69-.56 1.25-1.25 1.25Z"
                stroke="#213BC7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Must hold a Dreamer
          </span>
          {/* TODO - review hover and adjust icon */}
          <button className="btn" type="button">
            <div>
              <OpenSeaLogo className="mr-2" />
            </div>
            View on Opensea
          </button>
        </div>
        <h2 className="text-3xl">Dreaming of a better world.</h2>
        <p>A monthly contest with art submitted by Dreamers holders.</p>
      </div>
    </>
  );
}

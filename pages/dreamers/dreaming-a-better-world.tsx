import DreamersCollectionHeroBetterWorld from 'modules/dreamers/components/DreamersCollectionHeroBetterWorld';
import DreamersHowItWorks from 'modules/dreamers/components/DreamersHowItWorks';
import { HeroTitle } from 'components/HeroTitle/HeroTitle';
import Image from 'next/image';

export default function DreamingBetterWorldPage() {
  return (
    <div className="w-full pb-24">
      <DreamersCollectionHeroBetterWorld />
      <div className="px-2 mx-auto max-w-screen-2xl">
        <HeroTitle>
          We&apos;ve all dreamed of changing the world. Envisioned the impact
          we&apos;d leave behind.
        </HeroTitle>
        <div className="flex items-center justify-center w-full">
          <Image
            alt="imagen"
            className="object-cover w-full"
            height={800}
            src="/assets/dreamers/dreamers-work-done.jpg"
            width={1700}
          />
        </div>
        <HeroTitle accentColor={'text-dreamers'} subtitle="How it works">
          We&apos;d like to introduce Dreamers: Dreaming of a better world.
        </HeroTitle>
        <p>
          Each month, we will organize an art competition for a cause by
          selecting an art theme to inspire the conversation. To participate in
          the competition, you must hold a Dreamer which is your access token to
          state-of-the-art image generation software through our discord.
        </p>
        <DreamersHowItWorks />
      </div>
    </div>
  );
}

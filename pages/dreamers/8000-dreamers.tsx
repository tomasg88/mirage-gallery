import DreamersCollectionHero from 'modules/dreamers/components/DreamersCollectionHero';
import DreamersFourDifferentCreators from 'modules/dreamers/components/DreamersFourDifferentCreators';
import DreamersTheProcess from 'modules/dreamers/components/DreamersTheProcess';
import { HeroTitle } from 'components/HeroTitle/HeroTitle';

export default function EightThousandDreamersPage() {
  return (
    <div className="w-full pb-24">
      <DreamersCollectionHero />
      <div className="px-2 mx-auto max-w-screen-2xl">
        <DreamersFourDifferentCreators />
      </div>
      <DreamersTheProcess />
      <div className="px-2 mx-auto max-w-screen-2xl">
        <HeroTitle>
          Dreamers are all around us. When surrounded by darkness, Dreamers see
          the light.
        </HeroTitle>
        <HeroTitle>
          Are you a <span className="text-[#1129aa] underline">Dreamers?</span>
        </HeroTitle>
      </div>
    </div>
  );
}

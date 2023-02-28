import HeroSoldOut from 'modules/curated/components/HeroSoldOut';
import SingleCuratedFilters from 'modules/curated/components/SingleCurated/CuratedFilters';
import { FullWidthVideoModal } from 'components/FullWidthVideoModal/FullWidthVideoModal';

export default function SoldOutPagePage() {
  return (
    <div className="w-full pb-24">
      <HeroSoldOut />
      <SingleCuratedFilters />
      <div className="px-2 mx-auto max-w-screen-2xl">
        <div className="grid w-full mx-auto my-3 md:grid-cols-2 max-w-screen-2xl">
          <h2 className="text-2xl text-left">About the project</h2>
        </div>
        <FullWidthVideoModal />
        <p className="max-w-6xl mr-auto">
          The Oneiroscapes collection explores the realm of dreams through a
          collaboration between an artist and an AI. Transcribed for your
          viewing, these dreamscapes capture the surreal and ever-shifting
          nature of our subconscious mind. Imagine a dream where reality appears
          familiar, yet, upon closer inspection, the details become increasingly
          nonsensical: the writing on a sign, the face of a companion, all
          seemingly taking on new and strange forms. These dreams can be most
          accurately shared through imagery, and working with AI provides the
          perfect medium to capture and interpret them.Describing a dream is
          akin to exploring latent space with AI, where every possible scene
          exists if the right sequence of words is combined to conjure it. The
          human form may be distorted, fingers may be too many, and faces may be
          unlike any you&apos;ve seen before. But that is what makes the
          experience all the more satisfying, as both the artist and the viewer
          participate in the creation of this art by giving each symbol a
          meaning and label, even if it doesn&apos;t make sense in the waking
          world.
        </p>
      </div>
    </div>
  );
}

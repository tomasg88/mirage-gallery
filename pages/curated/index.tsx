import BecomeCuratedArtist from 'modules/curated/components/BecomeCuratedArtist';
import CuratedGallery from 'modules/curated/components/CuratedGallery';
import CuratedHero from 'modules/curated/components/CuratedHero';
import MintProject from 'modules/curated/components/MintProject';

export default function CuratedPage() {
  return (
    <div className="w-full pb-24">
      <CuratedHero />
      <CuratedGallery />
      <BecomeCuratedArtist />
      <MintProject />
    </div>
  );
}

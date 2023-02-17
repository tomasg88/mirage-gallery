import CuratedGallery from 'modules/curated/components/CuratedGallery';
import CuratedHero from 'modules/curated/components/CuratedHero';

export default function CuratedPage() {
  return (
    <div className="w-full pb-24">
      <CuratedHero />
      <CuratedGallery />
    </div>
  );
}

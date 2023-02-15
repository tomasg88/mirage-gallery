import CuratedGallery from 'components/Curated/CuratedGallery';
import CuratedHero from 'components/Curated/CuratedHero';

export default function CuratedPage() {
  return (
    <div className="w-full pb-24">
      <CuratedHero />
      <CuratedGallery />
    </div>
  );
}

import DreamersHero from 'modules/dreamers/components/DreamersHero';
import DreamersDrops from 'modules/dreamers/components/DreamersDrops';

export default function DreamersPage() {
  return (
    <div className="w-full pb-24">
      <DreamersHero />
      <DreamersDrops />
    </div>
  );
}

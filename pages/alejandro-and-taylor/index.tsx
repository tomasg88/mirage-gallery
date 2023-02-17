import HeroAlejandroTaylor from 'modules/alejandro-and-taylor/components/HeroAlejandroTaylor';
import TheArtists from 'modules/alejandro-and-taylor/components/TheArtists';

export default function AlejandroTaylorPage() {
  return (
    <div className="w-full pb-24">
      <HeroAlejandroTaylor />
      <div className="px-2 mx-auto max-w-screen-2xl">
        <TheArtists />
      </div>
    </div>
  );
}

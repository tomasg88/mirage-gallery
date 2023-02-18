import { HeaderLink } from 'components/HeaderLink/HeaderLink';

const LINKS = [
  {
    url: '/curated/oneiroscapes#tabs',
    title: 'About the project',
  },
  {
    url: '/curated/oneiroscapes/the-artist#tabs',
    title: 'The artist',
  },
  {
    url: '/curated/oneiroscapes/claim#tabs',
    title: 'Sentient claim',
  },
  {
    url: '/curated/oneiroscapes/mint#tabs',
    title: 'Mint',
  },
];

export default function SingleCuratedFilters() {
  return (
    <div className="my-20 border-b border-gray-300 scroll-mt-32" id="tabs">
      <div className="flex items-center justify-start gap-6 px-2 py-3 mx-auto text-xs md:text-base md:gap-12 max-w-screen-2xl">
        {LINKS.map(({ title, url }) => (
          <HeaderLink key={`${url}-${title}`} url={url}>
            {title}
          </HeaderLink>
        ))}
      </div>
    </div>
  );
}

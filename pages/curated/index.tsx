import { dropsQuery } from 'lib/queries';
import { sanityClient } from 'lib/sanity.client';
import { CuratedArtistForm } from 'modules/curated/components/CuratedArtistForm';
import { CuratedGallery } from 'modules/curated/components/CuratedGallery';
import CuratedHero from 'modules/curated/components/CuratedHero';
import MintProject from 'modules/curated/components/MintProject';
import { GetServerSideProps, GetServerSidePropsResult } from 'next';
import { Drop } from 'types/drops';

type CuratedPageProps = {
  drops: Drop[];
};

export default function CuratedPage({ drops }: CuratedPageProps) {
  return (
    <div className="w-full pb-24">
      <CuratedHero />
      <CuratedGallery drops={drops} />
      <CuratedArtistForm />
      <MintProject />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<{
  drops: Drop;
}> = async (): Promise<GetServerSidePropsResult<{ drops: Drop }>> => {
  const drops: Drop = await sanityClient.fetch(dropsQuery);
  return {
    props: { drops },
  };
};

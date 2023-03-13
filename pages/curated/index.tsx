import { dropsQuery } from 'lib/queries';
import { sanityClient } from 'lib/sanity.client';
import { CuratedArtistForm } from 'modules/curated/components/CuratedArtistForm';
import { CuratedGallery } from 'modules/curated/components/CuratedGallery';
import CuratedHero from 'modules/curated/components/CuratedHero';
import {
  MAX_RANDOM_PROJECTS,
  MintRandomProject,
} from 'modules/curated/components/MintRandomProject';
import { GetServerSideProps, GetServerSidePropsResult } from 'next';
import { useMemo } from 'react';
import { Drop, MintStatus } from 'types/drops';

type CuratedPageProps = {
  drops: Drop[];
};

export default function CuratedPage({ drops }: CuratedPageProps) {
  // Filter 'only 4' & 'currently minting' projects
  const currentlyMintingProjects: Drop[] = useMemo(
    () =>
      drops
        .filter((drop) => {
          if (drop.status === MintStatus.MINTING) {
            return drop;
          }
        })
        .slice(0, MAX_RANDOM_PROJECTS),
    [drops]
  );

  return (
    <div className="w-full pb-24">
      <CuratedHero />
      <CuratedGallery drops={drops} />
      <CuratedArtistForm />
      {currentlyMintingProjects.length > 0 && (
        <MintRandomProject mintingDrops={currentlyMintingProjects} />
      )}
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

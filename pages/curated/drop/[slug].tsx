import { DropDetailsHero } from 'modules/curated/components/drop-details/DropDetailsHero';
import { sanityClient } from 'lib/sanity.client';
import { dropBySlugQuery } from 'lib/queries';
import { Drop } from 'types/drops';
import { GetServerSideProps, GetServerSidePropsResult } from 'next';
import { Tab } from '@headlessui/react';
import { AboutTheProject } from 'modules/curated/components/drop-details/AboutTheProject';
import { ArtistsTab } from 'modules/curated/components/drop-details/ArtistTab';
import { Claim } from 'modules/curated/components/drop-details/Claim';
import { Mint } from 'modules/curated/components/drop-details/Mint';
import { Fragment } from 'react';

const TABS = [
  {
    title: 'About the project',
  },
  {
    title: 'The artist',
  },
  {
    title: 'Sentient claim',
  },
  {
    title: 'Mint',
  },
];

export default function SlugPage({ drop }: { drop: Drop }) {
  const {
    artists,
    description,
    marketplaceUrl,
    name,
    project,
    releaseDate,
    sampleImages,
    status,
    video,
  } = drop;

  const cover = sampleImages[0];

  return (
    <div className="w-full pb-24">
      <DropDetailsHero
        cover={sampleImages[0]}
        description={description}
        marketplaceUrl={marketplaceUrl}
        name={name}
        status={status}
      />
      <Tab.Group defaultIndex={0}>
        <Tab.List className="flex items-center justify-start gap-6 px-2 py-3 mx-auto text-xs border-b md:text-base md:gap-12 max-w-screen-2xl">
          {TABS.map(({ title }) => (
            <Tab as={Fragment} key={title}>
              {({ selected }) => (
                <button
                  className={`${selected ? 'text-curated' : ''} outline-none `}
                  type="button"
                >
                  {title}
                </button>
              )}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="pt-12">
          <Tab.Panel>
            <AboutTheProject
              cover={cover}
              project={project}
              releaseDate={releaseDate}
              video={video}
            />
          </Tab.Panel>
          <Tab.Panel>
            <ArtistsTab artists={artists} marketplaceUrl={marketplaceUrl} />
          </Tab.Panel>
          <Tab.Panel>
            <Claim />
          </Tab.Panel>
          <Tab.Panel>
            <Mint projectId={project.id} />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  context
): Promise<GetServerSidePropsResult<{ drop: Drop }>> => {
  const slug = context.params?.slug as string;
  const drop = await sanityClient.fetch(dropBySlugQuery, { slug });

  return {
    props: {
      drop,
    },
  };
};

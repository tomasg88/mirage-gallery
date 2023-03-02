import { DropDetailsHero } from 'modules/curated/components/drop-details/DropDetailsHero';
import { sanityClient } from 'lib/sanity.client';
import { dropBySlugQuery } from 'lib/queries';
import { Drop } from 'types/drops';
import { GetServerSideProps, GetServerSidePropsResult } from 'next';
import { Tab } from '@headlessui/react';
import { AboutTheProject } from 'modules/curated/components/drop-details/AboutTheProject';
import { Artist } from 'modules/curated/components/drop-details/Artist';
import { Claim } from 'modules/curated/components/drop-details/Claim';
import { Mint } from 'modules/curated/components/drop-details/Mint';
import { Fragment } from 'react';

export default function SlugPage({ drop }: { drop: Drop }) {
  return (
    <div className="w-full pb-24">
      <DropDetailsHero drop={drop} />
      <Tab.Group defaultIndex={0}>
        <Tab.List className="flex items-center justify-start gap-6 px-2 py-3 mx-auto text-xs border-b md:text-base md:gap-12 max-w-screen-2xl">
          <Tab as={Fragment}>
            {({ selected }) => (
              /* Use the `selected` state to conditionally style the selected tab. */
              <button
                className={`${selected ? 'text-[#920D3D]' : ''} outline-none `}
                type="button"
              >
                About the project
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              /* Use the `selected` state to conditionally style the selected tab. */
              <button
                className={`${selected ? 'text-[#920D3D]' : ''} outline-none `}
                type="button"
              >
                The artist
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              /* Use the `selected` state to conditionally style the selected tab. */
              <button
                className={`${selected ? 'text-[#920D3D]' : ''} outline-none `}
                type="button"
              >
                Sentient claim
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              /* Use the `selected` state to conditionally style the selected tab. */
              <button
                className={`${selected ? 'text-[#920D3D]' : ''} outline-none `}
                type="button"
              >
                Mint
              </button>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels className="pt-12">
          <Tab.Panel>
            <AboutTheProject drop={drop} />
          </Tab.Panel>
          <Tab.Panel>
            <Artist drop={drop} />
          </Tab.Panel>
          <Tab.Panel>
            <Claim />
          </Tab.Panel>
          <Tab.Panel>
            <Mint drop={drop} />
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

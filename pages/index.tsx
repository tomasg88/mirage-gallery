import { HomeHero } from 'components/Home/HomeHero';
import { HomePosters } from 'components/Home/HomePosters';
import { HeroTitle } from 'components/HeroTitle/HeroTitle';
import { GetServerSideProps, GetServerSidePropsResult } from 'next';
import { sanityClient } from 'lib/sanity.client';
import { dropsHomeHeroQuery } from 'lib/queries';
import { Artist, Drop } from 'types/drops';
import { AlejandroAndTaylorHomeSection } from 'modules/alejandro-and-taylor/components/AlejandroAndTaylorHomeSection';
import { CryptoNativeHomeSection } from 'modules/crypto-native/components/CryptoNativeHomeSection';
import { CuratedHomeSection } from 'modules/curated/components/CuratedHomeSection';
import { DreamersHomeSection } from 'modules/dreamers/components/DreamersHomeSection';
import { MembershipsHomeSection } from 'modules/membership/components/MembershipsHomeSection';

export type HomeProps = {
  _id: Drop['_id'];
  artists: Artist['name'][];
  name: Drop['name'];
  cover: Drop['cover'];
  slug: Drop['slug'];
};

export default function Home({ drops }: { drops: HomeProps[] }) {
  return (
    <>
      <HomeHero drops={drops} />
      <HomePosters />
      <div className="w-full px-2 space-y-64 max-w-screen-2xl">
        <section className="pt-64">
          <HeroTitle accentColor={''} subtitle="What is Mirage?">
            Mirage Gallery was founded on the premise that art can be
            <span className="text-[#808080]"> more than human.</span>
          </HeroTitle>
        </section>
        <AlejandroAndTaylorHomeSection />
        <CryptoNativeHomeSection />
        <CuratedHomeSection />
        <DreamersHomeSection />
        <MembershipsHomeSection />
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (): Promise<
  GetServerSidePropsResult<{ drops: HomeProps[] }>
> => {
  const drops = await sanityClient.fetch(dropsHomeHeroQuery);

  return {
    props: {
      drops,
    },
  };
};

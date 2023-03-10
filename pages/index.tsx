import { HomeHero } from 'components/Home/HomeHero';
import { HomeCuratedImages } from 'components/Home/HomeCuratedImages';
import { HomePosters } from 'components/Home/HomePosters';
import { HeroTitle } from 'components/HeroTitle/HeroTitle';
import Link from 'next/link';
import { RightArrow } from 'components/Svgs/RightArrow';
import { ButtonLink } from 'components/Button/ButtonLink/ButtonLink';
import { GetServerSideProps, GetServerSidePropsResult } from 'next';
import { sanityClient } from 'lib/sanity.client';
import { dropsHomeHeroQuery } from 'lib/queries';
import { Artist, Drop } from 'types/drops';

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
        <section>
          <HeroTitle
            accentColor={'text-original'}
            subtitle="ALEJANDRO & TAYLOR"
          >
            Mirage Gallery started with creating entirely{' '}
            <span className="underline text-original">
              A.I. generated artists.
            </span>
          </HeroTitle>
          <p className="mx-auto text-lg text-gray-600 md:text-3xl ">
            Each part of the artists below - from their artwork to their
            headshot and biography - has been generated by artificial
            intelligence.
          </p>
        </section>
        <section>
          <HeroTitle accentColor={'text-native'} subtitle="CRYPTO NATIVE">
            With{' '}
            <Link className="underline text-native" href="/crypto-native">
              Crypto-Native
            </Link>
            , the artwork evolves when a secondary sale happens.
          </HeroTitle>
          <p className="mx-auto text-lg text-gray-600 md:text-3xl ">
            Instead of just trading the same JPEG back and forth, you only get
            to own a unique step in the 10 phases of evolution for a piece.
          </p>
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-0 w-96 bg-gradient-to-r from-white via-white/30 to-transparent" />
            <div className="absolute top-0 bottom-0 right-0 w-96 bg-gradient-to-l from-white via-white/30 to-transparent" />
            <HomeCuratedImages />
          </div>
          <div className="flex items-center justify-start mt-6">
            <ButtonLink
              className="flex items-center justify-center px-6 py-4 text-white bg-native"
              href="/crypto-native"
              showRightArrow
              text="Explore crypto native"
            />
          </div>
        </section>
        <section>
          <HeroTitle accentColor={'text-curated'} subtitle="CURATED">
            Mirage Gallery has now expanded and works with other artists (not
            A.I. generated ones) with{' '}
            <Link className="underline text-curated" href="/curated">
              Mirage Gallery Curated.
            </Link>
          </HeroTitle>
          <p className="mx-auto text-lg text-gray-600 md:text-3xl ">
            Mirage Gallery Curated is building an astounding collection of A.I.
            from artists around the world.
          </p>
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-0 w-96 bg-gradient-to-r from-white via-white/30 to-transparent" />
            <div className="absolute top-0 bottom-0 right-0 w-96 bg-gradient-to-l from-white via-white/30 to-transparent" />
            <HomeCuratedImages />
          </div>
          <div className="flex items-center justify-start mt-6">
            <ButtonLink
              className="flex items-center justify-center px-6 py-4 text-white bg-curated"
              href="/curated"
              showRightArrow
              text="Explore curated"
            />
          </div>
        </section>
        <section>
          <HeroTitle accentColor={'text-dreamers'} subtitle="Dreamers">
            The artistic intersection of humans and artificial intelligence. We
            are <span className="underline text-dreamers">Dreamers.</span>
          </HeroTitle>
          <p className="mx-auto text-lg text-gray-600 md:text-3xl ">
            Each Dreamer is the combination of traditional fine-art, machine
            learning, and collectibles.
          </p>
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-0 w-96 bg-gradient-to-r from-white via-white/30 to-transparent" />
            <div className="absolute top-0 bottom-0 right-0 w-96 bg-gradient-to-l from-white via-white/30 to-transparent" />
            <HomeCuratedImages />
          </div>
          <div className="flex items-center justify-start mt-6">
            <ButtonLink
              className="flex items-center justify-center px-6 py-4 text-white bg-dreamers"
              href="/dreamers"
              showRightArrow
              text="Explore dreamers"
            />
          </div>
        </section>
        <section>
          <HeroTitle accentColor={'text-membership'} subtitle="Memberships">
            Mirage Gallery also offers{' '}
            <span className="underline text-membership">Memberships</span> which
            give early access to curated drops, and more.
          </HeroTitle>
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <div className="w-full bg-gray-900 h-96"></div>
              <h3 className="mt-3 text-2xl">Intelligent member</h3>
            </div>
            <div>
              <div className="w-full bg-gray-900 h-96"></div>
              <h3 className="mt-3 text-2xl">Sentient member</h3>
            </div>
          </div>
          <div className="flex items-center justify-start mt-12 mb-32">
            <Link
              className="flex items-center justify-center px-6 py-4 bg-membership"
              href="/membership"
            >
              Explore memberships
              <RightArrow className="ml-2" stroke={'#000'} />
            </Link>
          </div>
        </section>
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

import { ButtonLink } from 'components/Button/ButtonLink/ButtonLink';
import { HeroTitle } from 'components/HeroTitle/HeroTitle';
import { HomeCuratedImages } from 'components/Home/HomeCuratedImages';
import Link from 'next/link';
import React from 'react';

export const CuratedHomeSection = () => {
  return (
    <section>
      <HeroTitle accentColor={'text-curated'} subtitle="CURATED">
        Mirage Gallery has now expanded and works with other artists (not A.I.
        generated ones) with{' '}
        <Link className="underline text-curated" href="/curated">
          Mirage Gallery Curated.
        </Link>
      </HeroTitle>
      <p className="mx-auto text-lg text-gray-600 md:text-3xl ">
        Mirage Gallery Curated is building an astounding collection of A.I. from
        artists around the world.
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
  );
};

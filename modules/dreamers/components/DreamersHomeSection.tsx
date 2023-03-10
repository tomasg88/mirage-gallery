import { ButtonLink } from 'components/Button/ButtonLink/ButtonLink';
import { HeroTitle } from 'components/HeroTitle/HeroTitle';
import { HomeCuratedImages } from 'components/Home/HomeCuratedImages';
import React from 'react';

export const DreamersHomeSection = () => {
  return (
    <section>
      <HeroTitle accentColor={'text-dreamers'} subtitle="Dreamers">
        The artistic intersection of humans and artificial intelligence. We are{' '}
        <span className="underline text-dreamers">Dreamers.</span>
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
  );
};
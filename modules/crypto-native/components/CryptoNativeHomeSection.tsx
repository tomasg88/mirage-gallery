import { ButtonLink } from 'components/Button/ButtonLink/ButtonLink';
import { HeroTitle } from 'components/HeroTitle/HeroTitle';
import { HomeSectionImagesRow } from 'components/Home/HomeSectionImagesRow';
import Link from 'next/link';
import React from 'react';
import { Modules } from 'types/main';

export const CryptoNativeHomeSection = () => {
  return (
    <section>
      <HeroTitle accentColor={'text-native'} subtitle="CRYPTO NATIVE">
        With{' '}
        <Link className="underline text-native" href="/crypto-native">
          Crypto-Native
        </Link>
        , the artwork evolves when a secondary sale happens.
      </HeroTitle>
      <p className="mx-auto text-lg text-gray-600 md:text-3xl ">
        Instead of just trading the same JPEG back and forth, you only get to
        own a unique step in the 10 phases of evolution for a piece.
      </p>
      <div className="relative">
        <div className="absolute top-0 bottom-0 left-0 w-96 bg-gradient-to-r from-white via-white/30 to-transparent" />
        <div className="absolute top-0 bottom-0 right-0 w-96 bg-gradient-to-l from-white via-white/30 to-transparent" />
        <HomeSectionImagesRow module={Modules.CRYPTO_NATIVE} />
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
  );
};

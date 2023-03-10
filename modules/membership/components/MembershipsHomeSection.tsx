import { HeroTitle } from 'components/HeroTitle/HeroTitle';
import { RightArrow } from 'components/Svgs/RightArrow';
import Link from 'next/link';
import React from 'react';

export const MembershipsHomeSection = () => {
  return (
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
  );
};

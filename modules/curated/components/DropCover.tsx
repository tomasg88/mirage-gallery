import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CURATED_DROP_DETAILS } from 'utils/routes';
import { Drop } from 'types/drops';

export const DropCover = ({ drop }: { drop: Drop }) => {
  return (
    <Link href={`${CURATED_DROP_DETAILS}/${drop.slug}`}>
      {drop.cover && drop.cover.url ? (
        <Image
          alt={drop.name}
          height={900}
          quality={100}
          src={drop.cover?.url}
          width={1200}
        />
      ) : (
        // TODO - show default image if drop has no cover a.k.a sampleImages
        <span className="text-xs">{'Drop has no cover!'}</span>
      )}
    </Link>
  );
};

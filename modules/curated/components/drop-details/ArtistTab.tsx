import React from 'react';
import { Drop } from 'types/drops';
import { ArtistDetails } from './ArtistDetails';

type ArtistProps = {
  marketplaceUrl: Drop['marketplaceUrl'];
  artists: Drop['artists'];
};

export const ArtistsTab = ({ artists, marketplaceUrl }: ArtistProps) => {
  return (
    <div className="px-2 mx-auto max-w-screen-2xl">
      <div className="grid w-full mx-auto my-3 md:grid-cols-2 max-w-screen-2xl">
        <h2 className="text-2xl text-left">
          {artists.length > 1 ? 'The Artists' : 'The Artist'}
        </h2>
      </div>
      {artists.length &&
        artists.map((artist) => (
          <ArtistDetails
            artist={artist}
            key={artist._key}
            marketplaceUrl={marketplaceUrl}
          />
        ))}
    </div>
  );
};

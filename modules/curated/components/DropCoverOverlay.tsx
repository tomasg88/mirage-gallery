import React from 'react';
import { Drop } from 'types/drops';
import styles from 'modules/curated/styles/CuratedGallery.module.css';
import { RightArrow } from 'components/Svgs/RightArrow';
import { MintStatusText } from 'modules/curated/components/DropsFilter';

type DropCoverOverlayProps = {
  artists: Drop['artists'];
  name: Drop['name'];
  status: Drop['status'];
};

export const DropCoverOverlay = ({
  artists,
  name,
  status,
}: DropCoverOverlayProps) => (
  <div className={styles.dropOverlay}>
    <p>{MintStatusText[status]}</p>
    <div className="flex items-end justify-between">
      <div>
        <h3 className="text-lg">{name}</h3>
        <p className="text-sm">{artists[0].name}</p>
      </div>
      <RightArrow className="w-6 h-6" />
    </div>
  </div>
);

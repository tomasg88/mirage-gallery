import React from 'react';
import { Drop } from 'types/drops';
import styles from 'modules/curated/styles/CuratedGallery.module.css';
import { RightArrow } from 'components/Svgs/RightArrow';
import { MintStatusText } from 'modules/curated/components/DropsFilter';

type DropCoverOverlayProps = {
  name: Drop['name'];
  status: Drop['status'];
};

export const DropCoverOverlay = ({ name, status }: DropCoverOverlayProps) => (
  <div className={styles.dropOverlay}>
    <p>{MintStatusText[status]}</p>
    <div className="flex items-center justify-between">
      <h3>{name}</h3>
      <RightArrow className="w-6 h-6" />
    </div>
  </div>
);

import React from 'react';
import { Drop } from 'types/drops';
import styles from 'modules/curated/styles/CuratedGallery.module.css';
import { RightArrow } from 'components/Svgs/RightArrow';

type DropCoverOverlayProps = {
  name: Drop['name'];
  status: Drop['status'];
};

export const DropCoverOverlay = ({ name, status }: DropCoverOverlayProps) => (
  <div className={styles.dropOverlay}>
    <p>{status}</p>
    <div className="flex justify-between items-center">
      <h3>{name}</h3>
      <RightArrow className="w-6 h-6" />
    </div>
  </div>
);

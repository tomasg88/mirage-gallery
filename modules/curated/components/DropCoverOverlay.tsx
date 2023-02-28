import React from 'react';
import { Drop } from 'types/drops';
import styles from 'modules/curated/styles/CuratedGallery.module.css';

type DropCoverOverlayProps = {
  name: Drop['name'];
  status: Drop['status'];
};

export const DropCoverOverlay = ({ name, status }: DropCoverOverlayProps) => (
  <div className={styles.dropOverlay}>
    <p>{status}</p>
    <h3>{name}</h3>
  </div>
);

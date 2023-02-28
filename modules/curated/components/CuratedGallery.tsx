import { useCallback, useState } from 'react';

import styles from 'modules/curated/styles/CuratedGallery.module.css';
import DropsFilter from 'modules/curated/components/DropsFilter';
import { Drop, MintStatus } from 'types/drops';
import { DropCover } from './DropCover';
import { DropCoverOverlay } from './DropCoverOverlay';

type CuratedGalleryProps = {
  drops: Drop[];
};

// Per design, we should only show a max of 15 drops
const MAX_DROPS = 14;

export const CuratedGallery = ({ drops }: CuratedGalleryProps) => {
  const [selectedStatus, setSelectedStatus] = useState<MintStatus>(
    MintStatus.ALL
  );
  const [hoveredDrop, setHoveredDrop] = useState<Drop['_id'] | null>(null);

  const filterDrops = useCallback(
    (drop: Drop) => {
      if (selectedStatus === MintStatus.ALL) {
        return drop;
      }
      return drop.status === selectedStatus;
    },
    [selectedStatus]
  );

  return (
    <div className="px-6">
      <DropsFilter setFilter={setSelectedStatus} />
      <div className={styles.gallery}>
        {drops
          .slice(0, MAX_DROPS)
          .filter(filterDrops)
          .map((drop) => (
            <div
              className={styles.drop}
              key={drop._id}
              onMouseEnter={() => setHoveredDrop(drop._id)}
              onMouseLeave={() => setHoveredDrop(null)}
            >
              <DropCover drop={drop} />
              {hoveredDrop === drop._id && (
                <DropCoverOverlay name={drop.name} status={drop.status} />
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

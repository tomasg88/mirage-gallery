import { useCallback, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from 'modules/curated/styles/CuratedGallery.module.css';
import DropsFilter from 'modules/curated/components/DropsFilter';
import { Drop, MintStatus } from 'types/drops';
import { CURATED_DROP_DETAILS } from 'utils/routes';

type CuratedGalleryProps = {
  drops: Drop[];
};

export default function CuratedGallery({ drops }: CuratedGalleryProps) {
  const [status, setStatus] = useState<MintStatus>(MintStatus.ALL);

  const filterDrops = useCallback(
    (drop: Drop) => {
      if (status === MintStatus.ALL) {
        return drop;
      }
      return drop.status === status;
    },
    [status]
  );

  return (
    <div className="px-6">
      <DropsFilter setFilter={setStatus} />
      <div className={styles.gallery}>
        {drops.filter(filterDrops).map((drop) => (
          <div key={drop._id}>
            <Link href={`${CURATED_DROP_DETAILS}/${drop.slug}`}>
              {drop.sampleImages?.length > 0 ? (
                <Image
                  alt="alt"
                  height={900}
                  quality={100}
                  src={drop.sampleImages[0].url}
                  width={1200}
                />
              ) : (
                // TODO - show default image if drop has no cover
                <>
                  <h3>{drop.name}</h3>
                  <p>{drop.status}</p>
                </>
              )}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

import Image from 'next/image';
import { GALLERY } from 'utils/gallery';
import styles from 'modules/curated/styles/CuratedGallery.module.css';
import OurDropsFilter from './OurDropsFilter';

export default function CuratedGallery() {
  return (
    <div className="px-6">
      <OurDropsFilter />
      <div className={styles.gallery}>
        {GALLERY.map((i) => (
          <div key={i.id}>
            <Image
              alt="alt"
              blurDataURL={`/assets/blur-${i.img}`}
              height={900}
              placeholder="blur"
              quality={100}
              src={`/assets/${i.img}`}
              width={1200}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
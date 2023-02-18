import Image from 'next/image';
import Link from 'next/link';
import styles from 'modules/curated/styles/CuratedGallery.module.css';
import OurDropsFilter from 'modules/curated/components/OurDropsFilter';
import { GALLERY } from 'utils/gallery';

export default function CuratedGallery() {
  return (
    <div className="px-6">
      <OurDropsFilter />
      <div className={styles.gallery}>
        {GALLERY.map((image) => (
          <div key={image.id}>
            <Link href="/curated/oneiroscapes">
              <Image
                alt="alt"
                blurDataURL={`/assets/blur-${image.img}`}
                height={900}
                placeholder="blur"
                quality={100}
                src={`/assets/${image.img}`}
                width={1200}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

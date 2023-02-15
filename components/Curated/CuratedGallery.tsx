import Link from "next/link";
import Image from "next/image";
import styles from "./CuratedGallery.module.css";
import OurDropsFilter from "@/components/Curated/OurDropsFilter";
import { GALLERY } from "@/utils/gallery";

export default function CuratedGallery() {
  return (
    <div className="px-6">
      <OurDropsFilter />
      <div className={styles.gallery}>
        {GALLERY.map((i) => (
          <div key={i.id}>
            <Image
              alt="alt"
              width={1200}
              height={900}
              quality={100}
              placeholder="blur"
              blurDataURL={`/assets/blur-${i.img}`}
              src={`/assets/${i.img}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

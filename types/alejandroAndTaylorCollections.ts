import { CloudinaryAsset } from './cloudinary';

type CollectionImage = {
  image: CloudinaryAsset;
  name: string;
};

export type AlejandroAndTaylorCollection = {
  collectionNumber: string;
  images: CollectionImage[];
  openSeaUrl: string;
};

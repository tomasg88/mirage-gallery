import { CloudinaryAsset } from './cloudinary';

type Artist = {
  _key: string;
  name: string;
  bio: string;
  twitterUrl: string;
  profilePicture: CloudinaryAsset;
};

type Project = {
  name: string;
  description: string;
  id: string;
};

export enum MintStatus {
  ALL = '',
  UPCOMING = 'upcoming',
  MINTING = 'minting',
  SOLD_OUT = 'sold-out',
}

export type Drop = {
  _createdAt: string;
  _id: string;
  _updatedAt: string;
  artists: Artist[];
  cover: CloudinaryAsset | null; // This is the same sampleImages[0].url
  description: string;
  mintPrice: number;
  name: string;
  preSaleAmount: number;
  project: Project;
  publicSaleAmount: number;
  sampleImages: CloudinaryAsset[] | null;
  slug: string;
  status: MintStatus;
  totalAmount: number;
  video: CloudinaryAsset;
};

import { deskTool } from 'sanity/desk';
import { defineConfig } from 'sanity';
import { curatedArtist } from 'lib/schemas/objects/curatedArtist';
import { curated } from 'lib/schemas/curated';
import { alejandroAndTaylorCollections } from 'lib/schemas/alejandro-and-taylor-collections';
import { collectionImage } from 'lib/schemas/objects/collectionImage';
import { projectInfo } from 'lib/schemas/objects/projectInfo';

export const config = defineConfig({
  basePath: process.env.NEXT_PUBLIC_SANITY_BASE_PATH,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string,
  plugins: [deskTool()],
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  schema: {
    types: [
      // custom objects
      collectionImage,
      curatedArtist,
      projectInfo,
      // documents
      curated,
      alejandroAndTaylorCollections,
    ],
  },
  title: process.env.NEXT_PUBLIC_SANITY_TITLE,
});

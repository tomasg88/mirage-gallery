import { deskTool } from 'sanity/desk';
import { defineConfig } from 'sanity';
import { curatedArtist } from 'lib/schemas/objects/curatedArtist';
import { curated } from 'lib/schemas/curated';
import { alejandroAndTaylorCollections } from 'lib/schemas/alejandro-and-taylor-collections';
import { collectionImage } from 'lib/schemas/objects/collectionImage';
import { projectInfo } from 'lib/schemas/objects/projectInfo';
import {
  cloudinaryImageSource,
  cloudinarySchemaPlugin,
} from 'sanity-plugin-cloudinary';

const config = defineConfig({
  basePath: process.env.NEXT_PUBLIC_SANITY_BASE_PATH,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string,
  form: {
    image: {
      // tells Sanity to use Cloudinary as the source for all assets
      assetSources: [cloudinaryImageSource],
    },
  },
  // cloudinarySchemaPlugin: this plugin tells Sanity to use Cloudinary CDN
  plugins: [deskTool(), cloudinarySchemaPlugin()],
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

export default config;

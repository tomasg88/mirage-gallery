import { deskTool } from 'sanity/desk';
import { Config } from 'sanity';

export const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  basePath: process.env.NEXT_PUBLIC_SANITY_BASE_PATH,
  title: process.env.NEXT_PUBLIC_SANITY_TITLE,
  plugins: [deskTool()],
} as Config;

import { createClient } from 'next-sanity';
import { config } from 'sanity.config';

export const sanityClient = createClient({
  ...config,
  useCdn: false,
});

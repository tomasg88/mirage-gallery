import { createClient } from 'next-sanity';
import { config } from 'sanity.config';

const token = process.env.NEXT_PUBLIC_SANITY_CREATE_TOKEN;

export const sanityClient = createClient({
  ...config,
  token,
  useCdn: false,
});

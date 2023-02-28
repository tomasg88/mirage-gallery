import { groq } from 'next-sanity';

/**
 * Fetch all drops to fill Curated page
 */
export const dropsQuery = groq`
  *[_type == "drop"] {
    ...,
    "cover": sampleImages[0].url,
    "slug": slug.current,
  }
`;

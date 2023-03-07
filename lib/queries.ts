import { groq } from 'next-sanity';

/**
 * Fetch all drops to fill Curated page
 */
export const dropsQuery = groq`
  *[_type == "drop"] {
    ...,
    "cover": sampleImages[0],
    "slug": slug.current,
  }
`;

export const dropBySlugQuery = groq`
  *[_type == "drop" && slug.current == $slug][0]
`;

export const collectionsQuery = groq`
  *[_type == "alejandro-and-taylor-collections"]
`;

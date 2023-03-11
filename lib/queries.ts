import { groq } from 'next-sanity';

/**
 * Fetch drops to show in Home Hero
 *  - Only 5
 *  - Ideally in Upcoming || Minting status
 *  - order by date
 *  - Only required fields for hero
 */
export const dropsHomeHeroQuery = groq`
  *[_type == "drop" && defined(slug)] {
    name,
    "slug": slug.current,
    "cover": sampleImages[0],
    "artists": artists[].name,
    status
  } [0...5] | order(_createdAt desc)
`;

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

export const alejandroAndTaylorCollectionsQuery = groq`
  *[_type == "alejandro-and-taylor-collections" && artist == $artist] | order(collectionNumber asc)
`;

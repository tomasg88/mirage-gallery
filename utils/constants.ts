import { Modules } from 'types/main';

// These urls are the same for the entire projects
// Only dynamic that comes from CMS is in the Drops model, [slug].tsx page
export const MARKETPLACE_URLS = {
  alejandroAndTaylor: 'https://opensea.io/collection/mirage-gallery',
  cryptoNative: 'https://opensea.io/collection/crypto-native',
  curated: 'https://opensea.io/category/mirage-gallery-curated',
  dreamers: 'https://opensea.io/collection/mirage-gallery-dreamers',
  dreamingOfABetterWorld: 'https://opensea.io/collection/dreamers-dreaming',
  membership: 'https://opensea.io/collection/mirage-gallery-memberships',
};

export const HOME_IMAGES_BY_MODULE = {
  [Modules.ALEJANDRO_AND_TAYLOR]: [
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
    '5.jpg',
    '6.jpg',
    '11.jpg',
    '12.jpg',
    '13.jpg',
    '14.jpg',
  ],
  [Modules.CURATED]: [
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
    '5.jpg',
    '6.jpg',
    '11.jpg',
    '12.jpg',
    '13.jpg',
    '14.jpg',
  ],
  [Modules.CRYPTO_NATIVE]: [
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
    '5.jpg',
    '6.jpg',
    '11.jpg',
    '12.jpg',
    '13.jpg',
    '14.jpg',
  ],
  [Modules.DREAMERS]: [
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
    '5.jpg',
    '6.jpg',
    '11.jpg',
    '12.jpg',
    '13.jpg',
    '14.jpg',
  ],
};

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
    'https://res.cloudinary.com/do1gnj1vn/image/upload/v1678492816/Alejandro%20and%20Taylor/Taylor/Collection%201/76780054_l_18_nvtmq1.jpg',
    'https://res.cloudinary.com/do1gnj1vn/image/upload/v1678492816/Alejandro%20and%20Taylor/Taylor/Collection%201/76780054_l_17_iwjykd.jpg',
    'https://res.cloudinary.com/do1gnj1vn/image/upload/v1678492830/Alejandro%20and%20Taylor/Taylor/Collection%202/seed0520_t1w5tc.png',
    'https://res.cloudinary.com/do1gnj1vn/image/upload/v1678492830/Alejandro%20and%20Taylor/Taylor/Collection%202/seed0500_q6m6t0.png',
    'https://res.cloudinary.com/do1gnj1vn/image/upload/v1678492851/Alejandro%20and%20Taylor/Taylor/Collection%203/seed1000_xuuppf.png',
    'https://res.cloudinary.com/do1gnj1vn/image/upload/v1678492708/Alejandro%20and%20Taylor/Alejandro/Collection%202/seed0523_u0bwbz.png',
    'https://res.cloudinary.com/do1gnj1vn/image/upload/v1678492706/Alejandro%20and%20Taylor/Alejandro/Collection%202/seed0569_txhntl.png',
    'https://res.cloudinary.com/do1gnj1vn/image/upload/v1678492706/Alejandro%20and%20Taylor/Alejandro/Collection%202/seed0587_sfvwjy.png',
    'https://res.cloudinary.com/do1gnj1vn/image/upload/v1678492721/Alejandro%20and%20Taylor/Alejandro/Collection%203/seed0956_gjygpv.png',
    'https://res.cloudinary.com/do1gnj1vn/image/upload/v1678492721/Alejandro%20and%20Taylor/Alejandro/Collection%203/seed0929_o3nn2p.png',
  ],
  [Modules.CURATED]: [
    '/assets/7.jpg',
    '/assets/8.jpg',
    '/assets/9.jpg',
    '/assets/10.jpg',
    '/assets/5.jpg',
    '/assets/6.jpg',
    '/assets/11.jpg',
    '/assets/12.jpg',
    '/assets/13.jpg',
    '/assets/14.jpg',
  ],
  [Modules.CRYPTO_NATIVE]: [
    'https://res.cloudinary.com/do1gnj1vn/image/upload/v1678493266/Crypto%20Native/Samples/4_abstract_180_hlhwud.png',
    'https://res.cloudinary.com/do1gnj1vn/image/upload/v1678493266/Crypto%20Native/Samples/1_landscape_1_ermirl.png',
    'https://res.cloudinary.com/do1gnj1vn/image/upload/v1678493266/Crypto%20Native/Samples/1_digital_81_lajfrb.png',
    'https://res.cloudinary.com/do1gnj1vn/image/upload/v1678493266/Crypto%20Native/Samples/4_abstract_163_jardtg.png',
    'https://res.cloudinary.com/do1gnj1vn/image/upload/v1678493265/Crypto%20Native/Samples/2_digital_347_o6spkg.png',
    'https://res.cloudinary.com/do1gnj1vn/image/upload/v1678493265/Crypto%20Native/Samples/1_abstract_0_fmu4ap.png',
    'https://res.cloudinary.com/do1gnj1vn/image/upload/v1678493265/Crypto%20Native/Samples/1_digital_50_vb7ug9.png',
    'https://res.cloudinary.com/do1gnj1vn/image/upload/v1678493265/Crypto%20Native/Samples/1_digital_223_fbntyp.png',
    'https://res.cloudinary.com/do1gnj1vn/image/upload/v1678493265/Crypto%20Native/Samples/5_landscape_192_vll1fz.png',
    'https://res.cloudinary.com/do1gnj1vn/image/upload/v1678493265/Crypto%20Native/Samples/2_digital_378_qtd1r5.png',
  ],
  [Modules.DREAMERS]: [
    'https://res.cloudinary.com/do1gnj1vn/image/upload/v1678493602/Dreamers/Samples/model2_60_keqlut.jpg',
    'https://res.cloudinary.com/do1gnj1vn/image/upload/v1678493601/Dreamers/Samples/model2_30_zpddiq.jpg',
    'https://res.cloudinary.com/do1gnj1vn/image/upload/v1678493601/Dreamers/Samples/model2_221_kssxco.jpg',
    'https://res.cloudinary.com/do1gnj1vn/image/upload/v1678493601/Dreamers/Samples/model2_21_xyvoqj.jpg',
    'https://res.cloudinary.com/do1gnj1vn/image/upload/v1678493542/Dreamers/Samples/dalle_62_lpk2vx.jpg',
    'https://res.cloudinary.com/do1gnj1vn/image/upload/v1678493542/Dreamers/Samples/dalle_54_yhgkct.jpg',
    'https://res.cloudinary.com/do1gnj1vn/image/upload/v1678493541/Dreamers/Samples/dalle_74_rypdxb.jpg',
    'https://res.cloudinary.com/do1gnj1vn/image/upload/v1678493522/Dreamers/Samples/wheatatreat_10_kh6ecx.jpg',
    'https://res.cloudinary.com/do1gnj1vn/image/upload/v1678493522/Dreamers/Samples/wheatatreat_40_mvs4jk.jpg',
    'https://res.cloudinary.com/do1gnj1vn/image/upload/v1678493522/Dreamers/Samples/wheatatreat_25_j8obck.jpg',
  ],
};

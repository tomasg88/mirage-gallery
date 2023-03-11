export enum Modules {
  ALEJANDRO_AND_TAYLOR = 'alejandro-and-taylor',
  CURATED = 'curated',
  CRYPTO_NATIVE = 'crypto-native',
  DREAMERS = 'dreamers',
}

export type GeneralModulesInfo = {
  [key in Modules]: {
    ctaButton: string;
    name: string;
    href: string;
    paragraph: string;
    samples: string[];
  };
};

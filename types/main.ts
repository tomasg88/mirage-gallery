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

export enum MembershipTiers {
  INTELLIGENT = 'intelligent',
  SENTIENT = 'sentient',
}

export type MembershipModuleInfo = {
  ctaButton: string;
  href: string;
  tiers: {
    [key in MembershipTiers]: MembershipTierInfo;
  };
};

export type MembershipTierInfo = {
  benefits: string[];
  image: string;
  imageAlt: string;
  name: string;
};

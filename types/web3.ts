export type Account = {
  address: string;
  balanceDecimals?: number;
  balanceFormatted?: string;
  balanceSymbol?: string;
  displayBalance?: string;
  displayName: string;
  ensAvatar?: string;
  ensName?: string;
  hasPendingTransactions: boolean;
};

export type ChainResponse = {
  hasIcon: boolean;
  iconBackground?: string;
  iconUrl?: string; // base64 icon
  id: number; //
  name?: string;
  unsupported?: boolean;
};

export enum FunctionNames {
  CLAIM_SENTIENT = 'claimSentient',
  EARLY_INTELLIGENT_PURCHASE = 'earlyIntelligentPurchase',
  EARLT_SENTIENT_PURCHASE = 'earlySentientPurchase',
  PROJECT_TOKEN_INFO = 'projectTokenInfo',
  OWNER_OF = 'ownerOf',
}

export type ProjectTokenInfoResult = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  additionalPayee: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  additionalPayeePercentage: any;
  artistAddress: string;
  artworks: string;
  currency: string;
  earlyActive: boolean;
  maxArtworks: string;
  maxEarly: string;
  pricePerTokenInWei: string;
  publicActive: boolean;
};

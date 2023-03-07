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

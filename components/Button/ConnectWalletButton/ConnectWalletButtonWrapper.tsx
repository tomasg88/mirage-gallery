import { ConnectButton } from '@rainbow-me/rainbowkit';
import { ConnectWalletButton } from './ConnectWalletButton';

export const ConnectWalletButtonWrapper = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        authenticationStatus,
        chain,
        mounted,
        openAccountModal,
        openConnectModal,
      }): JSX.Element => (
        <ConnectWalletButton
          account={account}
          authenticationStatus={authenticationStatus}
          chain={chain}
          mounted={mounted}
          openAccountModal={openAccountModal}
          openConnectModal={openConnectModal}
        />
      )}
    </ConnectButton.Custom>
  );
};

import { WalletSvg } from '../Svgs/WalletSvg';

export default function Footer() {
  return (
    <button className="relative flex items-center justify-center px-6 py-3 text-sm font-normal text-white bg-black">
      <WalletSvg />
      Connect Wallet
    </button>
  );
}

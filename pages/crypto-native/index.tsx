import HeroCryptoNative from 'modules/crypto-native/components/HeroCryptoNative';
import CryptoNativeArtDevelops from 'modules/crypto-native/components/ArtDevelops';
import AboutCtyptoNative from 'modules/crypto-native/components/AboutCtyptoNative';
import LockAssets from 'modules/crypto-native/components/LockAssets';
import CryptoNativeBestPhase from 'modules/crypto-native/components/BestPhase';
import CryptoNativeTokenDistribution from 'modules/crypto-native/components/TokenDistribution';

export default function CryptoNativePage() {
  return (
    <div className="w-full pb-24">
      <HeroCryptoNative />
      <div className="px-2 mx-auto max-w-screen-2xl">
        <CryptoNativeArtDevelops />
        <AboutCtyptoNative />
        <LockAssets />
        <CryptoNativeBestPhase />
        <CryptoNativeTokenDistribution />
      </div>
    </div>
  );
}

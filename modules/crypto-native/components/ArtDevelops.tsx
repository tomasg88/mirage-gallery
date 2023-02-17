import Image from 'next/image';

export default function CryptoNativeArtDevelops() {
  return (
    <div className="py-24">
      <div className="flex items-center justify-center max-w-3xl mx-auto">
        <Image
          alt="imagen"
          className="object-cover w-full"
          height={500}
          src="/assets/crypto-native/cryptonative-1-art.jpg"
          width={1200}
        />
      </div>
    </div>
  );
}

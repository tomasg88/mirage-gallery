const IMAGES = [
  {
    url: 'url("/assets/crypto-native/crypto-native-01.jpg")',
  },
  {
    url: 'url("/assets/crypto-native/crypto-native-02.jpg")',
  },
  {
    url: 'url("/assets/crypto-native/crypto-native-03.jpg")',
  },
  {
    url: 'url("/assets/crypto-native/crypto-native-04.jpg")',
  },
];

export default function CryptoNativeArtDevelops() {
  return (
    <div>
      {IMAGES.map(({ url }) => (
        <div className="w-full min-h-screen" key={url}>
          <div
            className="relative flex items-center justify-center w-full min-h-screen mx-auto bg-fixed bg-center bg-no-repeat md:bg-contain"
            style={{ backgroundImage: `${url}` }}
          />
        </div>
      ))}
    </div>
  );
}

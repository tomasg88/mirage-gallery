import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { Layout } from 'components/Layout/Layout';
import 'styles/globals.css';
import 'styles/offcanvas.css';
import 'styles/Video.css';
import '@fontsource/unbounded';
import '@fontsource/unbounded/300.css';
import '@fontsource/unbounded/500.css';
import '@fontsource/unbounded/600.css';
import '@fontsource/unbounded/700.css';
import '@rainbow-me/rainbowkit/styles.css';

const apiKey = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY as string;

const { chains, provider } = configureChains(
  [mainnet],
  [alchemyProvider({ apiKey }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'Mirage Gallery',
  chains,
});

const wagmiClient = createClient({
  connectors,
  provider,
});

function App({ Component, pageProps }: AppProps) {
  // don't load Layout for Sanity CMS
  const router = useRouter();
  if (router.pathname.includes('/mg-admin')) {
    return <Component {...pageProps} />;
  }

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;

import { Layout } from 'components/Layout/Layout';
import 'styles/globals.css';
import 'styles/offcanvas.css';
import '@fontsource/unbounded';
import '@fontsource/unbounded/300.css';
import '@fontsource/unbounded/500.css';
import '@fontsource/unbounded/600.css';
import '@fontsource/unbounded/700.css';
import localFont from '@next/font/local';
import type { AppProps } from 'next/app';

// Font files can be colocated inside of `pages`
const mona_sans = localFont({
  src: './Mona-Sans.woff2',
  variable: '--font-mona-sans',
  weight: '400 500',
  display: 'swap',
});

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <div className={mona_sans.variable}>
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}

export default App;

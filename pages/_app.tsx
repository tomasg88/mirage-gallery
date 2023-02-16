import { Layout } from 'components/Layout/Layout';
import 'styles/globals.css';
import 'styles/offcanvas.css';
import '@fontsource/unbounded';
import '@fontsource/unbounded/300.css';
import '@fontsource/unbounded/500.css';
import '@fontsource/unbounded/600.css';
import '@fontsource/unbounded/700.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

function App({ Component, pageProps }: AppProps) {
  // don't load Layout for Sanity CMS
  const router = useRouter();
  if (router.pathname.includes('/mg-admin')) {
    return <Component {...pageProps} />;
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;

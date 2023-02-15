import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { OffCanvas } from '../OffCanvas/OffCanvas';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const meta = {
    title: 'Mirage Gallery',
    description: 'Evolving NFTs from Mirage Gallery.',
    image:
      'https://res.cloudinary.com/srcouto/image/upload/v1655501065/miragegallery/ogimage_zirbxs.png',
    type: 'website',
  };
  return (
    <>
      <div id="top" />
      <Head>
        <title>{meta.title}</title>
        <meta content="follow, index" name="robots" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content={meta.description} name="description" />
        <meta
          content={`https://miragegallery.com/${router.asPath}`}
          property="og:url"
        />
        <link
          href={`https://miragegallery.com/${router.asPath}`}
          rel="canonical"
        />
        <meta content={meta.type} property="og:type" />
        <meta content="miragegallery" property="og:site_name" />
        <meta content={meta.description} property="og:description" />
        <meta content={meta.title} property="og:title" />
        <meta content={meta.image} property="og:image" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="@miragegallery" name="twitter:site" />
        <meta content={meta.title} name="twitter:title" />
        <meta content={meta.description} name="twitter:description" />
        <meta content={meta.image} name="twitter:image" />
        <link
          href="/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link href="/site.webmanifest" rel="manifest" />
        <link color="#5bbad5" href="/safari-pinned-tab.svg" rel="mask-icon" />
        <meta content="#da532c" name="msapplication-TileColor" />
        <meta content="#1e2025" name="theme-color" />
      </Head>
      <OffCanvas />
      <Header />
      <main className="flex flex-col items-center justify-start w-full text-gray-900 min-h-[calc(100vh-6rem)] overflow-x-hidden pt-24 bg-white">
        {children}
      </main>
      <Footer />
    </>
  );
};

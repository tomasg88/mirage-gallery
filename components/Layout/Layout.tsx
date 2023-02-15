import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { OffCanvas } from '../OffCanvas/OffCanvas';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const meta = {
    title: 'Mirage Gallery',
    description: `Evolving NFTs from Mirage Gallery.`,
    image:
      'https://res.cloudinary.com/srcouto/image/upload/v1655501065/miragegallery/ogimage_zirbxs.png',
    type: 'website',
  };
  return (
    <>
      <div id="top" />
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://miragegallery.com/${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://miragegallery.com/${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="miragegallery" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@miragegallery" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#1e2025" />
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

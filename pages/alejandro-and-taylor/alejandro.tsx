import Image from 'next/image';
import AlejandroHero from 'modules/alejandro-and-taylor/components/AlejandroHero';
import { GetStaticProps, GetStaticPropsResult } from 'next';
import { AlejandroAndTaylorCollection } from 'types/alejandroAndTaylorCollections';
import { sanityClient } from 'lib/sanity.client';
import { alejandroAndTaylorCollectionsQuery } from 'lib/queries';
import { useCallback, useState } from 'react';
import { OpenSeaButtonLink } from 'components/Link/OpenSeaButtonLink';
import { MARKETPLACE_URLS } from 'utils/constants';

const ARTIST_NAME = 'alejandro';

export default function AlejandroPage({
  collections,
}: {
  collections: AlejandroAndTaylorCollection[];
}) {
  // index of current selected tab
  const [collectionSelectedIndex, setCollectionSelectedIndex] =
    useState<number>(0);

  const collectionSelected = collections[collectionSelectedIndex];

  const getFallbackAlt = useCallback(
    (imageIndex: number) =>
      `${collectionSelected.images[imageIndex].name} image`,
    [collectionSelected.images]
  );

  return (
    <div className="w-full pb-24">
      <AlejandroHero />
      <div className="my-20 border-b border-gray-300">
        <div className="flex items-center justify-start gap-12 px-2 py-3 mx-auto max-w-screen-2xl">
          {collections.map(({ collectionNumber }, index) => (
            <button
              className={
                index === collectionSelectedIndex
                  ? 'text-original'
                  : 'text-[#808080]'
              }
              key={collectionNumber}
              onClick={() => setCollectionSelectedIndex(index)}
            >
              {`Collection ${collectionNumber}`}
            </button>
          ))}
        </div>
      </div>
      <div className="px-2 mx-auto max-w-screen-2xl">
        <div className="grid w-full mx-auto my-3 md:grid-cols-2 max-w-screen-2xl">
          <h2 className="text-2xl text-left">
            {collectionSelected.collectionName}
          </h2>
          <div className="flex items-center justify-end ">
            <OpenSeaButtonLink href={MARKETPLACE_URLS.alejandroAndTaylor} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 gap-y-20">
          {collectionSelected.images.map((collectionImage, index) => (
            <div key={collectionImage.image._key}>
              <Image
                alt={
                  collectionImage.image.context?.custom.alt ||
                  getFallbackAlt(index)
                }
                height={900}
                quality={100}
                src={collectionImage.image.url}
                width={1200}
              />
              <h4 className="my-3 text-sm ">{collectionImage.name}</h4>
              {/* TODO - is status shown? */}
              {/* <p className="text-xs uppercase">{image.status}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps<{
  collections: AlejandroAndTaylorCollection;
}> = async (): Promise<
  GetStaticPropsResult<{ collections: AlejandroAndTaylorCollection }>
> => {
  const collections: AlejandroAndTaylorCollection = await sanityClient.fetch(
    alejandroAndTaylorCollectionsQuery,
    {
      artist: ARTIST_NAME,
    }
  );
  return {
    props: { collections },
  };
};

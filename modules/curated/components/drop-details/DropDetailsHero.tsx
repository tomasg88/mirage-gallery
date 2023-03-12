import { SoldOutSvg } from 'components/Svgs/SoldOutSvg';
import Image from 'next/image';
import { Drop } from 'types/drops';
import { MintStatusText } from 'modules/curated/components/DropsFilter';
import { OpenSeaButtonLink } from 'components/Link/OpenSeaButtonLink';
import { CloudinaryAsset } from 'types/cloudinary';

type DropDetailsHeroProps = {
  cover: CloudinaryAsset;
  description: Drop['description'];
  marketplaceUrl: Drop['marketplaceUrl'];
  name: Drop['name'];
  status: Drop['status'];
};

export const DropDetailsHero = ({
  cover,
  description,
  marketplaceUrl,
  name,
  status,
}: DropDetailsHeroProps) => {
  return (
    <>
      <div className="w-full h-[500px]">
        <div className="relative">
          <div className="absolute top-0 bottom-0 left-0 w-32 md:w-[500px] bg-gradient-to-r from-white via-white/30 to-transparent" />
          <div className="absolute top-0 bottom-0 right-0 w-32 md:w-[500px] bg-gradient-to-l from-white via-white/30 to-transparent" />
          <Image
            alt="imagen"
            className="object-cover w-full h-[500px]"
            height={600}
            src={cover.url}
            width={1600}
          />
        </div>
      </div>
      <div className="px-2 mx-auto md:px-2 max-w-screen-2xl">
        <div className="flex items-center justify-between my-6">
          <span className="flex items-center justify-center px-3 py-2 text-xs text-black bg-gray-200 rounded-full">
            <SoldOutSvg className="mr-2" />
            {MintStatusText[status]}
          </span>
          {marketplaceUrl && (
            <div className="flex justify-end">
              <OpenSeaButtonLink href={marketplaceUrl} />
            </div>
          )}
        </div>
        <h2 className="text-3xl">{name}</h2>
        <p className="my-6 md:w-1/2">{description}</p>
      </div>
    </>
  );
};

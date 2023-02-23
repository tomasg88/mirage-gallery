import Link from 'next/link';
import { MirageGalleryLogo } from 'components/Svgs/MirageGalleryLogo';
import { ROUTES } from 'utils/routes';
import { DiscordSvg } from 'components/Svgs/DiscordSvg';
import { TwitterColor, TwitterSvg } from 'components/Svgs/TwitterSvg';

export default function Footer() {
  return (
    <div className="w-full px-2 pb-24 mx-auto text-center max-w-screen-2xl">
      <div className="flex justify-start gap-6">
        <MirageGalleryLogo />
        <nav className="items-center justify-start hidden pl-6 space-x-6 border-l border-gray-200 lg:flex">
          {ROUTES.map((route) => {
            return (
              <Link
                aria-label={route.ariaLabel}
                className="text-xs font-normal text-gray-400 hover:text-[#920d3d] uppercase duration-100 cursor-pointer underline-offset-2 hover:underline"
                href={route.path}
                key={route.path}
                title={route.ariaLabel}
              >
                {route.title}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="flex items-center justify-between pt-24">
        <p className="text-xs">© 2022 by Mirage Gallery LLC</p>
        <div style={{ flex: '1' }} />
        <div className="flex items-center justify-end space-x-6">
          <div>
            <DiscordSvg />
          </div>
          <div>
            <TwitterSvg fillColor={TwitterColor.BLACK} />
          </div>
        </div>
      </div>
    </div>
  );
}

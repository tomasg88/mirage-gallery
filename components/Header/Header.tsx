import Link from 'next/link';
import { ROUTES } from '@/utils/routes';
import { MirageGalleryLogo } from '../MirageGalleryLogo';
import ConnectWalletButton from '@/components/ConnectWalletButton/ConnectWalletButton';
export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-2 py-6 bg-white border-b border-gray-200">
      <div className="flex items-center justify-start w-full mx-auto space-x-6 sm:space-x-8 max-w-screen-2xl">
        <Link href="/" className="text-gray-900">
          <MirageGalleryLogo />
          <span className="sr-only">Mirage Gallery</span>
        </Link>
        <nav className="items-center justify-start hidden pl-6 space-x-6 border-l border-gray-200 xl:flex">
          {ROUTES.map((route) => {
            return (
              <Link
                href={route.path}
                key={route.path}
                title={route.ariaLabel}
                className="text-xs font-normal text-gray-400 hover:text-[#920d3d] uppercase duration-100 cursor-pointer underline-offset-2 hover:underline"
                aria-label={route.ariaLabel}
              >
                {route.title}
              </Link>
            );
          })}
        </nav>
        <div style={{ flex: '1' }} />
        <div className="absolute bottom-0 hidden right-32 xl:flex xl:right-0 xl:relative">
          <ConnectWalletButton />
        </div>
      </div>
    </header>
  );
}

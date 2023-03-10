import { MARKETPLACE_URLS } from 'utils/constants';

export default function MembershipViewOrClaim() {
  return (
    <>
      <div className="py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="p-6 border border-gray-200">
            <div className="h-32">
              <h3 className="mt-3 text-lg">Looking to buy a membership?</h3>
              <p className="font-sans">
                Minting is closed but you’re still able to purchase a membership
                on the secondary market.
              </p>
            </div>
            <a
              className="text-3xl"
              href={MARKETPLACE_URLS.membership}
              rel="noreferrer"
              target="_blank"
            >
              View on opensea
            </a>
          </div>
          <div className="bg-gradient-to-r p-6 from-[#503e03] text-white to-[#d4a80f]">
            <h3 className="h-32 mt-3 text-lg">Are you a sentient member?</h3>
            <a className="text-3xl" href="" target="_blank">
              Claim curated artworks
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

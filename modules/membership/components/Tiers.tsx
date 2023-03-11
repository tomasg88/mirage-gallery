import Image from 'next/image';
import { MembershipTiers } from 'types/main';
import { MEMBERSHIP_MODULE_INFO } from 'utils/constants';

export const Tiers = () => {
  const { tiers } = MEMBERSHIP_MODULE_INFO;
  return (
    <>
      <div className="py-24 ">
        <h3 className="text-lg">Tiers</h3>
        <div className="grid gap-12 md:grid-cols-2">
          {Object.keys(tiers).map((tierName) => (
            <div key={tierName}>
              <div className="w-full relative bg-gray-900 h-96">
                <Image
                  alt={tiers[tierName as MembershipTiers].imageAlt}
                  fill
                  src={tiers[tierName as MembershipTiers].image}
                />
              </div>
              <h3 className="mt-3 text-2xl">
                {tiers[tierName as MembershipTiers].name}
              </h3>
              <ul>
                {tiers[tierName as MembershipTiers].benefits.map(
                  (benefit: string) => (
                    <li key={benefit}>{benefit}</li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

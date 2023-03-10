import MembershipBenefits from 'modules/membership/components/Benefits';
import HeroMembership from 'modules/membership/components/HeroMembership';
import MembersSays from 'modules/membership/components/MembersSays';
import Tiers from 'modules/membership/components/Tiers';
import ViewOrClaim from 'modules/membership/components/ViewOrClaim';
import { Fragment } from 'react';
import { Tab } from '@headlessui/react';
import MembershipSentientClaim from 'modules/membership/components/SentientClaim';

const TABS = [
  {
    title: 'About',
  },
  {
    title: 'Sentient claim',
  },
];

export default function MembershipPage() {
  return (
    <div className="w-full pb-24">
      <HeroMembership />
      <Tab.Group defaultIndex={0}>
        <Tab.List className="mt-24 border-b outline-none">
          <div className="flex items-center justify-start gap-6 px-2 py-3 mx-auto text-xs md:text-base max-w-screen-2xl md:gap-12">
            {TABS.map(({ title }) => (
              <Tab as={Fragment} key={title}>
                {({ selected }) => (
                  <button
                    className={`${
                      selected ? 'text-[#E2B310]' : ''
                    } outline-none `}
                    type="button"
                  >
                    {title}
                  </button>
                )}
              </Tab>
            ))}
          </div>
        </Tab.List>
        <Tab.Panels className="pt-12 ">
          <Tab.Panel>
            <div className="px-2 mx-auto max-w-screen-2xl">
              <ViewOrClaim />
              <Tiers />
              <MembershipBenefits />
              <MembersSays />
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="grid gap-6 px-2 mx-auto max-w-screen-2xl md:grid-cols-2 ">
              <div className="max-w-xl space-y-6 text-2xl font-medium font-base">
                <p>
                  This page is for
                  <span className="underline">Sentient Members</span> to claim
                  their token from Mirage Gallery Curated drops OR for
                  individuals to check status of existing memberships.
                </p>
                <p>
                  Membership IDs are the token ID of the Sentient membership NFT
                  (0-49)
                </p>
                <p>
                  Each Sentient membership can only claim 1 piece per curated
                  project, but can claim that piece at any point in time (even
                  if everything is sold out).
                </p>
              </div>
              <MembershipSentientClaim />
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

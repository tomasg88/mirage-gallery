import { Benefits } from 'modules/membership/components/Benefits';
import { HeroMembership } from 'modules/membership/components/HeroMembership';
import { MembersSays } from 'modules/membership/components/MembersSays';
import { Tiers } from 'modules/membership/components/Tiers';
import { ViewOrClaim } from 'modules/membership/components/ViewOrClaim';

export default function MembershipPage() {
  return (
    <div className="w-full pb-24">
      <HeroMembership />
      <div className="px-2 mx-auto max-w-screen-2xl">
        <ViewOrClaim />
        <Tiers />
        <Benefits />
        <MembersSays />
      </div>
    </div>
  );
}

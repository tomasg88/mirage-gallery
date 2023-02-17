import MembershipBenefits from 'components/Membership/Benefits';
import HeroMembership from 'components/Membership/HeroMembership';
import MembersSays from 'components/Membership/MembersSays';
import Tiers from 'components/Membership/Tiers';
import ViewOrClaim from 'components/Membership/ViewOrClaim';

export default function MembershipPage() {
  return (
    <div className="w-full pb-24">
      <HeroMembership />
      <div className="px-2 mx-auto max-w-screen-2xl">
        <ViewOrClaim />
        <Tiers />
        <MembershipBenefits />
        <MembersSays />
      </div>
    </div>
  );
}

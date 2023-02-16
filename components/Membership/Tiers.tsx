export default function MembershipTiers() {
  return (
    <>
      <div className="py-24 ">
        <h3 className="text-lg">Tiers</h3>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <div className="w-full bg-gray-900 h-96"></div>
            <h3 className="mt-3 text-2xl">Intelligent member</h3>
            <ul>
              <li>M.G. Curated Early Mint</li>
            </ul>
          </div>
          <div>
            <div className="w-full bg-gray-900 h-96"></div>
            <h3 className="mt-3 text-2xl">Sentient member</h3>
            <ul>
              <li>M.G. Curated Early Mint</li>
              <li>M.G. Curated Free claim</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

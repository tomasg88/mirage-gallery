import clsx from 'clsx';
import { useClaimProcess } from 'hooks/useClaimProcess';
import React, { useCallback, useState } from 'react';
import { Project } from 'types/drops';

export const ClaimForm = ({ projectId }: { projectId: Project['id'] }) => {
  const [membershipId, setMembershipId] = useState<string>('');
  const [error, setError] = useState<string>('');
  const { canClaim, claim, isClaimLoading, isClaimStarted, isClaimed } =
    useClaimProcess({
      projectId,
      membershipId,
    });

  const handleMembershipChange = useCallback(
    ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
      setError('');
      setMembershipId(value);
    },
    [setError, setMembershipId]
  );

  // Quantity is always 1 if we are on pre-sale
  const handleClaim = useCallback(() => {
    const membershipIdNumber = Number(membershipId);
    if (isNaN(membershipIdNumber) || !Number.isInteger(membershipIdNumber)) {
      setError('Membership ID must be an integer number');
      return;
    }

    if (claim && canClaim) {
      claim();
    }
  }, [canClaim, claim, membershipId, setError]);

  const isClaimButtonDisabled = isClaimLoading || isClaimStarted;

  return (
    <div className="grid w-full px-2 mx-auto my-3 max-w-screen-2xl md:grid-cols-2">
      <div className="">
        <h2 className="text-2xl text-left">Claim</h2>
        <div>
          <p className="my-3 font-sans">
            This page is for Sentient Members to claim their token from Mirage
            Gallery Curated drops OR for individuals to check status of existing
            memberships.
          </p>
          <ul>
            <li className="my-3 font-sans">
              Claiming opens when the presale begins for a project.
            </li>
            <li className="my-3 font-sans">
              Connect wallet below to claim your artwork or check status of an
              existing membership.
            </li>
          </ul>
          <div className="flex flex-col gap-6 my-6 md:flex-row">
            <label className="flex flex-col w-full ">
              <span className="mb-2 font-sans">Input membership ID</span>
              <input
                className="p-3 font-sans text-gray-800 bg-gray-100"
                min={0}
                name={'quantity'}
                onChange={handleMembershipChange}
                placeholder="(0-49)"
                step={1}
                type="number"
                value={membershipId}
              />
              <span className="text-sm text-red-600">
                {error !== '' && error}
              </span>
            </label>
          </div>
          <div>
            <button
              aria-disabled={isClaimButtonDisabled}
              className={clsx(
                'flex items-center justify-center py-3 text-white duration-300 bg-curated px-9',
                {
                  disabled: isClaimButtonDisabled,
                }
              )}
              disabled={isClaimButtonDisabled}
              onClick={handleClaim}
              type="button"
            >
              Claim
            </button>
            <p>
              {isClaimLoading && 'Waiting for approval'}
              {isClaimStarted && 'Claiming...'}
              {isClaimed && 'Congratulations. You claimed! Check your wallet'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

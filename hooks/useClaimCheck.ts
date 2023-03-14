import { curatedAbi } from 'curated-abi';
import { useEffect, useState } from 'react';
import { FunctionNames } from 'types/web3';
import { SMART_CONTRACTS } from 'utils/constants';
import { useContractRead } from 'wagmi';

/**
 * This hook is used to check if the user has already claimed their
 * free artwork already, as they can only do it once.
 * @param ownerId `(projectId * MAGIC_NUMBER) + membershipId` where `MAGIC_NUMBER`
 * is 10000 for Curated projects and 1000 for Dreamers project.
 * @returns canClaim boolean
 */
export const useClaimCheck = (ownerId: number) => {
  const [canClaim, setCanClaim] = useState<boolean>(false);

  // TODO - proper type of smart contract response
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data }: { data: any } = useContractRead({
    abi: curatedAbi,
    address: SMART_CONTRACTS.CLAIM_AND_READ,
    args: [`${ownerId}`],
    functionName: FunctionNames.OWNER_OF,
    watch: true,
  });

  useEffect(() => {
    const asyncCheck = async () => {
      return await data;
    };
    // If an owner comes back, meaning !== 'undefined' then it means
    // they have already claimed their free piece
    if (data) {
      return setCanClaim(typeof asyncCheck == 'undefined');
    }
  }, [data]);

  return {
    canClaim,
  };
};

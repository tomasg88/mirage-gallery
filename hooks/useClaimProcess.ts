import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from 'wagmi';
import { curatedAbi } from 'curated-abi';
import { SMART_CONTRACTS } from 'utils/constants';
import { FunctionNames } from 'types/web3';
import { useClaimCheck } from './useClaimCheck';

type UseClaimProcessProps = {
  projectId: string;
  membershipId: string;
};

type UseClaimProcessResult = {
  canClaim: boolean;
  isClaimLoading: boolean;
  isClaimStarted: boolean;
  isClaimed: boolean;
  claim?: () => void;
};

export const useClaimProcess = ({
  projectId,
  membershipId,
}: UseClaimProcessProps): UseClaimProcessResult => {
  const { config } = usePrepareContractWrite({
    abi: curatedAbi,
    address: SMART_CONTRACTS.CLAIM_AND_READ,
    args: [`${projectId}`, `${membershipId}`],
    functionName: FunctionNames.CLAIM_SENTIENT,
  });

  const {
    data: claimData,
    isLoading: isClaimLoading,
    write: claim,
    isSuccess: isClaimStarted,
  } = useContractWrite(config);

  const { isSuccess: txSuccess } = useWaitForTransaction({
    hash: claimData?.hash,
  });

  const { canClaim } = useClaimCheck(
    Number(projectId) * 10000 + Number(membershipId)
  );

  return {
    canClaim,
    isClaimLoading,
    isClaimStarted,
    isClaimed: txSuccess,
    claim,
  };
};
